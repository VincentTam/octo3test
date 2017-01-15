---
layout: post
title: "Git For Windows, Curl, Gist.vim with Vundle (1)"
date: 2016-02-22 10:23:53 +0800
comments: true
categories: [Git, M$ Win*, Vim]
---

Background
---

I installed msysgit 1.9.0, and added its bash utilities to `PATH`.

Problem
---

I attempted to open an HTML file with `curl`.  However, I got the
following error.

    C:\Windows\system32\cmd.exe /c (curl 'http://www.vim.org/index.html' -o 'C:/Temp
    /PortableApps/gVimPortable/Data/Temp/VIA1ED5.html')
    curl: (1) Protocol "'http" not supported or disabled in libcurl
    shell returned 1
    Hit any key to close this window...
{:.cli}

Discussion
---

In the first line of the code block, `cmd.exe` with option `/c` ran
the command in the parenthesis `()`.  I copied the command inside `()`
and ran it in `cmd.exe`, and the error was reproduced.

It's easy to find the cause of the problem.  I typed "curl protocol"
on the Google search web page, and the rest of the error message
appeared in the list of suggestions.  In the first search result,
which was [a Stack Overflow question][so6684235], I learnt why this
error occurred from the first answer---in the Command Prompt, one
needs to use double quotes `""` instead of single quotes `''`.  In Git
Bash, this *doesn't* matter.

Since `curl` was bundled with msysgit, I suspected that the installed
version of Git was too old.  I then upgraded it.

Lessons learnt
---

1. For a shell program (e.g. Command Prompt, bash), the option `-c`
   (or `/c`) stands for "command", and what's left is the command to
   be run.
2. `curl` will grab content from the input URL and display it as
   standard output.  To save the downloaded content in a file, the
   flag `-o`, which means "output", can be used.

[so6684235]: http://stackoverflow.com/q/6684235
