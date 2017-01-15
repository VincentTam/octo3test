---
layout: post
title: "Read a Proof about the Transitivity of Characteristic Subgroups"
date: 2014-12-31 00:52:20 +0800
comments: true
categories: math
---

On the day before yesterday, I read a proof about the transitivity of
characteristic subgroups.  The proof *shouldn't* be too difficult.
The key step is just to create a restriction automorphism.

Suppose $K\le H\le G$, and $f\in \Aut(G)$.  Then $f(H)=H$.  Define the
restriction of $f$ on $H$ as $g:H\to H$ such that $g(h)=f(h) \,\forall
h \in H$.  Clearly, $g\in \Aut(H)$.

I *couldn't* understand why $g(K)=K$.  I googled "strongly normal
transitivity", but *couldn't* find anything relevant.  I changed the
words, and found [the proof on ProofWiki][pf].  Then I realised why I
got stuck: when I wrote the definition of characteristic subgroup
symbolically, I *didn't* pay enough attention to '∀'.

[pf]: https://www.proofwiki.org/wiki/Definition:Characteristic_Subgroup
