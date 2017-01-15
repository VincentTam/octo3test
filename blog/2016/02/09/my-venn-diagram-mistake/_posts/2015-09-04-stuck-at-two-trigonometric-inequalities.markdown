---
layout: post
title: "Stuck at Two Trigonometric Inequalities"
date: 2015-09-04 18:26:48 +0800
comments: true
categories: math
---

Problem
---

Suppose that $z = x + iy, x,y \in \R$.  Then $\abs{\sin z} \ge
\abs{\sin x}$ and $\abs{\sin z} \ge \abs{\sinh y}$.

<!-- more -->

Forgotten facts
---

I've forgotten many facts about complex variables learnt almost two
years ago.  For example, the defhinition of sines and cosines.  Eight
years ago, I can memorize well the trigonometric formulae.  Now, I
have difficulties in proving them.

<div class="myeqn">
\begin{align}
  \cos z &= \frac{e^{iz}+e^{-iz}}{2} \label{defa} \\
  \sin z &= \frac{e^{iz}-e^{-iz}}{2i} \label{defb}
\end{align}
</div>

Look at the hint
---

In the book that I'm reading, there're two formulae.

<div class="myeqn">
\begin{align}
  \abs{\sin z}^2 &= \sin^2 x + \sinh^2 y \label{hint1a} \\
  \abs{\cos z}^2 &= \cos^2 x + \sinh^2 y \label{hint1b}
\end{align}
</div>

Even though the problem can be solved once these two formulae are
accepted, I *don't* know why they're true.

Look further up
---

I found another two formulae.

<div class="myeqn">
\begin{align}
  \sin z &= \sin x \cosh y + i \cos x \sinh y \label{hint2a} \\
  \cos z &= \cos x \cosh y - i \sin x \sinh y \label{hint2b}
\end{align}
</div>

I tried to verify \eqref{hint2a} after having read \eqref{defhb}.

First failed attempt
---

<div class="myeqn">
\begin{equation}
  \begin{aligned}
    &\quad\: \sin z \\
    &= \frac{e^{iz} - e^{-iz}}{2i} \\
    &= \frac{e^{i(x + iy)} - e^{-i(x + iy)}}{2i} \\
    &= \frac{e^{ix} e^{-y} - e^{-ix} e^{y}}{2i} \\
    &= \frac{e^{ix} - e^{-ix}}{2i} e^{-y} + \frac{e^{-ix - y}}{2i} -
    \frac{e^{-ix} e^{y}}{2i} \\
    &= \sin x \cdot e^{-y} + \frac{e^{-ix}}{i} \cdot
    \frac{e^{-y} - e^{y}}{2}\\
    &= \sin x \cdot e^{-y} + i e^{-ix} \frac{e^{y} - e^{-y}}{2} \\
    &= \sin x \cdot e^{-y} + i e^{-ix} \sinh y
  \end{aligned}
  \label{fail1}
\end{equation}
</div>

I was *stuck* at this point because I *didn't* know how to change
\eqref{fail1} to \eqref{hint2a}.

More forgotten facts
---

In fact, some simple identities involving hyperbolic functions can
simplify matters.

<div class="myeqn">
\begin{align}
  \cosh z &= \frac{e^{y}+e^{-y}}{2} \label{defha} \\
  \sinh z &= \frac{e^{y}-e^{-y}}{2} \label{defhb} \\
  \cos(iy) &= \cosh y \label{idha} \\
  \sin(iy) &= i \sinh y \label{idhb}
\end{align}
</div>

Then I realised that \eqref{hint2a} follows from the compound angle
formula.

<div class="myeqn">
\begin{equation}
  \begin{aligned}
    \sin(x + iy) &= \sin x \cos(iy) + \cos x \sin(iy) \\
    &= \sin x \cosh y + i \cos x \sinh y
  \end{aligned}
  \label{link}
\end{equation}
</div>

Thus, I need to prove something more general.

Compound angle formulae
---

<div class="myeqn">
\begin{align}
  \cos(z_1 + z_2) &= \cos z_1 \cos z_2 - \sin z_1 \sin z_2
  \label{cpda} \\
  \sin(z_1 + z_2) &= \sin z_1 \cos z_2 + \cos z_1 \sin z_2
  \label{cpdb}
\end{align}
</div>

I tried proving \eqref{cpdb} in the *same* way like \eqref{fail1}.

Second failed attempt
---

<div class="myeqn">
\begin{equation}
  \begin{aligned}
    &\quad\: \sin(z_1 + z_2) \\
    &= \frac{e^{i(x_1 + iy_1 + x_2 + iy_2)} - e^{-i(x_1 + iy_1 + x_2 +
    iy_2)}}{2i} \\
    &= \frac{1}{2i} [e^{i(x_1 + x_2)} e^{-(y_1 + y_2)}
    - e^{-i(x_1 + x_2)} e^{y_1 + y_2}]
  \end{aligned}
  \label{fail2}
\end{equation}
</div>

Then I *didn't* know how to continue.

Reasons for the above failures
---

- \eqref{fail1} and \eqref{fail2} involve fractions, which are more
difficult to deal with than those *without* fractions.
- In order to change \eqref{fail1} to \eqref{hint2a}, some sort of
factorisation is needed, and this requires creating a term that fits
the puzzle.  Again, this *isn't* so easy.

Just use '+', '-' and '×', no '÷'
---

From \eqref{defa} and \eqref{defb}, one should know that cosines,
sines and exponents are *related*.  For any $z_1, z_2 \in \C$, the
formula for $\sin(z_1 + z_2)$ and $\cos(z_1 + z_2)$ *aren't* so easy,
but the one for $e^{z_1 + z_2}$ is *simple*.  Making use of the
Euler's formula for complex numbers, one has

<div class="myeqn">
\begin{align}
  e^{iz_1} &= \cos z_1 + i \sin z_1 \label{eulerz1} \\
  e^{iz_2} &= \cos z_2 + i \sin z_2 \label{eulerz2}
\end{align}
</div>

Multiply \eqref{eulerz1} by \eqref{eulerz2}.

<div class="myeqn">
\begin{equation}
  \begin{aligned}
    &\quad\: e^{i(z_1 + z_2)} \\
    &= (\cos z_1 \cos z_2 - \sin z_1 \sin z_2) \\
    &\quad\: + i(\cos z_1 \sin z_2 + \sin z_1 \cos z_2)
  \end{aligned}
  \label{eiz12a}
\end{equation}
</div>

Remembering Euler's formula

<div class="myeqn">
\[
  e^{i(z_1 + z_2)} = \cos(z_1 + z_2) + i \sin(z_1 + z_2),
\]
</div>

can we say immediately that \eqref{hint2a} and \eqref{hint2b} are
true?  No, since there's *no* guarantee that $\cos(z_1 + z_2)$ and
$\sin(z_1 + z_2)$ are real.  However, I kept working on \eqref{eiz12a}
so that \eqref{hint2a} and \eqref{hint2b} were proved.

From \eqref{defa} and \eqref{defb}, it's trivial that

<div class="myeqn">
\[
  \sin(-z) = -\sin z \text{ and } \cos(-z) = \cos z.
\]
</div>

Therefore, we write an analog of \eqref{eiz12a} for $e^{-i(z_1 +
z_2)}$.

<div class="myeqn">
\begin{equation}
  \begin{aligned}
    &\quad\: e^{-i(z_1 + z_2)} \\
    &= [\cos (-z_1) \cos (-z_2) - \sin (-z_1) \sin (-z_2)] \\
    &\quad\: + i[\cos (-z_1) \sin (-z_2) + \sin (-z_1) \cos (-z_2)] \\
    &= (\cos z_1 \cos z_2 - \sin z_1 \sin z_2) \\
    &\quad\: - i(\cos z_1 \sin z_2 + \sin z_1 \cos z_2)
  \end{aligned}
  \label{eiz12b}
\end{equation}
</div>

<div class="myeqn">
\[
  \begin{aligned}
    &\quad\: \cos(z_1 + z_2) \quad
    (\text{by } \frac{\eqref{eiz12a} + \eqref{eiz12b}}{2}) \\
    &= \frac{e^{i(z_1 + z_2) - e^{-i(z_1 + z_2)}}}{2} \\
    &= \cos z_1 \cos z_2 - \sin z_1 \sin z_2
  \end{aligned}
\]
</div>

\eqref{hint2a} can be derived in a similar way.

Remaining work
---

\eqref{hint1b} can be derived from \eqref{hint2b} by using $\sin^2 x +
\cos^2 x = 1$ and $\cosh^2 x - \sinh^2 x = 1$.

<div class="myeqn">
\[
  \begin{aligned}
    &\quad\, \abs{\cos z}^2 \\
    &= \cos^2 x \cosh^2 y + \sin^2 x \sinh^2 y \\
    &= \cos^2 x (1 + \sinh^2 y) + (1 - \cos^2 x) \sinh^2 y \\
    &= \cos^2 x + \sinh^2 y
  \end{aligned}
\]
</div>

The derivation of \eqref{hint1a} from \eqref{hint2a} is left as
exercise.
