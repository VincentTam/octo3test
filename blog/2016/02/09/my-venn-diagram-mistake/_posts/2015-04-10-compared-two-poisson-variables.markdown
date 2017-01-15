---
layout: post
title: "Compared Two Poisson Variables"
date: 2015-04-10 13:21:37 +0800
comments: true
categories: [C/C++, math]
---

Background
---

Last Friday, I had to submit a homework which required me to evaluate
$\Pr(A > B)$ and $\Pr(A = B)$, where $A$ and $B$ were two independent
Poisson random variables with parameters $\alpha$ and $\beta$
respectively.

Problem
---

I then started evaluating the sum.

<div class="myeqn">
\[
  \Pr(A > B) = \sum_{i = 1}^\infty \sum_{j = 0}^{i - 1}
  \frac{e^{-\alpha} \alpha^i}{i!} \cdot \frac{e^{-\beta} \beta^j}{j!}
\]
</div>

Then I was *stuck*.  I *couldn't* compute this sum also.

<div class="myeqn">
\[
  \Pr(A = B) = \sum_{i = 0}^\infty \frac{e^{-(\alpha + \beta)}
  \alpha^i \beta^i}{(i!)^2}
\]
</div>

Fact
---

I googled for a solution for hours, and after I saw equation (3.1) in
a paper, I gave up finding exact solutions.[^fact]  As a supporter of
free software, I avoided using M\$ Ex\*, and wrote a program in C++ to
approximate the above probabitities by directly adding them term by
term.

### Source code

{% gist c27c38c49fe8de17c815 %}

### Sample output

    Assume that Poisson r.v. A and B are indepedent
    Parameter for A: 1.6
    Parameter for B: 1.4
    Number of terms to be added (100 <= N <= 1000): 8
    P(A > B) = 0.423023, P(A < B) = 0.335224, P(A = B) = 0.241691
{:.cliUB}

Lessons learnt
---

1. A one-line method for writing the content of a function which
returns the factorial of a number.

    URL: <http://progopedia.com/example/factorial/>

2. Evaluation of a function inside GDB

    URL: <http://stackoverflow.com/q/1354731/>

---
[^fact]:
    Keller, J. B. (1994). A characterization of the Poisson
    distribution and the probability of winning a game. *The American
    Statistician*, 48(4), 294--298.
