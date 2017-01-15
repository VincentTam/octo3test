---
layout: post
title: "Saw a New Type of Ring"
date: 2015-02-28 17:56:44 +0800
comments: true
categories: math
---

This Thursday evening, I saw a **local ring** in a commutative ring
with unity for the first time.  At the first glance, I *didn't* know
how to make use of it's definition --- a ring that has only one
maximal ideal --- to answer a question.  If I was given a local ring
$R$, then should I first assume that there's a maximal ideal $M$, and
then construct another proper ideal $I$ of $R$ so that no proper
ideals of $R$ contained $I$ except for $I$ itself?  I got stuck at
this point for almost an hour, and *couldn't* write down something
more for that question.

I finally read another half of the question, and understood the
statement of the whole question.  It would be impossible for me to do
the question *without* knowing the proper ideal that consisted merely
of elements of R which *don't* have a multiplicative inverse.

After I had proved the statement in that question, I was still not
sure whether such a ring *exists*.  I *couldn't* give an example of a
local ring.  This evening, I found it in Wikipedia, and realised that
even though I had already convinced myself that a finite field $F$ of
prime characteristic $p$ has an algebraic closure <span class="myeqn"
markdown="0">$\overline{F} = \bigcup\limits_{i = 1}^\infty
\F_{p^i}$</span>, I still *didn't* know many properties of the
structure of fields.[^alg_closure]  The simplest example of a local
ring is a field, which has only the trivial ideal <span class="myeqn"
markdown="0">$\{0\}$</span> as its proper ideal.

---
[^alg_closure]:
    See [*Read a Proof of Existence of Algebraic Closure*][pp] in
    Blog 1 for details.

[pp]: /blog/2015/02/21/read-a-proof-of-existence-of-algebraic-closure/
