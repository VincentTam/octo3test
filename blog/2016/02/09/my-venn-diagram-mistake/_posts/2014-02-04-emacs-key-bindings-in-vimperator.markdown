---
layout: post
title: EMACS Key Bindings in Vimperator?
date: 2014-02-04 20:54:05 +0800
categories: [web technologies]
comments: true
---

I've written [a post about Vimperator][pp1], and also
[another one about Viper][pp2].  However, I've *never* seen web pages
that introduce the following Vimperator insert mode commands written
by fans of Vim or Vimperator.

- Typing `<C-a>` moves the cursor to the beginning of the line.
- Typing `<C-e>` moves the cursor to the end of the line.
- Typing `<C-k>` removes the characters *after* the cursor.

They behave *exactly* like the keyboard commands in GNU Emacs!

In my opinion, they're just behaving like the commands used in a \*nix
terminal.  Anyways, I've learnt some new commands, no matter where
they're used.  For a Vim user, it *won't* hurt to take the official
tutorial of Emacs since they can applied once you're in an Info page.
For example, if you want to scroll down by one screen in an Info
document, you can issue the command `<C-v>`.  To reverse the change,
you can type `<M-v>`.

I end this post with `<C-j>`, though its behaviour in Emacs differs
from the behaviour in Vimperator.  It's just another way for using the
search engine: moving the cursor to the search box at the top
right-hand corner.

Posted via [UltraBlog.vim][end].

[pp1]: /blog/2013/12/11/using-vim-keystrokes-in-web-browser/ "Using Vim Keystrokes in Web Browser"
[pp2]: /blog/2013/12/23/vi-key-bindings-in-emacs/ "Vi Key Bindings in Emacs"
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
