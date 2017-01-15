---
layout: post
title: "Power Means with Infinite Exponents"
date: 2014-11-14 00:30:15 +0800
comments: true
categories: math
---

Half a month ago, I *didn't* know how to find <span class="myeqn"
markdown="0">$\lim\limits_{n \to \infty} \sqrt[n]{a^n+b^n}$</span>.
With the help from others, I could show that the answer was <span
class="myeqn" markdown="0">$\max\left\{ a,b \right\}$</span>.  This
inspired me to solve a question which had been in my mind since I was
F.3.

<span class="myeqn" markdown="0">
Suppose that $M_n (a_1,\dots,a_k) :=
\sqrt[n]{\frac1k \sum\limits_{i=1}^{k} a_i^n} \quad\forall\,n \in
\N$, and $a_i > 0\quad\forall\,i \in \{1, \dots,k\}$.  
Show that
$\lim\limits_{n \to \infty} M_n (a_1,\dots,a_k) = \max\limits_{i \in
\{ 1,\dots,k\}} a_i$ and $\lim\limits_{n \to -\infty} M_n =
\min\limits_{i \in \{1,\dots,k\}} a_i$.
</span>

*Proof*:

<span class="myeqn" markdown="0">
I'll use the facts that $\lim\limits_{n \to \infty} b^{1/n} =
1 \quad\forall\,b>0$.  (It can be proved by dividing $b$ into $0 < b <
1$ and $b > 1$.  For $b > 1$, let $b^{1/n} = 1 + \delta_n$ for
some $\delta_n > 0$.  It's a good exercise on the definition of
limits, the binomial expansion and elementary properties of
inequalities.)
</span>

<span class="myeqn" markdown="0">
Let $M := \max\limits_{i \in \{1,\dots,k\}} a_i$.  Note that
</span>

<div class="myeqn">
\[
\frac{M}{k^{1/n}} = \sqrt[n]{\frac{M^n}{k}} \le
\sqrt[n]{\frac1k \sum\limits_{i=1}^{k} a_i^n} \le
\sqrt[n]{\frac{kM^n}{k}} = M.
\]
</div>

Therefore, taking limit as $n \to \infty$ and applying the Squeeze
Theorem, one has

<div class="myeqn">
\[
\lim_{n \to \infty} M_n (a_1,\dots,a_k) = M = \max\limits_{i \in \{
1,\dots,k\}} a_i.
\]
</div>

I wrote similar arguments for the case $n \to -\infty$, but after I
read Wikipedia, I've learnt a quicker way to finish the question.

<span class="myeqn" markdown="0">
Replace $a_i$'s with $1/a_i$'s.  Then
</span>

<div class="myeqn">
\[
\begin{aligned}
\lim_{n \to \infty} \sqrt[n]{\frac1k \sum\limits_{i=1}^{k} \left(
\frac{1}{a_i} \right)^n} &= \max_{i \in \{1,\ldots,k\}}
\frac{1}{a_i}\\
\lim_{n \to \infty} \sqrt[n]{\frac1k \sum\limits_{i=1}^{k} a_i^{-n}}
&= \frac{1}{\min\limits_{i \in \{1,\ldots,k\}} a_i} \\
\lim_{n \to \infty} \left( \frac1k \sum\limits_{i=1}^{k}
a_i^{-n}\right)^{-1/n} &= \min\limits_{i \in \{1,\ldots,k\}} a_i
\end{aligned}
\]
</div>

<span class="myeqn" markdown="0">
Hence, $\lim\limits_{n \to -\infty} M_n (a_1,\dots,a_k) =
\lim\limits_{n \to -\infty} \sqrt[n]{\frac1k \sum\limits_{i=1}^{k}
a_i^n} = \min\limits_{i \in \{1,\ldots,k\}} a_i$.
</span>
