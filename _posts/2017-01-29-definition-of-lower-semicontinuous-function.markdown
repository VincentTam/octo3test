---
layout: post
title: "Definition of Lower Semicontinuous Function"
date: 2017-01-29T22:48:01+01:00
categories: math
---

Background
---

I know this $\delta$-$\epsilon$ criterion of lower semicontinuity
(l.s.c) of $f: E \subseteq \Bbb R \to \Bbb R$ at point $x_0$:

> $$\forall \epsilon > 0, \exists \delta > 0,
> \forall x \in B(x_0,\delta), f(x) > f(x_0) - \epsilon.$$

Problem
---

I want to use this definition to show that the supremum of a family of
l.s.c. functions $(f_i)_{i \in I}$ defined on $E$

$$f(x) = \sup_{i \in I} f_i (x)$$

is l.s.c, but for each $i \in I$, $\delta = \delta(i)$.  I *can't*
take the infimum of $\delta$ like in the proof for the l.s.c of the
sum $f_1 + f_2$ of two l.s.c functions $f_1$ and $f_2$.

I confuse myself by writing something like

$$\forall i \in I, \forall \epsilon > 0, \exists \delta_i > 0,
\forall x \in B(x_0,\delta_i), f_i (x) > f_i (x_0) - \epsilon.$$

One *can't* directly take supremum on both sides since $x$ depends on
$\delta_i$.  One *can't* say that the intersection

$$\bigcap_{i \in I} B(x_0,\delta_i) \ne \varnothing.$$

A method to pass over this
---

I digress to show an alternative proof of the l.s.c. for
$f(x) = \sup\limits_{i \in I} f_i (x)$.

Sublevel sets can be used to solved this problem.  Recall that l.s.c
of $f$ is equivalent to the closedness of

$$S_\lambda = \lbrace x \in E \mid f(x) \le \lambda \rbrace \forall
\lambda \in \Bbb R.$$

Therefore, we fix $\lambda \in \Bbb R$.  For each $f_i$, we have

$$S_i = \lbrace x \in E \mid f_i (x) \le \lambda \rbrace$$

Since the arbitrary intersection of closed sets $S_i$'s is closed,

$$S = \bigcap_{i \in I} S_i
= \lbrace x \in E \mid f (x) \le \lambda \rbrace$$

is closed.  Since the choice of $\lambda$ is arbitrary, we use the
equivalence between closed sublevel sets and l.s.c. of a function to
conclude that $f$ is l.s.c.

A direct proof
---

Refer to [komorebi's answer on Math.SE][1662824].

Lessons learnt
---

1. The definition of l.s.c. of $f$ at $x_0$ in the linked answer

    > $$\forall y < f(x_0), \exists \delta > 0,
    > \forall x \in B(x_0,\delta), f(x) > y$$

    is *much better* than mine.  Actually, by replacing $f(x_0) -
    \epsilon$ by an aribrary *fixed* $y < f(x_0)$,
    [the above confusion](#problem) about the supremum over $i \in I$
    no longer exists.

2. This simplified definition helps us understand the equivalence
   between [closed epigraph and l.s.c. functon][468984] *without*
   using sublevel sets.

[1662824]: http://math.stackexchange.com/a/1662824/290189
[468984]: http://math.stackexchange.com/a/468984/290189
