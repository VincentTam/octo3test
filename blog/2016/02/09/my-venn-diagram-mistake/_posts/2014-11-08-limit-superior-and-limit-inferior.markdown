---
layout: post
title: "Limit Superior and Limit Inferior"
date: 2014-11-08 17:18:17 +0800
comments: true
categories: math
---

Problem
---

For sequences of numbers, *limit inferior* and *limit superior* are
defined as <span class="myeqn" markdown="0">$\liminf
(a_n):=\sup\{\inf\{a_k \mid k \ge n\}\}$</span> and <span
class="myeqn" markdown="0">$\limsup (a_n):=\inf\{\sup\{a_k \mid k \ge
n\}\}$</span> respectively; for sequences of sets, they are defined as
<span class="myeqn" markdown="0">$\bigcup\limits_{n=1}^{\infty}
\bigcap\limits_{k=n}^{\infty} A_k$ and $\bigcap\limits_{n=1}^{\infty}
\bigcup\limits_{k=n}^{\infty} A_k$</span> respectively.

**Why are they consistent?**

<!-- more -->

Discussion
---

It suffices to find a relation between '<' and '⊆': $\{x \le a\}
\subseteq \{x \le b\} \iff a \le b$.

Claim: <span class="myeqn" markdown="0">$\bigcup\limits_{a \in
A} \{x \le a\} = \{x \le \sup A\}$.</span>

*Proof*\:

<div class="myeqn">
\[
\begin{aligned}
& x \in \bigcup_{a \in A} \{x \le a\} \\
\iff& x \le a \;\forall a \in A \\
\iff& x \text{ is a lower bound of } A \\
\iff& x \le \inf A
\end{aligned}
\]
</div>

The last step is due to the defintion of infimum (*greatest* lower
bound).

With the above claim, one has

<div class="myeqn">
\[
\begin{aligned}
& \bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} \{x \le a_k\} \\
=& \bigcap_{n=1}^{\infty} \bigcup_{a \in \{a_k:k \ge n\}}\{x \le a\}\\
=& \bigcap_{n=1}^{\infty} \{ x \le \sup \{a_k:k \ge n\}\} \\
=& \{x \le \inf\sup \{a_k:k \ge n\}\}
\end{aligned}
\]
</div>

<span class="myeqn" markdown="0">
Hence, one can see that $\sup\inf \{a_k \mid k \ge n\} \le \inf\sup
\{a_k \mid k \ge n\}$ and $\bigcup\limits_{n=1}^{\infty}
\bigcap\limits_{k=n}^{\infty} \{x \le a_k\} \subseteq
\bigcap\limits_{n=1}^{\infty} \bigcup\limits_{k=n}^{\infty} \{x \le
a_k\}$ share something in common. 
</span>
