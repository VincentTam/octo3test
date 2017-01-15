---
layout: post
title: My Error While Using UltraBlog
date: 2014-02-04 20:13:59 +0800
categories: UltraBlog.vim
published: true
comments: true
---

I'm not sure if I've installed UltraBlog.vim correctly a month ago,
but it surely improves my blogging efficiency *a lot*.  With Vim's
keystroke, I can move the cursor quickly.  Such power of "what you
think is what you get" is impossible to find in other editors, either
the online ones or the offline ones.

I write this post because I would like to make a record only.  I can
still find ways to work well with UltraBlog.

What are the errors?  The following screenshots illustrate them.

I opened a local list and forgot to close it before opening another
list.  Then, from one of the lists, I opened a new buffer to edit a
post.  After I finished editing the post, I issued `ZQ` in order to
close the buffer.  However, the buffer didn't close.  Instead, I got
*another* list.  It seems that the plugin doesn't want users to use an
"outdated" list to link up with a post.  As I tried to close the new
list with `ZQ` or `:q`, I just *couldn't* do it.  But there's *so
many* windows.  OK!  Then I just use `<C-w>j` and `ZQ` to close the
old lists.  When I used UltraBlog for the first time, the plugin
surprised me by giving me an *extra, identical and updated* list of
contents.  Since the first time, the plugin still do the same thing,
of course, but I can "keep calm and continue blogging".

I've run into this situation for the first time today.

{% img fancybox /images/posts/UBErr/ub-q1.png 800 'First UltraBlog screenshot' ['fig1'] %}

I tried to quit the new list with `:q`.

{% img fancybox /images/posts/UBErr/ub-q2.png 800 'Second UltraBlog screenshot' ['fig2'] %}

Vim told me to use `:q!` instead.

{% img fancybox /images/posts/UBErr/ub-error.png 800 'Third UltraBlog screenshot' ['fig3'] %}

UltraBlog threw a host of errors that I wouldn't be interested to find
out more.

I wouldn't have time to figure out what it really is.  *As far as I
know, if I remember to close all post lists while writing or editing a
post, things will be fine.*  Anyways, just make things work, and
blogging with Vim and UltraBlog.vim is awesome!

* * * * *

(Last edited on FEB 05, 2014)

Note: Actually, `:on` can clear the unwanted and unaccessible old
lists.  This can be checked using `:ls`, which is the same as
`:buffers`.

* * * * *

(Last edited on JUN 23, 2014)

Now, I've switched to Octopress, just like the creator of
UltraBlog.vim since it's *better* than WordPress.

* * * * *

Posted via [UltraBlog.vim].

[UltraBlog.vim]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
