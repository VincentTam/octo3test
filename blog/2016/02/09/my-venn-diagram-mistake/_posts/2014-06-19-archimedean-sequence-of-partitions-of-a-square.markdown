---
layout: post
title: "Archimedean Sequence of Partitions of a Square"
date: 2014-06-19 20:13:52 +0800
comments: true
categories: math
---

Suppose $f: \vect{I} \to \R^2$, where $\vect{I} = [0,1] \times [0,1]$,

<div class="myeqn">
\[
f(x,y) =
\begin{cases}
0 &\text{if } (x,y) \in \vect{I} \land y \ge x\\
1 &\text{if } (x,y) \in \vect{I} \land y < x
\end{cases}
\]
</div>

<span class="myeqn" markdown="0">
$P_k := \{0,1/k,\dots,1\}, \vect{P}_k := (P_k,P_k)$
</span>.

It's said that
<span class="myeqn" markdown="0">
$\mathcal{U}(f,\vect{P}_k) - \mathcal{L}(f,\vect{P}_k) < 2/k$
</span>.

However, at first, I *don't* understand why there are fewer than $2k$
squares which contribute to the difference between <span class="myeqn"
markdown="0">$\mathcal{U}(f,\vect{P}_k)$</span> and <span
class="myeqn" markdown="0">$\mathcal{L}(f,\vect{P}_k)$</span>.  I
wrongly think that only the $k$ diagonal squares make such a
contribution.  Actually, $\forall\,i = 1,\dots,k - 1, [i / k,(i + 1) /
k] \times [(i - 1) / k,i / k]$ also causes the difference between
those two Darboux sums because

<div class="myeqn">
\[
\begin{aligned}
\inf\,\{f(\vect{x}) \mid \vect{x} \in [i / k,(i + 1) / k] \times
[(i - 1) / k,i / k]\} &= f(i / k,i / k) = 0 \text{ and}\\
\sup\,\{f(\vect{x}) \mid \vect{x} \in [i / k,(i + 1) / k] \times
[(i - 1) / k,i / k]\} &= 1.
\end{aligned}
\]
</div>
