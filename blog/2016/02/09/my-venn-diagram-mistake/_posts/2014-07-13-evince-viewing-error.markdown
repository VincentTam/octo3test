---
layout: post
title: "Evince Viewing Error"
date: 2014-07-13 18:39:52 +0800
comments: true
categories: SVG
---

| Evince | Firefox |  Sumatra PDF  | SVG  |
| :----: | :-----: | :-----------: | :--: |
|{% img /images/posts/EvinceTikZ/Evince.png 200 'img:1' ['Evince'] %} | {% img /images/posts/EvinceTikZ/FF.png 200 'img:2' ['Firefox'] %} | {% img /images/posts/EvinceTikZ/chrome.png 200 'img:3' ['Google Chrome'] %} | {% img /images/posts/EvinceTikZ/SVG.svg 200 'img:4' ['SVG'] %} |
|  bad   | ok[^1]  |     good      | good |

<small>The [Gist][src] for the $\rm \LaTeX$ source code of the TikZ
diagram</small>

This afternoon, while I was using TikZ to fill a triangle with line
pattern, I found that the filling pattern flowed out of the triangle.
Using the `clip` command doesn't help.  Initially, I thought it was
the problem of TikZ.  As a result, I tried searching "tikz fill
pattern triagnle", and *didn't* read anything useful.  Finally, I
found [a question on $\rm \LaTeX$ Stack Exchange][latexse], and
realized that it was a problem of the PDF viewer, instead of my use of
the markup language for graphics.  I tried using Mozilla's [pdf.js] to
open the file, but the grids *weren't* being rendered properly either.

Luckily, if I use [`pdf2svg`] to convert the PDF file to an SVG file,
the SVG file *doesn't* have such problem.

---
[^1]:
    The results are the *same* in Firefox on M\$ Windows and
    GNU/Linux.

[latexse]: http://tex.stackexchange.com/a/100706 "Why is this TikZ pattern spilling outside the path it fills? [closed]"
[pdf.js]: http://mozilla.github.io/pdf.js/
[`pdf2svg`]: http://www.cityinthesky.co.uk/opensource/pdf2svg/
[src]: https://gist.github.com/VincentTam/02391d6016da80df1ffa
