---
layout: post
title: "Definition of Content 0 Sets"
date: 2014-06-18 16:16:31 +0800
comments: true
categories: math
---

Motivation
---

I saw a minor difference the definition of Jordan content 0 sets
between two books.

Some basic definitions
---

I make this list *for my reference only*.  If I'm asked the *true*
meaning of some geometric concepts, such as *boundary*, by someone
*seriously*, then I can quickly refer to this list in order to remind
myself what ideas should be introduced.

<!-- more -->

Unless otherwise specified, assume that $A \in \R^n,\vect{x},
\vect{x}\_0,\vect{u},\vect{v} \in \R^n,\vect{u}\_i \in \R^n\,
\forall\,i \in \N$.

Norm
: The *norm* of $\vect{x}$ is defined as
  $\norm{\vect{x}} := \sqrt{\sum\limits\_{i = 1}^n x\_i^2}$.

Distance
: The *distance* between $\vect{u}$ and $\vect{v}$ is
  $\norm{\vect{u} - \vect{v}}$.

Open ball
: $\mathcal{B}\_r (\vect{x}\_0) := \\{\vect{x} \mid
  \norm{\vect{x} - \vect{x}\_0} < r\\}$

Interior point
: $\vect{u}$ is an *interior point in* $A$ if
  $\,\exists\,r > 0\text{ s.t. } \mathcal{B}\_r(\vect{u})\subseteq A$.
  [^1]

Interior of a set
: $\interior A := \\{\vect{u} \mid \exists\,r > 0 \text{ s.t. }
  \mathcal{B}\_r(\vect{u}) \subseteq A\\}$

Open set
: $A$ is *open* if $A = \interior A$.

Limit of $\\{\vect{u}\_k\\}$
: $\forall\,\varepsilon > 0,\exists\,K \in \N \text{ s.t. }
  \forall\,k \ge K, \norm{\vect{u}\_k - \vect{u}} < \varepsilon$  
  We denote it as
  $\lim\limits\_{k \to \infty} \vect{u}\_k = \vect{u}$.

Closed set
: $\vect{u}\_k \in A\,\forall\,k \in \N, \lim\limits\_{k \to \infty}
  \vect{u}\_k = \vect{u} \implies \vect{u}\in A$

Boundary
: $\partial A := \\{\vect{x}\mid\forall\,r > 0,\exists\,\vect{u}\in A,
  \vect{v} \notin A \text{ s.t. } \vect{u},\vect{v} \in
  \mathcal{B}\_r(\vect{x})\\}$

Exterior point
: $\vect{u}$ is an *exterior point in* $A$ if
  $\,\exists\,r > 0 \text{ s.t. } \mathcal{B}\_r(\vect{u}) \subseteq
  \R^n \setminus A$.

Exterior of a set
: $\exterior A := \\{\vect{u} \mid \exists\,r > 0 \text{ s.t. }
  \mathcal{B}\_r(\vect{u}) \subseteq \R^n \setminus A\\}$

Some claims
---

If a subset $A$ of $\R^n$ is contained in a closed subset $B$ of
$\R^n$, $\partial A \subseteq B$.
{: #claim1}

*Proof*. Let
$\vect{u} \in \partial A. \forall\,k \in \N,
\exists\,\vect{u}\_k \in \mathcal{B}\_{1/k}(\vect{u}) \cap A$.
Then $\lim\limits\_{k \to \infty} \vect{u}\_k = \vect{u}$
because $\forall\,\varepsilon > 0,K > 1/\varepsilon,
(k \ge K \implies \norm{\vect{u} - \vect{u}\_k} < 1/k
\le \varepsilon)$.  
$\because \vect{u}\_k \in A\,\forall\,k \in \N,
{\displaystyle \lim\_{k \to \infty} \vect{u}\_k = \vect{u}}$, and $B$
is closed.  
$\therefore\vect{u}\in B$.  
Q.E.D.

$\R^n = \interior A \sqcup \partial A \sqcup \exterior A$

*Proof*. Let $\vect{x} \notin \interior A$.  Then
$\forall\,r > 0,\exists\,\vect{u} \in \mathcal{B}\_r(\vect{x})
\setminus A$.

Case 1:
$\forall\,r > 0,\mbox{there also exists}\, \vect{v} \in
\mathcal{B}\_r(\vect{x}) \cap A$.  
Putting the two statements about $\vect{u}$ and $\vect{v}$ together,
we get
$\forall\,r > 0, \exists\,\vect{u} \notin A, \vect{v} \in A
\text{ s.t. } \vect{u},\vect{v} \in \mathcal{B}\_r(\vect{x})$.  
$\therefore \vect{x} \in \partial A$

Case 2:
$\neg\,(\forall\,r > 0,\exists\,\vect{v} \in \mathcal{B}\_r(\vect{x})
\cap A)$  
i.e. $\exists\,r > 0 \text{ s.t. } \nexists\,\vect{v} \in
\mathcal{B}\_r(\vect{x}) \cap A$.  
$\therefore \exists\,r > 0 \text{ s.t. } \vect{v} \in A \uparrow
\vect{v} \in \mathcal{B}\_r(\vect{x})$[^2]  
i.e. $\exists\,r > 0 \text{ s.t. } \vect{v} \in
\mathcal{B}\_r(\vect{x}) \implies \vect{v} \notin A$  
$\therefore \exists\,r > 0 \text{ s.t. } \mathcal{B}\_r(\vect{x})
\subseteq \R^n \setminus A$  
Hence $\vect{x}\in\exterior A$.  
Q.E.D.

From the definition of the *exterior* of $A$, it's clear that
$\exterior A \subseteq \R^n \setminus A$.  The reason is that
$\vect{u} \in \mathcal{B}\_r(\vect{u})$.  If $\vect{u} \in \exterior
A$, then $\exists\,r > 0 \text{ s.t. } \mathcal{B}\_r(\vect{u})
\subseteq \R^n \setminus A$.  Thus, $\vect{u} \in
\mathcal{B}\_r(\vect{u}) \subseteq \R^n \setminus A \implies \vect{u}
\notin A$.
{: #trivial1}

Another trivial fact is from the definition of the *interior* of $A$.
$\interior A \subseteq A$ due to the same reason for $\exterior A
\subseteq \R^n \setminus A$, that is, $\vect{u} \in
\mathcal{B}\_r(\vect{u})$.
$\vect{u} \in \interior A \implies \exists\,r > 0 \text{ s.t. }
\mathcal{B}\_r(\vect{u}) \subseteq A$.
Thus, $\vect{u} \in \mathcal{B}\_r(\vect{u}) \subseteq A \implies
\vect{u} \in A$.
{: #trivial2}

More definitions
---

Unless otherwise specified, assume that
$a\_i,b\_i \in \R\,\forall\,i \in \N$.

Closure
: $\overline{A} := \interior A \cup \partial A$

Bounded set
: $\exists\,M \ge 0 \text{ s.t. } \norm{\vect{x}} \ge M\,
  \forall\,\vect{x} \in A$

Generalized rectangle
: $\vect{I} := \vect{I\_1} \times \dots \times \vect{I\_n}$, where
  $\vect{I\_i} := [a\_i,b\_i]\,\forall\,i \in \N$.

Volume of generalized rectangle
: $\volume \vect{I} := \prod\limits\_{i = 1}^n (b\_i - a\_i)$

From the definition of the closure of a set, we can conclude that $A
\subseteq \overline{A}$ since $\R^n = \interior A \sqcup \partial A
\sqcup \exterior A$ and $A \cap \exterior A = \varnothing$.
([proved](#trivial1))  Thus, $A \subseteq \interior A \sqcup \partial
A = \overline{A}$.

We can extend the [first claim](#claim1) like this.

> If a subset $A$ of $\R^n$ is contained in a closed subset $B$ of
> $\R^n$, $\overline{A} \subseteq B$.
{: #ExtendedClaim}

*Proof*.  $\overline{A} := \interior A \cup \partial A$.  By the
[first claim](#claim1), it's already known that $\partial A \subseteq
B$, so it remains to show that $\interior A \subseteq B$.  Since
$\interior A \subseteq A$ ([proved](#trivial2)) and it's given that
$A \subseteq B$, we're done!  
Q.E.D.

Comparing the definitions
---

That's the definition of *Jordan content 0* sets.

Suppose $D$ is a bounded subset of $\R^n$.  
$\forall\,\varepsilon > 0,\exists$ generalized rectangle $\vect{I}\_1,
\dots,\vect{I}\_m \subseteq \R^n$ s.t.
$D \subseteq \bigcup\limits\_{j = 1}^m \vect{I}\_j$ and
$\sum\limits\_{j = 1}^m \volume \vect{I}\_j < \varepsilon$.

I have read another version of the definition, and the only difference
between those two versions is that $D$ is replaced by $\overline{D}$.
It took me a short while to understand why this is OK.

First, $\vect{I}\_j$ is closed for each $j$ since it's the Cartesian
product of closed intervals.  
$\bigcup\limits\_{j = 1}^m \vect{I}\_j$ is also closed.
(DeMorgan's Law)  
Hence, by the [extended claim](#ExtendedClaim), one can also write
$\overline{D} \subseteq \bigcup\limits_{j=1}^m \vect{I}_j$
instead of $D$ in the above definition.

---
[^1]:
    By writing "$$\subseteq$$", I mean "subset" here, but *not*
    "proper subset".

    According to 
    [$$\mathsf{Pr}\infty\mathsf{fWiki}$$][ProofWikiSubset], the use of
    "$$\subset$$" to denote "subset" is "not recommended", though the
    $$\rm \LaTeX$$ code for "$$\subset$$" is `$$\subset$$`.

[^2]: 
    According to [$$\mathsf{Pr}\infty\mathsf{fWiki}$$][ProWikiNand],
    "$$\uparrow$$" means "nand".

[ProofWikiSubset]: https://proofwiki.org/wiki/Symbols:Set_Operations_and_Relations#Subset.2C_Superset
[ProWikiNand]: https://proofwiki.org/wiki/Symbols:Logical_Operators#Nand
