---
layout: post
title: "Learnt Cauchy–Bunyakovsky–Schwarz Inequality for Definite Integrals"
date: 2015-02-28 22:37:59 +0800
comments: true
categories: math
---

When I was a secondary school student, I was quite satisfied with this
proof of Cauchy--Schwarz Inequality.

<div class="myeqn">
\[
\begin{aligned}
& \left(\sum_{i = 1}^n a_i b_i\right)^2 \le \left(\sum_{i = 1}^n
a_i^2\right) \left(\sum_{j = 1}^n b_j^2\right) \\
\iff& \left(\sum_{i = 1}^n a_i b_i\right) \left(\sum_{j = 1}^n a_j
b_j\right) \le \left(\sum_{i = 1}^n a_i^2\right) \left(\sum_{j = 1}^n
b_j^2\right) \\
\iff& \sum_{i = 1}^n \sum_{j = 1}^n a_i a_j b_i b_j \le \sum_{i = 1}^n
\sum_{j = 1}^n a_i^2 b_j^2 \\
\iff& \sum_{i = 1}^n \sum_{j = 1}^n a_i a_j b_i b_j \le \sum_{i = 1}^n
\sum_{j = 1}^n \frac{1}{2} \left(a_i^2 b_j^2 + a_j^2 b_i^2 \right)\\
\iff& \sum_{i = 1}^n \sum_{j = 1}^n \frac{1}{2} (a_i^2 b_j^2 - 2 a_i
b_j \cdot a_j b_i + a_j^2 b_i^2) \ge 0 \\
\iff& \sum_{i = 1}^n \sum_{j = 1}^n \frac{1}{2} (a_i b_j - a_j b_i)^2
\ge 0
\end{aligned}
\]
</div>

Equality holds if and only if <span class="myeqn"
markdown="0">$\forall i,j = 1,\dots,n, a_i b_j - a_j b_i = 0$</span>.
I was so happy that I *didn't* think of further generalisations.  I
*didn't* realise that the inequality can be more concisely written as
$\langle \vect{a}, \vect{b} \rangle^2 \le \norm{\vect{a}}^2
\norm{\vect{b}}^2$, where <span class="myeqn" markdown="0">$\vect{a} =
(a_1,\cdots,a_n), \vect{b} = (b_1,\cdots,b_n) \in \R^n$</span>

This Friday evening, I did a question about the integral version of
the inequality.  After spending hours to come up with an idea, I
realised why I needed to learn inner product spaces.  The very first
version of the inequality that I learnt has too many summation signs,
and it *can't* be easily generalised to other spaces.  The second
proof of the *same* inequality that I learnt makes use of the
determinant of a quadratic polynomial $p(t) = \norm{\vect{u} - t
\vect{v}}^2$.  That proof is much more elegant, and it helped me a lot
while I was doing that question.  When equality holds, it's very hard
to imagine what happens by looking at the original equality.  However,
if we convert it into the determinant of $p(t)$, then one quickly
knows that this is equivalent to $p(t) = 0$, and can easily conclude
that equality holds if and only if the two functions $f$ and $g$
satisfy $f \equiv k g$ for some $k \in \R$ for almost all
points.[^rmk]

---
[^rmk]:
    To be more precise, if one accepts that the space $C(\[a,b\])$ of
    continuous functions defined on a closed and bounded interval
    $\[a,b\]$ in an inner product space, and $f,g \in C(\[a,b\])$,
    then the condition "for almost all points" can be dropped.  If we
    *don't* to want be to so strict on the functions $f$ and $g$
    defined on $\[a,b\]$, and we just say that $f$ and $g$ are
    integrable functions defined on $\[a,b\]$, then we have to accept
    the fact that $\int_a^b f^2 = 0$ *doesn't* imply that $f \equiv
    0$.
