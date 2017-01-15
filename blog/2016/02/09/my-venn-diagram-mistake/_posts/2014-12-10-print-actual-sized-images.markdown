---
layout: post
title: "Print Actual Sized Images"
date: 2014-12-10 10:12:23 +0800
comments: true
categories: [hardware, linux]
---

Problem
---

A month ago, I wanted to print a picture.  However, I *didn't* know
how to use GUI programs like LibreOffice or GIMP to print images with
their actual size.  I know that this can be easily done in M\$
Paint.[^mspaint]

Nonetheless, as a free software supporter, I should refuse using
proprietary softwares and seek free alternatives.

<!-- more -->

My Approach
---

I finally used the `lpr` command to print the picture because
*commands won't change like buttons in GUI programs*.

- `lpr foo.png`: print `foo.png` with the default page size, and the
    picture will fit the page.
- `lpr --natural-scale=nn%`: It took me an hour to find out this
    option is the true answer to my question.  I googled "print actual
    size of picture linux" and entered a page in a knowledge
    base.[^kb]  Actually, the contents are the *same* as those in
    `http://localhost:631`.  I *don't* know why the section "Image
    Options" *can't* be found in the CUPS manual.

    {% img fancybox center /images/posts/LprActualSize/cups.png 750 'CUPS Mannual' ['cups man'] %}

- One can use `lpoptions -l` for viewing the list of the default
    printer settings, and one may modify it through the CUPS's web
    interface.  For example, one may use the option `-o
    Resolution=Photo`.  Note that it's *case sensitive*.

Lessons learnt
---

PPI and DPI are *different*.  The former is about the printer and is
independent of the picture, while the later is for controlling the
printing size of the picture.[^dpippi]

---
[^mspaint]: See [this forum post][mspaint] for details.
[^kb]:
    See [Command-Line Printing in Linux][kb] in the IT Knowledge Base
    of the University of Tennessee System.

[^dpippi]:
    See [*PPI vs. DPI: what's the difference?*][dpippi] by Alex Bigman
    in 99designs.

[mspaint]: http://www.sevenforums.com/music-pictures-video/200235-actual-print-size-when-printing-picures.html "Windows 7: Actual print size when printing picures"
[kb]: http://www.eecs.utk.edu/resources/it/kb/printing/linux-command-line
[dpippi]: http://99designs.com/designer-blog/2013/02/26/ppi-vs-dpi-whats-the-difference/

*[CUPS]: Common Unix Printing System
*[DPI]: dots per inch
*[PPI]: pixels per inch
