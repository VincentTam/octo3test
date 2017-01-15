---
layout: post
title: "Searching Git Commit Messages"
date: 2016-04-03 19:42:33 +0800
comments: true
categories: [Git, Vim]
---

Problem
---

The solution for the problem posed in the title is pretty simple.  For
instance, I want to find all Git commits whose commit message contains
"HTTPS".[^1]

    $ git log -2 --grep="HTTPS"
    commit 7400582e268f4a5b776269cf0cc08c04886a4769
    Author: Vincent Tam <fake@live.hk>
    Date:   Sun Mar 20 20:19:47 2016 +0800
    
        Updated my Rakefile with HTTPS
    
    commit b6f4f1fc872affc1107b330042d7b43b45e60595
    Author: Vincent Tam <fake@live.hk>
    Date:   Mon Feb 8 00:45:02 2016 +0800
    
        A new article about Flair, Octopress and HTTPS
{:.cliUB}

However, I think that the output *isn't* compact enough.  I would like
to display the following information.

    <short SHA1> <commit time> <commit message title>
{:.cliUB}

<!-- more -->

Solution
---

    $ git log -2 --grep="HTTPS" --pretty="%h %cd %s"
    7400582 Sun Mar 20 20:19:47 2016 +0800 Updated my Rakefile with HTTPS
    b6f4f1f Mon Feb 8 00:45:02 2016 +0800 A new article about Flair, Octopress and HTTPS
{:.cliUB}

Lessons learnt
---

1. Some pretty formats in Git
    - `%h`: short SHA1
    - `%H`: full SHA1
    - `%an`: author name
    - `%cd`: commit date
    - `%s`: subject
    - `%b`: body
2. Automatically escape special characters in Vim
    - Adding a backslash before *each* `%` in

            :r !git log -2 --grep="HTTPS" --pretty="\%h \%cd \%s"
        {:.cliUB}

      is tedious and prone to errors.

    - A more convenient way

            :exec escape('r !git log -2 --grep="HTTPS" --pretty="%h %cd %s"', '%')
        {:.cliUB}

---
[^1]:
    To avoid junk mail, I replaced the first four letters of my email
    address with `fake`.
