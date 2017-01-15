---
layout: post
title: "Vim-$\\rm \\LaTeX$'s \\lv command with Sumatra PDF"
date: 2013-12-11 02:07:00 +08:00
categories: [LaTeX-Suite, M$ Win*, Vim]
comments: true
---

Why do I switch my PDF viewer?
---

* Ado\* Read\* is proprietary. (**EULA**)
* [Sumatra PDF] is free. (**GPLv3**)

Go for [FLOSS]! Go for freedom!

<!-- more -->

Actual process
---

Original settings for Ado\* Read\*: let
`g:Tex_ViewRuleComplete_dvi='C:/.../AcroRd32'` in `_vimrc` (No extension
name)

### Problem

How to change Vim-$\\rm \\LaTeX$\'s setting of `\lv`?

###Trial 1

Set `g:Tex_ViewRuleComplete_dvi='C:/.../SumatraPDF'` in `_vimrc` (No
effect)

###Trial 2

Set `g:Tex_ViewRule_dvi='C:/.../SumatraPDF'` and disable
`g:Tex_ViewRuleComplete_dvi` in `_vimrc` (No effect)

###Trial 3

Set `g:Tex_ViewRule_pdf='C:/.../SumatraPDF'` and keep
`g:Tex_ViewRuleComplete_dvi='C:/.../AcroRd32'` in `_vimrc` (Ado\*
Read\* launched instead)

...

###Trial n

Set `g:Tex_ViewRule_pdf='C:/.../SumatraPDF'` and disable
`g:Tex_ViewRuleComplete_dvi='C:/.../AcroRd32'` in `_vimrc` (No effect)

Solution
---

1.  Change `PATH` environment variable. (You can change it for Vim
    runtime and keep the original one in other programs. See
    [my newer post][np] for details.)
2.  Set `g:Tex_ViewRule_pdf='SumatraPDF'`
3.  Disable `g:Tex_ViewRuleComplete_dvi` in `_vimrc`

[Sumatra PDF]: http://www.sumatrapdfreader.org/free-pdf-reader.html
[FLOSS]: https://en.wikipedia.org/wiki/Free_and_open-source_software#FLOSS
[np]: /blog/2013/12/13/writing-vims-output-to-files/
