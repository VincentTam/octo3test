---
layout: post
title: "Edit Gist Descriptions with Gist.vim"
date: 2014-12-13 23:58:28 +0800
comments: true
categories: Vim
---

Background
---

I use [Gist.vim] to post code to [Gist] directly in a [Vim] buffer for
efficiency.[^pp]

Problem
---

In the manual of [Gist.vim], it's said that after opening the Gist
buffer in [Vim], one can add/change the description of a [Gist] with
`:Gist -e -s something`.  To add a description for a [Gist], I typed
`:Gist -s foo bar ...` in a buffer for the particular [Gist] --- I
tried to use it like `:!echo foo bar` --- and what I got in the list
of my Gists was *just* the last word.

Lessons learnt
---

After one encounters such a problem, he/she will be likely to solve
the problem within seconds: use a double quote to surround the whole
description.

When I was in doubt of the words in the manual, I used simple examples
for testing, so I could quickly see the output and get the concepts
written in the documentation.

---
[^pp]:
    See [*Posting Code to Gist Efficiently*][pp] in Blog 1 for the
    reasons of installing [Gist.vim].

[pp]: /blog/2014/01/30/posting-code-to-gist-efficiently/
[Gist.vim]: https://github.com/mattn/gist-vim
[Gist]: https://gist.github.com
[Vim]: http://www.vim.org
