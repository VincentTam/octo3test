---
layout: post
title: "Jekyll Blog Page Build Warning"
date: 2016-02-08 01:45:25 +0800
comments: true
categories: [blogging, web technologies]
---

Background
---

The page build of Jekyll is quite easy because one *doesn't* need to
locally generate the HTML code of the Markdown source with `rake`.
One just needs to directly save, commit and push the source code
online.  The GitHub page support will handle the rest for you.

Problem
---

I wrote [an article in my Jekyll blog][op] yesterday afternoon.  From
what was shown in the terminal, the page build was smooth as expected.
Then, I received a warning from [GitHub].

<picture class="fancybox" title="The warning email from GitHub">
  <source srcset="/images/posts/Blog2/email635.png"
    media="(min-width: 400px)"></source>
  <img alt="The warning email from GitHub"
    src="/images/posts/Blog2/email300.png" />
</picture>

<!-- more -->

Solution
---

The problem can be easily solved: just follow what the email says.
I've visited [this blog article on GitHub][src] to know more about the
GitHub Pages upgrade.

[op]: /blog2/essai/2016/02/07/bon-nouvel-an-chinois
[GitHub]: https://github.com
[src]: https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0
