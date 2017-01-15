---
layout: post
title: "Adding Integrals over Partitions"
date: 2014-06-21 12:25:35 +0800
comments: true
categories: math
---

In the error list of FitzPatrick's *Advanced Calculus*, it's said that
on p. 479, ln. 14–21, "it doesn't seem that $\vect{P}\_k$ can be
chosen as indicated..."  I spent some time to understand what
$\vect{P}^\*\_k$ was.

It took me an hour to see what's wrong with $\vect{P}\_k$.  It's
*much* easier to understand the words using figures.

<!-- more -->

What the $\vect{J}$'s are?
---

Suppose $\vect{I} \equiv [0,2] \times [0,2]$.

{% img /images/posts/Fitz479/partition1.svg 500 What the J's are? %}  
<small>[Source code][Partition1Src]</small>

$\vect{J}$ is any of the small rectangles in the above figure inside
$\vect{I}$.

Understanding $\vect{P}\_k (\vect{J})$
---

{% img /images/posts/Fitz479/partition2.svg 500 What the P_k (J)'s are? %}  
<small>[Source code][Partition2Src]</small>

$\vect{P}\_k (\vect{J})$ is a partition of $\vect{J}$.  In other
words, $\vect{P}\_k (\vect{J})$ contains a small black solid square
and the gray dashed lines inside the square.

The above figure *can't* be a partition of $\vect{I}$.

Understanding $\vect{P}^\*\_k (\vect{J})$
---

{% img /images/posts/Fitz479/partition3.svg 500 What the P^*_k (J)'s are? %}  
<small>[Source code][Partition3Src]</small>

$\vect{P}^\*\_k (\vect{J})$ is a refinement of $\vect{J}$.

[Partition1Src]: /downloads/code/Fitz479/partition1.tex
[Partition2Src]: /downloads/code/Fitz479/partition2.tex
[Partition3Src]: /downloads/code/Fitz479/partition3.tex
