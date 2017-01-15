---
layout: post
title: "Awk Column Alignment"
date: 2016-04-09 12:48:11 +0800
comments: true
categories: Linux
---

Background
---

I use Google's [PageSpeed Insights][pagespeed] to check if the images
on this blog are optimised.  Recently, it reported that two images in
[*An Invalid Claim by the Government*][pp] could be resized and
compressed.  I did so, and then the file size of the files were
displayed using `ls -lh`.

    [owner@localhost ~/octopress/source/images/posts/W3CInvalid]$ ls -lh
    total 312K
    -rw-rw-r-- 1 owner owner  32K Apr  9 12:20 cedb1-300.png
    -rw-rw-r-- 1 owner owner 132K Mar 27 14:32 cedb1.png
    -rw-rw-r-- 1 owner owner  32K Apr  9 12:20 cedb2-300.png
    -rw-rw-r-- 1 owner owner  83K Apr  9 12:20 cedb2.png
{:.cliUB}

Problem
---

To remove the first four column, one uses `awk` to do this.  (I assume
that the current working directory is the *same* as above.)

    $ ls -lh | awk '{print $5 $6 $7 $8 $9}'

    32KApr912:20cedb1-300.png
    132KMar2714:32cedb1.png
    32KApr912:20cedb2-300.png
    83KApr912:20cedb2.png
{:.cliUB}

**How can one properly align the columns?**

<!-- more -->

Solution
---

Searching "awk align columns" on Google, I quickly got
[an answer posted by Mike Sherrill][so14095129] on Stack Overflow.
However, there's room for improvement in the visual effect of the
output.

    $ ls -l | awk '{printf("%6s %s %2s %s %13s\n", $5, $6, $7, $8, $9);}'
                             
     32718 Apr  9 12:20 cedb1-300.png
    135159 Mar 27 14:32     cedb1.png
     32665 Apr  9 12:20 cedb2-300.png
     84580 Apr  9 12:20     cedb2.png
{:.cliUB}

The solution can be found in [the second search result][so1505360] for
the Google search for "awk align columns left right".  Added a hyphen
after `%` will suffice.  Note that the newline `\n` *can't* be
omitted.  Otherwise, the output will be messed up.

    $ ls -l | awk '{printf("%6s %s %2s %s %-s\n", $5, $6, $7, $8, $9);}'
                             
     32718 Apr  9 12:20 cedb1-300.png
    135159 Mar 27 14:32 cedb1.png    
     32665 Apr  9 12:20 cedb2-300.png
     84580 Apr  9 12:20 cedb2.png    
{:.cliUB}

[pagespeed]: https://developers.google.com/speed/pagespeed/insights/
[pp]: /blog/2016/03/27/an-invalid-claim-by-the-government/
[so14095129]: http://stackoverflow.com/a/14095129
[so1505360]: http://stackoverflow.com/a/1505360
