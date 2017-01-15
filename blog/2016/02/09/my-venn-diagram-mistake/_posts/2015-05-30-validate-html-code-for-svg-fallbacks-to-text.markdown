---
layout: post
title: "Validate HTML Code for SVG Fallbacks to Text"
date: 2015-05-30 22:23:37 +0800
comments: true
categories: [CSS, SVG]
---

Background
---

After I'd written [*Added W3C Validated Logos to Some Pages*][pp], I
saw that in the site, there's still two pages which *hadn't* been
checked by the W3C's validators.

Problem
---

To allow SVG fallbacks to text, I viewed the source code for
[the SVG example from W3Schools][w3sch].  The fallback message was
simply included inside a `<svg>` tag just like a `<p>` tag.  I applied
this technique to `source/downloads/code/SVGViewBox/viewBox1.html`.

Then I uploaded that HTML file to the W3C's HTML validator, which
complained such an inclusion of text.

<!-- more -->

Solution
---

After that, I googled "svg fallback text" using the encrypted version
of the search engine.  Luckily, [the second answer][se26249728] to the
Stack Overflow question, which appeared at the top of the list of
search results, is useful.

Lessons learnt
---

To get an HTML page which consists of a `<foreignObject>` tag inside
an `<svg>` tag validated by the W3C HTML validator, it's obligatory to
specify the dimensions of the `<foreignObject>` tag.

[pp]: /blog/2015/05/23/added-w3c-validated-logos-to-some-pages/
[w3sch]: http://www.w3schools.com/svg/tryit.asp?filename=trysvg_myfirst
[se26249728]: http://stackoverflow.com/a/26249728

*[W3C]: World Wide Web Consortium
