---
layout: post
title: "Closedness vs Completeness"
date: 2016-02-07 17:50:37 +0800
comments: true
categories: math
---

Background
---

To prove a limit, we need to find a number before.  The definition
gives us *no* hints on how to find it.  Cauchy's Criterion for
convergence is a good method for finding it numerically in "certain
spaces" (e.g. $\R,L^p,L^\infty$) because the definition is
*intrinsic*.

Unluckily, there're some "strange spaces" where Cauchy's Criterion
*isn't* enough to give a convergence.  The simplest one is $\Q$
equipped with the usual metric in $\R$.

<span class="myeqn" markdown="0">
One knows that an incomplete metric space $X$ can extended to form a
complete one $X^*$ (which is unique up to isometric isomorphism) so
that $\iota(X)$ is dense in $X^*$.  That is, $\overline{\iota(X)} =
X^*$.
</span>

Problem
---

I confused $\overline{X}$ with $X^*$.  In other words, what's the
difference between the completion of $X$ and the closure of $X$?

Explanation
---

### General answer

To see this, we note that the closedness of a set is discussed
*relative to another set*, so if one stays inside the incomplete space
$X$, then one notices that **$X$ is closed in $X$**.  However, even
though one *doesn't* know about $X^*$, one still realises that $X$ is
incomplete.

If one becomes wiser and seeks to "complete a given Cauchy sequence"
(i.e. find a limit for a Cauchy sequence in $X$), it's *impossible to
live inside $X$*---one needs to escape from $X$ to $X^*$ so as to
enjoy more freedom.

> Claim: $X$ *isn't* closed in $X^*$.
>
> Approach: We *won't* start from the topological definition (open
> complement).  Instead, we'll argue with sequences.
>
> Proof: Since $X$ is *incomplete*, there exists a Cauchy sequence
> $(x_n)$ in $X$ so that it has *no* limit in $X$.  The completeness
> of $X^\*$ is applied to construct a limit $x$ in $X^\*$.  If one
> allows $X$ to be closed, then $x$ will stay inside $X$, which
> contradicts the fact that $(x_n)$ has *no* limit in $X$.

Even though living in $X$ is sad, and it seems to be hard to escape
(because $X$ is closed in $X$), if one has a chance to travel outside,
one will see that $X$ is *not* really closed---it is possible to find
a sequence $(x_n)$ to escape from $X$.

### Specific example

$\Q$ is closed in $\Q$, but it *isn't* closed in $\R$.  Therefore, the
concept of closedness depends on the bigger space.  However, the
concept of completeness only depends on $\Q$ itself.
