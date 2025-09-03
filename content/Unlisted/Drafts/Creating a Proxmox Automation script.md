---
title: Creating a Proxmox Automation script
aliases:
  - proxmox ai script
description: Proxmox qm automation script I made.
permalink: 49b34d18-c9d5-49bc-8765-be023dbbbf8a
tags:
  - Post
date: 2025-08-31
cssclasses:
  - Rounded_Corners
  - Centered_Tables
  - Centered_Embeds
  - Centered_Images
---

###### Proxmox

```
 ███████████  ███████████      ███████    █████ █████ ██████   ██████    ███████    █████ █████
░░███░░░░░███░░███░░░░░███   ███░░░░░███ ░░███ ░░███ ░░██████ ██████   ███░░░░░███ ░░███ ░░███ 
 ░███    ░███ ░███    ░███  ███     ░░███ ░░███ ███   ░███░█████░███  ███     ░░███ ░░███ ███  
 ░██████████  ░██████████  ░███      ░███  ░░█████    ░███░░███ ░███ ░███      ░███  ░░█████   
 ░███░░░░░░   ░███░░░░░███ ░███      ░███   ███░███   ░███ ░░░  ░███ ░███      ░███   ███░███  
 ░███         ░███    ░███ ░░███     ███   ███ ░░███  ░███      ░███ ░░███     ███   ███ ░░███ 
 █████        █████   █████ ░░░███████░   █████ █████ █████     █████ ░░░███████░   █████ █████
░░░░░        ░░░░░   ░░░░░    ░░░░░░░    ░░░░░ ░░░░░ ░░░░░     ░░░░░    ░░░░░░░    ░░░░░ ░░░░░ 
```

### Small Beginnings

This past year I have been working on my home-lab and a few months ago I deployed my Proxmox Virtual Environment. In my long and challenging journey of getting PCIE passthrough via IOMMU to work correctly. I wanted to explore the world of Proxmox `qm` to start automating my virtual machine development environment. Proxmox `qm` (short for QEMU Manager) `qm` is the main CLI tool to interact with your PVE (Outside of the GUI). This paired with some basic Bash scripting leads to a powerful automation tool, that makes sure all my VM's are deployed in the same state, they also all get the same tricky PCIE passthrough configurations and my most common packages so they are ready for me on startup. This is my first step into some basic IaC and I wanted to share my journey so far and my future goals for what I want to learn.

### Why `qm` and Bash?
I chose `qm` and Bash since `qm` is a first party tool designed for Proxmox and is already installed once your PVE is configured, Bash is simple and great for CLI commands and already configured as well (No extra packages like Python). I thought it was also a nice chance to learn more about Bash.

### The Script

> [!info] Note
> This just goes over the general script workflow, I am still learning the best ways to approach certain tasks so this script might evolve and change over time. This post is more of a snapshot of the MVP I was able to put together.
##### `.env`
First we create a `.env` file to set our parameters, this is a temp file that can be removed after the VM's creation.

```bash
# .env Example:
#
# DEV_VM_CIUSER=
# DEV_VM_CIPASSWORD=
#
# DEV_VM_ID=
# DEV_VM_NAME=
#
# DEV_VM_UNAME_R=
# DEV_VM_PCI_GPU=
#
# NVIDIA_CONTAINER_TOOLKIT_VERSION=
# TAILSCALE_AUTH_KEY
```
> Long-term I would like all the secrets to be stored in a secrets manager (Such is HashiCorp Vault) to fetch as my home-lab evolves.

##### `qm set` commands

We then use the `qm set` commands to create all of the modifiers for our VM:

| Category             | Setting / Change                                                                    |
| -------------------- | ----------------------------------------------------------------------------------- |
| **VM Creation**      | Create VM `$DEV_VM_ID`, network `virtio,bridge=vmbr0`                               |
| **Disk Cloud image** | Import Debian 12 cloud image → `local-lvm:vm-$DEV_VM_ID-disk-0` (scsi0)             |
| **Attach Drive**     | Add Cloud-Init drive on `local-lvm:cloudinit` (scsi1)                               |
| **Add Storage**      | Resize `scsi0` by +6G                                                               |
| **Boot Order**       | Boot from `scsi0` (boot order `c`)                                                  |
| **Firmware/UEFI**    | OVMF (UEFI), EFI disk 4M, **Secure Boot disabled** (`pre-enrolled-keys=0`)          |
| **CPU**              | 1 socket × 2 cores, `--cpu host`                                                    |
| **Memory**           | 8192 MB RAM, ballooning **disabled**                                                |
| **Chipset/BIOS**     | Machine type `q35`, BIOS `ovmf`                                                     |
| **GPU**              | PCIe passthrough of GPU `$DEV_VM_PCI_GPU` (`hostpci0`)                              |
| **Integration**      | QEMU guest agent enabled                                                            |
| **Console**          | Serial console on `serial0=socket`                                                  |
| **Networking**       | VirtIO NIC bridged to `vmbr0`, IP via DHCP (Cloud-Init)                             |
| **Provisioning**     | Cloud-Init drive handles credentials & config (Proxmox `ciuser/cipassword` skipped) |
| **Optional**         | Commented-out steps: convert to template, clone, destroy VM                         |
> Here its good to note that I switched from traditional Linux ISO's to cloud-init images, these images are the cloud native industry standard for any type of public cloud platform. It makes the configuration process much easier of setting parameters such as username/password and hostname before the VM is even deployed.

### cloud-init script
cloud-init scripts are stored in YAML files. But we can define the script details in our bash script then create the YAML file once the script is ran.


This exports our script
```YAML
# Create a cloud-init user configuration file to set up the VM on first boot
cat > /var/lib/vz/snippets/${DEV_VM_ID}-user.yaml <<EOF
```

The start of our cloud-init cloud-config script
```
#cloud-config

hostname: $DEV_VM_NAME

# Configure Host
manage_etc_hosts: true
package_update: true
```

Install `cmatrix` as a fun package install test
```
# Install additional packages
packages: [cmatrix]
```

> [!info] This is what the script does
> ![](https://raw.githubusercontent.com/abishekvashok/cmatrix/refs/heads/master/data/img/capture_orig.gif)

We then create out Root user:
```
users:
  - name: ${DEV_VM_CIUSER}
    sudo: ALL=(ALL) NOPASSWD:ALL
    groups: sudo
    lock_passwd: false
    shell: /bin/bash
chpasswd:
  list: |
    ${DEV_VM_CIUSER}:${DEV_VM_CIPASSWORD}
  expire: false
```

We then have to update the APT sources repository
```
# Update the APT sources to use the bookworm repositories More info: https://wiki.debian.org/SourcesList
write_files:
  - path: /etc/apt/sources.list
    
    # Insert "contrib non-free non-free-firmware" here to match your APT file
```
> Long story short since we configured PCIE passthrough via IOMMU and I am using an Nvidia GPU, to install the GPU drivers you need to add `contrib non-free non-free-firmware` repositories since the official Nvidia GPU drivers are unsigned.

Note: here I had to define some custom DNS servers since I was running into
```
network:
		# Insert DNS servers here
```

We then run our install commands:
```
runcmd:
    # Update and upgrade the system
    # Install Tailscale and SSH
    # Update and upgrade the system
    # Install Linux headers (Required for NVIDIA drivers)
    # Install NVIDIA drivers
    # Update the system with the new drivers
    # Install Docker
    # Install NVIDIA Container Toolkit
    # Reboot the VM to apply all changes
EOF
```

We then export the file and start the VM
```
qm set $DEV_VM_ID --cicustom "user=local:snippets/${DEV_VM_ID}-user.yaml"

qm start $DEV_VM_ID
```

### Future Works
I think this was a fun project to test and explore. I think long term for maintainability I might switch this configuration to HashiCorps's Terraform product. This would also allow me to learn more about cloud IaC and how it interacts with cloud native images.

### Conclusion
Overall this was a fun project to work on. I learned a lot about Proxmox's `qm`, bash and GPU PCIE passthroughs. I plan to use this new VM as my new development playground for new AI projects, docker testing and be a remote IDE for my blog/website (This right here!) this is also where I will continue to share my Proxmox journey and milestones!