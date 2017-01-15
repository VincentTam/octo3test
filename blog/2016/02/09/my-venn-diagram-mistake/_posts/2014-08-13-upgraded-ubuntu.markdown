---
layout: post
title: "Upgraded Ubuntu"
date: 2014-08-13 11:06:58 +0800
comments: true
categories: Linux
---

I've upgraded [Ubuntu] to 14.04 LTS.

![tty1 of Ubuntu 14.04][tty1]

In the first reboot, I saw a few
errors.  Since then, usual things like web browsers and terminal have
run smoothly, except the tool tip text of the [Firefox] icon in the
[Unity] desktop environment.

At first, the time *wasn't* synchronized with the Internet, though it
had been set to "Automatically from the Internet" in "Time & Date" in
"Systems Settings".  After an hour or so, it'll be fine.

However, the display of monospaced fonts in some places is strange.
For example, when I view the source code of a web page in Chromium,
the font *isn'* monospaced.

![HTML source code viewed inside Chrome][src_code]

I *won't* try to fix the problem since I think that metric spaces are
more *interesting* than technical problems.

---
(Last edited on AUG 17, 2014)

I have now worked out a solution to this problem.  Refer to
[*Ubuntu 14.04 Monospaced Font Family*][rp] for details.

[Ubuntu]: http://www.ubuntu.com "A popular Linux distro"
[tty1]: /images/posts/UbuntuDistUpgrade2/tty1.png
[Firefox]: https://www.mozilla.org/en-US/firefox/new/ "Mozilla Firefox"
[Unity]: https://unity.ubuntu.com "Ubuntu's default desktop environment"
[src_code]: /images/posts/UbuntuDistUpgrade2/src-code.png
[rp]: /blog/2014/08/17/ubuntu-14-dot-04-monospaced-font-family/
