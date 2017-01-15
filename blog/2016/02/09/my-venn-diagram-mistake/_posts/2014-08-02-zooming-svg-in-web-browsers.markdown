---
layout: post
title: "Zooming SVG in Web Browsers"
date: 2014-08-02 18:07:08 +0800
comments: true
categories: [SVG, web technologies]
---

In my post about proving Pappus's Hexagon Theorem[^1], I inserted some
SVG graphics to illustrate the ideas.

{% img center /images/posts/PappusHexThm/PappusHexThm4.svg 600 %}  
<small>An example illustrating the difficulty of enlarging an SVG
graphics for ordinary users.  The image is borrowed from the post
about proving Pappus's Hexagon Theorem.  
[$\rm \LaTeX$ Source code](/downloads/code/pappus/PappusHexThm4.tex)</small>

<a
href="http://validator.w3.org/check?uri=https%3A%2F%2Fvincenttam.github.io%2Fimages%2Fposts%2FPappusHexThm%2FPappusHexThm4.svg;ss=1"><img
src="/images/valid-svg11.png" alt="Valid SVG 1.1" height="31"
width="88">
</a>

**How can one enlarge SVG images *only* within web browsers?**

<object type="image/svg+xml"
  data="/downloads/code/svgpan-1.2.2/PappusHexThm4.svg"
  width="800" height="600">
  Your browser does not support SVG
</object>
<small>A working example showing the zooming, panning and dragging
functions of SVG graphics.  Drag the figure to translate it, and
scroll to enlarge/reduce it.  
[Source code](/downloads/code/svgpan-1.2.2/PappusHexThm4.svg)</small>

<a
href="https://validator.w3.org/check?uri=https://vincenttam.github.io/downloads/code/svgpan-1.2.2/PappusHexThm4.svg;ss=1"><img
src="/images/valid-svg11.png" alt="Valid SVG 1.1" height="31"
width="88">
</a>

<!-- more -->

Thanks to Andrea Leofreddi, SVG graphics can now be enlarged *within*
browsers.[^2]

The instructions on Leofreddi's blog post is quite easy to understand.
Then, I tried his script.

First, I copied lines 4–5 of the source code of official demo (a
tiger) to my file.  (i.e. `PappusHexThm4.svg`)  I also closed the `<g
id="viewport" transform="translate(200,200)">` tag at the bottom of my
file.  However, I saw *nothing* in a web browser.

Second, I deleted `transform="translate(200,200)"`.  What I could see in
the web browser was a small picture.  I *couldn't* use the scroll
wheel on the mouse to enlarge the figure.  I dragged the picture to the
right, but part of the image is truncated after the drag.

Third, if I remove `width="152.832pt" height="98.239pt" viewBox="0 0
152.832 98.239"`, then it's done!

---
(Added on AUG 03, 2014)

Yesterday, I *didn't* know the code for enlarging an SVG image
embedded by an `<object>` tag.  As a result, the loaded image was
*too* small.  I've just checked out a guide on MDN about the
`transform` attribute of `<svg>` tags[^3], and now I know how to make
it bigger by the function `matrix(<a>,<b>,<c>,<d>,<e>,<f>)`.

Moreover, Chrome supports the scaling of SVG graphics just like the
scaling of other HTML elements.

---
[^1]: Tam, V. 2014, Jul 12. *Pappus's Hexagon Theorem*. Retrieved from <https://vincenttam.github.io/blog/2014/07/12/pappuss-hexagon-theorem/>
[^2]: Leofreddi, A. 2009, Dec 8. *SVGPan: a Javascript SVG (Viewer) Pan/Zoom/Drag library*. Retrieved from <http://www.cyberz.org/blog/2009/12/08/svgpan-a-javascript-svg-panzoomdrag-library/>
[^3]: MDN. 2014, Feb 23. *Transform*. Retrieved from <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform>

*[MDN]: Mozilla Developer Network
