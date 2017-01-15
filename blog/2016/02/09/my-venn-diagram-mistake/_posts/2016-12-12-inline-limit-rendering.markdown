---
layout: post
title: "Inline Limit Rendering"
date: 2016-12-12 20:16:15 +0100
comments: true
external-url: http://meta.math.stackexchange.com/a/12850/290189
categories: [LaTeX]
---

Problem
---

In the past, I know two ways of writing a limit using $\rm \LaTeX$.

1. $\lim_{x \to 1} \frac{1}{x^2}$ looks OK.

        $\lim_{x \to 1} \frac{1}{x^2}$
    {:.cli}

2. $\displaystyle \lim_{x \to 1} \frac{1}{x^2}$ looks better, but it
occupies more than one line's vertical space.

        $\displaystyle \lim_{x \to 1} \frac{1}{x^2}$
    {:.cli}


For option (1), including limits in inline equations by `_` *doesn't*
look good since $x \to 1$ *isn't* placed at the bottom of $\lim$.

If we want the text to occupy less space to save paper, then option
(2) *isn't* good.  In order to see another drawback of this option, I
have written some long (and meaningless) sentences here, so that the
fraction in this paragraph appears in the middle.  Although I seldom
write in English, I have tried my best to illustrate my ideas with
words.  The vertical space created by the fraction in display style
$\displaystyle \frac{1}{x^2}$ *doesn't* match with the line separation
of other lines in the paragraph.  If you have already reached this
line but you don't understand what I'm saying, I'm write more so as to
wrap the fraction with a chuck of text.

Goal
---

To create an inline limit $\lim\limits_{x \to 1} \frac{1}{x^2}$ which
looks better in the middle of a paragraph.  Fames ac turpis egestas.
Duis ultricies urna. Etiam enim urna, pharetra suscipit, varius et,
congue quis, odio. Donec lobortis, elit bibendum euismod faucibus,
$\lim\limits_{x \to 1} \frac{1}{x^2}$ velit nibh egestas libero, vitae
pellentesque elit augue ut massa.  Praesent vel ligula. Nam venenatis
neque quis mauris. Proin felis. Cum sociis natoque penatibus et magnis
dis parturient montes, nascetur ridiculus mus. Aliquam quam.

<!-- more -->

Solution
---

Use `\lim\limits_{x \to 1} \frac{1}{x^2}` instead.
