---
layout: post
title: "Testing Octopress and Ruby 2.0 on Windows 7 (1)"
date: 2014-09-02 15:22:25 +0800
comments: true
categories: [Octopress, M$ Win*]
---

Background
---

This Sunday, I tried to do something similar to what I did in
May---install Octopresss on Windows 7.[^1]  Different from last time,
I used Ruby 2.0.0, the newest version of RubyInstaller for Windows
that I could find.[^2]

I could use Octopress with Ruby 1.9.3, so I expected that I could
easily deploy things with Ruby 2.0.0.  However, I was mistaken.

Problem
---

{% img fancybox /images/posts/OctRuby2a/err.png 'A compilation error' ['Screenshot of problem'] %}

<!-- more -->

Solution
---

I used the relevant part of the error message to search for websites
describing similar/related problems.  Luckily, I found one in *Eaten
by Grues*.[^3]

I manually created a batch file in the *same* folder of
`python.exe`.[^4]

{% codeblock lang:bat python2.bat %}
@ECHO OFF
python %*
{% endcodeblock %}

The raison d'être of the trailing `%*` is explained in
[one of my old posts][pp2].

Finally, the section `which: no python2 in (...)` *disappeard* after I
locally generated the site again.

{% img fancybox /images/posts/OctRuby2b/err.png 'Rake can now detect Python2.' ['solved problem'] %}

---
(Last edited on NOV 24, 2014)

[^1]:
    See [Using Octopress on Another Device][pp1] in *Blog 1* for
    details.

[^2]:
    "Downloads" in the official website of RubyInstaller for Windows.
    ([URL][ruby4win])

[^3]:
    See *Installing PortableJekyll* in Eaten by Grues for details.
    (When I wrote this post in September, the URL was
    http://eatenbygrues.com/journal/installing-portable-jekyll but the
    link is now *dead*.)

[^4]: I suppose that Python is in the `PATH` variable.

[pp1]: /blog/2014/05/26/using-octopress-on-another-device/
[ruby4win]: http://rubyinstaller.org/downloads/
[pp2]: /blog/2013/12/11/something-about-win-batch-files/ "Something About Win* Batch Files"
