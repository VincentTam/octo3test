---
layout: post
title: "Revised Absolute Convergence"
date: 2015-09-05 22:05:03 +0800
comments: true
categories: math
---

I am *not* so satisfied with this the following
*definition*.[^churchill]

<div class="myeqn">
\[
  e^{i\theta} := \cos \theta + i \sin \theta
\]
</div>

I remembered the proof for convergence of

<div class="myeqn">
\[
  e^{x} := \sum_{i = 0}^{\infty} \frac{x^i}{i!}
\]
</div>

for real numbers.  I *didn't* know if this can be extended to complex
numbers.  Therefore, I thought about the absolute convergence of
complex-valued series.  It's expected that many proofs are similar to
their real counterparts, such as the result that absolute convergence
implies convergence.  In real numbers, this result makes use of the
Triangle Inequalty and Cauchy Convergence Criterion, and the key step
is

<div class="myeqn">
\[
  \abslr{\sum_{k = m + 1}^{n} a_k} \le \sum_{k = m + 1}^{n} \abs{a_k}.
\]
</div>

Since the proof of the above statement for real numbers requires
Bolzano--Weierstrass Theorem, which is about the sequential
compactness of sequences of real numbers, I was *stuck* at this point.

<span class="myeqn" markdown="0">
Finally, I read another book, which said that if $(z_n)$ is a Cauchy
sequence, and $\forall n \in \N$, $u_n := \Re(z_n)$ and $v_n :=
\Im(z_n)$, $\forall \varepsilon > 0, \exists N \in \N$ such that
$\forall m,n \le N$,
</span>

<div class="myeqn">
\begin{align*}
  \abs{u_n - u_m} &\le \abs{z_n - z_m} < \varepsilon, \\
  \abs{v_n - v_m} &\le \abs{z_n - z_m} < \varepsilon.
\end{align*}
</div>

Then $(u_n)$ and $(v_n)$ are real-valued Cauchy sequences, which are
convergent.[^ahlfors]  This guarantees the convergence of $(z_n)$ in
the complex plane.

To establish the absolute convergence of $\exp z$, we need the root
test.  The proofs can be borrowed from their counterparts in the set
of real numbers.  Ahlfors leaves the proof for <span class="myeqn"
markdown="0">$\sqrt[n]{n!} \to \infty$</span> to readers.  I find
[Dan's proof][mathse514397] pretty easy.

---
[^churchill]:
    Brown, J. W., Churchill, R. V., & Lapidus, M. (1996). *Complex
    variables and applications (Vol. 7)*. (pp. 17). New York:
    McGraw-Hill.

[^ahlfors]:
    Ahlfors, L. (1979). *Complex analysis*. (pp. 34). Auckland:
    McGraw-Hill.

[mathse514397]: http://math.stackexchange.com/a/514397
