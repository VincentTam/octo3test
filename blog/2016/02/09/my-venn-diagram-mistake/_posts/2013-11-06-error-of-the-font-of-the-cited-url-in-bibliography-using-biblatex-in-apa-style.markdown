---
layout: post
title: "Error of the Font of the Cited URL in Bibliography Using Bib$\\rm \\LaTeX$ in APA Style"
date: 2013-11-06 02:36:00 +08:00
categories: LaTeX
comments: true
---

This midnight, I tried to compile my $\rm \LaTeX$ document with a
so-called "bibliography", which contains a URL.  The link should be in
typewriter font after using the command `\urlstyle{tt}` under adding
the `url` package to the preamble.  I googled for almost 2 hours, but
the blog posts suggested that using this method should work.  I even
tried to copy some minimum working examples from the web to test if
they work.  They really worked and so I'm puzzled.  Ten minutes ago, I
just find out what's going wrong: the `url` package should never go
before the several lines in the preamble that are responsible for
adding an APA-style bibliography.

The `\ll` command in [Vim-$\rm \LaTeX$][Vim-LaTeX] seems not doing
well with [Biber].  Whenever the AUX file exists, `\ll` won't execute
`biber`, causing the resulting PDF file to have no change in the
bibliography.

I hope I can use less time to figure out any mistake next time.

[Vim-LaTeX]: http://vim-latex.sourceforge.net/
[Biber]: http://sourceforge.net/projects/biblatex-biber/ "BibTeX replacement for biblatex"
