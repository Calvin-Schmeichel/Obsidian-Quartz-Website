---
title: Making Firefox Look Closer to Liquid Glass
aliases:
  - glassfox
description: I gave Firefox Apples "Liquid Glass" makeover.
permalink: aee75f87-5e20-4acd-b11a-151e4876430b
tags:
  - Post
date: 2025-10-15
cssclasses:
  - Rounded_Corners
  - Centered_Tables
  - Centered_Embeds
  - Centered_Images
---

### Why?
After the release of [[My favorite things from WWDC 2025#Liquid Glass|Apple’s Liquid Glass]] on September 15, 2025, macOS Tahoe added a lot of glass effects to the user interface, including Safari. As someone who mostly uses Firefox at the moment, I wanted to give Firefox the “Liquid Glass” makeover too which led me down the rabbit hole of custom CSS profiles in Firefox.

### Glassfox
I found this [repo](https://github.com/Ashley-Cause/GlassFox), which includes custom CSS files that let you change the appearance of Firefox. After reviewing the code, it seemed like a fun one to try, so I went for it.

### Install
1. Go to `about:profiles` and find the file path of your Firefox profile.  
2. Open that directory and create a `chrome` folder.  
3. Inside this new folder, add a `userChrome.css` file and paste your custom CSS code there.  
4. Go to `about:config` and set the following values to `True`:  
    - `toolkit.legacyUserProfileCustomizations.stylesheets`  
    - `widget.macos.titlebar-blend-mode.behind-window`  
    - `browser.tabs.allow_transparent_browser`  
5. You can learn more about customization [here](https://github.com/Ashley-Cause/GlassFox?tab=readme-ov-file#custom-config-values).  
6. Restart Firefox, and you should be good to go!

### Before and After

<div style="text-align: center;">Firefox Base</div>

![[Firefox_base.png|400]]

<div style="text-align: center;">Safari with Liquid Glass</div>

![[Firefox_safari.png|400]]

<div style="text-align: center;">Firefox with Glassfox</div>

![[Firefox_glassfox.png|400]]

### Credits
> [!info] Credit to `Ashley-Cause` on GitHub for the CSS code!  
> https://github.com/Ashley-Cause/GlassFox