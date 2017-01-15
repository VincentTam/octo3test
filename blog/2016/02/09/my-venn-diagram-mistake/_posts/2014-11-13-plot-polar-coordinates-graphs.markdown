---
layout: post
title: "Plot Polar Coordinates Graphs"
date: 2014-11-13 23:23:04 +0800
comments: true
categories: [LaTeX, template]
---

Googling "tikz tutorial", one can find several useful PDF documents
which are easy to follow, such as the first two results.

1. [*PGF/TikZ - Graphics for* $\rm \LaTeX$ *---A tutorial*][tut1] by
Meik Hellmund
2. [*A very minimal introduction to TikZ*][tut2] by Jacques Crémer

The second PDF document covers plotting graphs in rectangular
coordinates.  **How about polar coordinates?**

It's easy to find a solution online, but understanding the code and
adapting them according to your needs are *much* harder.  One has to
make use of "cs", which stands for "coordinate system".  If one is too
lazy to read more webpages, then one may use the code below.

When I drew figures with [Ti*k*Z] a recent post on limits of composite
functions on $\R^n$, I found a way to construct random region with
Ti*k*Z in a $\rm \TeX$--$\rm \LaTeX$ Stack Exchange
question.[^rand_region]  This inspired me to come up with the
following graph.

Output
---

{% img center /images/posts/TikZPolar/graph.svg 750 'fig1' ['polar plot'] %}

Source code
---

{% render_code TikZPolar.tex The $\rm \LaTeX$ source code for the above graph %}

- I got the idea of for loop in TikZ from
    [*TikZ and PGF Manual*][man].
- I learnt the syntax for plotting functions from the PDF in item (2).

---
[^rand_region]:
    Refer to [*TikZ: Arbitrary shapes and filling?*][rand_region] for
    details.

[tut1]: http://www.math.uni-leipzig.de/~hellmund/LaTeX/pgf-tut.pdf
[tut2]: http://cremeronline.com/LaTeX/minimaltikz.pdf
[Ti*k*Z]: http://www.texample.net/tikz/
[rand_region]: http://tex.stackexchange.com/a/60707
[man]: http://stuff.mit.edu/afs/athena/contrib/tex-contrib/beamer/pgf-1.01/doc/generic/pgf/version-for-tex4ht/en/pgfmanualse15.html
