---
layout: post
title: Choosing a Font for gVim
date: 2013-12-11 19:39:00 +08:00
categories: Vim
comments: true
---

Unclear difference in appearance between 1 with l, 0 with O can be a
source of inconvenience for computer users.  This summer, I've found
[this site][top10monofont] informative, but I quickly forgot it.

Installation of many fonts in some popular Linux distributions can be
done in GUI just like M\$ Win\*, so I attempted to change my default
font on [Vim], and a picture is worth a thousand words.

The following command from [Vim Tips Wikia][vim_tip32] will do: `:set
guifont=[font-name]:h[font-size]`.  (Escape the whitespace character
with a backslash, i.e. use `\ ` to represent a whitespace.)

{% img /images/posts/GVimFont/gvim.png 'GVim GUI font changed' ['fig1'] %}  
GVim with Inconsolata 12pt

[top10monofont]: http://hivelogic.com/articles/top-10-programming-fonts
[Vim]: http://www.vim.org
[vim_tip32]: http://vim.wikia.com/wiki/VimTip632
