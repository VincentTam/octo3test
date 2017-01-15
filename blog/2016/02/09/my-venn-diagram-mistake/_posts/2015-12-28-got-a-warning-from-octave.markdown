---
layout: post
title: "Got a Warning from Octave"
date: 2015-12-28 23:11:59 +0800
comments: true
categories: Octave
---

Background
---

To verify [the inequality][1591435]

<div class="myeqn">
\[
  \left(\sqrt{\frac{a+b}{c}}+\sqrt{\frac{b+c}{a}}+\sqrt{\frac{c+a}{b}}
  \right)^2\ge\frac{16}{3(a+b)(b+c)(c+a)}
\]
</div>

found on Math Stack Exchange, I wrote the following Octave script.

{% render_code test.m A small script to verify the inequality %} 

Problem
---

The above script did the calculations, but *a warning message
appeared*.

    $ octave -q test.m
    warning: function ./test.m shadows a core library function
    A =  0.60000
    B =  0.24101
    C =  31.975
    ans =  24.691
{:.cliUB}

**How can I run this script without the warning?**

<!-- more -->

Solution
---

Change the file name of the script to an uncommon name.

    $ mv test.m test1.m
    $ octave -q test1.m
    A =  0.60000
    B =  0.24101
    C =  31.975
    ans =  24.691
{:.cliUB}

[1591435]: http://math.stackexchange.com/q/1591435
