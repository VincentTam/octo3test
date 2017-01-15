---
layout: post
title: "Calculating the Volume of a Triangular Pyramid in a Hard Way"
date: 2015-04-07 16:07:49 +0800
comments: true
categories: math
---

Background
---

There is an easy way of calculating the volume of $\\{(x,y,z) \in
\R^3 \mid 0 \le x,y,z \le t, x + y + z \le t\\}$: just consider the
permutation of $x,y,z$.[^easy_vol]  This can be easily generalized to
$n$ dimension.

Another way using multiple integrals
---

<div class="myeqn">
\[
\begin{split}
& \text{Let } A:= \left\{ (x_1,\ldots,x_n) \in \R^n \,\middle|\,
0 \le x_i \le 1 \,\forall 1 \le i \le n, \sum\limits_{i = 1}^n x_i \le 1
\right\}.
\\
& \text{Volume of } A \\
=& \idotsint\limits_A \ud x_n \cdots \ud x_3 \ud x_2 \ud x_1 \\
=& \int_{0}^{t} \int_{0}^{t - x_1} \int_{0}^{t - x_1 - x_2} \cdots
\int_{0}^{t - \sum\limits_{i = 1}^{n - 1} x_i} \ud x_n \cdots \ud x_3
\ud x_2 \ud x_1 \\
=& \int_{0}^{t} \int_{0}^{t - x_1} \int_{0}^{t - x_1 - x_2} \cdots
\int_{0}^{t - \sum\limits_{i = 1}^{n - 2} x_i} \left(t -
\sum\limits_{i = 1}^{n - 1} x_i\right) \ud x_{n - 1} \cdots \ud x_3
\ud x_2 \ud x_1 \\
=& \int_{0}^{t} \int_{0}^{t - x_1} \int_{0}^{t - x_1 - x_2} \cdots
\int_{0}^{t - \sum\limits_{i = 1}^{n - 2} x_i} x_{n - 1} \ud x_{n - 1}
\cdots \ud x_3 \ud x_2 \ud x_1 \\
=& \int_{0}^{t} \int_{0}^{t - x_1} \int_{0}^{t - x_1 - x_2} \cdots
\int_{0}^{t - \sum\limits_{i = 1}^{n - 3} x_i} \frac{1}{2!} \left(t -
\sum\limits_{i = 1}^{n - 2} x_i\right)^2 \ud x_{n - 2}
\cdots \ud x_3 \ud x_2 \ud x_1 \\
=& \int_{0}^{t} \int_{0}^{t - x_1} \int_{0}^{t - x_1 - x_2} \cdots
\int_{0}^{t - \sum\limits_{i = 1}^{n - 3} x_i} \frac{x_{n - 2}^2}{2!}
\ud x_{n - 2} \cdots \ud x_3 \ud x_2 \ud x_1 \\
=& \int_{0}^{t} \int_{0}^{t - x_1} \int_{0}^{t - x_1 - x_2} \cdots
\int_{0}^{t - \sum\limits_{i = 1}^{n - 4} x_i} \frac{1}{3!} \left(t -
\sum\limits_{i = 1}^{n - 3} x_i\right)^3 \ud x_{n - 3}
\cdots \ud x_3 \ud x_2 \ud x_1 \\
& \vdots \\
=& \int_{0}^{t} \frac{(t - x_1)^{n - 1}}{(n - 1)!} \ud x_1 \\
=& \frac{t^n}{n!}
\end{split}
\]
</div>

Why use this method?
---

To calculate its centre of mass.

<div class="myeqn">
\[
\begin{split}
& \text{First component of its centre of mass} \\
=& \frac{n!}{t^n} \idotsint\limits_A x_1 \ud x_n \cdots \ud x_3 \ud
x_2 \ud x_1 \\
=& \frac{n!}{t^n} \int_{0}^{t} x_1 \int_{0}^{t - x_1} \int_{0}^{t -
x_1 - x_2} \cdots \int_{0}^{t - \sum\limits_{i = 1}^{n - 1} x_i} \ud
x_n \cdots \ud x_3 \ud x_2 \ud x_1 \\
=& \frac{n!}{t^n} \int_{0}^{t} x_1 \,\frac{(t - x_1)^{n - 1}}{(n -
1)!} \ud x_1 \\
=& \frac{n!}{t^n} \left( \left. -x_1 \,\frac{(t - x_1)^{n - 1}}{(n -
1)!} \right|_{0}^t + \int_{0}^{t} \frac{(t - x_1)^n}{n!} \ud x_1
\right) \\
=& \frac{n!}{t^n} \left( 0 + \frac{t^{n + 1}}{(n + 1)!} \right) \\
=& \frac{t}{n + 1}
\end{split}
\]
</div>

By symmetry, we conclude that the center of mass is $\left(\frac{t}{n
+ 1}, \frac{t}{n + 1}, \ldots, \frac{t}{n + 1}\right) \in \R^n$.

---
[^easy_vol]:
    Simplex. (2015, March 29). In *Wikipedia, The Free Encyclopedia*.
    Retrieved 15:34, April 6, 2015, from
    <http://en.wikipedia.org/w/index.php?title=Simplex&oldid=654074423>
