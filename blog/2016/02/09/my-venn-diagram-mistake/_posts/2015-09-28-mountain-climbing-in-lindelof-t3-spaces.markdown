---
layout: post
title: "Mountain Climbing in Lindelöf $T_3$ Spaces"
date: 2015-09-28 15:39:38 +0800
comments: true
categories: math
---

Motivation
---

To deduce that [compact $T\_2$ spaces are $T\_4$][pp1],  I tried using
the arguments of the proof in the previous post, but I *couldn't* do
it.  Therefore, I read another proof about the normality of regular
Lindelöf spaces instead.

The proof at first glance
---

<span class="myeqn" markdown="0">
Suppose that $X$ is the given space, and $H$ and $K$ are the given
sets.  $\left\{G_n^* : n \in \omega\right\}$ and $\left\{W_n^* : n \in
\omega\right\}$ are open countable subcovers of $H$ and $K$
respectively.  On p.91 in Davis's Topology book, I saw the following
equations.
</span>

<div class="myeqn">
\begin{alignat*}{2}
  U_0 &= G_0^* &\quad V_0 &= W_0^* \setminus \overline{U_0} \\
  U_1 &= G_1^* \setminus \overline{V_0} &\quad V_1 &= W_1^* \setminus
  (\overline{U_0} \cup \overline{U_1}) \\
  U_2 &= G_2^* \setminus (\overline{V_0} \cup \overline{V_1}) &\quad
  V_2 &= W_2^* \setminus (\overline{U_0} \cup \overline{U_1} \cup
  \overline{U_2}) \\
  \vdots \\
  U_n &= G_n^* \setminus \bigcup_{k < n} \overline{V_k} &\quad V_n &=
  W_n^* \setminus \bigcup_{k \le n} \overline{U_k} \\
  U &= \bigcup_{n = 0}^\infty U_n &\quad V &= \bigcup_{n = 0}^\infty
  V_n
\end{alignat*}
</div>

I *didn't* know what to do when I first saw these equalities.  It's
*hard* to understand the reason of $U \cap V = \varnothing$ by just
reading the symbols.  Luckily, an analogy of climbing mounts is given.
Therefore, I finally understood how the open subsets $U_n$'s and
$V_n$'s are built step-by-step while preserving disjointness and
openness.

[pp1]: /blog/2015/09/28/normal-compact-t2-spaces/
