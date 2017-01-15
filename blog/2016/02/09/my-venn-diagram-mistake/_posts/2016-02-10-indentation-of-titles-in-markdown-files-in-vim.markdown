---
layout: post
title: "Indentation of Titles in Markdown Files in Vim"
date: 2016-02-10 00:05:04 +0800
comments: true
categories: Vim
---

Background
---

While I was writing
[a post about a technical problem encountered][pp2] while writing
[another post about Venn diagram][pp1], I encountered another
technical problem.

Problem
---

I tried including the error message into the previous post by the Vim
editor command `:r ~/lang:text temp-swp.mkd`.  To have it surrounded with
`<pre><code>` in HTML, one needs to indent it by four spaces.

{% render_code temp-swp.mkd A section of the error message %}

I usally do this by applying the right-shift operator `>` to the text
selected in visual line mode.  However, the line starting with `#`
*wasn't* indented like the others.

{% render_code temp-swp1.mkd A failed indentation %}

<!-- more -->

Discussion
---

If I started [Vim] with all plugins disabled with `vim -u NONE -N`,
then the above problem *won't* happen.

Solution
---

Use the visual block mode instead.  Either one way will do.

1. Keep using the `>` operator.
2. Use `I    ` instead of `>`.

[pp1]: /blog/2016/02/09/my-venn-diagram-mistake/
[pp2]: /blog/2016/02/09/rake-aborted-due-to-a-vim-swap-file/
[Vim]: http://www.vim.org
