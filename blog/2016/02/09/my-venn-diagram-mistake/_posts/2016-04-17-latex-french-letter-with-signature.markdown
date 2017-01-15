---
layout: post
title: "$\\rm \\LaTeX$ French Letter with Signature"
date: 2016-04-17 17:15:38 +0800
comments: true
categories: [LaTeX, template]
---

Background
---

Same as my recent post [*Writting Letter With Bibliography*][pp1].

Problem
---

How to add a scanned signature to a $\rm \LaTeX$ document for the
`lettre` class?

![scanned signature to be added][sigfig]

<!-- more -->

My attempt
---

Searching "latex letter signature", I quickly find an article on
[texblog][sol].  If the `\name{}` has been defined at the beginning of
the letter, then adding `\forname` below the line

    \fromsig{\includegraphics[scale=1]{signature.jpg}} \\

will give you *another* name, and `{Your name}` will give you the
third one.  Moreover, the alignment of the sender's name *isn't*
right.

According to the documentation of `lettre`, the `\signature{}` command
accepts *only text* as its arguments.  I try redefining it, but the
alignment is still *wrong*.  As a result, I decided to do it the
*dirty* way:  I recalled the method of adding the sender's name at the
closing part in [Bio Teckna's model letter][modele].  The
`\begin{center}` environment is used.  However, to make it look like a
French letter, I used `\hspace{8cm}` to adjust the horizontal spacing.

{% render_code MaLettre/ltrsign.tex Sample $\rm \LaTeX$ French letter with signature %}

The final product can be viewed by clicking the link for the
[sample PDF with signature][pdf].

[pp1]: /blog/2016/04/16/writting-letter-with-bibliography/
[sigfig]: /downloads/code/MaLettre/sample-sign.jpg
[sol]: http://texblog.org/2010/05/04/latex-letter-signature-as-image/
[modele]: http://bio-teckna.fr/?p=1019
[pdf]: /downloads/ltrsign.pdf
