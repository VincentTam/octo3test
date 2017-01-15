---
layout: post
title: My First Post Using UltraBlog.vim
date: 2014-01-12 00:22:13 +0800
categories: UltraBlog.vim
comments: true
---

*Note: This post won't make sense here. Refer to the
[original post][op].*

<!-- more -->

Hello world! This is the *first* post I've ever written in
UltraBlog.vim.

I love writing with Vim for many reasons, such as it's pointers,
marks, macros, keyword completion, etc.

I've tried [VimRepress], but this plugin gives me a host of errors
that I, as a mediocre GNU/Linux user, *can't* understand. Hope
UltraBlog works fine!

Markdown
---

It's already late today, so I'll practice this new and fascinating
markup language next week.

Image uploading
---

According to the official manual, the `:UBUpload` command "can only be
executed in a post edit view".

This is the first sample image that I've uploaded.

![$(file)s](/images/posts/1stUB/sample.png)

That's how the plugin works. Leaving an empty line after the link for
the image does *not* work.

{% img fancybox /images/posts/1stUB/testing1.png 'Results of UltraBlog.vim' ['fig1'] %}

You need to use the concept of `id` in the official markdown
documentation to do a bit of modification in order to get things work.

Posted via [UltraBlog.vim].

[op]: https://blogueun.wordpress.com/2014/01/12/my-first-post-using-ultrablog-vim/
[VimRepress]: http://www.vim.org/scripts/script.php?script_id=3510
[UltraBlog.vim]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
