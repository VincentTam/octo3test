---
layout: post
title: "A Fake Function"
date: 2014-09-07 14:16:31 +0800
comments: true
categories: math
---

Half a year ago, when I heard the concept of **well-defined
functions**, I *wasn't* familiar with it.

I've just worked out a problem, and got more idea about that concept.
The problem should be quite easy.  It asks readers to show that if
$\langle G, * \rangle$ is a group, $g \in G$ and $\varphi\_g: G \to G$
is a mapping defined by $\varphi\_g (x) = g * x * g^{-1}$, then
$\varphi\_g: G \to G$ is an automorphism.  However, I misunderstood
the wordings in the question, and attempted to prove that the binary
structure $\langle \\{\varphi\_g \mid g \in G\\},\circ \rangle$ is
isomorphic to $\langle G, * \rangle$, where $\circ$ denotes the
composition of functions.  As a result, I let $\phi: \\{\varphi\_g
\mid g \in G\\} \to G$ be a mapping defined by $\phi(\varphi\_g) = g$.
The associativity, existence of identity element and existence of
inverse of the binary structure can be easily verified.  By the very
definition of $\phi$, it seems that its surjectivity is very obvious.
I continued to write "injectivity of $\phi$ is also obvious."

\\[
\phi(\varphi\_{g\_1}) = \phi(\varphi\_{g\_2}) \iff g\_1 = g\_2
  \implies \varphi\_{g\_1} = \varphi\_{g\_2}
\\]

I tried to turn the above rightward double arrow '$\implies$' into a
double-headed one.  If I *couldn't* do so, it means that
$\phi(\varphi\_{g\_1}) = \phi(\varphi\_{g\_2})$, though $g\_1 \neq
g\_2$.  I realised that I need to check whether $\phi$ was
*well-defined*.  As a result, I wasted an hour on some equations.
Suddenly, I stopped substituting $x = g\_1$ or $x = g\_2$ into
$\varphi\_{g\_1} (x) = \varphi\_{g\_2} (x)$.  Instead I took $\langle
G, * \rangle = \langle \R, \cdot \rangle$ and realized what I just did
was a waste of time.
