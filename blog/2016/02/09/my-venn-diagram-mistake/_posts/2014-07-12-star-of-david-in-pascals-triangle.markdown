---
layout: post
title: "Star of David in Pascal's Triangle"
date: 2014-07-12 21:44:37 +0800
comments: true
categories: [LaTeX, math]
---

{% img right /images/posts/DavidStar/Nodes1.svg 100 %}

Yesterday, I learnt drawing simple TikZ diagrams.

In my opinion, defining nodes while connecting them will *not* look
good.

    \path[draw] (0, 0) node {A} -- (1,0) -- (1,1) node {B};

I define the nodes before connecting them, and the result is what I
desire.

{% img /images/posts/DavidStar/Nodes2.svg 100 %}
<!-- The image overlapped with the code block. -->

{% codeblock Drawing basic TikZ diagrams lang:tex http://www.math.uni-leipzig.de/~hellmund/LaTeX/pgf-tut.pdf#page=12 %}
\node (A) at (0,0) {A};
\node (B) at (1,1) {B};
\draw (A) -- (1,0) -- (B);
{% endcodeblock %}

{% img center /images/posts/DavidStar/DavidStar.svg 600 %}

I *overlooked* the meaning of **clipping** in Meik Hellmund's short
TikZ tutorial.[^1]  I constructed the diagram using the `edge`
command.

{% render_code DavidStar.tex %}

Realising that $\displaystyle {n \choose k} = \frac{n!}{r! (n - r)!}$,
one can easily see that

\\[
\binom{n - 1}{k - 1} \binom{n}{k + 1} \binom{n + 1}{k} =
  \binom{n - 1}{k} \binom{n}{k - 1} \binom{n + 1}{k + 1}.
\\]

---
[^1]:
    See [p.12][tikztut12] of the tutorial.

    > "It is often better to define named nodes first and connect them
    > later, since then the paths are clipped around the notes..."

[tikztut12]: http://www.math.uni-leipzig.de/~hellmund/LaTeX/pgf-tut.pdf#page=12
