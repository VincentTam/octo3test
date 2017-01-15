---
layout: post
title: "Recent Vundle Plugin Update"
date: 2015-05-16 16:42:01 +0800
comments: true
categories: Vim
---

Background
---

I use [Vundle] for managing my Vim plugins.[^eg]

Problem
---

I typed `:PluginUpdate` in Vim as usual for keeping all of the plugins
up-to-date, and the system prompted me to supply my user name and
password for GitHub.[^rec]  Initially, I *refused* to do so.  Then
Vundle skipped the first plugin and proceeded to another one.  I was
prompted again for the user name, and my response was still the same.
This repeated for several times, and finally *nothing* was updated.

I quitted Vim and re-opened it again, and issued the *same* editor
command for updating the plugins, and ran into the *same* trouble.

Result
---

Since I *didn't* have much time, I finally input correctly the
required account information in order to get the plugins updated.
Luckily, this was needed for *once* only, instead of once for each
plugin.

Lessons learnt
---

### Never use vim-surround for code blocks

[Vim-surround] changes some whitespaces to tabs, which Google
*doesn't* recommend for indentation.[^guide]

### Setting the font of a code block

Specifying the `font-family` of a `<pre>` tag is *useless*—change
`pre` to `code` instead.

---
[^eg]:
    For example, you may refer to the screenshot in a comment for my
    post [Clang Complete on Ubuntu 14.04][pp_clang1404] on *Blog 1*.

[^rec]: [The Vim screen that I actually saw][here].
[^guide]:
    Refer to the "[General Formatting Rules][goo_guide]" in *Google
    HTML/CSS Style Guide* Revision 2.23.

[Vundle]: https://github.com/gmarik/Vundle.vim
[pp_clang1404]: /blog/2014/08/29/clang-complete-on-ubuntu-14-dot-04/
[here]: /downloads/code/vundle.html
[Vim-surround]: https://github.com/tpope/vim-surround
[goo_guide]: https://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml#Indentation
