---
layout: post
title: "Evaluated a Convolution Integral"
date: 2015-02-28 19:26:05 +0800
comments: true
categories: math
---

Yesterday afternoon, I did a convolution integral to show that a
finite sum of i.i.d. $X_i \sim \Exp(\lambda)$ is Gamma distributed.

<div class="myeqn">
\[
\begin{aligned}
f_{X_{i_1}} * f_{X_{i_2}}(x) =& \int_{-\infty}^{\infty} f_{X_{i_1}}(z)
f_{X_{i_2}}(x - z) \ud z \\
=& \int_{0}^{x} (\lambda e^{-\lambda z}) (\lambda e^{-\lambda (x -
z)}) \ud z \\
=& \int_{0}^{x} \lambda^2 e^{-\lambda x} \ud z \\
=& \lambda^2 x e^{-\lambda x}
\end{aligned}
\]
</div>

Using the same technique, one can prove the claim by induction.
What's written above is the base case.

<div class="myeqn">
\[
\begin{aligned}
f_{\sum\limits_{j = 1}^{k + 1} X_{i_j}}(x) =& f_{\sum\limits_{j =
1}^{k} X_{i_j} + X_{i_{k + 1}}}(x) \\
=& f_{\sum\limits_{j = 1}^{k} X_{i_j}} * f_{X_{i_{k + 1}}}(x) \\
=& \int_{-\infty}^{\infty} f_{\sum\limits_{j = 1}^{k} X_{i_j}}(z)
f_{X_{i_{k + 1}}}(x - z) \ud z \\
=& \int_{0}^{x} \left (\frac{\lambda^k z^{k - 1} e^{-\lambda z}}{(k -
1)!} \right ) (\lambda e^{-\lambda (x - z)}) \ud z \\
=& \int_{0}^{x} \frac{\lambda^{k + 1} e^{-\lambda x}}{(k - 1)!} z^{k -
1} \ud z \\
=& \frac{\lambda^{k + 1} e^{-\lambda x}}{(k - 1)!} \frac{x^k}{k} \\
=& \frac{\lambda^{k + 1} x^k e^{-\lambda x}}{k!}
\end{aligned}
\]
</div>
