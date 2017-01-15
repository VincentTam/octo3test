---
layout: post
title: Testing MathJax
date: 2013-08-16 14:00:00 +08:00
categories: MathJax
comments: true
---

Following the instructions on [Irreducible representation][src],
[MathJax] works on Blogger.

I typed

{% codeblock lang:tex %}
$\cos^2\theta-\sin^2\theta=\cos 2\theta$
{% endcodeblock %}

and here's the result: $\cos^2\theta-\sin^2\theta=\cos 2\theta$

<!-- more -->

Antoher equation:

<div>
\[
ax+\frac{b}{y}=1
\]
</div>

This time, the equation is in display mode.

How about the inline verbatim environment?  Googling "mathjax
verbatim", we have

<div>
\[
\verb*$x^2\sqrt y$* \text{ yields } x^2\sqrt y
\]
</div>

according to [*$\rm \TeX$ Commands available in MathJax*][mathjax_cmd]
by Dr. Carol JVF Burns.  Nevertheless, it only works in display
mode.[^lastmod141219]

Finally, let's get some equations numbered, just like
[an example on the MathJax CDN][eq_no_eg].

<div>
\[
\begin{equation}
  \int_{0}^{\frac{\pi}{2}} \sin x \ud x = 1
\end{equation}
\]
</div>

---
[^lastmod141219]: Last edited on DEC 19TH, 2014.

[src]: http://irrep.blogspot.hk/2011/07/mathjax-in-blogger-ii.html "MathJax in Blogger (II)"
[MathJax]: http://www.mathjax.org
[mathjax_cmd]: http://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm
[eq_no_eg]: http://cdn.mathjax.org/mathjax/latest/test/sample-eqnum.html
