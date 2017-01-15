---
layout: post
title: "Using gVim on Windows to Create Pandoc Slides"
date: 2014-03-15 12:49:05 +0800
comments: true
categories: [M$ Win*, pandoc]
---

At night on 25/02/14, I tried to open gVim and use the command mode to
issue system commands, so that I can use pandoc to create $\rm \LaTeX$
Beamer slides.  However, with the correct command, gVim went wrong and
in the resulting PDF file, all lines in the source markdown files were
concatenated into one single line.  I hadn't encountered such error
last time.

With the *same* command, I managed to get back my $\rm \LaTeX$ Beamer
slides.  As a Vim lover, I'd like to try to do things *within* the
editor.  Therefore, I changed to the project directory and start gVim
through the command prompt.  Then I used `q:` to find the
corresponding `pandoc` command, and re-ran it.  Job done!
