---
layout: post
title: "Search and Replace in Vim's Visual Mode"
date: 2014-06-16 22:45:43 +0800
comments: true
categories: Vim
---

If you want to select some lines of text and search for a word to
replace in Vim, many users will do it like this:

1. Use `v` to do the selection.
2. Press `:` to start inputting an editor command.
3. Use `s/<pat>/<text>/g` to search and replace text.

Observation: `:'<,'>s` "applies to whole lines".[^1]

**How about an arbitrary visual selection?**

According to a Vim tips found in the footnote, the answer is quite
simple—insert the `\%V` atom at the beginning of the search pattern.

---
[^1]: Search and replace in a visual selection—[Vim Tips Wiki]

[Vim Tips Wiki]: http://vim.wikia.com/wiki/Search_and_replace_in_a_visual_selection
