---
layout: post
title: "Flair in Octopress via HTTPS"
date: 2016-02-07 23:52:33 +0800
comments: true
categories: [information security, Octopress]
---

Background
---

I replaced [the big avatar][avatar] of my self intro in the sidebar
with my Stack Exchange flair, which summarized my reputation and
badges on [Mathematics Stack Exchange][mathse].  Since then, it's
easier to see my profile there.

Problem
---

When I browsed my blog, I saw a lock with a yellow triangle on the
left of the URL.

<picture class="fancybox" title="An abnormal icon on the left of the
URL">
  <source srcset="/images/posts/Flair/mixed-397.png"
    media="(min-width: 400px)"></source> 
  <img alt="An abnormal icon on the left of the URL"
    src="/images/posts/Flair/mixed-300.png" />
</picture>

This indicated the presence of insecure contents.

<picture class="fancybox" title="Firefox's error console message">
  <source srcset="/images/posts/Flair/log-714.png"
    media="(min-width: 720px)"></source> 
  <source srcset="/images/posts/Flair/log-516.png"
    media="(min-width: 520px)"></source> 
  <img alt="Firefox's error console message"
    src="/images/posts/Flair/log-300.png" />
</picture>

**How can I get rid of this error message?**

<!-- more -->

Solution
---

Even though I focus on math analysis now and I'm *not* going to write
any programming code, the advice of
[this article about programming][ref] still applies.  Reading the
error message, I recalled one of my old posts written more than one
year ago.  It was titled [*MathJax in Octopress via HTTPS*][pp].
Therefore, the only thing that I needed to do was to add an `s`
between `http` and `:` in the URL of the image for the flair.

A command learnt
---

I typed the command `git log -g --grep "flair"` in the repository for
this blog, and I quickly see the results.

    commit 5b9a757484314658458d86aa4613c75e5beb65e6
    Reflog: HEAD@{0} (Vincent Tam <fake@live.hk>)
    Reflog message: commit: Improved the code for my Stack Exchange flair
    Author: Vincent Tam <fake@live.hk>
    Date:   Mon Feb 8 01:04:06 2016 +0800
    
        Improved the code for my Stack Exchange flair
        
        1. Avoid the problem described in b6f4f1f.
        2. Get rid of the line break in the popup tooltip text of the image.
    
    commit 8800fa646fb8d6f22dd924b43a38e4ef3460e63e
    Reflog: HEAD@{6} (Vincent Tam <fake@live.hk>)
    Reflog message: commit: Changed the picture on the RHS in self-intro
    Author: Vincent Tam <fake@live.hk>
    Date:   Sat Jan 16 16:43:33 2016 +0800
    
        Changed the picture on the RHS in self-intro
        
        Replaced the avatar with a flair so that it's more convenient to view my
        Stack Exchange profile.
{:.cliUB}

Unluckily, the normal flags in the `grep` utility *aren't* supported,
say the case insensitive search.

P.S. I replaced my email with `fake@live.hk` to avoid junk mail.  If
you fork any one of [my repositories on GitHub][myGitHubReop], you'll
know what it is.

[avatar]: /images/avatar256.png
[mathse]: https://math.stackexchange.com
[ref]: http://polymerhk.com/articles/2016/02/03/27363/
[pp]: /blog/2014/06/05/mathjax-in-octopress-via-https/
[myGitHubReop]: https://github.com/VincentTam
