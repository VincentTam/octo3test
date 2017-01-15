---
layout: post
title: "Fixed Jekyll-Bootstrap Asset Path (2)"
date: 2016-08-18 16:15:33 +0800
categories: [blogging, Git, web technologies]
comments: true
---

Background
---

I attempted to manually fix a [problem in the first post][pp] in this
series half a year ago.

Problem
---

I have just updated the Jekyll source code for [Blog 2][blog2].

    [owner@localhost ~/blog2]$ git pull jekyll master
    remote: Counting objects: 37, done.
    remote: Total 37 (delta 10), reused 10 (delta 10), pack-reused 27
    Unpacking objects: 100% (37/37), done.
    From github.com:plusjade/jekyll-bootstrap
     * branch            master     -> FETCH_HEAD
       3a34785..8193869  master     -> jekyll/master
    Removing sitemap.txt
    Auto-merging _includes/JB/setup
    CONFLICT (content): Merge conflict in _includes/JB/setup
    Auto-merging _config.yml
    Automatic merge failed; fix conflicts and then commit the result.
{:.cliUB}

**How to repair this failed merge?**

<!-- more -->

Solution
---

In the file `_includes/JB/setup`, I deleted the `HEAD` part, and
adopted the official changes in the remote repository for Jekyll.
Then, everything should be fine.

[pp]: /blog/2016/02/15/fixed-jekyll-bootstrap-asset-path/
[blog2]: /blog2
