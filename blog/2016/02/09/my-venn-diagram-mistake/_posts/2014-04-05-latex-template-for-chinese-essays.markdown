---
layout: post
title: "$\\rm \\LaTeX$ Template for Chinese Essays"
date: 2014-04-05 21:37:58 +0800
comments: true
categories: [LaTeX, template]
---

With this template, I believe that creating a Chinese article using
$\rm \LaTeX$ should be *a lot* quicker and easier.

I've tried including a [Gist] in one of my posts.  However, each line
separates too much from another.  Therefore, including a [Gist] in my
post doesn't seem to be a good idea.

I think that the default layout of the code list in [Octopress] is
*much* prettier than [Gist].  I included the source code of my $\rm
\LaTeX$ essay in [my previous post on $\rm \LaTeX$][pp].  Unluckily,
some of the functions in Octopress's code block don't work.  As a
result, I have to put the *whole* source file in that post.

In this post, I'll just post the link to <del>my $\rm \LaTeX$ Chinese
template [Gist], and</del> [the PDF file][pdf].

---
(Added on AUG 03, 2014)

Since I've copied the code for fixing the problem of embedded [Gist]s in
Octopress[^fixed_gist], I will include the [Gist] in this post now.

<!-- more -->

{% gist 10473229 latex_chin_sample.tex %}

---
[^fixed_gist]: Commit [e5668de] of this repo.

[Gist]: https://gist.github.com
[Octopress]: http://octopress.org
[pp]: /blog/2014/03/16/latex-template-for-essays/ "LaTeX Template for Essays"
[pdf]: /downloads/latex-chin-sample.pdf
[e5668de]: https://github.com/VincentTam/vincenttam.github.io/commit/e5668de
