---
layout: post
title: "Learnt Laurent Series"
date: 2015-12-20 18:51:05 +0800
comments: true
categories: [math]
---

Yesterday, I read the proof of Laurent's Theorem in my complex
variables book, and I was stuck at the following equation.[^churchill]

<span class="myeqn" markdown="0">
Suppose that $f$ is analytic on the annular region $R_1 < \abs{z -
z_0} < R_2$.  Let $C$ be any postively-oriented closed curve
surrounding point $z_0$.</span>  By Cauchy--Goursat Theorem, we have

<div class="myeqn">
\[
  f(z) = \sum_{n = -\infty}^{\infty} c_n (z - z_0)^n \quad (R_1 <
  \abs{z - z_0} < R_2).
\]
</div>

<span>Image size:</span>
<input id="bar" type="range" name="points" min="200" max="800"
value="300" step="10">
<span id="lbl">300</span>

<object type="image/svg+xml" class="boxed" id="obj"
  data="/downloads/code/Laurent/laurent.svg"
  width="300" height="300">
  Your browser does not support SVG
</object>

<a
href="http://validator.w3.org/check?uri=https%3A%2F%2Fvincenttam.github.io%2Fdownloads%2Fcode%2FLaurent%2Flaurent.svg;ss=1"><img
src="/images/valid-svg11.png" alt="Valid SVG 1.1" height="31"
width="88">
</a>

<small>Source code: [$\rm \LaTeX$][tex_src], [SVG][svg_src]</small>

I was stuck at this point.

<div class="myeqn">
\begin{equation}
  \int_{C_2}^{} \frac{f(s) \ud s}{s - z} - \int_{C_1}^{}
  \frac{f(s) \ud s}{s - z} - \int_{\gamma}^{} \frac{f(s) \ud s}{s - z}
  = 0
  \label{int}
\end{equation}
</div>

The function $f$ is analytic on the *entire* circle $\gamma$,
including the circumference of $\gamma$.  Then the boundary of the
region where $f$ is analytic is the circumferences of <span
class="myeqn" markdown="0">$C_1$ and $C_2$</span>.  I wondered why the
third term in $\eqref{int}$ was needed.  I took me half an hour to
figure out that the integrand is *not* simply $f(s)$, but with a
denominator $s - z$.  Since $z$ is the centre of the circle $\gamma$,
I need to also include it as the boundary of the region of analyticity
of the integrand.

---
[^churchill]:
    Brown, J. W., Churchill, R. V., & Lapidus, M. (1996). *Complex
    variables and applications (Vol. 7)*. (pp. 17). New York:
    McGraw-Hill.

[tex_src]: /downloads/code/Laurent/laurent.tex
[svg_src]: /downloads/code/Laurent/laurent.svg

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
