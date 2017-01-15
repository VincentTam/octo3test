---
layout: post
title: "My Venn Diagram Mistake"
date: 2016-02-09 14:24:54 +0800
comments: true
categories: math
---

Background
---

I tried [this Mathematics Stack Exchange question][mse1635782] by
drawing a Venn Diagram.

<picture class="fancybox" title="A 4-set Venn Diagram">
  <source srcset="https://i.stack.imgur.com/jbsrG.png"
    media="(min-width: 400px)"></source>
  <img alt="A 4-set Venn Diagram" width="300"
    src="https://i.stack.imgur.com/jbsrG.png" />
</picture>

Problem
---

A downvote was quickly casted on my answer below which a comment about
the non-existence of a Venn diagram with 4 sets was left.  I clicked
on [the link to another question][mse825984] in that comment to
understand why I got this downvote: **Why a 4-set Venn diagram
*doesn't* exist?**

Explanation
---

I understood the arguments of Joebot's answer up to the "application
of binomial theorem", but I *didn't* understand the Euler's formular.
In fact, for any 3-D object with edges, vertices and faces, one can
represent it by a 2-D planar graph, on which the outermost region also
represents one of the faces of the 3-D object.  Thus, the Euler's
formula for any 3-D object can be seen on a 2-D planar graph.  I'm
amazed that this can be proved by mathematical induction on the number
of regions on the 2-D graph (which corresponds to that of faces of the
3-D object).  IMHO, this should be taught in high schools as examples
of mathematical induction, instead of divisibility of integers, which
can be done better using modular arithmetic.

[mse1635782]: http://math.stackexchange.com/q/1635782/290189
[mse825984]: http://math.stackexchange.com/a/825984/290189
