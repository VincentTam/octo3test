---
layout: post
title: "Approximation of a Bounded Simple Function by a Continuous Function"
date: 2016-03-21 10:12:06 +0800
comments: true
categories: math
---

Problem
---

Today, I was puzzled by a *remark* of a proof that a simple function
$f:\[a,b\] \to \R$ is equal to a step function $\psi:\[a,b\] \to \R$
(resp. a continuous function $g:\[a,b\] \to \R$) except on a set of
arbitrarily small measure $\epsilon$.

> If $m \le f(x) \le M \;\forall\, x\in \[a,b\]$, then $\bar{\psi}
> \triangleq (m \vee \psi) \wedge M$ and $\bar{g} \triangleq (m \vee
> g) \wedge M$ are step function and continuous function which satisfy
> $m \le \bar{\psi}$ and $m \le \bar{g} \le M$ so that $f =
> \bar{\psi}$ and $f = \bar{g}$ except on a set of measure less than
> $\epsilon$ respectively.

I can verify the above remark, but I wonder *why* we need to define
$\bar{\psi}$ and $\bar{g}$ so as to guarantee that they are bounded
below and above by $m$ and $M$ respectively.

<!-- more -->

Solution
---

Write

<div class="myeqn">
\[
  f = \sum_{j = 1}^m a_j \chi_{E_j \cap [a,b]},
\]
</div>

<span class="myeqn" markdown="0">
where $E_j$ is measurable for each $j = 1,\dots,m$, so that we can
consider $E_j$.  Note that the $E_j$'s are not necessarily disjoint,
but who cares?  By drawing a simple figure of $E_j \cap [a,b]$ and
$U_j$, which is a finite disjoint union of open intervals obtained by
applying Littlewood's First Principle, I realised that I should try
constructing a simple function $f$ while focusing on $(E_j \cap [a,b])
\triangle U_j$.
</span>

In the proof, to deal with the summation sign, we use a union sign.

<div class="myeqn">
\[
  f = \psi \triangleq \sum_{j = 1}^m a_j \chi_{U_j} \text{ except on }
  \bigcup_{j = 1}^m [(E_j \cap [a,b]) \triangle U_j]
\]
</div>

If we're given that $m \le f \le M$, to find <span class="myeqn"
markdown="0">$x \in \bigcup\limits_{j = 1}^m [(E_j \cap [a,b])
\triangle U_j]$</span> so that $\psi(x) < m$ or $\psi(x) > M$, we need
to have *overlapping* of <span class="myeqn" markdown="0">$E_i \cap
[a,b]$ and $E_j \cap [a,b]$, so that $\chi_{(E_i \cap [a,b]) \triangle
U_i} + \chi_{(E_j \cap [a,b]) \triangle U_j}$ will give us something
interesting.</span>

To see *necessity* of the introduction of $\bar{\psi}$, consider <span
class="myeqn" markdown="0">$f \triangleq \chi_{(0,1)} + \chi_{(1,2)}$
and $\psi \triangleq \chi_{[0,1]} + \chi_{[1,2]}$.  Then $f = \psi$
except on $\{0,1,2\}$ and $0 \le f \le 1$, but $\psi(1) = 2
> 1$.</span>  One can easily transform a step function into a
piecewise linear (i.e. continuous) function $g$.

Remarks
---

It's very difficult for a function to be continuous.  The result
provides a step for proving [Lusin's Theorem][lusin], which says that
a measurable function can be approximated by a sequence of continuous
function.  <q
cite="http://evchk.wikia.com/wiki/Wow!_Old_news_is_so_exciting!">Old
news is so exciting!</q>  (See [this encyclopedia page][old-news] for
explanation.)

[lusin]: https://en.wikipedia.org/wiki/Lusin's_theorem
[old-news]: http://evchk.wikia.com/wiki/Wow!_Old_news_is_so_exciting!
