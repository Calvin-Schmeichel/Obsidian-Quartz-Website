---
title: "Update: My new LLM configuration using Tailscale and Docker"
aliases:
  - "Update: My new LLM configuration using Tailscale and Docker"
  - Proxmox VM Docker ollama install
description: An update on my Ollama configuration within my homelab
permalink: 609669cc-7a02-4a8f-bb55-78ef752ef7ec
tags:
  - Post
date: 2025-10-22
cssclasses:
  - Rounded_Corners
  - Centered_Embeds
  - Centered_Images
---

### Re: [Deploying an LLM Model on my Own Server with Docker and Tailscale](Blog/Posts/Deploying%20an%20LLM%20Model%20on%20my%20Own%20Server%20with%20Docker%20and%20Tailscale.md)

A lot has changed in my Homelab since that last post about my AI/Ollama configuration. I figured it was time to update what it looks like today.

### Technology Stack

The biggest change is that I have switched my main server from Windows 11 to Proxmox. This allows me way more flexibility when it comes to configuration and VM management. I deployed a new Debian VM running docker with PCIE Passthrough for my GPU. This was automatically deployed via a Proxmox template file I made by using a [Bash script I developed](Blog/Posts/Creating%20a%20Proxmox%20Automation%20Script.md).

The second main change I made was how the service was served. Originally I used [Tailscale Serve](https://tailscale.com/kb/1312/serve) which was great at the time but once I started to learn the Tailscale platform more, I learned that Serve should be used more for short term ephemeral private demos not long term deployments. That's where Tailscale Docker sidecars come in. These sidecar containers run their own instance of the Tailscale service with its own machine name and IP. This way the service does not use the VM hosts IP but its own. This is helpful when you overlap ports, want a custom URL for your service or want more granular ACL rules on a per container level then just the host and all its containers put together.

| Technology                                    | Product/Platform                                                                                       | Reason                                                                                                                                                                                             |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server/Virtual Machine Platform               | [Proxmox](https://www.proxmox.com/en/)                                                                 | Modern, Opensource OS and flexible for other projects down the road.                                                                                                                               |
| Operating System                              | [debian-12-genericcloud-amd64.qcow2](https://cloud.debian.org/images/cloud/bookworm/latest/)           | These images are the cloud native industry standard for any type of public cloud platform. Learn more [here](Blog/Posts/Creating%20a%20Proxmox%20Automation%20Script.md#qm%20set%20commands). |
| Containerization Platform                     | [Docker Engine on Debian](https://docs.docker.com/engine/install/debian/#install-using-the-repository) | Open Source, very popular and I wanted to expand my skills with the platform.                                                                                                                      |
| Large Language Model (LLM)                    | [llama2](https://www.llama.com/llama2/)                                                                | Made by Meta and is lightweight (7b) for quick testing and deployments.                                                                                                                            |
| LLM Engine                                    | [Ollama](https://ollama.com/)                                                                          | Free, open source and is a new tool I wanted to explore!                                                                                                                                           |
| Web Server and Graphical User Interface (GUI) | [Open Web UI](https://openwebui.com/)                                                                  | Open Source and has conveniently made packages for Ollama.                                                                                                                                         |
| Virtual Private Network (VPN)                 | [Tailscale](https://tailscale.com/)                                                                    | Free, mostly open source and helps streamline networking.                                                                                                                                          |
| Networking Serving                            | [Tailscale Docker Sidecar Proxy](https://tailscale.com/blog/docker-tailscale-guide)                    | Deploys a Tailscale sidecar container which allows you to have a separate Tailscale IP and URL for Open WebUI and Ollama.                                                                          |

![](https://www.youtube.com/watch?v=tqvvZhGrciQ)

### Configuration
More detailed notes will be listed in my [Creating a Proxmox Automation Script](Blog/Posts/Creating%20a%20Proxmox%20Automation%20Script.md) page.

1. Deploy Proxmox VM via my Bash script
2. SSH into the VM and install Ollama and Open WebUI via my docker configs notes.
3. Once Deployed Open the Tailscale side car URL on the Open WebUI
4. Login and install your LLM.
5. Done!

Overall I am really happy with this new current setup, its much more maintainable and repeatable with my automation scripts. I will be sure to update if there are any more infrastructure changes. 

> [!NOTE] Resources
> -  [A deep dive into using Tailscale with Docker | YouTube](https://www.youtube.com/watch?v=tqvvZhGrciQ)
> - [Creating a Proxmox Automation Script | blog.calvinschmeichel.com](Blog/Posts/Creating%20a%20Proxmox%20Automation%20Script.md)
> -  [Open WebUI](https://openwebui.com/)
> - [Installing Open WebUI with Bundled Ollama Support and With GPU Support](https://github.com/open-webui/open-webui?tab=readme-ov-file#installing-open-webui-with-bundled-ollama-support))
> - [PCI Passthrough | PVE Docs](https://pve.proxmox.com/pve-docs/qm.1.html#_general_requirements)