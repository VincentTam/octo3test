---
layout: post
title: "My Desktop Crashed!"
date: 2014-05-27 00:22:22 +0800
comments: true
categories: hardware
---

Beginning
---

Last Saturday night, I used my Ubuntu Desktop to watch some videos.
While it was playing, the recently upgraded Firefox suddenly hanged.
The screen was freezed, and the sound continued to play.  To avoid
disturbing my neighbour, I muted the monitor speakers.  I initially
guessed that the newly upgraded Firefox didn't work well with Linux
kernel 3.2.0-61, which was released on May 2 2014.  I forced the
machine to halt by pressing the power button for a while.  Then I
switched on the computer again, and chose "Memtest86+" in the GRUB
menu.  Within several minutes, the words in the blue screen blurred
due to some blinking dots.

<!-- more -->

Recalled past experience
---

Half a year ago, I also encountered similar error in the RAM.  I paid
HKD$80 for a technician in a computer repair shop to check the
computer *without checking the hard disk*.  Unluckily, after leaving
the computer off for a few days, he couldn't found any problem and
concluded that that was a "hard disk problem".

As a result, I studied some commands for merging logical volumes in
different physical volumes into the *same* physical volume, so as to
use less space in my computer.

Thus, I planned to uninstall unnecessary packages the next day.

Development
---

This Sunday, I turned on my computer.  Quick as a flash, the power
button's blue light changed to yellow, and the machine beeped.

Resolution
---

I searched "dell desktop beep", and Google showed some related
searches.  I clicked on "dell desktop beep codes", and found
[the official documentation on beep codes][beep_doc].  Though it was
written for an older model in the same series, I believed that it
could be applied to my model as well.

To correctly identify the problem, I booted the faulty desktop again,
and heard four repetitive short beeps before a pause.  According to
the manual, the culprit was the RAM.

I could search for the suitable models of RAM for my desktop model,
but it took time and the Internet is not always a reliable source of
information.  If I buy the wrong RAM, I'll have wasted several hundred
dollars.  Therefore, I decided to take my desktop to a computer repair
shop for replacing the RAM.

At noon, it was extremely hot, so I waited for a few hours and tried
[setting up Octopress on my laptop][octopress_win7], which ran on
Windows 7 because I would like to write something about
[the recent Vim error caused by my outdated VIMRC][ub_update_err]
before I forgot the cause and the solution of error.  I came across
some errors with long and complicated error messages. As a user but
*not* a developer, I couldn't immediately figure out what happened.
Eventually, I spent a whole night to solve technical problems before I
started to write posts/pages hosted on the *same* blog in Vim on
*both* Ubuntu and Windows.  I will talk about that in greater detail
soon.

Ironically, in the afternoon, the technician took less than 30 minutes
to remove the old RAM and install the new one.

Lessons learnt
---

- Stay calm when there's a problem.
- GNU/Linux has utilities for finding out what's going on inside my
    computer.
- Identify the true cause of the problem.
- Seek help from others if I can't take the responsibility.
- Replacing a malfunctioning part of a computer is cheaper and more
    eco-friendly than buying a new computer.

[beep_doc]: http://support.dell.com/support/systemsinfo/document.aspx?~file=/systems/inspd530/en/om/html/trouble.htm#wp1085300
[octopress_win7]: /blog/2014/05/26/using-octopress-on-another-device/
[ub_update_err]: /blog/2014/05/25/fixing-a-vim-error-caused-by-an-ultrablog-dot-vim-upgrade/
