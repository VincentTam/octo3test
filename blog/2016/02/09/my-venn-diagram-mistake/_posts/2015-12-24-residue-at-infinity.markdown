---
layout: post
title: "Residue at Infinity"
date: 2015-12-24 12:25:42 +0800
comments: true
categories: math
---

In the derivation of the formula

<div class="myeqn">
\[
  \Res_{z=\infty} f(z) = -\Res_{z=0} \left [ \frac{1}{z^2} f \left (
  \frac{1}{z} \right) \right ],
\]
</div>

I *didn't* know why the factor $\dfrac{1}{z^2}$ was needed.  Luckily,
googling the title of this post, I quickly found two posts on
Mathematics Stack Exchange about the intuition behind.[^src]

In fact, this factor appears when we make the substitution $z \mapsto
\dfrac{1}{z}$.  For any simple closed contour $C$ and a complex-valued
function $f$ which is analytic at the interior points of the region
bounded by $C$ except for finitely many points,

<div class="myeqn">
\[
  \int_C f(z) \ud z = -\int_C \frac{1}{z^2} f \left ( \frac{1}{z}
  \right) \ud z.
\]
</div>

---
[^src]:
    - [The residue at $\infty$][571510]
    - [Intuition behind the residue at infinity][629495]

[571510]: http://math.stackexchange.com/q/571510
[629495]: http://math.stackexchange.com/q/629495
