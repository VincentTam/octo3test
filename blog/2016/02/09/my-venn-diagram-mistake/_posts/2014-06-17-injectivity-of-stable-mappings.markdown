---
layout: post
title: "Injectivity of Stable Mappings"
date: 2014-06-17 19:44:37 +0800
comments: true
categories: math
---

Two weeks ago, I revised calculus and read the proof of the Inverse
Function Theorem in the calculus textbook that I was reading.[^1]  The
Nonlinear Stablity Theorem is first applied to a continuously
differentiable function $\vect{F}: \mathcal{O} \to \R^n$, where
$\mathcal{O}$ is an open subset of $\R^n$ and contains a point
$\vect{x}\_\*$ at which $\det \vect{DF}(\vect{x}\_\*) \ne 0$, to
construct a neighbourhood $U$ of $\vect{x}\_\*$ and find $c > 0$ such
that
$\norm{\vect{F}(\vect{u})-\vect{F}(\vect{v})} \ge c \norm{\vect{u} -
\vect{v}}\quad\forall\,\vect{u},\vect{v} \in U$.

It's said that if $V := \vect{F}(U)$, then $\vect{F}: U \to V$ is
bijective.  The surjectivity is obvious, but I *wasn't* smart enough
to see the injectivity immediately.  After a week, I realised that I
overlooked the discussion about invertible linear operators on
$\F^n$ that preceeded the introduction to the idea of *stable
mapping*.  In fact,
$\forall\,\vect{u},\vect{v} \in U,\vect{F}(\vect{u}) =
\vect{F}(\vect{v}) \iff \norm{\vect{F}(\vect{u}) - \vect{F}(\vect{v})}
= 0$.

Then
$\norm{\vect{u} - \vect{v}} \le \norm{\vect{F}(\vect{u}) -
\vect{F}(\vect{v})} / c = 0 \iff \vect{u} = \vect{v}$.

---
[^1]: FitzPatrick's *Advanced Calculus*
