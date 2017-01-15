---
layout: post
title: "Use Tmux for Previewing Posts"
date: 2015-02-14 14:04:38 +0800
comments: true
categories: [Linux, Octopress]
---

Problem
---

After I finished an Octopress post, one may check if there's any error
by previewing the post.  In GUI, it's easy: just open a new window.
**How about in Linux text mode?**

A so-called method
---

Add an ampersand '&' behind the command for previewing the blog.
However, while viewing the site in a browser, the contents would be
*covered* by some lines.

    127.0.0.1 - - [14/Feb/2015:13:46:08 +0800] "GET / HTTP/1.1" 200 39685 0.0024
    127.0.0.1 - - [14/Feb/2015:13:46:14 +0800] "GET /blog/2015/02/14/tried-range-bas
    ed-for-loop/ HTTP/1.1" 200 21821 0.0028
    127.0.0.1 - - [14/Feb/2015:13:46:59 +0800] "GET /atom.xml HTTP/1.1" 200 131801 0
    .0071
{:.cliUB}

This can be an inconvenience.  It *isn't* hard to log on *another TTY*
and open the browser there, but one has to type the password
*twice*---this is *still* inconvenient.

Solution
---

I now use [Byobu], which depends on [Tmux], to preview the generated
blog.[^fig]

---
[^fig]: The [screenshot]{:.fancybox} of Tmux.

[Byobu]: http://byobu.co "a free terminal multiplexer"
[Tmux]: http://tmux.sourceforge.net "a terminal multiplexer"
[screenshot]: /images/posts/Tmux/tmux.png "Tmux on Ubuntu"
