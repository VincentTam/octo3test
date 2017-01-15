---
layout: post
title: "My Improved Custom Autocompletion Mappings in Vim"
date: 2014-12-13 14:40:44 +0800
comments: true
categories: Vim
---

Background
---

Inspired by [$\rm \LaTeX$-Suite][LaTeX-Suite], I added some
autocompletion mappings in my VIMRC last year.[^pp1]  Three months
later, I saw the word "FileType" in [Vim's User Manual][vim_user_man],
and shortened these autocommand a little bit.[^pp2]  In my opinion,
it's incredibly amazing since I can type text at the speed of thought.

Problem
---

If I've finished editing an HTML file and open another $\rm \LaTeX$
file, then my insert mode mappings will interfere with those defined
by [$\rm \LaTeX$-Suite][LaTeX-Suite].  **How can I restrict my custom
mappings to the current working buffer only?**

<!-- more -->

Since I *didn't* know how to describe this problem in words in
February, I spent *hours* searching for webpages on [Google], but got
*nothing*.  At that time, I had focus on my homework and exams, so I
put this problem aside.  As a [GNU/Linux][gnunix] user, I adjust my
wants according to what I know and what I can do, after accepting the
fact that M\$ Off\* has *no* known plan to support the free operating
system.

Last night, when I wrote a
[recent linklog about Vim's auto indenting][pp3], I did some
configurations on [Vim].  This reminded me of hte problem of setting
up autocompletion for brackets.  After writing over 150 blog posts in
[Vim], I realise the inconvenience *without* these keyboard shortcuts
for autocompletion in the insert mode.

Solution
---

First, I glanced through the codeblocks in the cited posts in the
[first two footnotes](#fn:pp1).  After that, I googled "autocmd
group", and found two sites very useful.

1. [*Vim inoremap for specific filetypes*][so8826323] on Stack
Overflow.

    `<buffer>` is the missing part of the autocommands.

2. [*Autocommand Groups*][vim_hard] on *Learn Vimscript the Hard Way*.

    `au!` avoids [Vim] to slow down after running `:so $MYVIMRC`.
    Therefore, I also added `!` after the function `MyDiff` in my
    VIMRC on M\$ Win\* 7.[^vimrc_ms]

---
[^pp1]: See [*Links to Good Posts*][pp1] in Blog 1 for the mappings.
[^pp2]:
    See the bottom part of
    [*Working With Vim’s Autocommand Groups*][pp2] in Blog 1 for the
    shorter mappings.

[^vimrc_ms]:
    View my VIMRC on M\$ Win\* 7 at commit [c11d1a1].

    This morning, I tried to write similar keyboard shortcuts for
    '\'', '\"' and '\`' at lines 62--63 and 67.  However, typing two
    '\"'s quickly on M\$ Win\* 7, GVim *duplicated* my input.
    Therefore, I changed the rules so that they would only be invoked
    when one quickly typed any one of these characters *twice*.

    Remarks: On Ubuntu 14.04 LTS, I have the *same* experience.  Thus,
    I just copied the whole autocommand group to
    [my VIMRC there][2379ba7].

[LaTeX-Suite]: http://vim-latex.sourceforge.net
[pp1]: /blog/2013/12/11/links-to-good-posts/
[vim_user_man]: http://vimdoc.sourceforge.net/htmldoc/usr_40.html#40.3
[pp2]: /blog/2014/01/26/working-with-vims-autocommand-groups/
[Google]: http://www.google.com
[gnunix]: https://www.gnu.org/gnu/linux-and-gnu.en.html
[pp3]: /blog/2014/12/12/how-to-stop-auto-indenting/ "How to Stop Auto Indenting?"
[Vim]: http://www.vim.org
[so8826323]: http://stackoverflow.com/a/8826323
[vim_hard]: http://learnvimscriptthehardway.stevelosh.com/chapters/14.html
[c11d1a1]: https://gist.github.com/VincentTam/abc1cbd2b2181ad69165/c11d1a1e42cd5bfbe1e76347b098880e6e73ebc9
[2379ba7]: https://gist.github.com/VincentTam/2379ba75d6ad703a3786
