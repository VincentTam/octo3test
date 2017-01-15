---
layout: post
title: "$\\rm \\LaTeX$ Template for Essays"
date: 2014-03-16 00:28:20 +0800
comments: true
categories: [LaTeX, template]
---

Introduction
---

This is a $\rm \LaTeX$ template for writing an article.

Sample output
---

[View the sample PDF online.][sample_output]

<!-- more -->

Sample code
---

{% gist 9569005 %}

Explanation of code in "latex-sample.tex"
---

For the one-inch margin, I have used the geometry package to do so.
(line 2) The font size has been set to 12. (line 1) The 1.5 line
spacing has been implemented. (lines 7–8)

The APA-style reference list was automatically generated using the
biblatex package along with the biber backend. (lines 15–17,107)

Comparison of $\rm \LaTeX$ and other technologies
---

I personally appreciate the beauty of Professor Donald Knuff's
Computer Modern typefaces, and thus the font Computer Modern Roman has
been chosen through the whole PDF file.  In terms the number of
trailing hyphenations in each line, and other relating in-word spacing
statistics, $\rm \LaTeX$ is better than an array of
internationally-acclaimed proprietary softwares, such as Microsoft
Word and Abode InDesign[^1].  In addition, the typesetting of
Microsoft is incorrect, whereas $\rm \LaTeX$ gives the correct kerning
and ligatures of characters, apart from rendering "ancient and rare
ligatures"[^2].  The staff in the Department of Engineering at the
University of Cambridge has made
[a more comprehensive and detailed comparison][here] of WYSIWYG
(What-You-See-Is-What-You-Get) editors and $\rm \LaTeX$.


---

I've found [$\rm \LaTeX$-Online-Compiler][compiler], which is useful
for testing $\rm \LaTeX$ code.

(Last edited on APR 26TH, 2014)

----
[^1]:
    Visual comparison between LaTeX and Word output (hyphenation,
    typesetting, ligatures etc) on
    [$\rm \TeX$--$\rm \LaTeX$ Stack Exchange][texse110133].

[^2]:
    Taraborelli, D.  (July 4, 2011).  *The Beauty of $\rm \LaTeX$*.
    Retrieved from <http://nitens.org/taraborelli/latex>

[texse110133]: http://tex.stackexchange.com/q/110133
[sample_output]: /downloads/latex-sample.pdf
[here]: http://www.eng.cam.ac.uk/help/tpl/textprocessing/latex_advocacy.html
[compiler]: http://latex.informatik.uni-halle.de/latex-online/latex.php
