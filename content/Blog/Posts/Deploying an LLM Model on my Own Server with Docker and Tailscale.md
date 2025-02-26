---
aliases:
  - Debian WSL Docker ollama install
cssclasses:
  - Centered_Images
  - Centered_Tables
  - Rounded_Corners
date: 2025-02-25
tags:
  - AI
  - Docker
  - WSL
  - Homelab
  - Post
---
### The time is now
After seeing the huge news about [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)'s release last month and its affect on [Nvidia's stock](https://www.forbes.com/sites/greatspeculations/2025/01/27/why-deepseek-is-sinking-nvidia-stock/)and after [[How Large Language Models can help Conduct Cyber Attacks|dabbling in running LLM's locally last year for a research project]], aaaaand after I just deployed my first server for my home lab and looking for a project to run on it. I figured now was a better time then ever to get started!
### Technology Stack
After some research for this project I decided on this Technology stack:

| Technology                                   | Product/Platform                                                                         | Reason                                                                                                                       |
| -------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Server                                       | [Windows 11](https://www.microsoft.com/en-us/windows/windows-11)                         | Modern OS and flexible for other projects down the road.                                                                     |
| Virtual Machine Platform                     | [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) | Native to Windows and supports GPU acceleration with the use of a shared Docker daemon and images between Linux and Windows. |
| Containerization Platform                    | [Docker Desktop](https://www.docker.com/products/docker-desktop/)                        | Open Source, very popular and I wanted to expand my skills with the platform.                                                |
| Large Language Model (LLM)                   | [llama2](https://www.llama.com/llama2/)                                                  | Made by Meta and is lightweight (7b) for quick testing and deployments.                                                      |
| LLM Engine                                   | [Ollama](https://ollama.com/)                                                            | Free, open source and is a new tool I wanted to explore!                                                                     |
| Web Server and Grafical User Interface (GUI) | [Open Web UI](https://openwebui.com/)                                                    | Open Source and has conveniently made packages for Ollama.                                                                   |
| Virtual Private Network (VPN)                | [Tailscale](https://tailscale.com/)                                                      | Free, mostly open source and helps streamline networking.                                                                    |
| Networking Serving                           | [Tailscale Serve](https://tailscale.com/kb/1312/serve)                                   | Allows you to share privately a locally hosted service (Not internet facing).                                                |
### Configuration
1. I first configured my server with an installation of Windows 11.
2. Installed and configured Tailscale.
3. Enabled the WSL windows feature and installed a fresh Debian distribution.
4. Installed Docker desktop and configured it to use the WSL 2 based engine.
5. I pulled the Ollama+Open Web UI docker image down to my Debian VM and installed the necessary GPU drivers.
6. Once deployed locally I went into the Tailscale admin console to enable HTTPS traffic and Tailscale Serve.
7. Once Tailscale Serve was configured I was able to open the Open Web UI on my iPhone and start talking to the LLM! The experience was very similar to using the official ChatGPT app. (Outside of it being a 7 billion parameter model vs 4o 200 billion, My RTX 2070 Super stays strong!).

![[llama2_OpenWebUI_IOS.gif|400]]

> [!info] Resources
> - [Ollama is now available as an official Docker image](https://ollama.com/blog/ollama-is-now-available-as-an-official-docker-image)
> - [Installing the NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation)
> - [Tailscale Serve](https://tailscale.com/kb/1312/serve)
> - [Enabling HTTPS | Tailscale](https://tailscale.com/kb/1153/enabling-https)
> - [Certificate Transparency (CT)](https://en.wikipedia.org/wiki/Certificate_Transparency)
> - [Open WebUI](https://openwebui.com/)
> - [Installing Open WebUI with Bundled Ollama Support and With GPU Support](https://github.com/open-webui/open-webui?tab=readme-ov-file#installing-open-webui-with-bundled-ollama-support)