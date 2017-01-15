---
layout: post
title: "A Quick Markdown Syntax Error Detection for Writing MathJax Equations in Octopress Posts (2)"
date: 2014-12-13 11:06:59 +0800
comments: true
categories: [MathJax, Octopress]
---

Problem
---

In the [previous post][pp] in this series, I've listed a number of
steps and included a group of [Vim] editor commands for screening out
[kramdown] syntax errors.  This is useful for [Octopress] posts with
ordinary contents.  However, if one wants to write some math equations
using [MathJax], then one will encounter great difficulties.[^pp1]

<!-- more -->

Even though the [kramdown] command line utility enables users to
instantly convert code across different formats, and a web browser
enables them to notice any syntax error, these tools just help them to
find the mistakes, but *not* the solution.  In the cited post in the
[first footnote](#fn:pp1), I spent *hours* to realise that *exactly
eight '\\'s* were needed to break the current line in [MathJax].
After that, I feel that using eight '\\'s and adding a '\\' before a
'\_' in [MathJax] equations interrupt my thinking.

Solution
---

Reading [an old post on removing Linux kernels on Ubuntu][pp2], I
remembered that the `markdown` attribute in `<div markdown="1">`
enabled [kramdown] to interpret the Markdown code within the `<div>`
block.  Therefore, I tried to surround the HTML code for an inline
math expression with a `<span>` tag.  Unluckily, unlike `<div>`
blocks, the surrounded code was *still* interpreted by [kramdown].

After that, I read the syntax documentation.  It claimed that setting
`markdown="0"` disabled parsing of contents inside the tag *except*
for `<span>` tags.[^doc]  Though the manual says that it's
*impossible*, I still inserted it into the `<span>` tag which
surrounded the code for the [MathJax] math expression, because it
*didn't* take much time to see the result: the inline [MathJax]
expression could be *successfully* displayed.[^pp3]

---
[^pp1]: For example, it's troublesome to [start a new line][pp1].
[^doc]:
    See the first bullet point of the section "HTML Spans" in
    [kramdown's syntax documentation][doc].

[^pp3]:
    See [*A Group of 689 Elements*][pp3] and
    [its source code][af4f216] in Blog 1 at commit af4f216 for a
    working example.

[pp]: /blog/2014/12/10/a-quick-markdown-syntax-error-detection-for-writing-mathjax-equations-in-octopress-posts-1/
[Vim]: http://www.vim.org
[kramdown]: http://kramdown.gettalong.org
[Octopress]: http://octopress.org
[MathJax]: http://www.mathjax.org
[pp1]: /blog/2014/09/07/mathjax-and-rss/ "MathJax and RSS"
[pp2]: /blog/2014/09/13/completely-remove-linux-kernels/ "Completely Remove Linux Kernels"
[doc]: http://kramdown.gettalong.org/syntax.html#html-spans
[pp3]: /blog/2014/12/09/a-group-of-689-elements/
[af4f216]: https://github.com/vincenttam/vincenttam.github.io/commit/af4f216
