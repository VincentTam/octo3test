---
layout: post
title: "Testing Octopress and Ruby 2.0 on Windows 7 (2)"
date: 2014-09-02 23:39:57 +0800
comments: true
categories: Octopress
---

Problem
---

{% img fancybox /images/posts/OctRuby2b/err.png 'A compilation error' ['solved problem'] %}

<!-- more -->

Solution
---

See Octopress issue #[413] for details.

### Method 1 (@ DrayChou)

{% codeblock lang:bat Add the following 2 lines in "C:\your\ruby\location\setup_environment.bat" %}
set LC_ALL=en_US.UTF-8
set LANG=en_US.UTF-8
{% endcodeblock %}

I've *only* tested the above two commands in the command prompt, and
I've *never* touched `setup_environment.bat`.

### Method 2 (@ robatron)

I now use this method.[^1]  It's much simpler than the above
one---just add/set `encoding: UTF-8` in `_config.yml`.

{% img fancybox /images/posts/OctRuby2b/ok.png 'Successful compilation' ['solved problem'] %}

---
[^1]: `_config.yml` at commit [f584753].

[413]: https://github.com/imathis/octopress/issues/413
[f584753]: https://github.com/VincentTam/vincenttam.github.io/blob/f5847538b19e769b6fc05ef01bce3b8e88e3aa77/_config.yml#L53
