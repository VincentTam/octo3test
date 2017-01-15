---
layout: post
title: "Typeset Acute Accents"
date: 2014-10-26 00:13:27 +0800
comments: true
categories: LaTeX
---

Target
---

Typeset 'é' with in $\rm \LaTeX$.

![target](/images/posts/TypesetAccents/target.jpg)

<!-- more -->

Problem
---

![failed](/images/posts/TypesetAccents/problem.jpg)

{% codeblock A failed attempt lang:tex %}
\documentclass[12pt]{standalone}
\begin{document}
I went to café yesterday.
\end{document}
{% endcodeblock %}

Method
---

Add the `babel` package.

{% codeblock A minimum working example lang:tex %}
\documentclass[12pt]{standalone}
\usepackage{fontspec}
\usepackage[french]{babel}
\begin{document}
I went to café yesterday.
\end{document}
{% endcodeblock %}
