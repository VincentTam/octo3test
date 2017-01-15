---
layout: post
title: "Found 2 Incomparable Topologies"
date: 2015-04-25 21:17:45 +0800
comments: true
categories: math
---

1. Lower limit topology ($\R\_l$)

    - Basis: $\\{[a,b) \mid a,b \in \R\text{ s.t. } a < b\\}$

2. K-topology ($\R\_K$)

    - Basis: $\\{(a,b), (a,b) - K \mid a,b \in \R\text{ s.t. } a < b \\}$,
	where $K = \\{ 1/n \mid n \in \Z\_+ \\}$.

$\R\_l \nsubseteq \R\_K$
---

Consider a base element $[a,b)$.  At the point $a$, *no* open interval
$(c,d)$ containing $a$ is a subset of $[a,b)$.

$\R\_K \nsubseteq \R\_l$
---

Let $B\_2 = (-1, 1) - K$.  At $B\_2 \notin \R\_l$ because any base
element $[0,b)$ containing 0 must hit $1/n$ for some $n \in \Z\_+$ by
Archimedean Property of $\Z\_+$.  Thus, $\forall b > 0, [0,b)
\nsubseteq B\_2$.
