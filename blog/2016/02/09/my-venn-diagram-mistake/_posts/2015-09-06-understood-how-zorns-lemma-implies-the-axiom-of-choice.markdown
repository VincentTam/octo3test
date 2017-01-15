---
layout: post
title: "Understood How Zorn's Lemma Implies the Axiom of Choice"
date: 2015-09-06 01:26:06 +0800
comments: true
categories: math
---

Many math books that I've read referred me to other books for the
proof of the equivalence of the Axiom of Choice and Zorn's Lemma.
This afternoon, I spent more than two hours to understand the proof
that the later implies and former in <cite>Topology</cite> written by
Davis.

1. Set up a non-empty partially ordered set $(\mathcal{P},\le)$
2. Let $\mathcal{T}$ be any non-empty chain in $\mathcal{P}$.
3. Prove that $\cup \mathcal{T} \in \mathcal{P}$.
4. Apply Zorn's Lemma to get a maximal element $g \in \mathcal{P}$.
5. <span class="myeqn" markdown="0">Use the maximality of $g$ to claim
   that the domain of $g$ equals the family of non-empty subsets
   $(S_i)_{i \in I}$ from which elements $(x_i)_{i \in I}$ are chosen.
   </span>

In the book, $\le$ means function extension, and

<div class="myeqn">
\[
  \mathcal{P} = \{f \mid f \text{ is a function, } dom\,f \subseteq
  (S_i)_{i \in I}, f(x) \in x \,\forall x \in dom\,f\}.
\]
</div>

<span class="myeqn" markdown="0">
Step (3) is proved step-by-step according to the definition of
$\mathcal{P}$.  Usually, suppose that $(x_1,y_1),(x_2,y_2) \in f$,
$x_1 = x_2 \implies y_1 = y_2$.  The book uses the contrapositive form
of this statement.  I was stuck at the sentence <q>Now, for a set to
be an element of $dom\cup\mathcal{T}$, it must be an element of some
member of $\mathcal{T}$</q>.  At first, I omitted the phrase "some
member of", and stopped for half an hour.  Reading the next sentence
<q>Hence $dom\cup\mathcal{T} \subseteq (S_i)_{i \in I}$</q>, I knew
how to interpret the sentence where I was stuck: if $S \in
dom\cup\mathcal{T}$, $\exists f \in \mathcal{T}$ such that $S \in
dom\,f$.  Since $f \in \mathcal{T} \subseteq \mathcal{P}$, $dom\,f
\subseteq (S_i)_{i \in I}$.  Then $S \in (S_i)_{i \in I}$, and thus
$dom\cup\mathcal{T} \subseteq (S_i)_{i \in I}$.
</span>
