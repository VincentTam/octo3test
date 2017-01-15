---
layout: post
title: "Two Diagrams Illustrating the Isomorphism Extension Theorem"
date: 2015-03-28 17:33:58 +0800
comments: true
categories: math
---

Two weeks ago, I had proved that any two algebraic closures of a field
are isomorphic to each other in a homework problem.  To finish this
problem, I opened my note book to view the diagram for the Isomorphism
Extension Theorem (IET) drawn before I had understood the proof of the
existence of algebraic closure.[^pp-eac]

<object type="image/svg+xml"
  data="/downloads/code/svgpan-1.2.2/IET.svg"
  width="300" height="300">
  Your browser does not support SVG
</object>

<a
href="http://validator.w3.org/check?uri=https%3A%2F%2Fvincenttam.github.io%2Fdownloads%2Fcode%2Fsvgpan-1.2.2%2FIET.svg;ss=1"><img
src="/images/valid-svg11.png" alt="Valid SVG 1.1" height="31"
width="88">
</a>

<small>Drag the figure to translate it, and scroll to enlarge/reduce
it.[^tech]  
Source code: [$\rm \LaTeX$][tex_src], [SVG][svg_src]</small>

After I had read E. Artin's construction of an algebraic closure of a
field, I had also read the proof of IET.[^pp-artin]  After that, I
thought I understood this theorem.  However, I *couldn't* figure out
how to make use of the above diagram to do this question.

<div class="myeqn">
\begin{equation*}\begin{CD}
     @.              \overline{F'}\\
@.                   @AAA\\
E    @>\tau>\cong>   \tau[E]\\
@AAA                 @AAA\\
F    @>\sigma>\cong> F'
\end{CD}\end{equation*}
</div>

<small>I *can't* add dashed arrow for $\tau$.</small>

I then opened John B. Fraleigh's *A First Course in Abstract Algebra*
and saw two diagrams which illustrated the IET.  In those two figures,
there're only vertical and horizontal lines, *no* oblique lines were
found.

Using these diagrams, I successfully answered this question by drawing
a tower of five levels of algebraic extensions.

---
[^pp-eac]:
    [*Read a Proof of Existence of Algebraic Closure*][pp1] on Blog 1.

[^tech]:
    When it comes to drawing commutative diagrams, MathJax only
    supports AMScd, which *doesn't* support diagonal arrows.
    Therefore, I used `tikz-cd` according to the last sentence of
    [*Guide to Commutative Diagram Packages*][cd_guide] by J.S. Milne
    to produce a standalone diagram in PDF format first.  Then I
    converted it to an SVG file using the procedures described in the
    last paragraph in [my earlier post about pdf2svg][pp2] on Blog 1.
    Finally, I added the dragging and scrolling features to the SVG
    files after re-reading [*Zooming SVG in Web Browsers*][pp3] on
    Blog 1.

[^pp-artin]:
    Same as footnote 1.

[pp1]: /blog/2015/02/21/read-a-proof-of-existence-of-algebraic-closure/
[tex_src]: /downloads/code/IET.tex
[svg_src]: /downloads/code/svgpan-1.2.2/IET.svg
[cd_guide]: http://www.jmilne.org/not/CDGuide.html
[pp2]: /blog/2014/06/21/export-pdf-to-svg/ "Export PDF to SVG"
[pp3]: /blog/2014/08/02/zooming-svg-in-web-browsers/
[pp4]: /blog/2015/02/21/read-a-proof-of-existence-of-algebraic-closure/

*[IET]: Isomorphism Extension Theorem
