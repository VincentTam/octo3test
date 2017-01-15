---
layout: post
title: "Composition of Limits"
date: 2014-11-08 21:27:29 +0800
comments: true
categories: math
---

Problem
---

Let $\\mathcal\{U}$ and $\\mathcal\{V}$ be open subsets of $\\R^n$ and
$\\R^m$ respectively, $f:\\mathcal\{V} \\to \\R^k$ and
$g:\\mathcal\{U} \\to \\R^m$ be functions such that $g(\\mathcal\{U})
\\subseteq \\mathcal\{V}$, and $\\vect\{x}\_0 \\in \\mathcal\{U},
\\vect\{y}\_0 \\in \\mathcal\{V}$, and $\\vect\{z}\_0 \\in \\R^k$ be
points such that $\\lim\\limits\_\{\\vect\{x} \\to \\vect\{x}\_0}
g(\\vect\{x}) = \\vect\{y}\_0$ and $ \\lim\\limits\_\{\\vect\{y} \\to
\\vect\{y}\_0} f(\\vect\{y}) = \\vect\{z}\_0$.

**Is it possible that** $\\lim\\limits\_\{\\vect\{x} \\to
\\vect\{x}\_0} f(g(\\vect\{x})) \\ne \\vect\{z}\_0$**?**

<!-- more -->

\"Intuition\"
---

1.  Since $\\lim\\limits\_\{\\vect\{x} \\to \\vect\{x}\_0}
    g(\\vect\{x}) = \\vect\{y}\_0$, as $\\vect\{x}$ is \"sufficiently
    near to $\\vect\{x}\_0$\", $\\vect\{y} = g(\\vect\{x})$ is \"very
    close\" to $\\vect\{y}\_0$.
2.  Since $\\lim\\limits\_\{\\vect\{y} \\to \\vect\{y}\_0}
    f(\\vect\{y}) = \\vect\{z}\_0$, as $\\vect\{y}$ is \"sufficiently
    near to $\\vect\{y}\_0$\", $\\vect\{z} = f(\\vect\{y})$ is \"very
    close\" to $\\vect\{z}\_0$.

Combining (1) and (2), as $\\vect\{x}$ is \"sufficiently near to
$\\vect\{x}\_0$\", $\\vect\{z} = f(\\vect\{y})$ is \"very close\" to
$\\vect\{z}\_0$, thus one expects $\\lim\\limits\_\{\\vect\{x}
\\to \\vect\{x}\_0} f(g(\\vect\{x})) = \\vect\{z}\_0$.

Discussion
---

It *isn\'t* hard to copy the standard $\\epsilon$-$\\delta$ arguments
from elementary math analysis and calculus books. When one looks at
the \"for all\" and \"there exists\" for the *first* few times, the
logic seems complicated. After some time, one gets used to it, recites
it and simply *repeats* it. However, those standard arguments usually
consist of something like \"if $0 < \\norm\{\\vect\{x} -
\\vect\{x}\_0} < \\delta$, then $\\norm\{g(\\vect\{x}) -
\\vect\{y}\_0} < \\epsilon$\".  For a long sentence, it\'s possible
that one overlooks the conditions and gets stuck.

Use another notations
---

Note: see [*Definition of Content 0 Sets*][pp] for the definition of
open ball $\\mathcal\{B}\_r(\\vect\{x}\_0)$.

Let $\\epsilon > 0$.

$\\because \\lim\\limits\_\{\\vect\{y} \\to \\vect\{y}\_0}
f(\\vect\{y}) = \\vect\{z}\_0$

(a) $\\therefore \\exists\\,\\delta\' > 0 \\text\{ such that }
f(\\mathcal\{B}\_\{\\delta\'}
(\\vect\{y}\_0)\\setminus\\left\\\{\\vect\{y}\_0\\right\\}) \\subseteq
\\mathcal\{B}\_\\epsilon (\\vect\{z}\_0)$

{% img center /images/posts/LimitComposition/limF.svg 750 'fig1' ['fig1'] %}
[Source](/downloads/code/LimitComposition/limF.tex)

Use another given limit.

$\\because \\lim\\limits\_\{\\vect\{x} \\to \\vect\{x}\_0}
g(\\vect\{x}) = \\vect\{y}\_0$

(b) $\\therefore \\exists\\,\\delta > 0 \\text\{ such that }
g(\\mathcal\{B}\_\\delta
(\\vect\{x}\_0)\\setminus\\left\\\{\\vect\{x}\_0\\right\\}) \\subseteq
\\mathcal\{B}\_\{\\delta\'} (\\vect\{y}\_0)$

{% img center /images/posts/LimitComposition/limG.svg 750 'fig2' ['fig2'] %}
[Source](/downloads/code/LimitComposition/limG.tex)

Since this question deals with $f \\circ g$, we apply $f$ to (b).

$f(g(\\mathcal\{B}\_\\delta
(\\vect\{x}\_0)\\setminus\\left\\\{\\vect\{x}\_0\\right\\}))
\\subseteq f(\\mathcal\{B}\_\{\\delta\'} (\\vect\{y}\_0))
\\color\{red}\{\\subseteq \\mathcal\{B}\_\\epsilon (\\vect\{z}\_0)?}$

To answer the above <span class="grp1">question</span>, we look at
(a).

$f(\\mathcal\{B}\_\{\\delta\'}
(\\vect\{y}\_0)\\setminus\\left\\\{\\vect\{y}\_0\\right\\}) \\subseteq
\\mathcal\{B}\_\\epsilon (\\vect\{z}\_0)$

Thus, the key of this problem is whether the point $\\vect\{y}\_0$ is
in $\\mathcal\{B}\_\\epsilon (\\vect\{z}\_0)$, and whehter such
$\\vect\{y}\_0$ *exists*.

Since we want $\\lim\\limits\_\{\\vect\{x} \\to \\vect\{x}\_0}
f(g(\\vect\{x})) \\ne \\vect\{z}\_0$, we want
$f(g(\\mathcal\{B}\_\\delta
(\\vect\{x}\_0)\\setminus\\left\\\{\\vect\{x}\_0\\right\\}))
\\nsubseteq \\mathcal\{B}\_\\epsilon (\\vect\{z}\_0)$, i.e.
$\\color\{blue}\{f(\\vect\{y}\_0) \\notin \\mathcal\{B}\_\\epsilon
(\\vect\{z}\_0)}$.

Moreover, to ensure the *existence* of such points, one needs
$\\color\{blue}\{\\forall\\,\\delta > 0, g^\{-1}
(\\left\\\{\\vect\{y}\_0\\right\\}) \\cap \\mathcal\{B}\_\\delta
(\\vect\{x}\_0) \\ne \\varnothing}$.

{% img center /images/posts/LimitComposition/y0.svg 750 'fig3' ['fig3'] %}
[Source](/downloads/code/LimitComposition/y0.tex)

Note: I use a <span class="grp2">blue sector</span> centred at
$\\vect\{x}\_0$ to represent the <span class="grp2">second additional
condition</span> because

1. no matter how small the radius $\\delta$ of $\\mathcal\{B}\_\\delta
(\\vect\{x}\_0)$ is, you *can't* get rid of the <span
class="grp2">blue region</span>.
2. I *don't* know how to draw a random region which "touches" but
excludes $\\vect\{x}\_0$.

Conclusion
---

With the above <span class="grp2">two additional conditions</span>,
one has $\\lim\\limits\_\{\\vect\{x} \\to \\vect\{x}\_0}
f(g(\\vect\{x})) \\ne \\vect\{z}\_0$.

Some off-topic remarks
---

While drawing these three figures with [Ti*k*Z], I found out the
difference between a node and a coordinate.  For the former, it
requires some node text, though one may use `{}` for that.  For the
later, one *can't* add `{labels}` like the former.  Defining the point
(-6,0) as a node with labelling text, I *can't* draw a sector
"touching" but excluding (-6,0).  Therefore, I have to define it as a
coordinate.

[pp]: /blog/2014/06/18/definition-of-content-0-sets/#some-basic-definitions "Definition of Content 0 Sets"
[Ti*k*Z]: http://www.texample.net/tikz/
