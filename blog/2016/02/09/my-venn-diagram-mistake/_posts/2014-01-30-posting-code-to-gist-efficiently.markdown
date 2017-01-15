---
layout: post
title: Posting Code to Gist Efficiently
date: 2014-01-30 16:25:01 +0800
categories: Vim
comments: true
---

[Gist] enables computer users to post their source code online. Since
Gist is a [GitHub] repository, they can view each change to the code.

However, it is inconvenient to use the online editor in the homepage
of Gist, especially for geeks. For example, Chen believes that
[it's *not* good to manually type or paste the code onto Gist][src]. I
directly quote his words here.

> 但是阿，如果你是手動把 code 弄到 gist 上面，那這樣就太遜了，基本上各大編輯器都有跟 gist 互動的 plugin，如果你用 Vim，可以使用 gist-vim，可以讓你直接在 Vim 裡生成、編輯、讀取 gist，完成後還可以幫你把連結開起來。

<!-- more -->

This can be explained in this way: it's unproductive to use a mouse
for text editing. [A relevant question on Stack Overflow][so1088387]
was answered by many users. Mark Rushakoff finds [Vim]'s keyboard
commands *"almost priceless"* since your fingers don't have to leave
the keyboard and grab the mouse. Jeremy Smyth describes this as the
"biggest gain" of using [Vim] or Emacs.

As suggested by Aknow::Work's words above, we can use [Gist.vim] so
that we can make use of the advantages of [Vim] while writing code,
and post the code onto [Gist] quickly.

Except the official `README.mkd`, there's
[a tutorial on ServerWatch][tut] for [Gist.vim] newbies. This article
shortens the time needed to find the useful command `Gist -l`.

Posted via [UltraBlog.vim][end].

[Gist]: https://gist.github.com
[GitHub]: https://github.com
[src]: http://aknow-work.blogspot.hk/2013/04/programmer-code-gist-vim.html
[so1088387]: http://stackoverflow.com/q/1088387 "Vim vs Mouse"
[Vim]: http://www.vim.org
[Gist.vim]: https://github.com/mattn/gist-vim
[tut]: http://www.serverwatch.com/tutorials/article.php/3931076/Get-More-Out-of-Git-Use-Gist-With-Vim.htm "Gist Tutorial"
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
