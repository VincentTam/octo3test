---
layout: post
title: "Display of Calligraphic Font by MathJax in Chromium"
date: 2015-12-24 13:05:30 +0800
comments: true
categories: MathJax
---

Background
---

### CSS style of this blog

I use [Solarized] theme with light background.  IMHO, it is less
tiring to look at a light background.  I've chosen pink as the text
colour.

### Contents of this blog

Apart from technical stuff, I often post math containing calligraphic
font, for example

1. [*Injectivity of Stable Mappings*][pp1]
2. [*Definition of Content 0 Sets*][pp2]
3. [*Archimedean Sequence of Partitions of a Square*][pp3]
4. [*Composition of Limits*][pp4]

I used Mozilla Firefox, and I *didn't* see problem on the display of
`\mathcal`.


Problem
---

Three months ago, I wrote something about Zorn's Lemma and Hausdorff
spaces.  In the post [*Normal Compact $T_2$ Spaces*][pp5], I observed
that the math display was *abnormal*.  Due to homework and exams, I
delayed the investigation into this technical problem.

![mathcal display error][err]

Normally, the foreground colour of the math expression is the *same*
as that of normal inline text.  In the above figure, <span
class="myeqn" markdown="0">"$T_2$" is in pink.  However, $U_y,
V_y$</span> *aren't*.

<!-- more -->

Discussion
---

### Look into the code

It is normal for me to inspect the HTML elements.

#### Element inspected

![HTML element inspected][img]

#### Interpreted HTML in Chromium

![HTML code in the inspector][inspect]

The above math expression is in *black* rather than *pink* because it
is rendered as a PNG *image*.

I confirmed this by looking at the list of loaded resources.

![list of loaded PNG][png_list]

### Is this problem browser-specific?

I tried opening [the blog article][pp5] in Mozilla Firefox, and I
*didn't* see any problem.

<picture class="fancybox" title="result in Firefox">
  <source srcset="/images/posts/Mathcal/ff487.png"
    media="(min-width: 490px)"></source>
  <img alt="result in Firefox"
    src="/images/posts/Mathcal/ff300.png" />
</picture>

Cause
---

Based on the above observations, I suspected that the presence of a
calligraphic font triggered this fallback of fonts.  In order to test
this, I did an experiment on my local MathJax test page:  I had a math
expression containing `\mathcal` and one without.  I put them in
different order, and observed the difference in the loaded PNG.

### Calligraphic font at the bottom

<picture class="fancybox" title="Visual effect of \mathcal at the
bottom">
  <source srcset="/images/posts/Mathcal/view1-364.png"
    media="(min-width: 370px)"></source>
  <img alt="Visual effect of \mathcal at the bottom"
    src="/images/posts/Mathcal/view1-300.png" />
</picture>

![PNG list when \mathcal at last][b4cal]

Only the curly 'C' is loaded as PNG, while the rest *aren't*.

{% render_code Source code for the above sample page mathcal/b4cal.html %}

### Calligraphic font at the bottom

<picture class="fancybox" title="Visual effect of \mathcal at the
top">
  <source srcset="/images/posts/Mathcal/view2-364.png"
    media="(min-width: 370px)"></source>
  <img alt="Visual effect of \mathcal at the top"
    src="/images/posts/Mathcal/view2-300.png" />
</picture>

![PNG list when \mathcal at first][cal1st]

Everything (after the curly 'C') are loaded as PNG.

{% render_code mathcal/cal1st.html Source code for the above sample page %}

Therefore, my claim is verified.  *Unluckily*, I failed to find any
solution to this problem on Google.

Reasons for *not* finding a solution
---

1. This problem *doesn't* affect the content.
2. This problem is browser-specific---it *doesn't* appear in Mozilla
   Firefox.
3. It is possible that this issue will be automatically fixed by a
   future upgrade, and a solution of this problem will be transient.

I've better solve math problems instead of technical ones since math
is always true.

Some off-topic stuff
---

I started writing this post on Christmas Eve, and I finished it at
Christmas.

[Solarized]: http://erikzaadi.com/2012/04/22/solarized-color-scheme-for-octopress/ "Source code of Solarized theme for Octopress"
[pp1]: /blog/2014/06/17/injectivity-of-stable-mappings/
[pp2]: /blog/2014/06/18/definition-of-content-0-sets/
[pp3]: /blog/2014/06/19/archimedean-sequence-of-partitions-of-a-square/
[pp4]: /blog/2014/11/08/composition-of-limits/
[pp5]: /blog/2015/09/28/normal-compact-t2-spaces/
[err]: /images/posts/Mathcal/err.png "mathcal display error"
[img]: /images/posts/Mathcal/img.png "HTML element inspected"
[inspect]: /images/posts/Mathcal/inspect.png "HTML code shown"
[png_list]: /images/posts/Mathcal/png-list.png "list of loaded PNG"
[b4cal]: /images/posts/Mathcal/b4cal.png "PNG list when \mathcal at last"
[cal1st]: /images/posts/Mathcal/cal1st.png "PNG list when \mathcal at first"

*[IMHO]: In my humble opinion
*[PNG]: Portable Network Graphics
