---
layout: post
title: "Using Xclip"
date: 2014-12-12 17:21:12 +0800
comments: true
categories: Linux
---

Background
---

I always use commands for different tasks.  Then I need a command line
utility for copying command output into clipboard so as to quickly
finish typing the command.  Luckily, it's very easy to install xclip
on Ubuntu.  I believe that on other GNU/Linux distributions, the
installation *won't* be too difficult.

Although it's convenient to use xclip, I experienced two problems
while using it on \*nix GUI.

Problem 1
---

Suppose that you want to capture the output of a command, and pipe it
to another command.  However, the output often consists of a trailing
newline character.  As a result, I sometimes executed commands
incorrectly and carelessly.  **How can one get rid of it?**

Problem 2
---

Before this Wednesday morning, I *didn't* know how to use xclip with
other options.  Therefore, when I wanted to retrieve to contents in
the clipboard, the *only* two ways that I knew were to use the utility
with the `-o` flag to obtain the **o**utput, and to use the middle
click of the mouse.  However, from problem one, I *couldn't* chop off
the newline character at the end of the clipped text.  Moreover, if
one only needs *part* of the text in the clipboard, it would be quite
troublesome to pipe the output of `xclip -o` to other text editing
commands like `sed` and `awk`.  If one can use a keyboard shortcut for
pasting text in a terminal emulator like Gnome Terminal (e.g.
`<C-v>`), then one can also use `<C-b>`, `<Alt-d>`, etc. For example,
if there're three words in the clipboard, and I only need the last
two, then combining the use of these keyboard shortcuts will enable
one to type strings quickly and accurately.  **Is there such a
keyboard shortcut?**

Solution
---

I found two Stack Overflow quesitons extremely useful for improving my
skills in xclip.

1. [Bash: Strip trailing linebreak from output][so12524320]
2. [Pipe to/from Clipboard][so4208191]

[so12524320]: http://stackoverflow.com/a/12524320
[so4208191]: http://stackoverflow.com/a/4208191
