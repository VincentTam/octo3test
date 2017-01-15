---
layout: post
title: "Some Thoughts on a Real-Valued Function"
date: 2015-08-04 22:28:52 +0800
comments: true
categories: math
---

Problem
-------

Spending so much time to work out [the locale support for dates][pp1]
and [valid HTML code][pp2] in my [second blog][blog2] which was
powered by Jekyll-Bootstrap, I *couldn't* recall this fact.

Suppose that $\mathcal{D}$ is a subset of $\R^2$ that contains an
$\varepsilon$-neighbourhood of a point <span class="myeqn"
markdown="0">$(x_0,y_0)$</span>.  If

1. $f: \mathcal{D} \to \R$ is has first-order partial derivatives in
the $\varepsilon$-neighbourhood of <span class="myeqn"
markdown="0">$(x_0,y_0)$</span>.
2. The first-order partial derivatives of $f$ are continuous at <span
class="myeqn" markdown="0">$(x_0,y_0)$</span>.

Then we can write

<div class="myeqn">
\begin{equation}
  \Delta f = \frac{\partial f}{\partial x} (x_0,y_0) \Delta x +
  \frac{\partial f}{\partial y} (x_0,y_0) \Delta y + \varepsilon_1
  \Delta x + \varepsilon_2 \Delta y,
  \label{fact}
\end{equation}
</div>

where <span class="myeqn" markdown="0">$\Delta f := f(x_0+\Delta
x,y_0+\Delta y)-f(x_0,y_0), \varepsilon_1$ and $\varepsilon_2 \to
0$</span> as $\Delta x$ and $\Delta y \to 0$.

<!-- more -->

The First-Order Approximation For a Differentiable Function
-----------------------------------------------------------

At first, I thought that equation \eqref{fact} followed from formula
\eqref{thm}.

<div class="myeqn">
\begin{equation}
  \lim_{\vect{h} \to \zeros}
  \frac{f(\vect{x}+\vect{h})-[f(\vect{x})+\langle\nabla
  f(\vect{x}),\vect{h}\rangle]}{\norm{\vect{h}}} = 0
  \label{thm}
\end{equation}
</div>

I forgot that this statement assumed the continuous differentiability
on *an open set*.  However, we only know that the first-order partial
derivatives are continuous *at one point* <span class="myeqn"
markdown="0">$(x_0,y_0)$</span>.

Solve an easier problem first
-----------------------------

This question should be much easier and much more intuitive if the
domain of the function $f$ in \eqref{fact} is one-dimensional.  Then,
by drawing a curve and sketching its tangent line at a point, one can
intuitively realise that the geometric meaning of $\varepsilon$.

In fact, one *constructs*

<div class="myeqn">
\begin{equation}
  \varepsilon (\Delta x) :=
    \begin{cases}
      \frac{\Delta f}{\Delta x}-f'(x_0) &\text{if }\Delta x \ne 0,\\
      0 &\text{if } \Delta x = 0,
    \end{cases}
  \label{def1}
\end{equation}
</div>

where <span class="myeqn" markdown="0">$\Delta f := f(x_0+\Delta
x)-f(x_0)$</span> in this section since $f$ is now one-dimensional.

Then one can make use of the differentiability of $f$ at $(x\_0)$ to
say that $\varepsilon \to 0$ as $\Delta x \to 0$.

To get the one-dimensional version of \eqref{fact}, we get rid of the
denominator by multiplying both sides by $\Delta x$ in the case of
$\Delta x \ne 0$.

<div class="myeqn">
\begin{equation}
  \begin{aligned}
    \varepsilon \Delta x &= \Delta f - f' (x_0) \Delta x\\
    \Delta f &= f' (x_0) \Delta x + \varepsilon \Delta x
  \end{aligned}
  \label{mult1}
\end{equation}
</div>

Observe that equality \eqref{mult1} also holds when $\Delta x = 0$.

Back to the problem
-------------------

### Make use of the previous section

From \eqref{def1}, we observe that $\varepsilon$ is defined as
the difference between a difference quotient between two points
<span class="myeqn" markdown="0">$x_0$</span> and <span class="myeqn"
markdown="0">$x_0+\Delta x$</span> and the derivative <span
class="myeqn" markdown="0">$f'(x_0)$</span>.  We can define <span
class="myeqn" markdown="0">$\varepsilon_1$</span> and <span
class="myeqn" markdown="0">$\varepsilon_2$</span> in a similar way.

<div class="myeqn">
\begin{align}
  &\begin{split}
    & \varepsilon_1(\Delta x,\Delta y) :=\\
    &\begin{cases}
      \frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x}-\frac{\partial
      f}{\partial x}(x_0,y_0) &{\small \text{if } \Delta x \ne 0},\\
      0 &\text{if } \Delta x = 0,
    \end{cases}
  \end{split}
  \label{def2a}\\

  &\begin{split}
    & \varepsilon_2(\Delta x,\Delta y) :=\\
    &\begin{cases}
      \frac{f(x_0+\Delta x,y_0+\Delta y) - f(x_0+\Delta x,y_0)}{\Delta
      y} - \frac{\partial f}{\partial y}(x_0+\Delta x,y_0) &\text{if }
      \Delta y \ne 0,\\
      0 &\text{if } \Delta y = 0,
    \end{cases}
  \end{split}
  \label{def2b}
\end{align}
</div>

We then multiply \eqref{def2a} and \eqref{def2b} by $\Delta x$ and
$\Delta y$ respectively, just like what we've done in \eqref{mult1}.

<div class="myeqn">
\begin{align}
  &\begin{split}
    \varepsilon_1(\Delta x,\Delta y) \Delta x =& f(x_0+\Delta x,y_0) -
    f(x_0,y_0)\\
    &- \frac{\partial f}{\partial x}(x_0,y_0) \Delta x
  \end{split}
  \label{mult2a}\\
  &\begin{split}
    \varepsilon_2(\Delta x,\Delta y) \Delta y =& f(x_0+\Delta
    x,y_0+\Delta y) - f(x_0+\Delta x,y_0)\\
    &- \frac{\partial f}{\partial y}(x_0+\Delta x,y_0) \Delta y
  \end{split}
  \label{mult2b}
\end{align}
</div>

The trick is to change the independent variables *one-by-one* since we
can only make use of partial derivatives.  After defining
\eqref{def2a}, there's *no* need to scratch our head for \eqref{def2b}
to fit the pizzle.  We may first try to use \eqref{def2a} to get
\eqref{mult2a}.  Then by observing the term $\Delta f$ in
\eqref{fact}, we realize that we should add the term <span
class="myeqn" markdown="0">$f(x_0+\Delta x,y_0+\Delta y)$ and remove
$f(x_0+\Delta x,y_0)$</span> so as to get $\Delta f$ in \eqref{fact}.

### Remaining problem

In \eqref{mult2b}, the partial derivative with respect to $y$ is taken
at <span class="myeqn" markdown="0">$(x_0+\Delta x,y_0)$</span>, which
*shouldn't* appear in \eqref{fact}.  Therefore, we need a way to get
rid of the $\Delta x$ inside the bracket.  That leads us to the one
*unused* condition---the second given condition in \eqref{fact}.

By the continuity of the first-order partial derivatives at <span
class="myeqn" markdown="0">$(x_0,y_0)$</span>,

<div class="myeqn">
\begin{equation}
  \lim_{\Delta x \to 0} \frac{\partial f}{\partial y}(x_0+\Delta
  x,y_0) = \frac{\partial f}{\partial y}(x_0,y_0)\\
  \lim_{\Delta x \to 0} \left ( \frac{\partial f}{\partial
  y}(x_0+\Delta x,y_0)
  - \frac{\partial f}{\partial y}(x_0,y_0) \right ) = 0
  \label{cts1}
\end{equation}
</div>

Thus, we define

<div class="myeqn">
\begin{equation}
  \varepsilon_3(\Delta x) := \frac{\partial f}{\partial y}(x_0+\Delta
  x,y_0) - \frac{\partial f}{\partial y}(x_0,y_0)
  \label{cts2}
\end{equation}
</div>

so that <span class="myeqn" markdown="0">$\varepsilon_3 \to 0$</span>
as $\Delta x \to 0$.  With \eqref{cts2}, we can replace the
first-order partial derivative with respect to $y$ at <span
class="myeqn" markdown="0">$(x_0+\Delta x,y_0)$</span> in
\eqref{mult2b} by the one at <span class="myeqn"
markdown="0">$(x_0,y_0)$</span>.

<div class="myeqn">
\begin{equation}
  \begin{split}
    \varepsilon_2(\Delta x,\Delta y) \Delta y =& f(x_0+\Delta
    x,y_0+\Delta y) - f(x_0+\Delta x,y_0)\\
    &- \left ( \frac{\partial f}{\partial y}(x_0,y_0) +
    \varepsilon_3(\Delta x) \right ) \Delta y
  \end{split}
  \label{b4repl}
\end{equation}
</div>

Therefore, from \eqref{b4repl}, we see that it's legitimate for us to
rename <span class="myeqn" markdown="0">$\varepsilon_2-\varepsilon_3$
as \varepsilon_2</span> to get an equation which looks more similar to
\eqref{mult2a} than \eqref{mult2b} does.

<div class="myeqn">
\begin{gather}
  \begin{split}
    &\varepsilon_2(\Delta x,\Delta y) \Delta y\\
    =& f(x_0+\Delta x,y_0+\Delta y) - f(x_0+\Delta x,y_0) -
    \frac{\partial f}{\partial y}(x_0,y_0) \Delta y
  \end{split}
  \label{mult2bb}\\
  \begin{split}
    &\varepsilon_1(\Delta x,\Delta y) + \varepsilon_2(\Delta x,\Delta
    y)\\
    =& f(x_0+\Delta x, y_0+\Delta y) - f(x_0,y_0)\\
    &- \frac{\partial f}{\partial x}(x_0,y_0) \Delta x -
    \frac{\partial f}{\partial y}(x_0,y_0) \Delta y \quad
    \text{(\eqref{mult2a}+\eqref{mult2bb})}
  \end{split}\\
  \begin{split}
    &f(x_0+\Delta x, y_0+\Delta y) - f(x_0,y_0)\\
    =& \frac{\partial f}{\partial x}(x_0,y_0) \Delta x +
    \frac{\partial f}{\partial y}(x_0,y_0) \Delta y +
    \varepsilon_1(\Delta x,\Delta y) + \varepsilon_2(\Delta x,\Delta
    y)
  \end{split}
  \label{result}
\end{gather}
</div>

The result \eqref{result} is what we desired in \eqref{fact}.

Generalisation to $n$-dimension
-------------------------------

By reusing the trick of changing the variables once at a time from
\eqref{def2a} to \eqref{mult2b}, and a suitable renaming and
rearrangment of terms, one can generalise the result in \eqref{fact}
to a function $f:\mathcal{D} \to \R$ defined on a subset $\mathcal{D}$
of $\R^n$ containing a $\varepsilon$-neighbourhood of a point
$\vect{x}_0 \in \R^n$.

<div class="myeqn">
\begin{equation}
  \Delta f = \langle \nabla f(\vect{x_0}) + \vect{\varepsilon},\Delta
  \vect{x} \rangle,
  \label{generalisation}
\end{equation}
</div>

<span class="myeqn" markdown="0">where $\Delta f :=
f(\vect{x_0}+\Delta \vect{x})-f(\vect{x_0})$ and $\vect{\varepsilon}
\to \zeros$ as $\Delta \vect{x} \to \zeros$.</span>

As you can see in \eqref{generalisation}, writing the statement in its
vector form is more concise than writing out each partial derivative
in \eqref{fact}.

[pp1]: /blog/2015/08/03/basic-jekyll-date-locale-support/
[pp2]: /blog/2015/05/23/added-w3c-validated-logos-to-some-pages/
[blog2]: /blog2
