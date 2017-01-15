---
layout: post
title: "An Error in Printing Equations in Chrome"
date: 2014-09-10 16:27:02 +0800
comments: true
categories: [Mathjax, Octopress]
---

This afternoon, I found that when I preview the print layout of the
posts in [Chrome], some Mathjax block equations enclosed with
`\begin{equation}` *weren't* displayed properly.  I think it should be
due to my settings in `sass/custom/_print.scss` because the contents
in Mathjax's official demo can be rendered properly in the print
preview.[^1]  Therefore, I deleted some obsolete lines of code in that
SCSS file .[^2]  Actually, since it takes time for loading MathJax, if
I open the print preview before the block equations are ready, then I
will see the source code of those equations.

---
[^1]: 
    Refer to [*A Test of Equation Numbering*][MathJaxEg] in MathJax
    Example Pages for details.

[^2]: Commit [48b131c].

[Chrome]: https://www.google.com/chrome/ "Google Chrome"
[MathJaxEg]: http://cdn.mathjax.org/mathjax/latest/test/sample-eqnum.html
[48b131c]: https://github.com/VincentTam/vincenttam.github.io/commit/48b131c "Deleted obsolete CSS code for printing equations"
