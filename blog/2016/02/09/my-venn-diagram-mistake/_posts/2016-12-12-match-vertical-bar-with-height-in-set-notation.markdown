---
layout: post
title: "Match Vertical Bar with Height in Set Notation"
date: 2016-12-12 18:53:25 +0100
external-url: http://tex.stackexchange.com/a/456
comments: true
categories: [LaTeX]
---

Background
---

I reviewed my old post on [power means inequalities][pp].

Problem
---

At [the 71st line][ppl71] of that post, I carelessly put a `\|`
instead of `|`, causing it to be [interpreted as `rVert`][texse518].

As the [MathJax tutorial on Math Meta SE][mmse5057] pointed out, the
correct $\rm \LaTeX$ syntax for `|` in `{}` denoting a set should be
`\mid`.  However, the `|` in `{}` doesn't match the fraction.

    $$\max\left\{\frac{1}{a_i} \mid i = 1,\dots,k \right\}$$

gives

$$\max\left\{\frac{1}{a_i} \mid i = 1,\dots,k \right\}$$

Goal
---

I need to change it back to

$$\max\left\{ \frac{1}{a_i} \,\middle|\, i = 1,\dots,k \right\}$$

<!-- more -->

Attempt
---

Following a comment by asmeurer, I tried

    $$\max\left\{\frac{1}{a_i} \middle| i = 1,\dots,k \right\}$$

which gives

$$\max\left\{\frac{1}{a_i} \middle| i = 1,\dots,k \right\}$$

The horizontal spacing around `|` *isn't* correct.

<span class="myeqn" markdown="0">
$\max\left\{ \frac{1}{a_i} \,\middle|\, i = 1,\dots,k \right\} \quad
\text{(right)} \\
\max\left\{\frac{1}{a_i} \middle| i = 1,\dots,k \right\}
\quad \text{(wrong)}$
</span>

Solution
---

See the external link of this post by clicking the title of this post.

Lessons learnt
---

1. Avoid using `\|` as `\lVert` or `\rVert`.
2. Use `\providecommand{\norm}[1]{\lVert#1\rVert}` for denoting norms
   in $\rm \LaTeX$ documents.  Similar commands can be used for
   absolute values and sets.
3. Avoid using fractions in superscripts and subscripts.

[pp]: /blog/2014/11/13/power-means-with-infinite-exponents/
[ppl71]: https://github.com/VincentTam/vincenttam.github.io/commit/38d969ef371805b21b17d5706fbbfc1def355f38#diff-fe5cee26e300ef35e1df07f4c0263708R71
[texse518]: http://tex.stackexchange.com/a/518
[mmse5057]: http://meta.math.stackexchange.com/a/5057/290189
