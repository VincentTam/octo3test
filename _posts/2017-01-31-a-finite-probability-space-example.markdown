---
layout: post
title: "A Finite Probability Space Example"
date: 2017-01-31T23:52:01+01:00
categories: math
---

Assumptions
---

Suppose that Mr. Smith has two credit cards
<i class="fa fa-credit-card fa-lg" aria-hidden="true"></i>
<i class="fa fa-credit-card fa-lg" aria-hidden="true"></i>.
They are either MasterCard
<i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i> or
Visa
<i class="fa fa-cc-visa fa-lg" aria-hidden="true"></i>,
with *equal* probability.  Their colours can be
<i class="fa fa-credit-card fa-lg bleu" aria-hidden="true"></i>,
<i class="fa fa-credit-card fa-lg rouge" aria-hidden="true"></i>,
<i class="fa fa-credit-card fa-lg gris" aria-hidden="true"></i>,
<i class="fa fa-credit-card fa-lg maron" aria-hidden="true"></i>,
also with *equal* probability.

Problem
---

One day, I saw Mr. Smith paying with a blue MasterCard
<i class="fa fa-cc-mastercard fa-lg bleu" aria-hidden="true"></i>
in a supermarket.
What is the probability that he possesses two MasterCards
<i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i>?

Wrong argument
---

We draw a table to see the four cases.

| 1 \\ 2 | <i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i> | <i class="fa fa-cc-visa fa-lg" aria-hidden="true"></i> |
|:---|:---:|:---:|
| <i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i> | <i class="fa fa-check-square-o" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> |
| <i class="fa fa-cc-visa fa-lg" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> |

I mistakenly thought that the answer should be $\frac13$ due to the
*wrong* intuition that the colors (
<i class="fa fa-square fa-lg bleu" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg rouge" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg gris" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg maron" aria-hidden="true"></i>
) are independent of the card type. (
<i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i>,
<i class="fa fa-cc-visa fa-lg" aria-hidden="true"></i> )

Correction
---

$\Omega$ represents the sample space.

+ &#10007;: $\Omega = \lbrace (\unicode{x1f4b3}_1,\unicode{x1f4b3}_2)
\mid \unicode{x1f4b3}_i \in \left \lbrace \class{fa fa-cc-mastercard
fa-lg}{}, \class{fa fa-cc-visa fa-lg}{} \right \rbrace, i \in \lbrace
1,2 \rbrace \rbrace$
+ &#10003;: $\Omega = \lbrace
(\unicode{x1f4b3}_1,\square_1,\unicode{x1f4b3}_2, \square_2) \mid
\unicode{x1f4b3}_i \in \left \lbrace \class{fa fa-cc-mastercard
fa-lg}{}, \class{fa fa-cc-visa fa-lg}{} \right \rbrace,
\square_i \in \lbrace \color{blue}{\blacksquare},
\color{red}{\blacksquare}, \color{grey}{\blacksquare},
\color{brown}{\blacksquare} \rbrace, i \in \lbrace 1,2 \rbrace
\rbrace$

Right table

| 1 \\ 2 | <i class="fa fa-cc-mastercard fa-lg bleu" aria-hidden="true"></i> | <i class="fa fa-cc-mastercard fa-lg rouge" aria-hidden="true"></i> | <i class="fa fa-cc-mastercard fa-lg gris" aria-hidden="true"></i> | <i class="fa fa-cc-mastercard fa-lg maron" aria-hidden="true"></i> | <i class="fa fa-cc-visa fa-lg bleu" aria-hidden="true"></i> | <i class="fa fa-cc-visa fa-lg rouge" aria-hidden="true"></i> | <i class="fa fa-cc-visa fa-lg gris" aria-hidden="true"></i> | <i class="fa fa-cc-visa fa-lg maron" aria-hidden="true"></i> |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <i class="fa fa-cc-mastercard fa-lg bleu" aria-hidden="true"></i> | <i class="fa fa-check-square-o" aria-hidden="true"></i> | <i class="fa fa-check-square-o" aria-hidden="true"></i> | <i class="fa fa-check-square-o" aria-hidden="true"></i> | <i class="fa fa-check-square-o" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> |
| <i class="fa fa-cc-mastercard fa-lg rouge" aria-hidden="true"></i> | <i class="fa fa-check-square-o" aria-hidden="true"></i> | | | | | | | |
| <i class="fa fa-cc-mastercard fa-lg gris" aria-hidden="true"></i> | <i class="fa fa-check-square-o" aria-hidden="true"></i> | | | | | | | |
| <i class="fa fa-cc-mastercard fa-lg maron" aria-hidden="true"></i> | <i class="fa fa-check-square-o" aria-hidden="true"></i> | | | | | | | |
| <i class="fa fa-cc-visa fa-lg bleu" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> | | | | | | | |
| <i class="fa fa-cc-visa fa-lg rouge" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> | | | | | | | |
| <i class="fa fa-cc-visa fa-lg gris" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> | | | | | | | |
| <i class="fa fa-cc-visa fa-lg maron" aria-hidden="true"></i> | <i class="fa fa-square-o" aria-hidden="true"></i> | | | | | | | |

- The target event $E$ is

    $$ \left \lbrace (\unicode{x1f4b3}_1,\unicode{x1f4b3}_2) \mid
    \unicode{x1f4b3}_i = \;\class{fa fa-cc-mastercard fa-lg}{},
    i \in \lbrace 1,2 \rbrace \right \rbrace. $$

- The given conditiion $G$ is that Mr. Smith possess at least one
    <i class="fa fa-cc-mastercard fa-lg bleu" aria-hidden="true"></i>.
    This is represented by the set

    $$ \left \lbrace
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),

    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg rouge}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg gris}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg maron}{} \right ), \\

    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-visa fa-lg bleu}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-visa fa-lg rouge}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-visa fa-lg gris}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-visa fa-lg maron}{} \right ), \\

    \left (\class{fa fa-cc-mastercard fa-lg rouge}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg gris}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg maron}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ), \\

    \left (\class{fa fa-cc-visa fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),
    \left (\class{fa fa-cc-visa fa-lg rouge}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),
    \left (\class{fa fa-cc-visa fa-lg gris}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),
    \left (\class{fa fa-cc-visa fa-lg maron}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right )
    \right \rbrace. $$

- $E \cap G$ is

    $$ \left \lbrace
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),

    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg rouge}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg gris}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg bleu}{},
    \class{fa fa-cc-mastercard fa-lg maron}{} \right ), \\

    \left (\class{fa fa-cc-mastercard fa-lg rouge}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg gris}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right ),
    \left (\class{fa fa-cc-mastercard fa-lg maron}{},
    \class{fa fa-cc-mastercard fa-lg bleu}{} \right )
    \right \rbrace. $$

Therefore, the required probability is

<div>
\begin{align*}
& P(E \mid G) \\
=& \frac{P(E \cap G)}{P(G)} \\
=& \frac{7}{15}.
\end{align*}
</div>

Why is the intuition wrong?
---

Even though the above table illustrates the conditiional probability
well, it's good to know the reason for the failure of the above
intuition.  It's true that *without* any constraints, the colors (
<i class="fa fa-square fa-lg bleu" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg rouge" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg gris" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg maron" aria-hidden="true"></i>
) are independent of the card type. (
<i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i>,
<i class="fa fa-cc-visa fa-lg" aria-hidden="true"></i> )  However, the
given condition specifies the color and the card type of one of Mr.
Smith's cards, thus builds up some relation between
<i class="fa fa-square fa-lg bleu" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg rouge" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg gris" aria-hidden="true"></i>,
<i class="fa fa-square fa-lg maron" aria-hidden="true"></i>
and
<i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i>,
<i class="fa fa-cc-visa fa-lg" aria-hidden="true"></i>.  As a result,
$E$ is no longer independent of $G$.

Learnt
---

1. Insert [Unicode characters in MathJax][unicode]
2. Insert [Font Awesome icons in MathJax][fa]
3. Setting up the correct set for the sample space is important.

[unicode]: http://docs.mathjax.org/en/latest/tex.html?highlight=unicode#unicode-support
[fa]:http://stackoverflow.com/a/41381609/3184351

<style type="text/css">
.bleu {color: blue;} .rouge {color: red;} .gris {color: grey;}
.maron {color: brown}
</style>
