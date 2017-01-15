---
layout: post
title: "Indices in Definition of External Semidirect Product"
date: 2016-12-15 14:01:31 +0100
comments: true
categories: [math]
---

Problem
---

<span class="myeqn" markdown="0">In my notes, the external semidirect
product $G_1 \rtimes_\gamma G_2$ of two groups $G_1$ and $G_2$ with
respect to a homomorphism $\gamma: G_2 \to \Aut G_1$, is defined
as</span>

> <span class="myeqn" markdown="0">\begin{multline}
\forall\, x_1,y_1 \in G_1, \forall\, x_2,y_2 \in G_2, (x_1,x_2)
\times_{G_1 \rtimes_\gamma G_2} (y_1,y_2) \\
= (x_1 \times_{G_1} \gamma(x_2)(y_1), x_2 \times_{G_2} y_2).
\end{multline}</span>

**Why don't we write $(x_1,y_1)$ and $(x_2,y_2)$ instead?**

<!-- more -->

Explanation
---

I *don't* think that this question can last for a day on
[Mathematics Stack Exchange][mathse].

If we really do so, we'll create a *chaos* of indices: <span
class="myeqn" markdown="0">we've $y_1 \in G_2$ and $x_2 \in G_1$, so
we substitute $y_{\color{red}{1}}$ in $\gamma: G_{\color{red}{2}} \to
\Aut G_1$ and then $x_{\color{blue}{2}}$ in $\gamma(y_1):
G_{\color{blue}{1}} \to G_{\color{blue}{1}}$, which belongs to $\Aut
G_{\color{blue}{1}}$.</span>

[mathse]: http://math.stackexchange.com/
