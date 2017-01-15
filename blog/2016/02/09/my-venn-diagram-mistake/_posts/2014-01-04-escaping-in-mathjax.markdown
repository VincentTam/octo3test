---
layout: post
title: "Escaping '$' in MathJax"
date: 2014-01-04 18:09:00 +08:00
categories: MathJax
comments: true
---

Anyone who are used to $\rm \LaTeX$'s `$` character`$` for switching
to inline math mode would like to use the same command for the same
thing on [MathJax], which suggests the use of backslashed parentheses
to enclose an inline math equation.  As a result, in
[the very first part][doc] of [MathJax]'s official documentation, it
contains several lines code for that.

After pasting the code inside the `<head>` tag, the above problem is
solved, but this method creates *another* problem.

Imagine that you want to compare the price of a product of different
companies.  You then typed *two prices on the same line*.

{% codeblock lang:html %}
<p>...</p>
<br />
<p>Nowadays, it costs nearly $500.  In the past, it only costs around
$300.  It's too expensive!</p>
<br />
<p>...</p>
{% endcodeblock %}

Then the web browser will interpret the contents in this way:

{% img /images/posts/EscMathJax/wrong.png 'Wrongly interpreted contents' ['wrong contents'] %}

In order to get the problem fixed, I searched "mathjax escape dollar
sign" and found [a Stack Overflow question][so8773586] very useful.
Following the first answer for the question, I managed to get it
right.  That is, to change the it like this:

{% codeblock lang:html %}
<p>...</p>
<br />
<p>Nowadays, it costs nearly <span class="tex2jax_ignore">$</span>500.
In the past, it only costs around
<span class="tex2jax_ignore">$</span>300.  It's too expensive!</p>
<br />
<p>...</p>
{% endcodeblock %}

{% img /images/posts/EscMathJax/correct.png 'Correctly interpreted contents' ['correct contents'] %}

[MathJax]: http://www.mathjax.org
[doc]: http://docs.mathjax.org/en/latest/start.html#tex-and-latex-input
[so8773586]: http://stackoverflow.com/q/8773586/ "mediawiki mathjax need to use escape $x$"
