---
layout: post
title: "Limit of distances in metric spaces"
date: 2014-08-10 20:35:40 +0800
comments: true
categories: math
---

Let $X$ be a metric space and $q \in X$.  Suppose that sequence <span
class="myeqn" markdown="0">$\left\{ p_k \right\}$</span> in $X$
converges to a point $p$ in $X$.  Then, <span class="myeqn"
markdown="0">$\left\{ d(p_k,q) \right\}$</span> converges to $d(p,q)$.

<div class="myeqn">
\begin{align}
  & \therefore \forall \varepsilon \exists N \forall k (k \ge N
  \implies d(p_k,p) < \varepsilon) \label{eq2} \\
  & \abs{d(p_k,q) - d(p,q)} < \varepsilon \\
  & \iff d(p_k,q) - d(p,q) <
  \varepsilon \land d(p,q) - d(p_k,q) < \varepsilon \notag \\
  & d(p_k,q) - d(p,q) \le d(p,p_k) \iff d(p_k,q) \le
  d(p,q) + d(p,p_k) \label{eq4} \\
  & d(p,q) - d(p_k,q) \le d(p,p_k) \iff d(p,q) \le
  d(p_k,q) + d(p,p_k) \label{eq5}
\end{align}
</div>

\eqref{eq4}, and \eqref{eq5} follows from the Triangular Inequality.
Apply \eqref{eq2} to \eqref{eq4} and \eqref{eq5} to finish the proof.
Q.E.D.

Remark: Quantifications similar to \eqref{eq2} can be found in
[Wikipedia]'s entry for uniform continuity.

[Wikipedia]: https://en.wikipedia.org/wiki/Uniform_continuity#Local_continuity_versus_global_uniform_continuity
