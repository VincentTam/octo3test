---
layout: post
title: "A Group of 689 Elements (2)"
date: 2016-12-15 16:04:37 +0100
comments: true
categories: [math]
---

Background
---

Two years ago, I thought about a group of 689 elements.[^seri1]  I
only managed to show the *existence* of such a group.

Problem
---

Inspired by the use of [Sylow III][wiki] to show that a group of order
15 has only *one* structure: $\Z_{15} \cong \Z_3 \times \Z_5$, I
wondered **if $\Z_{689}$ is the only possible structure for a group of
order 689**.

<!-- more -->

Solution
---

Denote $G$ as a group of order 689.  First, apply Sylow III to
$\abs{G}$, whose largest prime divisor 53.  Since $\lvert G \rvert$ is
a product of two primes 13 and 53, we conclude that $n_{53} = 1$.
Second, we have

<div class="myeqn">
\begin{cases}
n_{13} | 53 \\
n_{13} \equiv 1 \pmod{13}.
\end{cases}
</div>

Since $53 \equiv 1 \pmod{13}$, we have to consider two cases:

1. $n_{13} = 1$: In this case, $G$ has a unique 13-Sylow $H$ and a
   unique 53-Sylow $K$.  Both $H$ and $K$ are normal in $G$.  Their
   intersection $H \cap K$ is, by Lagrange's Theorem, the identity
   element $e_G$.  For each $h \in H$ and $k \in K$, the commutator
   <div class="myeqn">
   \begin{equation*}
   [h,k] = hk h^{-1} k^{-1} = \underbrace{hk h^{-1}}_{\in K} k
   = h \underbrace{k h^{-1} k^{-1}}_{\in H} \in H \cap K
   \end{equation*}
   </div>

   is reduced to $e_G$, implying that $H$ commute with $K$.
   Therefore, an internal direct product of $H$ and $K$ can be set up,
   and $\abs{H} \times \abs{K} = 13 \times 53 = \abs{G}$, so $G = H
   \times K \cong \Z_{13} \times \Z_{53}$.

2. $n_{13} = 53$: In this case, $G$ has 53 *distinct* 13-Sylows $H_1,
   H_2, \cdots, H_{53}$.  Each of these $H_i$'s is isomorphic to the
   cyclic group $C_{13}$.  Thus, $G$ possess $53 \times 12$ elements
   of order 13, 52 elements of order 53, and the identity---they add
   up to $\abs{G}$.

   *Not* knowing how to continue, I finally searched for "non-abelian
   group of order $pq$" and found
   [this answer on Mathematics Stack Exchange][mathse63257], which
   showed that my guess is *wrong*.  <span class="myeqn"
   markdown="0">In fact, $\Aut H \cong \Z_q^*$ and its elements are
   $\gamma_\lambda: h \mapsto \lambda h$.</span> $\phi(K) = \psi(K)$
   because they are both subgroup of order $p$, but it's *unique* in
   $\Aut H$.  Since homomorphisms $\phi,\psi: K \to \Aut H$ are
   supposed to be *non-trivial*, $\ker \phi, \ker \psi \ne \abs{K} =
   p$, so they are injective.  This proves the *existence* of a
   non-abelian group $G \cong H \rtimes_\psi K$.

To conclude, even though the arguments are "too simple" for a
mathematicien, a group of order 689 is *never* simple.

---
[^seri1]: [*A Group of 689 Elements*][seri1]

[seri1]: /blog/2014/12/09/a-group-of-689-elements/
[wiki]: https://en.wikipedia.org/wiki/Sylow_theorems#Theorems
[mathse63257]: http://math.stackexchange.com/a/63257/290189
