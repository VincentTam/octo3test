---
layout: post
title: "Catalan Number With GNU MP Library"
date: 2017-01-28T00:58:30+01:00
categories: math
---

I have written some programs in C so that Catalan numbers and binomial
coefficients can be calculated.

<script
src="https://gist.github.com/VincentTam/985de63d527e04301da01d2b10c0b228.js"></script>

The program `catalan.c` does *not* work after $N = 17$ since too much
memory is consumed.  This has inspired me to write `catalan-mul.c`.

I have chosen C due to its speed.
