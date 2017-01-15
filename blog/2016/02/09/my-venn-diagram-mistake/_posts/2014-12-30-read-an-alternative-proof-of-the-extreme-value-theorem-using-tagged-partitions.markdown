---
layout: post
title: "Read an Alternative Proof of the Extreme Value Theorem Using Tagged Partitions"
date: 2014-12-30 23:30:22 +0800
comments: true
categories: math
---

Background
---

Last Saturday, I read an article on using gauges defined on a close
and bounded interval $I$ (i.e. strictly postive functions over $I$)
and tagged partitions to prove the Extreme Value Theorem.[^src]
Though the full text is *not* free, one can preview the first page, on
which an attractive introduction is found.

Motivation
---

In ordinary proofs of the Extreme Value Theorem, one makes use of the
fact that continuous functions defined on $I$ are bounded, which is
proved by the Bolzano–Weierstrass Theorem, which has to be proved by
either the Monotone Convergence Theorem or the Nested Interval
Theorem.  A student who prepares for an exam in math analysis will
revise the lengthy proofs of these theorems.

However, the alternative proof of the Extreme Value Theorem is just a
proof by contradiction making use of basic properties of $\delta$-fine
partitions and the fact that continuous functions defined on $I$ are
bounded, which is proved by basic properties of $\delta$-fine
partitions only.

<!-- more -->

Once one accepts that for any gauge $\delta$ on $I$, $I$ is
$\delta$-fine, one can start reading the proof.

Problem
---

In the author's proof, it's said that if $f$ is a continuous function
defined on $I$, <span class="myeqn" markdown="0">$K:=\sup\{f(x) \mid
x\in I\}$</span>, and $\forall t\in I, \exists a(t),\delta(t)>0$ such
that $|x-t|<\delta(t)$ and $x\in I$, then $f(x)<K-a(t)$.

Spending too much time on
[boosting the PageSpeed of the homepage of this blog][pp_speed], I
forgot a result obtained from an elementary exercise on continuous
functions, and was stuck at this point.

I tried writing inequalities for two hours, but I got *nothing*.

Solution
---

I looked at the graph, and solved the problem quickly by setting
$\epsilon:=K-f(t)-a(t)$. If $|x-t|<\delta(t)$ and $x\in I$,

<div class="myeqn">
\[
\begin{aligned}
f(x)-f(t)\le|f(x)-f(t)|<&\epsilon=K-f(t)-a(t)\\
f(x)<&K-a(t)
\end{aligned}
\]
</div>

---
[^src]:
    Gordon, R. A. (1998). The use of tagged partitions in elementary
    real analysis. *American Mathematical Monthly*, 107--117.

[pp_speed]: /blog/2014/12/29/octopress-pagespeed-jquery-and-fancybox/
