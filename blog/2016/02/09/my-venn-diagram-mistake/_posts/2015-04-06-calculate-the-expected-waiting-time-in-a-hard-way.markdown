---
layout: post
title: "Calculate the Expected Waiting Time in a Hard Way"
date: 2015-04-06 22:18:03 +0800
comments: true
categories: math
---

Background
---

If one assumes that servers $X\_1$ and $X\_2$ has exponential service
times with rate $\lambda\_1$ and $\lambda\_2$ respectively, (i.e.
$X\_i \sim \Exp(\lambda\_i), i = 1,2$), then one can follow the
standard arguments and say that the waiting time $\min\left\\{ X\_1,
X\_2 \right\\} \sim \Exp(\lambda\_1 + \lambda\_2)$, so the expected
waiting time is $1/(\lambda\_1 + \lambda\_2)$.

Problem
---

I tried finding the expected waiting time by conditioning on $X\_1 - X\_2$.

<div class="myeqn">
\begin{equation}
  \begin{split}
    & \Pr(X_1 > X_2) \\
    =& \int_{0}^{\infty} p_{X_1}(x_1) \Pr(X_2 < x_1) \ud x_1 \\
    =& \int_{0}^{\infty} \lambda_1 e^{-\lambda_1 x_1} (1 -
    e^{-\lambda_2 x_1}) \ud x_1 \\
    =& \int_{0}^{\infty} \lambda_1 e^{-\lambda_1 x_1} \ud x_1 -
    \int_{0}^{\infty} \lambda_1 e^{-(\lambda_1 + \lambda_2) x_1} \ud
    x_1 \\
    =& 1 + \left. \frac{\lambda_1}{\lambda_1 + \lambda_2}
    e^{-(\lambda_1 + \lambda_2) x_1} \right|_{0}^{\infty} \\
    =& 1 - \frac{\lambda_1}{\lambda_1 + \lambda_2} \\
    =& \frac{\lambda_2}{\lambda_1 + \lambda_2}
  \end{split}
  \label{eq:pr_min}
\end{equation}
</div>

Similarly, one has $\Pr(X\_1 \le X\_2) = \lambda\_1/(\lambda\_1 +
\lambda\_2)$.

<div class="myeqn">
\begin{equation}
\begin{split}
& \E[\left\{ X_1, X_2 \right\}] \\
=& \E[\min\left\{ X_1, X_2 \right\} \mid X_1 > X_2] \Pr(X_1 > X_2)
\\
+& \E[\min\left\{ X_1, X_2 \right\} \mid X_1 \le X_2] \Pr(X_1 \le X_2)
\\
=& \E[X_2] \Pr(X_1 > X_2) + \E[X_1] \Pr(X_1 \le X_2) \\
=& \frac{1}{\lambda_2} \frac{\lambda_2}{\lambda_1 + \lambda_2} +
\frac{1}{\lambda_1} \frac{\lambda_1}{\lambda_2 + \lambda_1} \\
=& \frac{2}{\lambda_1 + \lambda_2}
\end{split}
\label{eq:wrong}
\end{equation}
</div>

This is *different* from what we expect.  **What's wrong with the
above calculation?**

Solution
---

I really thought about the meaning of $\E\[\min\left\\{ X\_1, X\_2
\right\\} \mid X\_1 > X\_2\]$, and find out that this conditional
expectation *won't* be helpful because

<div class="myeqn">
\[
  \E[\min\left\{ X_1, X_2 \right\} \mid X_1 > X_2] =
  \frac{\int_{0}^{\infty} \int_{0}^{x_1} x_2 \ud x_2 \ud x_1}{\Pr(X_1
  > X_2)}
\]
</div>

Actually, one can divide it into two halves.

<div class="myeqn">
\begin{equation}
  \begin{split}
    & \E[\min\left\{ X_1, X_2 \right\}] \\
    =& \int_{0}^{\infty} \int_{0}^{x_1} x_2 \lambda_1 \lambda_2
    e^{-\lambda_1 x_1 - \lambda_2 x_2} \ud x_2  \ud x_1 \\
    +& \int_{0}^{\infty} \int_{0}^{x_2} x_1 \lambda_2 \lambda_1
	e^{-\lambda_2 x_2 - \lambda_1 x_1} \ud x_1  \ud x_2
  \end{split}
  \label{eq:head}
\end{equation}
</div>

By observing the symmetry between the subscripts '1' and '2' in the
above equation, we only need to evaluate *one* of them.

<div class="myeqn">
\begin{equation}
  \begin{split}
    & \int_{0}^{\infty} \int_{0}^{x_1} x_2 \lambda_1 \lambda_2
    e^{-\lambda_1 x_1 - \lambda_2 x_2} \ud x_2  \ud x_1 \\
    =& \int_{0}^{\infty} \lambda_1 \lambda_2 e^{-\lambda_1 x_1} \left(
    \int_{0}^{x_1} x_2 e^{-\lambda_2 x_2} \ud x_2 \right) \ud x_1 \\
    =& \int_{0}^{\infty} \lambda_1 \lambda_2 e^{-\lambda_1 x_1} \left(
    \left. -x_2 \cdot \frac{e^{-\lambda_2 x_2}}{\lambda_2}
    \right|_{x_2 = 0}^{x_2 = x_1} + \int_{0}^{x_1} \frac{e^{-\lambda_2
    x_2}}{\lambda_2} \ud x_2 \right) \ud x_1 \\
    =& \int_{0}^{\infty} \lambda_1 \lambda_2 e^{-\lambda_1 x_1} \left(
    -x_1 \cdot \frac{e^{-\lambda_2 x_1}}{\lambda_2} - \left.
    \frac{e^{-\lambda_2 x_2}}{\lambda_2^2} \right|_{x_2 = 0}^{x_2 =
    x_1} \right) \ud x_1 \\
    =& \int_{0}^{\infty} \lambda_1 \lambda_2 e^{-\lambda_1 x_1} \left(
    -x_1 \cdot \frac{e^{-\lambda_2 x_1}}{\lambda_2} + \frac{1 -
    e^{-\lambda_2 x_1}}{\lambda_2^2} \right) \ud x_1 \\
    =& \int_{0}^{\infty} -\lambda_1 x_1 e^{-(\lambda_1 + \lambda_2)
    x_1} \ud x_1 + \int_{0}^{\infty} \frac{\lambda_1}{\lambda_2}
    (e^{-\lambda_1 x_1} - e^{-(\lambda_1 + \lambda_2) x_1}) \ud x_1
    \\
    =& \lambda_1 \left( \left. \frac{x_1 e^{-(\lambda_1 + \lambda_2)
    x_1}}{\lambda_1 + \lambda_2} \right|_{0}^{\infty} -
    \int_{0}^{\infty} \frac{e^{-(\lambda_1 + \lambda_2)
    x_1}}{\lambda_1 + \lambda_2} \right) \\
    +& \frac{\lambda_1}{\lambda_2} \left( \left. -\frac{e^{\lambda_1
    x_1}}{\lambda_1} \right|_{0}^{\infty} + \left.
    \frac{e^{-(\lambda_1 + \lambda_2) x_1}}{\lambda_1 + \lambda_2}
    \right|_{0}^{\infty} \right) \\
    =& \lambda_1 \left( 0 + \left. \frac{e^{-(\lambda_1 + \lambda_2)
    x_1}}{(\lambda_1 + \lambda_2)^2} \right|_{0}^{\infty} \right) +
    \frac{\lambda_1}{\lambda_2} \left( \frac{1}{\lambda_1} -
    \frac{1}{\lambda_1 + \lambda_2} \right) \\
    =& -\frac{\lambda_1}{(\lambda_1 + \lambda_2)^2} +
    \frac{1}{\lambda_2} - \frac{\lambda_1}{\lambda_2 (\lambda_1 +
    \lambda_2)}
  \end{split}
  \label{eq:half_int}
\end{equation}
</div>

Similarly, one has

<div class="myeqn">
\begin{equation}
  \begin{split}
    & \int_{0}^{\infty} \int_{0}^{x_2} x_1 \lambda_2 \lambda_1
    e^{-\lambda_2 x_2 - \lambda_1 x_1} \ud x_1  \ud x_2 \\
    =& -\frac{\lambda_2}{(\lambda_2 + \lambda_1)^2} +
    \frac{1}{\lambda_1} - \frac{\lambda_2}{\lambda_1 (\lambda_2 +
    \lambda_1)}.
  \end{split}
  \label{eq:half_int2}
\end{equation}
</div>

Substitute \eqref{eq:half\_int} and \eqref{eq:half\_int2} into
\eqref{eq:head}.

<div class="myeqn">
\begin{equation}
  \begin{split}
    & \E[\min\left\{ X_1, X_2 \right\}] \\
    =& \left( -\frac{\lambda_1}{(\lambda_1 + \lambda_2)^2} +
    \frac{1}{\lambda_2} - \frac{\lambda_1}{\lambda_2 (\lambda_1 +
    \lambda_2)} \right) \\
    +& \left( -\frac{\lambda_2}{(\lambda_2 + \lambda_1)^2} +
    \frac{1}{\lambda_1} - \frac{\lambda_2}{\lambda_1 (\lambda_2 +
    \lambda_1)} \right) \\
    =& -\left( \frac{\lambda_1}{(\lambda_2 + \lambda_1)^2} +
    \frac{\lambda_2}{(\lambda_2 + \lambda_1)^2} \right) + \left(
    \frac{1}{\lambda_1} + \frac{1}{\lambda_2} \right) \\
    -& \left( \frac{\lambda_1}{\lambda_2 (\lambda_1 + \lambda_2)} +
    \frac{\lambda_2}{\lambda_1 (\lambda_2 + \lambda_1)} \right) \\
    =& -\frac{1}{\lambda_1 + \lambda_2} + \frac{\lambda_1 +
    \lambda_2}{\lambda_1 \lambda_2} - \frac{\lambda_1^2 +
    \lambda_2^2}{\lambda_1 \lambda_2 (\lambda_1 + \lambda_2)} \\
    =& -\frac{1}{\lambda_1 + \lambda_2} + \frac{(\lambda_1 +
    \lambda_2)^2 - (\lambda_1^2 + \lambda_2^2)}{\lambda_1 \lambda_2
    (\lambda_1 + \lambda_2)} \\
    =& -\frac{1}{\lambda_1 + \lambda_2} + \frac{2\lambda_1
    \lambda_2}{\lambda_1 \lambda_2 (\lambda_1 + \lambda_2)} \\
    =& -\frac{1}{\lambda_1 + \lambda_2} + \frac{2}{\lambda_1 +
    \lambda_2} \\
    =& \frac{1}{\lambda_1 + \lambda_2}
  \end{split}
  \label{eq:fin}
\end{equation}
</div>

This is consistent with what we expect.  I finally understand what's
wrong in \eqref{eq:wrong}: $X\_1$ *isn't* independent from $X\_1 -
X\_2$.

Generalization
---

By induction, we can generalize \eqref{eq:fin} to the expected waiting
time for $n$ servers in parallel: if $X\_i \sim \Exp(\lambda\_i)
\,\forall 1 \le i \le n$, then

<div class="myeqn">
\[
  \E[\min\left\{ X_1, \ldots, X_n \right\}]
  = \frac{1}{\sum\limits_{k = 1}^n \lambda_k}.
\]
</div>
