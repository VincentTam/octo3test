---
layout: post
title: "Ubuntu Grey Screen"
date: 2016-01-02 14:05:54 +0800
comments: true
categories: Linux
---

A few days ago, I was browsing questions on
[Mathematics Stack Exchange][mathse] on [Ubuntu] 14.04 LTS.  I opened
lots of tabs in [Google Chromium][chromium].  Suddenly, the screen
went grey.  I *don't* know the cause.  I *hadn't* seen such problem
before.  I waited for about one minute, and I switched to the terminal
`tty3`.  The grey screen became black *without any text*.  I pressed
`<Ctrl>-<Alt>-<F7>`, then the monitor showed the grey screen again.

I looked at the light (not the power button) in the desktop.  I
thought it represented the hard disk activity.  Its blinking was
normal.  As a result, I *guessed* the problem was related to the
display.  I *pretended* I could normally see things, and I *imagined*
the picture.  I logged on `tty3` without logging off `tty7`.  Then I
typed `sudo reboot` and supplied the password.  Within several
seconds, I heard a *beep* sound and the system rebooted.

Certainly, all unsaved works on `tty7` had been *lost*.  Therefore, it
was very important to save your work.  As I'm no longer an IT worker,
I *won't* try to find a solution after reading a few related posts
which I have difficulty to understand.  Within six months, a new LTS
version of Ubuntu will be launched.  The price of a SSD will drop, so
perhaps I will clean install Ubuntu on a SSD.

[mathse]: http://math.stackexchange.com
[Ubuntu]: http://www.ubuntu.com/desktop
[chromium]: https://www.chromium.org

*[LTS]: long-term support
*[SSD]: solid-state drive
