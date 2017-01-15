---
layout: post
title: "Fixed Disqus Comments when Loaded with HTTPS"
date: 2015-05-26 22:12:24 +0800
comments: true
categories: [blogging, web technologies]
---

Background
---

1. [GitHub Pages now supports HTTPS][gh10popHttps].
2. I saw that Google search showed the HTTP version of the hyperlinks.
3. I want to convert add the existing "http://" to "https://".

Problem
---

1. I changed "http://..." to "https://..." in the Admin settings for
the disqus site of this blog.
2. The original comments *disappeared*!

**How can I get back the original comments and correct the URLs of the
links to my blog articles on Disqus?**

<!-- more -->

Failed attempt
---

I tried to use the "Domain Migration Wizard".  *Lacking* knowledge in
terms like "host", I just clicked the button to proceed even though I
saw that the original host name was recognised as "http://https://.".

In the end, I messed up the URLs of the forum threads.  After using
the "Wizard", I waited for about 20 hours, and then I saw that
hundreds of links started with
"http://https://vincentam.githhub.io/...".


I read a lot of articles from the Web, but the problem that they're
facing *weren't* the same as mine.

Solution
---

I finally decided to use the "URL Mapper".  When I read the official
onine help page about this migration tool, I realised that I should
give it a try.  The moment that I opened the generated CSV file in a
spreadsheet program, I knew that I had chosen the right way because
this gave me more control over the URL of the posts on my blog.

I also added a script copied from [konklone's Gist][gist] for using
HTTPS by defalut.

In the official documentation, a spreadsheet program is used to modify
CSV files.  In fact, if one knows regular expression, one would do
batch text editing using some tools available in the CLI.  For
instance, I used Vim to do this last night.

This morning, I discovered that the URLs in the box "Promoted
Discovery" were *still* wrong!  This afternoon, I read a lot of
related websites, just like what I did yesterday.  I *wasn't* sure
what to do next.  The URLs shown in the "Admin" page were finally
correct, but those hyperlinks on the pages "View in discussion" on the
white-backgrounded Disqus site *weren't*.

Then I worked on something else, and at about 8pm tonight, all the
URLs have finally been corrected.

Lessons learnt
---

I need to be patient and work on other things first after I've already
tried all possible ways to solve the problem.

Final remarks
---

During the site migration, one *couldn't* see the comments and the
"Also on" box took one to *wrong* pages.  I apologize for any
inconvenience caused.

[gh10popHttps]: https://konklone.com/post/github-pages-now-sorta-supports-https-so-use-it
[gist]: https://gist.github.com/konklone/9968713
