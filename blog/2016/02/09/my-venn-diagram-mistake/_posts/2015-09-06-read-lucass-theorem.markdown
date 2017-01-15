---
layout: post
title: "Read Lucas's Theorem"
date: 2015-09-06 18:31:57 +0800
comments: true
categories: math
---

Suppose that $P(z)$ is a polynomial in the complex plane.  The theorem
says that *all* zeros of $P'(z)$ are inside a half plane in which all
zeros of $P(z)$ lie.

Ahlfors says that <q>a directed line $z = a + bt$ determines a right
half plane consisting of all points with $\Im(z - a) / b < 0$...</q>
(see Chap. 1, Sec. 2.3)[^ahlfors]  After drawing the figure for the 
drawing the figure for $z = -(1 + i)t$, I realized that I should pay
attention to the word "directed" and interpret "right" as "to the
right of the vector $b$ drawn on the line $z = a + bt$".

The following equation puzzled me for a while.  (see Chap. 2, Sec.
1.3)[^ibid]

<div class="myeqn">
\begin{equation}
  \Im\left( \frac{z - \alpha_k}{b} \right) = \Im\left( \frac{z - a}{b}
  \right) - \Im\left( \frac{\alpha_k - a}{b} \right) > 0
  \label{stuck}
\end{equation}
</div>

I tried sketching a diagram to understand what's going on, but this
*isn't* so helpful.  In fact, the above equation starts from
<span class="myeqn" markdown="0">$z - \alpha_k = (z - a) - (\alpha_k -
a)$</span>.


<span class="myeqn" markdown="0">
The whole proof makes use of a half plane $H := \{z \in \C \mid \Im[(z
- a) / b] < 0\}$ in which all zeros $\alpha_1,\ldots,\alpha_n$ of
$P(z)$ lie, and it follows the logic of proof by contradiction: each
$\alpha_k$ is assumed to be in $H$ while $z$ isn't.  It ends with the
conclusion that $\Im(b P'(z) / P(z)) < 0$ by \eqref{stuck} and the
equation
</span>

<div class="myeqn">
\[
  \frac{P'(z)}{P(z)} = \sum_{k = 1}^n \Im\left( \frac{1}{z - \alpha_k}
  \right).
\]
</div>

Finally, I saw a corollary of this theorem: all zeros of $P'(z)$ are
inside the smallest convex polygon in which all zeros of $P(z)$ lie.

---
[^ahlfors]:
    Ahlfors, L. (1979). *Complex analysis*. Auckland: McGraw-Hill.

[^ibid]: *ibid*.
