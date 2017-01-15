---
layout: post
title: Using Vim Keystrokes in Web Browser
date: 2013-12-11 04:01:00 +08:00
categories: [web technologies]
comments: true
---

[Vim] fans will be delighted and amazed for knowing this the first
time: [Vimperator] is the plugin for [Vim]-like behaviour on
[Firefox].  It's the original one and it focuses on usability.
Following the hints with `f` is great!  Here're some useful
keystrokes:

<!-- more -->

- To open a link in a new tab, type `F` and follow the hints
- To move the \[num\]-th tab, type `[num]gt` (applicable to [Vim]
    also)
- To go to another page, type `o`
- To go to another page with similar URL, type `O`
- To open another tab, type `t`
- To open another tab with similar URL, type `T`
- To open another window, type `w`
- To open another window with similar URL, type `W`
- To copy the URL of the current page (including "#\*"), type `y`
- To copy the URL of the targeted link, type `;y`
- To copy the current selection, type `Y`
- To copy the labeling text of a link, type `;Y`
- To disable [Vimperator] for one instance, type `i`
- To toogle [Vimperator], type `<S-Esc>`
- To move the last edited text field, type `gi`
- To open [Vim] for editing input in a textfield/textarea, type
    `<C-i>` in insert mode
- To exit the insert mode of a textfield/textarea, the key is the same
    as the one you use for [Vim].
- To enter the insert mode of a textfield/textarea from the normal
    mode, either follow the suitable hint or use `c` to re-enter there
    (may fail and enter into the caret mode).
- To search the history, type `:hist [anything] `
- In a pop-up browsing history list, press `<CR>` and `;o` to follow a
    hint.  You can type more to filter the suitable one.  Typing a
    capital 'O' instead of a small letter 'o' gives you `:open
    [wanted_link]`
- To view the previous browsed page, type `H`.
- To view the next browsed page, type `L`.
- To go to the home page, type `gh`.
- To view the home page in a new tab, type `gh`.
- To close the current tab, type `d`.
- To open the sidebar, type `:sbar [arg]`.
- To close the sidebar, type `:sbclose`.

More keystrokes from [Daqing Chu's WordPress blog][more_key], and
[a cheat sheetcreated by Shiar][cheat_sheet].

Another useful plugin
---

[Google/Yandex search link fix][fix_link] enables true copying of the
link's URL in [Google]'s search results.

[Vim]: http://www.vim.org
[Vimperator]: https://github.com/vimperator/vimperator-labs
[Firefox]: http://mozilla.com
[more_key]: http://chudq.wordpress.com/2009/01/24/my-favourite-vimperator-keys/
[cheat_sheet]: http://sheet.shiar.nl/vimperator
[fix_link]: https://addons.mozilla.org/addon/google-search-link-fix/
[Google]: http://google.com
