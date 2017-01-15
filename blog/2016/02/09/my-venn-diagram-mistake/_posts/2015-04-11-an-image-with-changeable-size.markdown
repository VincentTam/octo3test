---
layout: post
title: "An Image with Changeable Size"
date: 2015-04-11 17:14:23 +0800
comments: true
categories: [SVG, web technologies]
---

Background
---

I sometimes upload pictures for illustrating ideas.  You may see
[*Two Diagrams Illustrating the Isomorphism Extension Theorem*][pp1]
in this blog for example.

Motivation
---

Enable users to adjust the size of SVG graphics.

Problem
---

In the linked post, if the zoom level is too *large*, then part of the
image will be hidden.

<object type="image/svg+xml" class="boxed"
  data="/downloads/code/svgpan-1.2.2/IET.svg"
  width="200" height="200">
  Your browser does not support SVG
</object>

<a
href="http://validator.w3.org/check?uri=https%3A%2F%2Fvincenttam.github.io%2Fdownloads%2Fcode%2Fsvgpan-1.2.2%2FIET.svg;ss=1"><img
src="/images/valid-svg11.png" alt="Valid SVG 1.1" height="31"
width="88">
</a>

This is quite *inconvenient* for users who want a *whole* picture.

Goal
---

To set up a slide bar which controls the size of an SVG image.

<span>Image size:</span>
<input id="bar" type="range" name="points" min="200" max="800"
value="200" step="10">
<span id="lbl">200</span>

<object type="image/svg+xml" class="boxed" id="obj"
  data="/downloads/code/resizable/IET.svg"
  width="200" height="200">
  Your browser does not support SVG
</object>

<a
href="http://validator.w3.org/check?uri=https%3A%2F%2Fvincenttam.github.io%2Fdownloads%2Fcode%2Fresizable%2FIET.svg;ss=1"><img
src="/images/valid-svg11.png" alt="Valid SVG 1.1" height="31"
width="88">
</a>

<!-- more -->

Example
---

Click "download" to view the sample web page.

{% render_code resizable/test.html A minimum working example %}

Discussion
---

Initially, due to my laziness, I used the *same* SVG image as the one
in the section "Problem".  Even though the height and width of the SVG
image were increased, the diagram *didn't*.  Moreover, it's
*inconvenient* to manually increase the size of the picture by *both*
adjusting the knob *and* moving the mouse wheel.  As a result, I
googled "html scale svg" and found a long article which I *didn't*
really read.[^ref]  I just saw the word "viewport" and realized that
the SVG image in the section "Problem" had been processed with steps
described in [*Zooming SVG in Web Browsers*][pp2] for incorporating
the special functionalities of SVGPan in this blog.  Therefore,
generating the SVG file for the $\rm \LaTeX$ source code again, I
finally succeeded in getting the *contents* of the image enlarged.

---
[^ref]:
    [How to Scale SVG][ref] by Amelia Bellamy-Royds on *CSS-Tricks*.

[pp1]: /blog/2015/03/28/two-diagrams-illustrating-the-isomorphism-extension-theorem/
[pp2]: /blog/2014/08/02/zooming-svg-in-web-browsers/
[ref]: http://css-tricks.com/scale-svg/

<!-- Defer loading of JavaScripts -->
<script type="text/javascript" charset="utf-8">
(function() {
    function getScript(url,success){
        var script=document.createElement('script');
        script.src=url;
        var head=document.getElementsByTagName('head')[0],
        done=false;
        script.onload=script.onreadystatechange = function(){
        if ( !done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ) {
            done=true;
            success();
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        }
        };
        head.appendChild(script);
    }

    getScript("{{ root_url }}/javascripts/svg-resize-bar.js",function() {});
})();
</script>
