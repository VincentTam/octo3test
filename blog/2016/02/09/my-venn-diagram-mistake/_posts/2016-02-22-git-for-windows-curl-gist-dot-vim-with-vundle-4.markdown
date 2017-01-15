---
layout: post
title: "Git for Windows, Curl, Gist.vim with Vundle (4)"
date: 2016-02-22 18:38:00 +0800
comments: true
categories: [Git, M$ Win*, Vim]
---

Background
---

In [the second post in this series][pp1], we see that the space in the
path of Git Bash can become a source of trouble.

Problem
---

**How to run external commands in GVim Portable invoked by Git Bash?**

<!-- more -->

A failed attempt
---

I googled "vim shell path program files", and clicked
[the first web site][so13917410] as usual.  Even though I *don't*, and
*won't* have Cygwin installed in my computer, I still viewed this
page, which suggested that the path of `shell` option should be
surrounded by a pair of double quotes `""`.  I tried this, but the
above problem *wasn't* solved.

Solution
---

I recalled that after opening the built-in editor in Command Prompt on
M\$ Win\* Professional/Enterprise, the displayed path of the working
directory would be different: some tildes appear in the path.

Therefore, I googled "windows path without spaces", and learnt to use
`DIR /X` in Command Prompt to [solve this problem][4e3abbe] from an
answer to [this Super User question][su179450].  Finally, usual
external commands like `ls` and `file` can be executed inside GVim
Portable.  This solves the error mentioned in the "Discussion" section
of [the second post in this series][pp1].  What I've wriiten in the
"Solution" section can be updated: I expect that under usual
circumstances, the external commands can be run even if the `shell`
option is set to Git Bash.

Remarks
---

I used an `if` statement to surround the `set shell=/path/to/bash.exe`
because [the same Stack Overflow answer][so13917410] mentioned in the
"A failed attempt" section said that many Vim plugins used
`has("win32")`.  If a plugin failed in a GVim window triggered by Git
Bash, I can still use it by opening GVim with Command Prompt.

Now, though using `curl` in GVim whose `shell` is configured to
`cmd.exe`, I can finally use `curl` in GVim invoked by Git Bash.

[pp1]: /blog/2016/02/22/git-for-windows-curl-gist-dot-vim-with-vundle-2/
[so13917410]: http://stackoverflow.com/a/13917410
[4e3abbe]: https://goo.gl/a9eHZF
[su179450]: http://superuser.com/a/179450
