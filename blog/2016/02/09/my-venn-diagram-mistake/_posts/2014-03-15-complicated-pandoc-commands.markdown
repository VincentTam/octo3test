---
layout: post
title: "Complicated Pandoc Commands"
date: 2014-03-15 12:55:46 +0800
comments: true
categories: pandoc
---

I don't need to memorize these commands.  Instead, what I need is to
create a page here so that I can make quickly get the right command
for my work.  This saves the time for checking and testing the right
command.

Pandoc markdown
---

Official demo:
<http://johnmacfarlane.net/pandoc/demos.html>

### Beamer

A shell command for APA style reference list:

    $ pandoc -t beamer -s -S --biblio mybib.bib\
    > --csl /path/to/apa.csl % -V theme:Berlin -o %<.pdf

### Customized PDF
(Added on AUG 03RD, 2014)

The command below is just an example of narrowing the margin, and
choosing a larger font.

    $ pandoc % -V geometry:margin=1in -V fontsize:12pt\
    > -V linestretch:1.655 -o %<.pdf 

For more variables, refer to the User Guide:
<http://johnmacfarlane.net/pandoc/README.html#templates>

For many ordinary computer users who are used to write documents using
WYSIWYG editors, the above command is quite scary, so I've written a
custom template to save the trouble.  See
[*My Pandoc Template (1)*][NewPost] for details.

[NewPost]: /blog/2014/08/03/my-pandoc-template-1/
