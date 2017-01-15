---
layout: post
title: "Mik$\\rm \\TeX$ Update"
date: 2015-06-09 16:41:12 +0800
comments: true
categories: [LaTeX, M$ Win*]
---

Background
---

This morning, I tried typing the chemical symbol of carbon dioxide
(CO<sub>2</sub>) in $\rm \LaTeX$, but I *wouldn't* like to use
`\mathrm` in math mode --- first, I changed from text mode to math
mode, then in order to type normal font, I used `\mathrm` to change it
back to "text mode in math mode".  I did all of these for a little
subscript only.  Clearly, that's *not* an elegant way of typesetting
CO<sub>2</sub>.  It *didn't* took me long to find out that what I
needed was the package [`mhchem`][mhchem].

Problem
---

I tried to `\usepackage[version=3]{mhchem}`, but Mik$\rm \TeX$
complained that the installed version of `l3kernel` was too *old*.  As
a result, I opened the package manager, and called the "Update Wizard"
inside.

<picture class="fancybox" title="No update helper found">
  <source srcset="/images/posts/MikTeXUpdate/no-helper460.png"
    media="(min-width: 460px)"></source>
  <img alt="update helper disappered?"
    src="/images/posts/MikTeXUpdate/no-helper300.png" />
</picture>

**How can I get the packages updated *without* manually creating
another folder?**

<!-- more -->

Discussion
---

I first clicked "Repository" and then "Synchronize", but it loaded
slowly, and I finally got *nothing*.  Then I tried to "Change package
repository".  I randomly selected an item in the list of remote
package repository, and clicked "Synchronize" again.  What I saw was
still the same.

Then I decided *not* to include the `mhchem` package.  I restored the
`\ce{CO2}` back to `CO2`, and then I pressed `\ll` in
[$\rm \LaTeX$-Suite][latex-suite].[^ll]  Then I received *unexpected
errors* from the $\rm \LaTeX$ compiler.  I then compiled another
document which contained characters with accents, such as 'à', 'é',
'ï', ...  I received the same error message in the quickfix window as
well.  Since it's gone, I've retrieved the message from the
corresponding LOG file.[^log]

<pre class="cli"><code>(C:\Temp\MikTeXPortable\tex\latex\fontspec\fontspec.cfg)))
(C:\Temp\MikTeXPortable\tex\generic\babel\babel.sty
Package: babel 2008/07/08 v3.8m The Babel package

*************************************
* Local config file bblopts.cfg used
*
(C:\Temp\MikTeXPortable\tex\latex\00miktex\bblopts.cfg
File: bblopts.cfg 2006/07/31 v1.0 MiKTeX 'babel' configuration
)
(C:\Temp\MikTeXPortable\tex\latex\babel-french\frenchb.ldf
Language: frenchb 2015/05/31 v3.1f French support from the babel system

(C:\Temp\MikTeXPortable\tex\generic\babel\babel.def
File: babel.def 2008/07/08 v3.8m Babel common definitions
\babel@savecnt=\count123
\U@D=\dimen139
)

<span class="err">! Package frenchb.ldf Error: frenchb requires babel v.3.9i.
(frenchb.ldf)                Aborting here.</span>

See the frenchb.ldf package documentation for explanation.
Type  H &lt;return&gt;  for immediate help.
 ...

l.116          {Please upgrade Babel!}

<span class="HLCode">Please upgrade Babel!</span>
</code></pre>

A nearly successful update
---

From Google, I've learnt to "Update MikTeX" directly from the little
icon at the lower right-hand corner of the screen.  Then I directly
clicked the "Next >" button, and Mik$\rm \TeX$ tried connecting the
manually chosen remote.  Unluckily, this *failed* and I got an error
mesage like *Permission denied*.  I tried searching "miktex permission
denied" on Google, but I *didn't* understand what I'd found.

Solution
---

As shown in the screenshot below, I checked the first two radio
buttons so as to get updated packages from the nearest package
repository.

<picture class="fancybox" title="Update MikTeX packages">
  <source srcset="/images/posts/MikTeXUpdate/update513.png"
    media="(min-width: 513px)"></source>
  <img alt="update miktex packages"
    src="/images/posts/MikTeXUpdate/update300.png" />
</picture>

After clicking "Next >", things went smooth luckily.

<picture class="fancybox" title="Downloading updates from remotes">
  <source srcset="/images/posts/MikTeXUpdate/download513.jpg"
    media="(min-width: 513px)"></source>
  <img alt="miktex package updates downloading"
    src="/images/posts/MikTeXUpdate/download300.jpg" />
</picture>

After the update had completed, the `babel` package had been upgraded
from version 3.8 to 3.9i.  With the correct syntax, I could finally
use `babel` and `mhchem`.

Lessons learnt
---

I often forget the command for optimizing JPEG images.  This evening,
while I was writing this post, I googled "jpegtran command", and I
issued

    jpegtran -optimize input.jpg > output.jpg
{:.cli}

after I'd read the command example from [this page][jpegtran_cmd].

---
[^ll]:
    `\ll` is the default keystroke for compiling a PDF document from
    the $\rm \LaTeX$ source code in $\rm \LaTeX$-Suite, which is a
    [Vim] plugin for writing in $\rm \LaTeX$ efficiently.

[^log]:
    You may [view the complete LOG file][log].

[mhchem]: https://www.ctan.org/pkg/mhchem
[latex-suite]: http://vim-latex.sourceforge.net/
[Vim]: http://www.vim.org
[log]: /downloads/1eDoc.log
[jpegtran_cmd]: http://junalontherun.com/2009/07/15/optimize-all-jpeg-images-with-jpegtran-utility/
