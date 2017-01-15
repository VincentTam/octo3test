---
layout: post
title: "Product of GCD and LCM"
date: 2014-11-04 00:00:31 +0800
comments: true
categories: math
external-url: https://proofwiki.org/wiki/Product_of_GCD_and_LCM
---

In ProofWiki's first proof, it has taken me some time to understand.
I often write $d=\gcd(a,b)$, $a=a'd$, $b=b'd$ for some <span
class="myeqn" markdown="0">$a',b' \in \Z_{>0}$</span>, and $n$ as
*any* common multiple of $a$ and $b$.  Then <span class="myeqn"
markdown="0">$n = q_1 a = q_2 b$</span> for some <span class="myeqn"
markdown="0">$q_1,q_2 \in \Z$</span>.  The letter $q$ connotes
*quotient*.  To show that $\lcm(a,b) \times \gcd(a,b) = ab$, it
suffices to show that

<div class="myeqn">
\begin{gather}
a \left | \frac{ab}{d} \right. \land 
b \left | \frac{ab}{d} \right. \label{eq:isLCM}\\
a|n \land b|n \implies \left.\frac{ab}{d}\right|n \label{eq:leastLCM}
\end{gather}
</div>

Equations \eqref{eq:isLCM} and \eqref{eq:leastLCM} mean that "$ab/d$
is *a* LCM of $a$ and $b$" and "$ab/d$ is the *least* LCM of $a$ and
$b$" respectively.

Equation \eqref{eq:isLCM} is very easy to check since $\displaystyle
\frac{ab}{d} = a'b = ab'$.

By Bézout's Identity, $ax+by=d$ for some $x,y \in \Z$.

Since what we want is $\displaystyle \frac{ab}{d} (\dots) = n$, we
multiply both sides of the above equation by $\displaystyle
\frac{n}{d}$.

<div class="myeqn">
\[
\begin{aligned}
\frac{axn+byn}{d}=n\\
\frac{axbq_2+byaq_1}{d}=n\\
\left( \frac{ab}{d} \right) (xq_2+yq_1) = n
\end{aligned}
\]
</div>

Hence \eqref{eq:leastLCM} is proved.
