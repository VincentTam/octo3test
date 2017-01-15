---
layout: post
title: "$\\rm \\LaTeX$ Template for Simplex Tableaux"
date: 2015-12-20 20:19:54 +0800
comments: true
categories: [LaTeX, template]
---

Goal
---

To provide a good-looking template of simplex tableaux for users of
[Mathematics Stack Exchange][mathse].

<div class="myeqn">
\[
  \begin{array}{crrrrrrr|l}
               & x_1 & x_2 & x_3 & x_4 & x_5 & x_6 &  x_7 &        \\ \hline
           x_4 &   0 &  -3 &   7 &   1 &   0 &   0 &    2 & 2M  -4 \\
           x_5 &   0 &  -9 &   0 &   0 &   1 &   0 &   -1 & -M  -3 \\
           x_6 &   0 &   6 &  -1 &   0 &   0 &   1 & -4^* & -4M +8 \\
           x_1 &   1 &   0 &   1 &   0 &   0 &   0 &    1 &      M \\ \hline
               &   0 &   1 &   1 &   0 &   0 &   0 &    2 &     2M \\
  \text{ratio} &     &     &   1 &     &     &     &  1/2 &
  \end{array}
\]
</div>

<!-- more -->

Solution
---

{% codeblock lang:tex A minimum working example %}
\begin{equation*}
  \begin{array}{crrrrrrr|l}
               & x_1 & x_2 & x_3 & x_4 & x_5 & x_6 &  x_7 &        \\ \hline
           x_4 &   0 &  -3 &   7 &   1 &   0 &   0 &    2 & 2M  -4 \\
           x_5 &   0 &  -9 &   0 &   0 &   1 &   0 &   -1 & -M  -3 \\
           x_6 &   0 &   6 &  -1 &   0 &   0 &   1 & -4^* & -4M +8 \\
           x_1 &   1 &   0 &   1 &   0 &   0 &   0 &    1 &      M \\ \hline
               &   0 &   1 &   1 &   0 &   0 &   0 &    2 &     2M \\
  \text{ratio} &     &     &   1 &     &     &     &  1/2 &
  \end{array}
\end{equation*}
{% endcodeblock %}

More tableaux
---

(Added on DEC 13TH, 2016)

Two separated simplex tableaux created by the `array` environment
*aren't* vertically aligned.  The visual effect *isn't* good.  As a
result, I merged them to one big `array`.

<div class="myeqn">
\begin{equation*}
  \begin{array}{rrrrrrr|r}
      &  x_1 &  x_2 &  x_3 &  s_1 &    s_2 &  s_3 &       \\ \hline
  s_1 &   -2 &    0 &   -2 &    1 &      0 &    0 &   -60 \\
  s_2 &   -2 & -4^* &   -5 &    0 &      1 &    0 &   -70 \\
  s_3 &    0 &   -3 &   -1 &    0 &      0 &    1 &   -27 \\ \hline
      &    8 &   10 &   25 &    0 &      0 &    0 &     0 \\ \hline\hline
  s_1 & -2^* &    0 &   -2 &    1 &      0 &    0 &   -60 \\
  x_2 &  1/2 &    1 &  5/4 &    0 &   -1/4 &    0 &  35/2 \\
  s_3 &  3/2 &    0 & 11/4 &    0 &   -3/4 &    1 &  51/2 \\ \hline
      &    3 &    0 & 25/2 &    0 &    5/2 &    0 &  -175 \\ \hline\hline
  x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
  x_2 &    0 &    1 &  3/4 &  1/4 &   -1/4 &    0 &   5/2 \\
  s_3 &    0 &    0 &  5/4 &  3/4 & -3/4^* &    1 & -39/2 \\ \hline
      &    0 &    0 & 19/2 &  3/2 &    5/2 &    0 &  -265 \\ \hline\hline
  x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
  x_2 &    0 &    1 &  1/3 &    0 &      0 & -1/3 &     9 \\
  s_2 &    0 &    0 & -5/3 &   -1 &      1 & -4/3 &    26 \\ \hline
      &    0 &    0 & 41/3 &    4 &      0 & 10/3 &  -330
  \end{array}
\end{equation*}
</div>

{% codeblock lang:tex A sample simplex tableau http://math.stackexchange.com/a/2053889/290189 %}
\begin{equation*}
  \begin{array}{rrrrrrr|r}
      &  x_1 &  x_2 &  x_3 &  s_1 &    s_2 &  s_3 &       \\ \hline
  s_1 &   -2 &    0 &   -2 &    1 &      0 &    0 &   -60 \\
  s_2 &   -2 & -4^* &   -5 &    0 &      1 &    0 &   -70 \\
  s_3 &    0 &   -3 &   -1 &    0 &      0 &    1 &   -27 \\ \hline
      &    8 &   10 &   25 &    0 &      0 &    0 &     0 \\ \hline\hline
  s_1 & -2^* &    0 &   -2 &    1 &      0 &    0 &   -60 \\
  x_2 &  1/2 &    1 &  5/4 &    0 &   -1/4 &    0 &  35/2 \\
  s_3 &  3/2 &    0 & 11/4 &    0 &   -3/4 &    1 &  51/2 \\ \hline
      &    3 &    0 & 25/2 &    0 &    5/2 &    0 &  -175 \\ \hline\hline
  x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
  x_2 &    0 &    1 &  3/4 &  1/4 &   -1/4 &    0 &   5/2 \\
  s_3 &    0 &    0 &  5/4 &  3/4 & -3/4^* &    1 & -39/2 \\ \hline
      &    0 &    0 & 19/2 &  3/2 &    5/2 &    0 &  -265 \\ \hline\hline
  x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
  x_2 &    0 &    1 &  1/3 &    0 &      0 & -1/3 &     9 \\
  s_2 &    0 &    0 & -5/3 &   -1 &      1 & -4/3 &    26 \\ \hline
      &    0 &    0 & 41/3 &    4 &      0 & 10/3 &  -330
  \end{array}
\end{equation*}
{% endcodeblock %}

Lessons learnt
---

In [Mathematics Stack Exchange][mathse], *never* leave an empty line
inside the `array` environment.  Otherwise, the code *won't* work.

[mathse]: http://math.stackexchange.com/
