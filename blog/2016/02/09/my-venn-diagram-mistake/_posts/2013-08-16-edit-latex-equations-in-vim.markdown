---
layout: post
title: "Edit $\\rm \\LaTeX$ equations in Vim"
date: 2013-08-16 14:56:00 +08:00
categories: LaTeX-Suite
comments: true
---

With [Vim-$\rm \LaTeX$][vim-latex], it's possible to edit $\rm \LaTeX$
equations with Vim quickly without making syntax errors.  (e.g.
undefined control sequence caused by mismatched braces '{}')

[![YouTube video][video_pic]{:.center}][video]{:.fancybox-media}  
Please view it fullscreen in *HD*.  Sorry for the inconvenience
caused.  
For the sample files, please click the above "YouTube" button.

<!-- more -->

Why use [Vim]?  Please refer to [my post on Vim][pp].

For a quick startup guide, see the [official tutorial][off_tut].  If
you've learnt those keyboard mappings, here's [a quick review][rev] of
some commands.  For detailed list of all keyboard shortcuts and
customizations (e.g. custom compile rule: use `pdflatex` instead of
`latex` and `dvipdfm`), you can refer to [the user manual][man].

There're many blog entries about how to install $\rm \LaTeX$ on [Vim]
on \*nix and M\$ Win\*.  Searching "vim latex" gives you millions of
search results.  Summarizing the articles, the three major components
are:

1.  Editor
    * [Vim] (found on *almost every distribution of \*nix*)
    * GVim (on GUI of any platform)

2.  $\rm \LaTeX$
    * [$\rm \TeX$Live][texlive] (found in package manager on \*nix)
    * [Mik$\rm \TeX$][miktex] (have a $\rm \LaTeX$ package manager)

3.  [Vim] plugin for writing $\rm \LaTeX$: [Latex-Suite][vim-latex]

For \*nix, you may find some GUI tools for installing packages.
(especially in some popular distributions)

{% img fancybox /images/posts/EditLaTeXEquations/SoftwareCenter.png 'Software Centre in Ubuntu 12.04 LTS' ['fig1'] %}

{% img fancybox /images/posts/EditLaTeXEquations/FedoraSoftwareMgr.png 'PackageKit in Fedora 17' ['fig2'] %}

You can also type the install commands for these packages on the
terminal.

For [Ubuntu]:

    # Also include `vim-gnome' if you'd like to install GVim.
    $ sudo apt get install vim-gnome vim-latexsuite texlive
{: .cliUB}

For [Fedora]:

    # Also include `vim-X11' if you'd like to install GVim.
    [root@localhost]# yum install vim-latex latex
{: .cli}

Unlike M\$ Win\*, the dependencies will be automatically resolved.

For M\$ Win\*, the installation procedures for GVim
([portable][g_port]), [Vim-$\rm \LaTeX$][vim-latex] and
[Mik$\rm \TeX$][miktex] ([portable][m_port]) are as followed:

1.  Go to the official websites of GVim and [Mik$\rm \TeX$][miktex]
    (or equivalent packages) and download the packages; or

    Put [Mik$\rm \TeX$ portable][m_port] and [GVim portable][g_port]
    to any folder you like.

    - e.g. `C:\Temp`
    - *Don't* put them under `C:\Program Files`.

2.  Download [Vim-$\rm \LaTeX$][vim-latex] from SourceForge.
3.  Follow the steps in [*Download*][more_steps] on $\rm \LaTeX$.

Remarks: The installation of [Vim-$\rm \LaTeX$][vim-latex] (items 3
and 4) is the same for portable and non-portable versions of GVim.

[vim-latex]: http://vim-latex.sourceforge.net
[video_pic]: /images/posts/EditLaTeXEquations/Video.png
[video]: //www.youtube.com/embed/y67t-05nFD0
[Vim]: http://www.vim.org
[pp]: /blog/2013/08/16/why-vim/ "Why Vim"
[off_tut]: http://vim-latex.sourceforge.net/documentation/latex-suite-quickstart/
[rev]: http://www.cheat-sheets.org/saved-copy/vimlatexqrc.pdf
[man]: http://vim-latex.sourceforge.net/documentation/latex-suite.html
[texlive]: https://www.tug.org/texlive
[miktex]: http://miktex.org
[Ubuntu]: http://www.ubuntu.com
[Fedora]: https://getfedora.org
[g_port]: http://portablegvim.sourceforge.net
[m_port]: http://miktex.org/portable
[more_steps]: http://vim-latex.sourceforge.net/index.php?subject=download&amp;title=Download
