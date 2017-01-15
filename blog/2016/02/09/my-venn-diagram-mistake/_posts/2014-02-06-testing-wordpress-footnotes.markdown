---
layout: post
title: Testing WordPress' Footnotes
date: 2014-02-06 00:54:20 +0800
categories: UltraBlog.vim
published: true
comments: true
---

*Note: This post won't make sense here. Refer to the
[original post][op].*

<!-- more -->

I tried to embed footnotes using UltraBlog. Maybe I've done too much
things. Let me list them here.

1. On the dashboard, go to "Settings", "Writing" and check the box for
using Markdown.
2. Try using UltraBlog.vim to write some footnotes by editing an
existing post found by `:UBList`.
3. Send the finished post to WordPress.com and view the results, and
find out that it fails.

It involves several technologies. UltraBlog. Therefore, it's
unrealistic to rely on Google search engine to get the answer.

In order to quickly find out the cause of such error, I used the
online editor to create a minimum working example of a post containing
a footnote. Then I used UltraBlog to download that post. In gVim, I
could see that the filetype is `html`, instead of `markdown`. I tried
to change it to `markdown` and update the draft. However, the string
`^1` enclosed in middle brackets *wasn't* interpreted. When I switch
the filetype back to `html`, then things just work again. Just like
the text below. I copied them from
[the official pandoc markdown syntax guide][pandoc_syntax].

> Here is a footnote reference,[^fn1] and another.[^fn2]

As I can see from the above block quote, the string `^longnote` inside a
pair of middle brackets will be changed to numbers. In order to let you
see it, I post a screenshot of my gVim here.

{% img fancybox center /images/posts/WPFn/MyGVim.png 800 'screenshot of my gVim' ['fig1'] %}  
Note: Remember to `:se ft=html` before `:UBSend`

Posted via [UltraBlog.vim][end].

---
[^fn1]: Here is the footnote.
[^fn2]: Here's one with multiple blocks.

[op]: http://blogueun.wordpress.com/2014/02/06/another-testing-page-for-wordpress-coms-built-in-syntaxhighlighter-and-ultrablog/
[pandoc_syntax]: http://johnmacfarlane.net/pandoc/demo/example9/pandocs-markdown.html
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
