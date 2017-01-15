---
layout: post
title: "Understood Euler Product Formula"
date: 2015-04-12 08:19:36 +0800
comments: true
categories: math
---

Before I understood this formula
---

When I was a high school student, it's *hard* for me to imagine a
product whose index looped through all prime numbers because primes
*don't* appear in a regular way: between 1 and 100, there're 25
primes, but between 900 and 1000, there're 14.

Even though it's easier to imagine the infinite sum whose $n$-th term
is $n^{-s}$, *without* learning the $p$-Test and the Comparison Test
for the convergence of infinite sums, I *couldn't* understand why the
infinite sum in the following equality exists.

<div class="myeqn">
\[
\sum_{k = 1}^{\infty} \frac{1}{k^s} = \prod_{p \text{ prime}}
\frac{1}{1 - p^{-s}}
\]
</div>

A heuristic way to understand it
---

1. Note that the geometric series converge (absolutely).
2. Borrow the proofs about the Comparison Test and the $p$-Test to
convince yourself that the infinite sum on the LHS of the formula is
*well-defined*.
3. Know something about convergent infinite products.[^wiki]
4. Convince yourself that the infinite product on the RHS
*exists*.[^inf_prod_exists]
5. Recall the Fundamental Theorem of Arithmetic.

I think that the last item is the *trickiest* step.  Writing the
following lines, I understood this equation.

<div class="myeqn">
\begin{align}
& 1^{-s} + 2^{-s} + 3^{-s} + \cdots \\
=& (1^{-s} + 3^{-s} + 5^{-s} + \cdots) (1^{-s} + 2^{-s} + 2^{-2s} +
\cdots) \label{step1} \\
=& (1^{-s} + 3^{-s} + 5^{-s} + \cdots) \cdot \frac{1}{1 - 2^{-s}}
\label{step2} \\
=& (1^{-s} + 5^{-s} + 7^{-s} + \cdots) (1^{-s} + 3^{-s} + 3^{-2s} +
\cdots) \cdot \frac{1}{1 - 2^{-s}} \label{step3} \\
=& (1^{-s} + 5^{-s} + 7^{-s} + \cdots) \cdot \frac{1}{1 - 3^{-s}}
\cdot \frac{1}{1 - 2^{-s}} \label{step4}
\end{align}
</div>

Steps \eqref{step1} (resp. \eqref{step3}) holds because for each
$k^{-s}$ in the leftmost bracket, powers of 2 (resp. 3) can be taken
out from $k$.  In steps \eqref{step2} and \eqref{step4}, the formula
for the sum of geometric series is applied.

Refining the above thoughts
---

I'll end this post by wrapping up the above ideas by summation and
product signs.

<div class="myeqn">
\[
\begin{aligned}
& \sum_{k = 1}^{\infty} \frac{1}{k^s} \\
=& \sum_{k \in \N} \frac{1}{k^s} \\
=& \prod_{p \text{ prime}} \sum_{k \in \N} \frac{1}{p^{s k}} \\
=& \prod_{p \text{ prime}} \sum_{k = 1}^{\infty}\frac{1}{p^{s k}}\\
=& \prod_{p \text{ prime}} \frac{1}{1 - p^{-s}}
\end{aligned}
\]
</div>

---
[^wiki]:
    One may refer to the convergence criteria of infinite products on
    [Wikipedia][wiki]

[^inf_prod_exists]:
    There's more than one way to do it.  When I tried to do this for
    the first time, I used the Mean Value Theorem on logarithms to
    establish a standard result.

    <div class="myeqn">
    \[
    \frac{x}{1 + x} < \log(1 + x) < x \quad \forall\, x > 0
    \]
    </div>

[wiki]: http://en.wikipedia.org/wiki/Infinite_product#Convergence_criteria
