---
layout: post
title: "How to Stop Auto Indenting?"
date: 2014-12-12 22:31:11 +0800
comments: true
external-url: http://vim.wikia.com/wiki/How_to_stop_auto_indenting
categories: Vim
---

After reading this guide, I created a file
`$HOME/vimfiles/indent/html.vim` with only one line.

    let b:did_indent = 1

In the past, I would `:setlocal noautoident nosmartindent` before
pasting anything into a [Vim] buffer.  However, as I paste the
[jQuery] code from a website while I was writing a recent post, the
code was *still* wrongly indented.[^pp]  After reading the last
section of the tip, I now know to use `:set paste`.

---
[^pp]:
    See [*Cheat in an Online Quiz*][pp] in Blog 1 for the copied
    [jQuery] function.

[Vim]: http://www.vim.org
[jQuery]: http://jquery.com
[pp]: /blog/2014/12/11/cheat-in-an-online-quiz/
