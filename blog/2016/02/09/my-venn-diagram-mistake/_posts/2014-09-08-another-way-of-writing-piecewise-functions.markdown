---
layout: post
title: "Another Way of Writing Piecewise Functions"
date: 2014-09-08 18:38:29 +0800
comments: true
categories: [LaTeX, MathJax, Octopress]
---

Background
---

I changed my way of writing block equations for RSS.[^1]  However, in
my old post about the Contraction Mapping Principles, there's an
inequality on the rate of convergence of a point in a complete metric
space to the unique fixed point of the Lipschitz mapping with a
Lipschitz constant strictly less than one.[^2]

\\[
\begin{aligned}
d(x^\*,x\_n) =& d\left( \lim\_{k \to \infty} x\_k,x\_n\right) \\\\\\\\
=& \lim\_{k \to \infty} d(x\_k,x\_n) \\\\\\\\
\le& \lim\_{k \to \infty} \frac{q^n}{1 - q} d(x\_1,x\_0) \\\\\\\\
=& \frac{q^n}{1 - q} d(x\_1,x\_0)
\end{aligned}
\\]

```text Source code of the above block equation
\\[
\begin{aligned}
d(x^\*,x\_n) =& d\left( \lim\_{k \to \infty} x\_k,x\_n\right) \\\\\\\\
=& \lim\_{k \to \infty} d(x\_k,x\_n) \\\\\\\\
\le& \lim\_{k \to \infty} \frac{q^n}{1 - q} d(x\_1,x\_0) \qquad
  \text{(by \eqref{eq:finite_err})} \\\\\\\\
=& \frac{q^n}{1 - q} d(x\_1,x\_0)
\end{aligned}
\\]
```

Starting from the second line in the above block equation, at the left
of the binary relation symbols there's a whitespace character.

<!-- more -->

### Visual effects in a page for a single post

{% img fancybox /images/posts/MathJaxDisplay2/post.png 'LaTeX code seen in post' ['fig1'] %}

{% raw %}
```tex $\rm \LaTeX$ code as seen in an individual post
\begin{aligned}
d(x^*,x_n) =& d\left( \lim_{k \to \infty} x_k,x_n\right) \\\
=& \lim_{k \to \infty} d(x_k,x_n) \\\
\le& \lim_{k \to \infty} \frac{q^n}{1 - q} d(x_1,x_0) \qquad
  \text{(by \eqref{eq:finite_err})} \\\
=& \frac{q^n}{1 - q} d(x_1,x_0)
\end{aligned}
```
{% endraw %}

### Visual effects in pages under "/posts/" or the index page

(Added on SEP 3RD, 2015)

Note that due to the development of Octopress, I now see *three*
backslashes in the "MathJax Equation Source".

{% img fancybox /images/posts/MathJaxDisplay2/collection.png 'LaTeX code seen in index page' ['fig2'] %}

{% raw %}
```tex $\rm \LaTeX$ code as seen under "/posts/" or the index page
\begin{aligned}
d(x^*,x_n) =& d\left( \lim_{k \to \infty} x_k,x_n\right) \\
=& \lim_{k \to \infty} d(x_k,x_n) \\
\le& \lim_{k \to \infty} \frac{q^n}{1 - q} d(x_1,x_0) \qquad
  \text{(by \eqref{eq:finite_err})} \\
=& \frac{q^n}{1 - q} d(x_1,x_0)
\end{aligned}
```
{% endraw %}

It *doesn't* matter much in block equations.

Problem
---

However, it *does* matter if I have to define a piecewise function.
Take one defined in one of my old posts as an example.[^3]

---
<del>(Added on DEC 12TH, 2014)</del>
(Revised on SEP 3RD, 2015)

<del>Note: As you can see from the above piecewise function, the
problem is now *gone*.</del>

---

\\[
f(x,y) =
  \begin{cases}
    0 &\text{if } (x,y) \in \vect{I} \land y \ge x\\\\\\\\
    1 &\text{if } (x,y) \in \vect{I} \land y < x
  \end{cases}
\\]

```text Source code of the above block equation
\\[
f(x,y) =
  \begin{cases}
    0 &\text{if } (x,y) \in \vect{I} \land y \ge x\\\\\\\\
    1 &\text{if } (x,y) \in \vect{I} \land y < x
  \end{cases}
\\]
```

### Visual effects in a page for a single post

{% img fancybox /images/posts/MathJaxDisplay2/cases3.png 'LaTeX code seen in post' ['fig3'] %}

{% raw %}
```tex $\rm \LaTeX$ code as seen in an individual post
f(x,y) =
  \begin{cases}
    0 &\text{if } (x,y) \in \vect{I} \land y \ge x\\\
    1 &\text{if } (x,y) \in \vect{I} \land y < x
  \end{cases}
```
{% endraw %}

### Visual effects in pages under "/posts/" or the index page

(Added on SEP 3RD, 2015)

Note that due to the development of Octopress, I now see *three*
backslashes in the "MathJax Equation Source".

{% img fancybox /images/posts/MathJaxDisplay2/cases2.png 'LaTeX code seen in index page' ['fig4'] %}

{% raw %}
```tex $\rm \LaTeX$ code as seen under "/posts/" or the index page
f(x,y) =
  \begin{cases}
    0 &\text{if } (x,y) \in \vect{I} \land y \ge x\\
    1 &\text{if } (x,y) \in \vect{I} \land y < x
  \end{cases}
```
{% endraw %}

Solution
---

---
(Added on SEP 3RD, 2015)

Now, I know [how to tell kramdown to ignore MathJax code][sol].  This
is *much more convenient* than the method described below.

---

After I observed that the two equations, which are aligned by the
`aligned` environment, at the bottom of the post cited in footnote #3,
I used the $\rm \LaTeX$ commands `\left\\{` and `\right.` in the
Markdown source file for posts to construct the left curly brace
*only*.

\\[
f(x,y) = \left\\{
  \begin{aligned}
    0 &\text{ if } (x,y) \in \vect{I} \land y \ge x\\\\\\\\
    1 &\text{ if } (x,y) \in \vect{I} \land y < x,
  \end{aligned}
\right.
\\]

```text Source code of the above block equation
\\[
f(x,y) = \left\\{
  \begin{aligned}
    0 &\text{ if } (x,y) \in \vect{I} \land y \ge x\\\\\\\\
    1 &\text{ if } (x,y) \in \vect{I} \land y < x,
  \end{aligned}
\right.
\\]
```

### Visual effects in a page for a single post

{% img fancybox /images/posts/MathJaxDisplay2/aligned3.png 'LaTeX code seen in post' ['fig5'] %}

{% raw %}
```tex $\rm \LaTeX$ code as seen in an individual post
f(x,y) = \left\{
  \begin{aligned}
    0 &\text{ if } (x,y) \in \vect{I} \land y \ge x\\\
    1 &\text{ if } (x,y) \in \vect{I} \land y < x,
  \end{aligned}
\right.
```
{% endraw %}

### Visual effects in pages under "/posts/" or the index page

(Added on SEP 3RD, 2015)

Note that due to the development of Octopress, I now see *three*
backslashes in the "MathJax Equation Source".

{% img fancybox /images/posts/MathJaxDisplay2/aligned2.png 'LaTeX code seen in index page' ['fig6'] %}

{% raw %}
```tex $\rm \LaTeX$ code as seen under "/posts/" or the index page
f(x,y) = \left\{
  \begin{aligned}
    0 &\text{ if } (x,y) \in \vect{I} \land y \ge x\\
    1 &\text{ if } (x,y) \in \vect{I} \land y < x,
  \end{aligned}
\right.
```
{% endraw %}

'0' and '1' in the above example are aligned.  Though in pages for
each individual posts, the whitespace character preceeding '1' still
exists, it *isn't* visible unless it's highlighted.  I'm quite
satified with this alternative method of typesetting piecewise
functions.

---
[^1]: See [*MathJax and RSS*][pp1] in Blog 1 for details.
[^2]:
    See
    [*Error Bound of the Fixed Point of Contraction Mappings*][pp2] in
    Blog 1 for details.

[^3]:
    See [*Archimedean Sequence of Partitions of a Square*][pp3] in
    Blog 1 for details.

[pp1]: /blog/2014/09/07/mathjax-and-rss/
[pp2]: /blog/2014/08/11/error-bound-of-the-fixed-point-of-contraction-mappings/
[pp3]: /blog/2014/06/19/archimedean-sequence-of-partitions-of-a-square/
[sol]: /blog/2014/12/13/a-quick-markdown-syntax-error-detection-for-writing-mathjax-equations-in-octopress-posts-2/

*[RSS]: Rich Site Summary
