---
aliases:
  - Manipulating Clash Royale Deck Link URLs
  - How Siri Shortcuts for CR Deck links got me into programming
title: How Clash Royale Deck Link manipulation got me into Programming
cssclasses:
  - Rounded_Corners
---
Now you are probably wondering how a [RTS](https://en.wikipedia.org/wiki/Real-time_strategy) mobile card game is related to programming. This is a short story about Apples [Siri Shortcuts](https://support.apple.com/en-gb/guide/shortcuts/welcome/ios) made everything possible.

### What is Clash Royale?
[Clash Royale](https://supercell.com/en/games/clashroyale/) mobile video game developed and published by [Supercell](https://supercell.com/en/about-us/). The game combines elements from collectible card games, tower defense, and multiplayer online battle arena that was released back in 2016.

Early on when the game was still fresh Supercell would release short limited time game modes to mix up gameplay. Two of first waves of game modes was the "[King's Cup Challenge](https://supercell.com/en/games/clashroyale/blog/news/kings-cup-challenge-tournament/)" and "[Blind Deck Challenge](https://x.com/clashroyale/status/804234476377305088)" which both contained variations of random decks for players to use. But with most things, these events came and went always leaving the feeling of wanting to play them a bit more.

### Release of Deck Links
Clash Royale would later push out a new feature called "Deck Links" this would be a feature to allow you to send your friends links to your favorite decks. I immediately started sharing decks with my friends when I began to notice the link format.

![[Clash_Royale_Deck_Link_Example.png|center|600]]

```Deck Link
link.clashroyale.com/deck/en?deck=26000009;26000037;28000008;26000000;26000045;26000014;28000009;26000041
```

There were 8 cards in every deck... and there were 8 string IDs in every link... so then my gears started to turn. every card must have a unique ID when generating these deck links. I then started to play around with moving and changing the ID's around to see what would happen.

I would eventually manually log each deck ID and safe it in a draft Shortcut list.

|     |     |     | Card Name | Card ID  |     |     |     |
| --- | --- | --- | --------- | -------- | --- | --- | --- |
|     |     |     | Knight    | 26000000 |     |     |     |
|     |     |     | Archers   | 26000001 |     |     |     |
|     |     |     | Goblins   | 26000002 |     |     |     |
|     |     |     | Giant     | 26000003 |     |     |     |
|     |     |     | Pekka     | 26000004 |     |     |     |
|     |     |     | Golem     | 26000009 |     |     |     |
|     |     |     | ...       | ...      |     |     |     |

This would also lead to some fun (8 of the same card IDs):
![[Clash_Royale_All_Golem_Deck_Link.jpeg|center|400]]
```Deck Link
link.clashroyale.com/en?clashroyale://copyDeck?deck=26000009;26000009;26000009;26000009;26000009;26000009;26000009;26000009;&slots=0;0;0;0;0;0;0;0&tt=159000000
```

This was all fun and all but the process of manually changing the deck link URLs was a slow and tedious process. I would ask myself: "There must be a way to automate this process?". I would then remembered watching Apple's [WWDC 2018](https://www.apple.com/newsroom/2018/06/highlights-from-wwdc-2018/) Keynote where they [announced a new app called Siri Shortcuts](https://www.youtube.com/watch?v=UThGcWBIMpU&t=2045s).

### Along Came Siri
On [September 17, 2018](https://www.apple.com/newsroom/2018/09/ios-12-is-available-today/) Apple would release iOS 12 with contained a bunch of [new features](https://www.apple.com/newsroom/2018/06/apple-previews-ios-12/). One of these was the new Siri Shortcuts app (formerly Workflow). Shortcuts was a visual scripting application developed by Apple. But at the time as a 16 year old high school student I didn't know that.

The gears started to turn once again... "what if I could use Shortcuts to create a Clash Royale Deck link generator?" This way my friends and I could play random decks whenever we wanted. So I got to work implementing my Card ID list and I got it up and running very quickly! It worked like a charm and my friends loved it.

### Freshman Year
Fast forward a few years I start to take my [first programming class](https://catalog.stcloudstate.edu/courses/00015653) in college. In this course we would go over the basics of programming such as variables, arrays, functions, loops and more. But I began to notice how these concepts seemed eerily familiar to me. I began to connect the dots of how a tool such as Siri Shortcuts was just a high-level, block-based visual programming language (Similar to [Scratch](https://scratch.mit.edu/about)).

|     |     |     | Siri Shortcut                                                                     | C++                                                                                   |     |     |     |
| --- | --- | --- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --- | --- | --- |
|     |     |     | [List](https://matthewcassinelli.com/actions/list/)                               | [Array](https://learn.microsoft.com/en-us/cpp/cpp/arrays-cpp)                         |     |     |     |
|     |     |     | [Get Item from List](https://matthewcassinelli.com/actions/get-item-from-list/)   | [rand](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/rand)        |     |     |     |
|     |     |     | [Set Variable](https://matthewcassinelli.com/actions/set-variable/)               | [char](https://learn.microsoft.com/en-us/cpp/cpp/char-wchar-t-char16-t-char32-t)      |     |     |     |
|     |     |     | [Get Text from Input](https://matthewcassinelli.com/actions/get-text-from-input/) | [String](https://learn.microsoft.com/en-us/cpp/cpp/string-and-character-literals-cpp) |     |     |     |

This made the courses concepts easier to me for me to understand as is one of the main reasons I fell in love to programming and scripting to this day. I am by no means a master coder (I would say a beginner/novice) but I am happy I got exposed the this world as its a powerful tool I use every day in personal and professional applications.

Programming has opened a lot of doors to me. Such as joining the Computer Science Club, participating in [hackathons](https://www.linkedin.com/posts/calvinschmeichel_scsuhackathon-teambyteme-innovation-activity-7129690423639371777-n-j9?utm_source=share&utm_medium=member_desktop), leading to life-long friendships and more.

> [!Bug] Hackathon (2023) and CSCI Club (2022)
> 
> ![[Hackathon_Byte_Me_Fall_2023.jpeg|center|600]]
![[CSCI_Pizza_Night_2_Fall_2022.jpg|center|600]]

<!--
> [!Important] Siri Shortcut Link
> 
> https://www.icloud.com/shortcuts/
> *Note: will not have new cards from 2018+*
-->

> [!Info] Current Clash Royale Deck (10/12/2024)
> ["Hog 2.6"](https://link.clashroyale.com/en?clashroyale://copyDeck?deck=26000010;26000030;26000021;26000014;28000000;26000038;28000011;27000000&slots=0;0;0;0;0;0;0;0&tt=159000000)
> 
> [Royale API: "Hog 2.6 Cycle"](https://royaleapi.com/decks/stats/cannon,fireball,hog-rider,ice-golem,ice-spirit-ev1,musketeer,skeletons-ev1,the-log)
> 
> ["Hog 2.6: the deck with the potential to outplay" -David Song](https://docs.google.com/document/d/1zX0ZxkwfWdwybWr5fGfbVCgwEic-pMbLFVine5tBe_8/edit?pli=1&tab=t.0)

### PS

With the release of the [iPhone 15 Pro](https://support.apple.com/en-us/111829) and its [Action Button](https://support.apple.com/guide/iphone/use-and-customize-the-action-button-iphe89d61d66/ios). You can now map Siri Shortcuts to the button to trigger automations. I knew what I had to do...

![[Clash_Royale_iPhone15Pro_Action_Button.gif|center|600]]
*5 Years later you can now swap random decks at the click off a button.*

<!--
Old
`link.clashroyale.com/deck/en?deck=26000009;26000009;26000009;26000009;26000009;26000009;26000009;26000009`

New
`link.clashroyale.com/en?clashroyale://copyDeck?deck=26000009;26000009;26000009;26000009;26000009;26000009;26000009;26000009;&slots=0;0;0;0;0;0;0;0&tt=159000000&l=Royals`
-->
