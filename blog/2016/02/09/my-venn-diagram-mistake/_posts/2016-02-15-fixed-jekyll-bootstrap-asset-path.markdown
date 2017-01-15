---
layout: post
title: "Fixed Jekyll-Bootstrap Asset Path"
date: 2016-02-15 01:18:31 +0800
comments: true
categories: [blogging, Git, web technologies]
---

Background
---

As I've said in [*Jekyll Blog Page Build Warning*][pp1],
[GitHub Pages have upgraded to 3.0][gh-up].

Problem
---

The Twitter theme for every post in [Blog 2][blog2] was *gone*, but
the home page and the archive page still looked good.

I viewed [Jekyll-Bootstrap][jb]'s [issue list][issue].  The
{% raw %}"{{ ASSET_PATH }}"{% endraw %} in the title of
[issue #295][i295] caught my eyes.  Feeling that changing
`_config.yml` is too troublesome and prone to error, I clicked some
links for related web pages, such as
[a relevant page in Jekyll's documentation][doc], but I *didn't* know
what to do.

<!-- more -->

Solution
---

It turns out that this issue is the *same* as [issue #290][i290].
The status of this issue is *closed* because some ways of fixing the
problem have been shared.  Since [qh's fix][p293] has received
positive comments, I adopt his approach.

[Before learning more Git commands this summer][pp2], I would change
this *manually*.  However, fearing that I would [make a typo][oops], I
seek an automatic way to apply the changes in `_includes/JB/setup`.

I searched "git apply patch" on Google, and reached
[this Stack Overflow question][so7827002] eventually.  The command

    $ curl https://github.com/JustinTulloss/zeromq.node/pull/47.patch > /tmp/47.patch
{:.cliUB}

gave me a file (*without EOF*) in `/tmp`.

    <html><body>You are being <a href="https://patch-diff.githubusercontent.com/raw/JustinTulloss/zeromq.node/pull/47.patch">redirected</a>.</body></html>
{:.cliUB}

I then tried using `git apply`.

    [owner@localhost ~/blog2]$ git apply --stat /tmp/47.patch
    fatal: unrecognized input
{:.cliUB}

Even though I added the `--stat` option, the bash still said that it's
`fatal`.  I tried googling "git apply fatal", but I *couldn't* see
anything useful.  The third answer to this Stack Overflow question
cleared my doubts: by comparing the date of the answers, one knows
that `patch-diff.githubusercontent.com` should be used instead.

Since the reputation of the owner of the second answer is higher,
*not* having enough time to check their differences, I used `git am`
instead of `git apply --check`.  Finally, everything went smooth and
the `git push` was successful.  Originally, I intended to leave a
short Git comment message with a few helpful links.  However,
everything went so good that I *didn't* have the chance to do that in
the Git repository for Blog 2.  Therefore, I recorded my thoughts
here.

[pp1]: /blog/2016/02/08/jekyll-blog-page-build-warning/
[gh-up]: https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0
[blog2]: /blog2
[jb]: https://github.com/plusjade/jekyll-bootstrap
[issue]: https://github.com/plusjade/jekyll-bootstrap/issues
[i295]: https://github.com/plusjade/jekyll-bootstrap/issues/295
[doc]: http://jekyllrb.com/docs/upgrading/2-to-3/#layout-metadata
[i290]: https://github.com/plusjade/jekyll-bootstrap/issues/290
[p293]: https://github.com/plusjade/jekyll-bootstrap/pull/293/files
[pp2]: /blog/2015/08/06/my-git-command-list-3/
[oops]: https://github.com/qh/jekyll-bootstrap/commit/a2526d03dad245ea389c918055ac7fe46948ab1d
[so7827002]: http://stackoverflow.com/q/7827002
