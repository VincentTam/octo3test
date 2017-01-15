---
layout: post
title: "Basic Jekyll Date Locale Support"
date: 2015-08-03 22:38:32 +0800
comments: true
categories: [blogging]
---

Problem
---

I tried installing `_plugins/i18n_filter.rb` and `_locales/fr.yml`
from [GitHub][plug_src].  I mistakenly thought that I had finished
changing the English dates on [*Blog 2*][blog2] to their corresponding
French version due to the successful results shown in the local
preview.

**How can one get the locale support for dates on Jekyll sites?**

<!-- more -->

Possible cause
---

It is possible that the `jekyll` gem installed on my computer was
*different* to the one found on GitHub Pages' server.

A Dirty Fix
---

With reference to [this Stack Overflow question][so29757806], I
manually filled in the name of the months to create a French "support"
for dates in sites built with Jekyll.

{% render_code index.md A minimum working example for customizing month names %} 

[plug_src]: https://github.com/jekyll/jekyll/issues/3406
[blog2]: /blog2
[so29757806]: http://stackoverflow.com/a/29757806
