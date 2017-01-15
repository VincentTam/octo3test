---
layout: post
title: "A Sample $\\rm \\LaTeX$ Table"
date: 2014-10-01 19:36:28 +0800
comments: true
categories: LaTeX
---

Target
---

![target](/images/posts/LaTeXTable/out.jpg)

<!-- more -->

Source code
---

{% gist eb013fa73d62a5f5c917 %}

Explanation
---

Line 1: *Without* `border=5pt`, the grid line on the right will be
truncated.[^StandaloneBd]

Lines 5–7: Using `\multicolumn{1}{c}` is the easiest way to centre
*only* the heading that I know.

Lines 8–10: By trial, I discovered that putting `p{3.5cm}` at line 3
*doesn't* help—the width of the middle column *wouldn't* be the same
as that of the other two columns.  The positions of the `|`s and
`\multicolumn{1}{l}{Cell n}` are also worked out by repeated
experiments, so that the double vertical grid lines separating the
cells are properly aligned.

Line 11: Actually, the double-rules can be made using `\hline\hline`.
I *don't* use this method because of the contents at the bottom of the
table.  See lines 25–26 for details.

Lines 25–26: `\cline{2-2}` is for a horizontal line above the second
cell.  If I use `\hline\cline{2-2}`, the two lines will *coincide*.
Therefore, I copied the command `\noalign{\smallskip}` from the
section "Space between rows" in the Wikibook for $\rm
\LaTeX$.[^RowSep]

Lines 27–28: In order *not* to have grids at the corners of the last
row, at left of the leading `&`, there's *no* non-blank characters.

---
[^StandaloneBd]:
    [*Cropping the output file to its content in LaTeX*][SBSrc] in
    texblog.

[^RowSep]:
    LaTeX/Tables. (2014, September 2). *Wikibooks, The Free Textbook
    Project*. Retrieved 14:04, October 1, 2014 from
    <http://en.wikibooks.org/w/index.php?title=LaTeX/Tables&oldid=2696642>

[SBSrc]: http://texblog.org/2012/09/12/cropping-the-output-file-to-its-content-in-latex/
