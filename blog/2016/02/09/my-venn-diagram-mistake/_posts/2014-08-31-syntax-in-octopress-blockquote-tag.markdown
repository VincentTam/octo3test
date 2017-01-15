---
layout: post
title: "Syntax in Octopress Blockquote Tag"
date: 2014-08-31 00:44:13 +0800
comments: true
categories: Octopress
---

Problem
---

{% img fancybox /images/posts/OctBlockquote/err.png 800 'Wrongly rendered contents' ['Fig 1'] %}

If I input Markdown code inside a
`{% raw %}{% blockquote %}{% endraw %}` tag, it *won't* be parsed.

***How can the headings and hyperlinks inside the quoted text be
displayed?***

<!-- more -->

Solution
---

That's trivial.  Changing the Markdown code into HTML solves the
problem.

Lessons learnt
---

1. A newline character `\n` in each
`{% raw %}{% blockquote %}{% endraw %}` tag *really* means a newline
in the resulting quote.
2. Pullquotes can be used inside quote.[^1]

---
[^1]:
    See [常玩手機腦生鏽 14%青年無記性][eg] in *Blog 1* for an working
    example.

[eg]: /blog/2014/06/14/electronic-gadgets-and-absent-mindedness/
