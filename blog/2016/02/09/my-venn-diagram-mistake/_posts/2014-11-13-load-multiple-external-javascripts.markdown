---
layout: post
title: "Load Multiple External JavaScripts"
date: 2014-11-13 18:08:30 +0800
comments: true
categories: [octopress, web technologies]
---

Goal
---

Same as the one in [*My CSS Settiings for Printing (1)*][pp1].

Problem
---

Having written a post on loading MathJax with a local configuration
file, I previewed the print layout, saw that the font size was too
*small*.[^pp2]

{% img fancybox center /images/posts/LoadMultExtJS/problem1.jpg 750 'too small words' ['fig1'] %}

<!-- more -->

Cause
---

It *didn't* take me long to identify the reason for the small font
size.  When I wrote that post, I *didn't* aware of this problem.

{% img fancybox center /images/posts/LoadMultExtJS/problem2.jpg 750 'too long line' ['fig2'] %}

A "way" to get bigger fonts
---

One may adjust the zooming factor to "100%" to get a normal font size.
However, this *isn't* user-friendly.

{% img fancybox center /images/posts/LoadMultExtJS/problem3.jpg 750 'get font size' ['fig3'] %}

Moreover, this causes the right half of the line of HTML code to flow
out of the page.

Is this problem browser-specific?
---

I'll illustrate this problem with one more picture.

{% img fancybox center /images/posts/LoadMultExtJS/problem4.jpg 750 'print preview in Chrome' ['fig4'] %}

From the above screenshot, one can expect that this problem exists in
*every* web browser.

Learn from past experience
---

It took at least a minute for the system to regenerate the contents
during a preview.  Therefore, I tested things *locally* before doing
any *real* modifications to the source code.

{% img fancybox center /images/posts/LoadMultExtJS/sol.jpg 750 'a successful local test' ['fig5'] %}

Solution
---

{% codeblock A working script tag for embedding MathJax with a local configuration file lang:html %}
<head>
	<script type="text/javascript" charset="utf-8" src="
	https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML,
	https://vincenttam.github.io/javascripts/MathJaxLocal.js
	"></script>
</head>
{% endcodeblock %}

By trial, I found that one *couldn't* use whitespaces to indent the
URLs --- tabs (i.e. '\\t') should be used in this case.  Luckily, in
the source file responsible for loading external JavaScripts (i.e.
`source/_includes/custom/head.html`), there's no `<head>` tag, so one
may simply break a line without indentation.

---
[^pp2]:
    Refer to [*MathJax Local Configuration File*][pp2] for details.

[pp1]: /blog/2014/06/12/my-css-settiings-for-printing-1/
[pp2]: /blog/2014/11/09/mathjax-local-configuration-file/
