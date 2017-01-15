---
layout: post
title: "Rare Sed Delimiters"
date: 2015-08-25 10:47:53 +0800
comments: true
categories: Linux
---

Background
---

One can replace the usual delimiter `/` in `sed` with the other ones.
Therefore, the slashes in the URL inside the search pattern *won't*
have to be escaped by backslashes, which makes the whole command ugly.

Problem
---

If the search pattern contains multiple characters like `;`, `#`, `|`,
` ` (white space), etc, and you're *too lazy* to look for
[other choices of delimiters][ref], what can you do?

<!-- more -->

Discussion on the custom delimiter
---

When I read article at the above link, I was stuck at the last part,
which was about using a custom delimiter.  I *mistakenly* thought that
this was for the search pattern and the replacement.  In fact, reading
[GNU's manual][man] and trying some commands repeatedly, I realized
that prepending the custom delimiter with a backslash was for
specifying the range of the following expresion.

Therefore, I finally understand what `somevar` is in
[this Stack Overflow question][so20808364].

Solution
---

### Customizing the delimiter in a replacement

To begin with, I tried the following command.

    $ echo strange | sed s/'[a-e]'/#/g
    str#ng#
{:.cliUB}

After that, I know that surrounding the whole `s` command *isn't* a
must, just the `regex` and `replacement` will do.

Then I replaced all `/` with `y` in the above command.

    $ echo strange | sed sy'[a-e]'y#yg
    str#ng#
{:.cliUB}

Now, it's clear that the custom delimiter in the `s` command *doesn't*
need to be escaped.

### Towards the goal

The goal in this post is to use bizarre characters as the delimiter in
the `s` command, and I believe that if you've reached here, you'll
probably understand what [this command][so4844945] is doing, provided
that you know the way to
[input control characters as arguments in bash commands][so10571642].

More examples
---

I've just tried to delete a `<script>` tag in the `master` branch of a
repository for [my sample W3CSS page][w3css] using the in-place
editing option of `sed`.  Before making *real* changes to the file, I
tested my command syntax with the standard output first.

    [owner@localhost ~/SampleWebPage]$ git branch -a
    * master
      remotes/origin/HEAD -> origin/master
      remotes/origin/gh-pages
      remotes/origin/master
    [owner@localhost ~/SampleWebPage]$ sed -nr '\#<scr#,#</scr#p' ex0.html
    sed: -e expression #1, char 9: unexpected `,'
{:.cliUB}

Looking at [the manual][man] *again*, I thought that `\%regex%`
represented *one* address only.  The pattern after the comma was
*another* address, so I should have used *two* backslashes in the last
command.

    [owner@localhost ~/SampleWebPage]$ sed -ir '\#<scr#,\#</scr#' ex0.html
{:.cliUB}

[ref]: http://backreference.org/2010/02/20/using-different-delimiters-in-sed/
[man]: https://www.gnu.org/software/sed/manual/html_node/Addresses.html#Addresses
[so20808364]: http://stackoverflow.com/a/20808364
[so4844945]: https://stackoverflow.com/a/4844945
[so10571642]: https://stackoverflow.com/a/10571642
[w3css]: https://vincenttam.github.io/SampleWebPage/ex0.html

*[URL]: Uniform Resource Locator
