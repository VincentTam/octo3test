---
layout: post
title: "Upgraded to Git for Windows 2.11"
date: 2017-01-10 14:09:42 +0100
comments: true
categories: [git, M$ Win*]
---

Background
---

This [Git for Windows][git4win] upgrade from v2.8 to v2.11 is an
*unsuccessful* attempt to fix a [Jekyll preview error][pp] on
[my another blog][blog2] triggered by the command `jekyll serve` for
local preview.

Problem
---

After the update, I can no longer input letters with accents.  Since
the name of some mathematical theorems have accents, like l'Hôpital's
Rule.  It would be very inconvenient if the internation keyboard
*can't* be used in Git Bash.

<!-- more -->

Solution
---

In Git Bash, `locale` returns several lines.  The first one says
`LANG=C`.  After viewing the list with `locale -a`, I've finally
chosen the most common option with the character encoding UTF-8.  To
make this change permanent for one user, add the last line into
`~/.bashrc`.

{% codeblock lang:sh Locale change http://bit.ly/2iAnlq9 Reference %}
# Change Locale Permanently
export LANG=en_US.utf8
{% endcodeblock %}


Lessons learnt
---

Many popular URL shorteners like [Bitly](bit.ly) and
[Google URL Shortener](goo.gl) *won't* afftect my SEO, so I can use
shortened URLs in the [markdown][md] syntax for
[Octopress codeblocks][cb] to save disk space.[^seo]

---
[^seo]: [*Do URL Shorteners Impact your SEO?*][seo] by David Amerland.

[git4win]: https://git-for-windows.github.io/
[pp]: /blog/2016/08/28/jekyll-serve-error-2/
[blog2]: /blog2/
[src]: http://www.shellhacks.com/en/HowTo-Change-Locale-Language-and-Character-Set-in-Linux
[md]: https://daringfireball.net/projects/markdown/
[cb]: http://octopress.org/docs/plugins/codeblock/
[seo]: http://davidamerland.com/seo-tips/371-do-url-shorteners-impact-your-seo.html

*[URL]: Universal Resource Locator
