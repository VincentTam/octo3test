---
layout: post
title: Including a Bibliography in Pandoc Markdown on Ubuntu 12.04 LTS
date: 2014-02-23 18:16:39 +0800
categories: [Linux, pandoc]
published: true
comments: true
---

I tried typesetting a $\rm \LaTeX$ Beamer slide using pandoc markdown
since it's easy to use.  According to the official demo[^1], with a
CSL file[^2], which specifies the style to the citation, users are
suppose to be able to create a document with a bibliography.  However,
when I ran the following command in Vim on Ubuntu 12.04 LTS, pandoc
hanged.

    :!pandoc -s -S --biblio mybib.bib --csl foo.csl -t beamer %\
    -V theme:Berlin -o %<.pdf

I admit that it's *too* complicated.  I tested several things:

1.  $\rm \LaTeX$ Beamer class
2.  Bibliography

To figure out which part of the command is wrong, I tried to remove
the part related to item 1.  Issuing a simple command for item 2, the
usage of one of the CPU in my computer rose to almost 100%, and
remained high with small fluctuations.

    :!pandoc -s -S --biblio biblio.bib -o %<.html

This issue is indeed one faced by the community of Ubuntu users, so I
can find official advices on GitHub.  Eventually, the last comment on
the page has solved my problem.  I think installing
`libghc-citeproc-hs-data` is quicker than installing the latest
(1.9.4.2-2) version of the DEB file for pandoc.

Posted via [UltraBlog.vim][UB].

---
[^1]: [Pandoc demos item 24 (Markdown citations)][f1]
[^2]: [CSL's official repository on GitHub][f2]

[f1]: http://johnmacfarlane.net/pandoc/demos.html
[f2]: https://github.com/citation-style-language/styles
[UB]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/

*[CPU]: Central Processing Unit
*[CSL]: Citation Style Language
