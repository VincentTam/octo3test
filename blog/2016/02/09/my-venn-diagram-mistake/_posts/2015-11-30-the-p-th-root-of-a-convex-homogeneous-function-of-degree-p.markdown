---
layout: post
title: "The $p$-th Root of a Convex Homogeneous Function of Degree $p$"
date: 2015-11-30 01:17:25 +0800
comments: true
categories: math
---

Backgroud
---

I was stuck at a question from a convex analysis book for more than a
week.  I couldn't directly find its solution.

> Let $K$ be a convex cone in $\R^n$, $p \ge 1$.  The function $f: K
> \to [0,\infty)$ is homogeneous of degree $p$, i.e.
>
> \\[
>   f(\lambda x) = \lambda^p f(x),\quad \forall x \in K, \forall
>   \lambda \ge 0.
> \\]
>
> Suppose also that $f(x) > 0 \,\forall x \in K \setminus \\{x\\}$.
> Show that $g(x) := \[f(x)\]^{\frac1p}$ is convex on K.

Resolution
---

I saw a proof for the Minkowski inequality using the convexity of the
function $x \mapsto x^p$ on
[the webpage for a real analysis course][src].  In fact, by replacing
$\norm{\cdot}$ with $g(\cdot)$ in the proof of Theorem 7, we're done.

First, observe that

<div class="myeqn">
\begin{equation}
  g(\lambda x) = [f(\lambda x)]^{\frac1p} = \lambda g(x),\quad \forall
  x \in K, \forall \lambda \ge 0
  \label{homo}
\end{equation}
</div>

Therefore, it suffices to show that

\begin{equation}
  g(x + y) \le g(x) + g(y).
  \label{goal}
\end{equation}

The assumption <span class="myeqn" markdown="0">$\norm{\vect{u}}_p =
\norm{\vect{v}}_p = 1$</span> can be changed to <span class="myeqn"
markdown="0">$g(x) = g(y) = 1$</span>.  Then we've <span class="myeqn"
markdown="0">$f(x) = f(y) = 1$</span>.  By the convexity of $f$ on
$K$, $\forall x,y \in K, \forall \lambda \in \[0,1\]$,

<div class="myeqn">
\begin{equation}
  f(\lambda x + (1 - \lambda) y) \le \lambda f(x) + (1 - \lambda)
  f(y) \le 1.
\end{equation}
</div>

Since it's given that $f(x) \ge 0 \,\forall x \in K$, we can say that

\begin{equation}
  g(\lambda x + (1 - \lambda) y) \le 1.
  \label{trick}
\end{equation}

Finally, for any $u,v \in K$, we let

<div class="myeqn">
\begin{equation}
  \begin{alignedat}{2}
    \lambda &{}= \frac{g(u)}{g(u) + g(v)} &{} \qquad x &{}= \frac
    u{g(u)} \\
    1 - \lambda &{}= \frac{g(v)}{g(u) + g(v)}&{} \qquad y &{}= \frac
    v{g(v)}.
  \end{alignedat}
  \label{coeff}
\end{equation}
</div>

Making use of \eqref{homo}, we substitute \eqref{coeff} into
\eqref{trick}.

<div class="myeqn">
\begin{align*}
  g \left( \frac{g(u)}{g(u) + g(v)} \frac u{g(v)} + \frac{g(v)}{g(u) +
  g(v)} \frac v{g(v)} \right) &\le 1 \\
  g \left(\frac u{g(u)+g(v)} + \frac v{g(u)+g(v)} \right) &\le 1 \\
  g \left(\frac{u + v}{g(u) + g(v)} \right) &\le 1 \\
  g(u + v) &\le g(u) + g(v)
\end{align*}
</div>

We get \eqref{goal} at last.

[src]: http://math.bard.edu/belk/math461/Inequalities.pdf
