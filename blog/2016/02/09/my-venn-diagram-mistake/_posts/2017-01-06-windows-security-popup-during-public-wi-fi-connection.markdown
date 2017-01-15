---
layout: post
title: "Windows Security Popup during Public Wi-Fi Connection"
date: 2017-01-06 11:34:30 +0100
comments: true
categories: [M$ Win*]
---

Background
---

After an upgrade to M\$ Win\* 10, I connected to my campus' public
Wi-Fi.[^pp]

Problem
---

I mistakenly thought that it's the *same* as the one described in
*Windows Security popup window pops up each time any connection is
made* on [Super User][su479113].

<!-- more -->

Failed attempt to solve this problem
---

### With M\$ IE

Googling "windows security login popup", one will find the question
*"Windows Security" popup asking me to enter my login information when
visiting campus website* on [M\$ Community site][mscomm].  Follow the
steps described in the first answer from Azam, a support engineer.

### *Without* M\$ IE

To save disk space, I *don't* keep M\$ IE due to M\$ Edge, which was
shipped with the M\$ Win\* 10 upgrade, and in which the security tab
is *absent*.

To set a custom security level for Internet options *without M\$ IE*,
open the same window by clicking Control Panel → Network and Internet
→ Internet Options.  The button "Custom level" will then appear.
However, under "User authentication", there's *no* checkboxes.  I only
saw a group of four radio buttons.

In order to find out the right choice, I appended "custom security
level" in the previous Google query.  According to
[a similar page on SysAid][sysaid], I've chosen "Automatic log-on with
current user name and password".

True cause of the problem
---

Actually, the popup window prompts for the user name and password for
*another* Wi-Fi network with a similar name to which I'm going to
connect.  After typing the right user name and password, I can connect
to the Internet.

Lessons learnt
---

Although Windows Security popup window is the main focus of this blog,
I've learnt something quite different from it because of the article
*Windows 10 Settings You Should Change Right Away* available on
[Laptop Mag][ltm] found during this process.  The UAC is really
important: by prompting for user's confirmation during the
installation of a new software, one will be aware of the apps
installed on the machine.  Though many users claim that those who
oppose the disablement of UAC are "misinformed", I take the words of a
preferred user who says that M\$ Win\* 10 would become unstable if
it's been turned off.

---
[^pp]: c.f. [*Jekyll Serve Error (2)*][pp]

[pp]: /blog/2016/08/28/jekyll-serve-error-2/
[su479113]: http://superuser.com/q/479113
[mscomm]: https://answers.microsoft.com/en-us/ie/forum/ie9-windows_7/windows-security-popup-asking-me-to-enter-my-login/530deb46-0962-e011-8dfc-68b599b31bf5
[sysaid]: https://www.sysaid.com/Sysforums/posts/list/2159.page
[ltm]: http://www.laptopmag.com/articles/windows-10-settings-to-change

*[UAC]: User account control
