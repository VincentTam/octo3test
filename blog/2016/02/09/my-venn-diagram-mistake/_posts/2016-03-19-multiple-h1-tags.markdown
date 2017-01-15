---
layout: post
title: "Multiple H1 Tags"
date: 2016-03-19 16:58:26 +0800
comments: true
categories: [blogging, web technologies]
---

Problem
---

The SEO Analysis of [Bing Webmaster][bingwebmaster] complained that
each page of my blog had *more than one* `<h1>` tag.

I viewed the HTML code for the homepage of this blog to verify the
warning message of this SEO tool.  Then I found over three instances
of the `<h1>` tag, at the top, in the sidebar, etc.  To facilitate
this process, I used `git grep "<h1>"`.

Discussion
---

I searched for "h1" in the issues and the pull requests of [Octopress]
on [GitHub], and I got *no* results.  I wondered why *nobody* reported
this.  As a result, I went to Google to search "octopress more than
one h1 tag".  Finally, reading [this article][src], I gave up the idea
of changing the `<h1>` tags in the sidebar into `<h2>`.

Remarks
---

Like [Google Webmaster][goowebmaster], I *can't* simply reset the URL
of the site.  To insert an 's' into the protocol "http", one needs to
deleted the site and add it again.  Fortunately, the verification of
site ownership *doesn't* need to be done again.

[bingwebmaster]: https://www.bing.com/webmaster
[Octopress]: http://octopress.org
[GitHub]: https://github.com/imathis/octopress
[src]: http://webdesign.tutsplus.com/articles/the-truth-about-multiple-h1-tags-in-the-html5-era--webdesign-16824
[goowebmaster]: https://www.google.com/webmaster
