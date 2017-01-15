---
layout: post
title: "Compressed Git Repository for This Site"
date: 2014-12-13 16:39:09 +0800
comments: true
categories: Git
---

Background
---

I've uploaded nearly 200 blog posts to this blog.

Problem
---

As there're more and more pages here, the execution speed of the
command `git status` gradually *decreased*.

<picture class="fancybox" title="Git GUI">
  <source srcset="/images/posts/GitGc/gui.png" media="(min-width: 800px)"></source> 
  <img alt="git gui prompt" src="/images/posts/GitGc/gui-s.png" />
</picture>

<!-- more -->

Solution
---

I ran the command `git gc` in [Git Bash] on M\$ Win\* 7.

<pre class="cli"><code>Welcome to Git (version 1.9.4-preview20140929)


Run 'git help git' to display the help index.
Run 'git help <command>' to display help for specific commands.

<span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">~</span>
$ cd /c/github/vincenttam.github.io/

<span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ git gc
Counting objects: 8116, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3621/3621), done.
Writing objects: 100% (8116/8116), done.
Total 8116 (delta 4603), reused 7360 (delta 4064)
Removing duplicate objects: 100% (256/256), done.

<span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$
</code></pre>

---
(Added on Dec 21, 2014)


I also compressed the local repositories on [Ubuntu].

    [owner@localhost ~/octopress]$ git gc
    Counting objects: 14057, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (7403/7403), done.
    Writing objects: 100% (14057/14057), done.
    Total 14057 (delta 7553), reused 11466 (delta 5741)
    Checking connectivity: 49889, done.
    [owner@localhost ~/octopress]$ cd _deploy/
    [owner@localhost ~/octopress/_deploy]$ git gc
    Counting objects: 48241, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (16913/16913), done.
    Writing objects: 100% (48241/48241), done.
    Total 48241 (delta 23195), reused 38708 (delta 18503)
    Removing duplicate objects: 100% (256/256), done.
{:.cliUB}

[Git Bash]: http://msysgit.github.io/#bash
[Ubuntu]: http://www.ubuntu.com
