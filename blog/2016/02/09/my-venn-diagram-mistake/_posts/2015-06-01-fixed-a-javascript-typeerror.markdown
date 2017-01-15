---
layout: post
title: "Fixed a JavaScript TypeError"
date: 2015-06-01 17:22:45 +0800
comments: true
categories: [SVG, web technologies]
---

Background
---

I included [an image with changeable size][pp] in a post written about
two months ago.

### How/Why does this work?

- In brief: View `/javascripts/svg-resize-bar.js`.
- For details: click the hyperlink above.

Problem
---

<picture class="fancybox" title="A error received from Firefox
  console">
  <source srcset="/images/posts/SVGResizeErr/null-bar558.png"
    media="(min-width: 558px)"></source>
  <img alt="FF throws TypeError" src="/images/posts/SVGResizeErr/null-bar270.png" />
</picture>

When I browsed any pages except that post which contains the
changeable SVG image, the above `TypeError` was thrown.

<!-- more -->

Solution
---

From the error message `TypeError: bar is null` and the filename
`svg-resize-bar.js` on the right, an ordinary user who knows how to
write if-else statements should be able to solve this in a few
seconds: surround the part `bar.onchange = function () { ... }` by the
if-else statement `if (bar != null ) { ... }`.

[pp]: /blog/2015/04/11/an-image-with-changeable-size/
