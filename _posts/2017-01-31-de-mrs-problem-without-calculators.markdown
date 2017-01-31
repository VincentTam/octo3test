---
layout: post
title: "De Méré's Problem Without Calculators"
date: 2017-01-31T20:42:28+01:00
categories: math
---

The solution can be found in many books since
[de Méré's problem][pblm] was proposed more than three centuries ago.
*Without* calculators, comparing $\left( \frac56 \right)^4$ and
$\left( \frac{35}{36} \right)^{24}$ could be a problem.

From elementary properties of inequalities, the problem is equivalent
to comparing $6^{11}$ and $5^5 \times 7^6$.

I find two solutions *wihtout* analysis so that they can be accessible
to secondary students.

Method 1: an arithmetic way
---

The method relies mostly on *mental calculations*.

It *isn't* hard to work out $6^4 = 1296$ from $6^2 = 36$ using the
*Indian method*.  Make use of $1300$ to get $6^5 = 7776$.  Since
$6^{10} = (6^5)^2$ is too difficult to be calculated, we calculate its
range.

$$
7700^2 < 6^{10} < 7800^2 \\
59290000 < 6^{10} < 6080000 \\
355740000 < 6^{11} < \color{blue}{36480000} \tag{*}\label{ub}
$$

It's also *not* hard to find out $5^5 = 3125$ from $5^4 = \left( 5^2
\right)^2$, and $7^3 = 343$ from $7^2$.  It's a bit hard to calculate
$7^6$ from $7^3$.  Unluckily, $340^2 \times 5^5 <
\color{blue}{36480000}$.  As a result, we are forced to use the 343 in
the following calculations.  From this stage onwards, we need to rely
on a pencil and paper.  Multiplying $7^3$, $7^3$ and $5^5$ in
different order, I've found that introducing $5^5$ first is the best
approach since the digits of $7^6$ are relatively harder to be
calculated than those of $5^5 \times 7^3$.

$$
\begin{array}{r}
3125 \\[-3pt]
\underline{\times \phantom{000} 343} \\[-3pt]
9375 \phantom{00} \\[-3pt]
12500 \phantom{0} \\[-3pt]
\underline{\phantom{\times} _1 \phantom{0} _2 9375} \\[-3pt]
\bbox[1px,border:1px solid]{107}1875
\end{array}
$$

To check if the above result is correct, we can check its divisibility
by 7 by *mental calculation*.

Luckily, a lower bound of $5^5 \times 7^6$ can be set up by picking
only three digits $\bbox[1px,border:1px solid]{107}1875$ from the
above result.

<div>
\begin{align*}
& \bbox[1px,border:1px solid]{107} \times 343 \\
=& (10^2 + 7) \times 7^3 \\
=& 7^3 \times 10^2 + 7^4 \\
=& 7^3 \times 10^2 + \left( 7^2 \right)^2 \\
=& 34300 + 2401 \\
=& \color{red}{36701}
\end{align*}
</div>

To conclude,

<div>
\begin{align*}
& 6^{11} \\
\stackrel{\eqref{ub}} \le& \color{blue}{36480000} \\
<& \color{red}{36701} 0000 \\
=& \bbox[1px,border:1px solid]{107}0000 \times 343 \\
<& \bbox[1px,border:1px solid]{107}1875 \times 343 \\
=& 3125 \times 343 \times 343 \\
=& 5^5 \times \left( 7^3 \right)^2 \\
=& 5^5 \times 7^6
\end{align*}
</div>

Method 2: a more algebraic way
---

One may make use of

$$ \frac{\left( 6^2 - 1 \right)^6}{6^{12}} > \frac56 $$


to solve this problem.

Expand

$$ 1 < \frac{\left( 6^2 - 1 \right)^6}{6^{11} (6 - 1)}
\tag{1} \label{1} $$

and compare the coefficients of the powers of 6.

However, I think playing with the number 35 is even *better*.

$$ 6 (35 + 1)^5 < 7 \cdot 35^5 \tag{2} \label{2} $$

Move $6 \cdot 35^5$ to the RHS.

$$ 6 \sum_{i = 0}^4 \binom{5}{i} 35^i < 35^5 $$

From the fifth row of Pascal's triangle, we know that $\binom{5}{i}$
is bounded above by 10.  However, the above inequality merits a more
delicate treatment since one *can't* make any conclusion from

<div>
\begin{align*}
& 6 \sum_{i = 0}^4 \binom{5}{i} 35^i \\
\le& 6 \cdot 10 \cdot 35^4 \\
=& 60 \cdot 35^4 \\
>& 35 \cdot 35^4 \\
=& 35^5.
\end{align*}
</div>

We return to

$$ 6 \sum_{i = 0}^4 \binom{5}{i} 35^i < 35^5. $$

Move $35^4$ to the RHS.

<div>
\begin{align*}
& 6 \sum_{i = 0}^3 \binom{5}{i} 35^i \\
<& 35 \cdot 35^4 - 6 \cdot 5 \cdot 35^4 \\
=& 5 \cdot 35^4 \\
=& 175 \cdot 35^3
\end{align*}
</div>

Continue this process with $35^3$.

<div>
\begin{align*}
& 6 \sum_{i = 0}^2 \binom{5}{i} 35^i \\
<& 175 \cdot 35^3 - 6 \cdot 10 \cdot 35^3 \\
=& 115 \cdot 35^3
\end{align*}
</div>

The above is obviously true.

<div>
\begin{align*}
& 6 \left( 10 \cdot 35^2 + 5 \cdot 35 + 1\right) \\
<& 60 \cdot 35^2 + 35 \cdot 35 + 1 \\
<& 61 \cdot 35^2 \\
<& 115 \cdot 35^3
\end{align*}
</div>

This concludes the proof.

Equation | \ref{1} | \ref{2}
---------|---------|--------
fractions | yes | no
up to power | 6 | 5

Therefore, \eqref{2} is simpler than \eqref{1}.

[pblm]: http://mathworld.wolfram.com/deMeresProblem.html
