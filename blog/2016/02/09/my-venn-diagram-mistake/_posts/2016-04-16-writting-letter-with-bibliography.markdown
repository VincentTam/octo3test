---
layout: post
title: "Writting Letter with Bibliography"
date: 2016-04-16 21:39:52 +0800
comments: true
categories: [LaTeX, template]
---

Background
---

Recently, I need to write letters.  Get the formatting for addressee
and sender automatically done, I choose $\rm \LaTeX$.  I cite a book
in my letter, and try to add a bibliography at the end of the letter.

Problem
---

During the compilation for the following letter, an error was thrown.

{% render_code MaLettre/noltrbib.tex A failed $\rm \LaTeX$ letter %}

{% render_code MaLettre/ltrbib.bib A sample Bib$\rm \LaTeX$ file %}

Here's my compilation procedure.

    $ xelatex noltrbib.tex
    $ biber noltrbib
    $ xelatex noltrbib.tex
    This is XeTeX, Version 3.1415926-2.5-0.9999.3 (TeX Live 2013/Debian)
     restricted \write18 enabled.
    ...
    ! Undefined control sequence.
    \\blx@head@bibliography [#1]->\section 
                                           *{#1}\markboth {\MakeUppercase {#1}}{...
    l.52 \end
             {letter}
    ?
    ...
{:.cliUB}

I type `<Enter>` at `?`, and get [a PDF that seems OK][pdf1].  You may
read the [log file for this file][log1] to know more about this error.
However, each time I use $\rm \LaTeX$-Suite to compile the document
inside Vim, a quickfix window pops up.  This is quite inconvenient: I
need to use `<C-w>k` to switch to the original buffer or `ZQ` to close
the quickfix window.  Therefore, I am motivated to find out a solution
for this error.

<!-- more -->

Solution
---

Luckily, I find the thread
[*Environment thebibliography undefined when using letter*][sol] in
$\rm \LaTeX$ Forum extremely useful.  In my opinion, if one can
include inline code in a post in this forum, the file name
`letterbib.sty` and the command in the preamble can be shown in
monospaced font for readability.

{% render_code MaLettre/ltrbib.tex A minimal working $\rm \LaTeX$ letter %}

Finally, no compilation error is shown in the [generated log][log2].
You may view the [second generated PDF][pdf2].

Lessons learnt
---

To install the above STY file, which *isn't* found on CTAN, one needs
to manually download it to `~/texmf` on \*nix.  (Search "~/texmf" for
the way to find ["temxf" on Win\*][texmf-win].)  Searching "texmf
linux refresh", I find the way for a
[$\rm \TeX$ database update][texmf-update].  I miss the first argument
in the command `texhash ~/texmf`, and then the installed STY file
*can't* be found in `~/texmf/ls-R`.

[pdf1]: /downloads/noltrbib.pdf
[log1]: /downloads/code/MaLettre/noltrbib.log
[sol]: http://www.latex-community.org/forum/viewtopic.php?f=4&t=3359
[log2]: /downloads/code/MaLettre/ltrbib.log
[pdf2]: /downloads/ltrbib.pdf
[texmf-win]: http://tex.stackexchange.com/a/12702
[texmf-update]: http://www.dickimaw-books.com/latex/novices/html/texhash.html

*[CTAN]: Comprehensive TeX Archive Network
