---
layout: post
title: "Powers of Roots of Irreducible Polynomials in a Field with Characteristic $p$"
date: 2015-03-15 13:53:12 +0800
comments: true
categories: math
---

Suppose we have a field $F$ of characteristic $p$ and a degree $n$
irreducible polynomial $f \in F\[x\]$.

<div class="myeqn">
\[
f(x) = \sum\limits_{i = 0}^n a_i x^i \text{, where } a_i \in F
\,\forall i = 0,1,\dots,n.
\]
</div>

One can find a root $\alpha \notin F$ of $f$ in a field extension $E$
of $F$ by Kronecker's Theorem.  Then $f(\alpha) = 0$. **How about the
other $n - 1$ roots of $f$?**

Half a month ago, I *couldn't* find out the answer directly --- I used
the fact that all finite fields of order $p^n$ were isomorphic to
$\F\_{p^n}$, which was the collection of roots of $x^{p^n} - x$ in
$\Z\_p$ in $\overline{\Z_p}$.  However, this makes use of *too many*
abstract facts.

Yesterday night, by computing the $p$-th power of an element $\beta$
in $E$, I finally know the direct way of finding the other $n - 1$
roots of $f$ in $E$.  Let $b\_0,\dots,b\_n \in F$ such that

<div class="myeqn">
\[
\beta = \sum\limits_{i = 0}^{n - 1} b_i \alpha^i.
\]
</div>

Compute the $p$-th power of $\beta$.

<div class="myeqn">
\[
\beta^p = \left(\sum\limits_{i = 0}^{n - 1} b_i \alpha^i \right)^p =
\sum\limits_{k_0,\dots,k_{n
- 1}} \frac{p!}{\prod\limits_{i = 0}^{n - 1} k_i!} \prod\limits_{i =
- 0}^{n - 1} (b_i
  \alpha^i)^{k_i},
\]
</div>

<div class="myeqn">
\begin{equation}
\text{ where } 0 \le k_i \le p \,\forall i = 0,\dots,n \text{ and }
\sum\limits_{i = 0}^{n - 1} k_i = p. \label{eq:cond}
\end{equation}
</div>

Case 1: $\exists k\_j = p$, then $k\_i = 0 \,\forall i \ne j$.

<div class="myeqn">
\[
\frac{p!}{\prod\limits_{i = 0}^{n - 1} k_i!} \prod\limits_{i = 0}^{n -
1} (b_i \alpha^i)^{k_i} = 1 \cdot (b_j \alpha^j)^{k_j} = b_j
\alpha^{pj}
\]
</div>

Note that one can prove that $\forall b \in F, b^p = b$ by induction.

Case 2: $k\_i \ne p \,\forall i = 0,\dots,n$.  Since $p$ is a prime,

<div class="myeqn">
\[
\frac{p!}{\prod\limits_{i = 0}^{n - 1} k_i!} = 0 \text{ in } \Z_p
\]
</div>

Since one only has $n$ choices of $k\_0,\dots,k\_{n - 1}$ which
satisfy \eqref{eq:cond}, we conclude that

<div class="myeqn">
\begin{equation}
\beta^p = \left(\sum\limits_{i = 0}^{n - 1} b_i \alpha^i \right)^p =
\sum\limits_{i = 0}^{n - 1} b_i^p \alpha^{pi} \label{eq:powp}
\end{equation}
</div>

Since $\alpha$ is a root of $f$ in $E$, $(f(\alpha))^p = 0$.
Replacing "$n - 1$" by "$n$" in the derivation of \eqref{eq:powp}, one
gets

<div class="myeqn">
\[
(f(\alpha))^p = \left(\sum\limits_{i = 0}^n a_i \alpha^i \right)^p =
\sum\limits_{i = 0}^n a_i \alpha^{pi} = f(\alpha^p) = 0
\]
</div>

Therefore, *without* learning induction, one can sense that
$f(\alpha^{p^m}) = 0 \,\forall m \in \N$.  That's not the end.  Since
the degree of $f$ is $n$, we expect to that the number of roots of $f$
is *finite*.  Since we expect $n$ roots of $f$, we hope that
$\alpha^{p^m}$ will repeat itself for sufficiently large $m$.  This
hope comes true due to Lagrange's Theorem --- $\|F^\times\| = p^n -
1$, so $\alpha^{p^n - 1} = 1$.

<del>
Unluckily, I've just found out that $f$ *has* some root $\alpha'$
which *doesn't* hit either one of
$\alpha,\alpha^p,\alpha^{p^2},\dots,\alpha^{p^{n - 1}}$.  For example,
if one sets $f(x) := x^{p^2} - x \in \Z\_p\[x\]$ and let $\alpha$ be a
root of $f$ in $\overline{\Z\_p}$, then it's trivial that
$\alpha^{p^2} = \alpha$, thus the collection of the $p^m$-th power of
$\alpha$ is just $\left\\{ \alpha,\alpha^p \right\\}$.  (i.e.
$\left\\{ \alpha^{p^m} \mid m \in \N \right\\} = \left\\{
\alpha,\alpha^p \right\\}$)  Nevertheless, $f$ should have $p^2$ roots
in $\overline{\Z\_p}$.
</del>

Hence, I *didn't* succeed in answering **the above bolded question**,
but I still learn something about the roots of an irreducible
polynomial in an algebraic extension.

---
(Edited on MAR 28, 2015)

With the results from perfect fields, we *immediately* know that $f$
has $n$ different roots.
