---
layout: post
title: "Found an Upper Bound for the Modulus of Legendre Polynomials"
date: 2015-09-03 16:35:01 +0800
comments: true
categories: math
---

Lemma
---

Suppose that $w: \[a,b\] \to \C$ is piecewise continuous, then we have

<div class="myeqn">
\begin{equation}
\abslr{\int_{a}^{b} w(t) \ud t} \le \int_{a}^{b} \abs{w(t)} \ud t.
\label{lemma}
\end{equation}
</div>

The trick is to treat the integral on the L.H.S. of \eqref{lemma} as a
number.

<div class="myeqn">
\begin{align}
\int_{a}^{b} w(t) \ud t &= r_0 e^{i\theta_0} \text{ for some } r \in
\R \text{ and } \theta_0 \in [-\pi,\pi)
\label{trick1}\\
r_0 &= \int_{a}^{b} e^{-i\theta_0} w(t) \ud t
\label{trick2}
\end{align}
</div>

Then from \eqref{lemma} and \eqref{trick1}, it suffices to show that

<div class="myeqn">
\begin{equation}
r_0 = \abslr{r_0 e^{i\theta_0}} \le \int_{a}^{b} \abs{w(t)} \ud t.
\label{new_goal1}
\end{equation}
</div>

Since \eqref{trick2} consists of $e^{-i\theta_0}$, which is *absent*
on the R.H.S. of \eqref{lemma} and \eqref{new_goal1}, we add it back.
Thus, we need to show

<div class="myeqn">
\begin{equation}
r_0 \le \int_{a}^{b} \abslr{e^{-i\theta_0} w(t)} \ud t.
\label{new_goal2}
\end{equation}
</div>

Looking at \eqref{trick2} again, we're almost there!  Using elementary
properties of complex numbers and definite integrals for real-valued
functions and the fact/definition that

<div class="myeqn">
\begin{equation}
\Re\left(\int_{a}^{b} w(t) \ud t\right) = \int_{a}^{b} \Re[w(t)] \ud
t,
\label{Re-int}
\end{equation}
</div>

we can write

<div class="myeqn">
\begin{equation}
\begin{aligned}
r_0 &= \Re\left(\int_{a}^{b} e^{-i\theta_0} w(t) \ud t\right) \\
&= \int_{a}^{b} \Re[e^{-i\theta_0} w(t)] \ud t\\
&\le \int_{a}^{b} \abslr{e^{-i\theta_0} w(t)} \ud t.
\end{aligned}
\label{fin}
\end{equation}
</div>

Therefore, \eqref{new_goal2} is satisfied, so as \eqref{lemma}.

An upper bound for Legendre polynomials
---

I have *never* evaluated

<div class="myeqn">
\begin{equation}
P_n(x) = \frac{1}{\pi} \int_0^\pi (x + i \sqrt{1 - x^2}
\cos{\theta})^n \ud\theta,
\label{pnx}
\end{equation}
</div>

where $-1 \le x \le 1$ and $n = 0,1,2,\dots$

Applying \eqref{lemma}, one gets

<div class="myeqn">
\begin{equation}
\begin{aligned}
P_n(x) &= \frac{1}{\pi} \int_0^\pi (x + i \sqrt{1 - x^2}
\cos{\theta})^n \ud\theta\\
&\le \frac{1}{\pi} \int_0^\pi \ud\theta\\
&= 1
\end{aligned}
\label{crux}
\end{equation}
</div>

because

<div class="myeqn">
\begin{equation}
\begin{aligned}
&\quad\; \abs{x + i \sqrt{1 - x^2} \cos{\theta}}\\
&= \sqrt{x^2 + (1 - x^2) \cos^2{\theta}}\\
&\le \sqrt{x^2 + (1 - x^2)}\\
&= 1.
\end{aligned}
\label{norm-ub}
\end{equation}
</div>
