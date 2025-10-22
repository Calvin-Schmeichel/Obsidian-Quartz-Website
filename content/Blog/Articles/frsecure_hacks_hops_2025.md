---
title: I Got to Go to FRSecure's Hacks and Hops!
aliases:
  - glassfox
description: My experience at Hacks and Hops 2025
permalink: 9e62ef4f-f6e9-4ecd-be8f-1d0a123146ca
tags:
  - Article
date: 2025-10-21
cssclasses:
  - Rounded_Corners
  - Centered_Embeds
  - Centered_Images
---

### Warm-up: Security at Target Center
Last Thursday I had the opportunity to attend FRSecure's Hacks and Hops security event hosted at Target Center! I found out about this event from meeting some great FRSecure employees at [DEF CON 33](Blog/Articles/DEF%20CON%2033.md).

The event covered:
- State of the Union: Annual Information Security Report
- Main Stage, Executive and Technical talks!

![[frsecure_hacks_hops_2025_jumbotron.jpg|500]]

### Tip-Off: State of the Union
Oscar Minks (*President of FRSecure*) started off the event with the *State of the Union*. This is a report that they make every year based on the data they collect from their clients and the industry. This year they had ~400 security assessments from all sectors and 162 incident response engagements. These could have been business email compromise, ransomware or more.

The main updates were:
- Cybersecurity incidents are on the rise (Increased budgets required)
- Social engineering is still the top threat (Cause of ~67% of business email compromise)
	- Most organizations have implemented a basic social engineering test, but what you should be asking yourself is: "Do we know the effectiveness of this test?", "Are we improving this process?"
	- As your employees get better at recognizing BEC, make sure the training gets harder too. Always keep improving.
- Multifactor authentication (MFA) implementation rates are improving.
	- 88% of organizations now have MFA
	- But the work is not done, we should strive for 100% MFA on all user and admin accounts.
- Understanding your inventory!
	- Most organizations have an incomplete record of their total asset inventory, whether this is on-prem or in the cloud. It’s hard to protect what you do not know exists. Knowing your attack surface is one of the first steps to increasing security.
- "Living off the land" has been the main approach to gain persistent access.
	- This is done by using programs your organization is already using to blend in such as your VPN, AnyDesk, etc.
	- This method is harder to detect by your EDR!
	- Make sure to conduct routine audits of your active software and completely uninstall and disable traffic from older de-provisioned software as well.

> How I might approach this is by implementing a [CNAPP tool such as Wiz](https://www.wiz.io/lp/nb-cnapp-c) to get better visibility into my cloud assets. I would then use the compliance feature to test MFA configurations, generate a report of any users missing MFA, and check my applications for missing patches.

### Timeout: Event CTF

During the event they also hosted a CTF, I really liked the theming of the site and how they integrated their sponsors into it as well. Some of the flags were hidden inside of the presentations or on the merchandise. It was awesome trying to get as many points as I could!

> [!Question] `./challenges`
> ```
> ...
> ├──[-] Hacker Trivia - Beginner
> │   ├── VPN Basics (101)
> │   ├── Pentesting OS (101)
> │   ├── Overload Attack (101)
> │   ├── Database Language (101)
> │   └── Packet Sniffer (101)
> ...
> ```

> You can check out more here: https://hacksandhops.ctfd.io

> Doing this CTF made me realize how much faster I’ve gotten at solving some of the beginner challenges. After doing many of these events, it was a nice way to see my own progress. Doing this makes me want to sign up for [Cyber Skyline's CTF](https://cyberskyline.com/verify/6XL5G061E1U9) again!

### 4th Quarter: Technical Track
For most of the day I decided to follow the Technical Track since it seemed the most appealing to me.

The track included:
- AI in the SOC: Promise, Pitfalls, and Practical Reality
- Practical Resilience and Cybersecurity in OT Environments
- Using Offensive Tools for Internal Security
	- Some of the tools covered:
		- https://www.kali.org/tools/amass/
		- https://en.wikipedia.org/wiki/Google_hacking
		- https://www.kali.org/tools/netexec/
		- https://github.com/SnaffCon/Snaffler
		- https://github.com/Tylous/ScareCrow
		- https://bloodhound.specterops.io/get-started/introduction
		- https://www.atomicredteam.io/

It was awesome to hear more about AI in the SOC space, the ongoing impact and threats in the OT space, and getting a list of new tools to test out in my homelab!

![[frsecure_hacks_hops_2025_powerpoint.jpg|500]]

### Overtime: Final Thoughts
Overall this was an awesome event to be able to go to. It was great to network and reconnect with my FRSecure friends from DEF CON 33 earlier this year. The information covered in the State of the Union and technical tracks was incredible, full of insights I want to explore further and ideas I hope to bring into my next career opportunity.

I want to thank FRSecure again for inviting me to this event and I look forward to attending more in the future!

![[frsecure_hacks_hops_2025_zeroday.jpg|500]]

%%Deptuized OT defender%%