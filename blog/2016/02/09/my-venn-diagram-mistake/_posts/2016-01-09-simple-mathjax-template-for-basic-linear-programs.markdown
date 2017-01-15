---
layout: post
title: "Simple MathJax Template for Basic Linear Programs"
date: 2016-01-09 23:12:24 +0800
comments: true
categories: [LaTeX, MathJax, template]
---

Goal
---

To provide a good-looking template of basic linear programs for users
of [Mathematics Stack Exchange][mathse].

<div class="myeqn">
\[
  \begin{array}{cccll}
    \max &z=&x_1&+x_2 & \\
    \text{s.t.}& & & \phantom{+}x_2 + s_1 &= 8 \\
    & & -x_1&+x_2 - s_2&=-4 \\
    & & x_1&+x_2+s_3&= 12 \\
    & & & s_1,s_2,s_3 &\ge 0
  \end{array}
\]
</div>

<!-- more -->

Solution
---

{% codeblock lang:tex A minimum working example on Math Stack Exchange %}
\begin{array}{cccll}
  \max &z=&x_1&+x_2 & \\
  \text{s.t.}& & & \phantom{+}x_2 + s_1 &= 8 \\
  & & -x_1&+x_2 - s_2&=-4 \\
  & & x_1&+x_2+s_3&= 12 \\
  & & & s_1,s_2,s_3 &\ge 0
\end{array}
{% endcodeblock %}

Inadequacies
---

If you want a prettier template, you may see
[this $\rm TeX$--$\rm \LaTeX$ Stack Exchange question][75108].  I
tried added `@{}` in the first argument of the `array` environment to
eliminate the excessive inter-column space---this works great in $\rm
\LaTeX$.  However, neither `@{}` nor `\multicolumn{4}{l}{...}` is
processed by [MathJax].

[mathse]: http://math.stackexchange.com/
[75108]: http://tex.stackexchange.com/q/75108
[MathJax]: https://mathjax.org
