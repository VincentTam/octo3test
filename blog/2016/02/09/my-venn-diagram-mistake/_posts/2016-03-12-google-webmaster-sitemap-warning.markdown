---
layout: post
title: "Google Webmaster Sitemap Warning"
date: 2016-03-12 21:19:19 +0800
comments: true
categories: [blogging, web technologies]
---

Problem
---

I uploaded my `sitemap.xml` to Google Webmaster, but I received
warnings: `404.html` was in the sitemap, but the crawl was blocked by
`robots.txt`.

Discussion
---

Obviously, I should find a way to exclude the 404 page from the
sitemap.  In the old days, one can add the path name of the page to be
excluded.[^ref]

However, the file `plugins/sitemap_generator.rb` has been *deleted*
since commit [52f9119].  **How can the 404 page be excluded from the
sitemap then?**

<!-- more -->

Solution
---

Searching "octopress sitemap exclude url" *won't* help.  Actually,
adding a line `sitemap: false` in `source/404.md` will do.

[^ref]:
    For details, refer to [*自定義Octopress404頁面*][ref] written by
    androidyue.

[ref]: http://droidyue.com/blog/2014/06/20/custom-octopress-404-page/index.html
[52f9119]: https://github.com/octopress/octopress/commit/52f9119
