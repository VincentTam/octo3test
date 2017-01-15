---
layout: post
title: "Simplify a Determinant Identity"
date: 2016-12-28 20:40:58 +0100
comments: true
categories: [math, MetaSE]
---

Background
---

I saw [a question about determinants][mathse290189].

> Suppose that $A$ and $B$ are singular and nonsingular matrices
  respectively.  Simplify $\det((A+B)^2−(A−B)^2)$.

Problem
---

A *wrong* solution with a vote of -2 is chosen by Daniel.  Why can
this happen?

Possible explanation
---

That's because he's correctly done the expansion until $\det(2AB +
2BA)$.

Raison d'être of this post
---

Having spent time on typing a comment, I worry that it will
automatically disappear in sooner or later if the accepted answer is
deleted.  Therefore, I back it up here.

> Consider $$A = \begin{bmatrix} 1&2&3\\ 0&0&0\\ 5&7&9 \end{bmatrix} ,
B = \begin{bmatrix} 3&2&3\\ 2&2&1\\ 3&1&3 \end{bmatrix}.$$
$$\begin{align*}
\det(AB+BA) &= \det\left(
\begin{bmatrix} 16&9&14 \\ 0&0&0 \\ 56&33&49 \end{bmatrix}
+\begin{bmatrix} 18&27&36 \\ 7&11&15 \\ 18&27&36 \end{bmatrix}
\right) \\
&=\det\left(
\begin{bmatrix} 34&36&50\\ 7&11&15\\ 74&60&85 \end{bmatrix}
\right)= 30 \ne 0.
\end{align*}$$
However, if $A = 0$ and $B = I_3$, then the answer is clearly zero.
As a result, we *can't* decude further from $\det(2(AB + BA))$.

Lessons learnt
---

The generation of a random matrix/array of integers using
`randi([imin, imax], m, n)`.  For more details, you may read
[GNU Octave's manual][man].

[mathse290189]: http://math.stackexchange.com/a/2074997/290189
[man]: https://www.gnu.org/software/octave/doc/v4.0.1/Special-Utility-Matrices.html#XREFrandi
