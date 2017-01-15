---
layout: post
title: "Switch Tmux Panes and Vim-$\\rm \\LaTeX$"
date: 2015-02-19 10:37:53 +0800
comments: true
categories: [LaTeX-Suite, Linux, Vim]
---

Background
---

I use [Byobu] with [Tmux] backend.[^pp_tmux]

Problem
---

- Moving across panes is inconvenient.
- If I have a Vim vertical/horizontal split in a Tmux pane, I need to
    use *two* different sets of key bindings to navigate the adjacent
    panes.
- In the copy mode, it's great that most of the key bindings follow
    from those of [Vim], *but not the most important two*:
    - start selection
    - copy

Solution
---

I find two articles on *Giant Robots* very useful.

1. [*Seamlessly Navigate Vim and tmux Splits*][src1]
2. [*Tmux Copy & Paste on OS X: A Better Future*][src2]

Therefore, I followed the steps in the first blog post, and installed
[Vim Tmux Navigator].

Another problem
---

After the installation of the Vim plugin, I got another problem while
editing my VIMRC: The `{Down-Mapping}` *didn't* work.
[Vim-$\rm \LaTeX$][vim-latex] should know the reason.  I found an
article describing a similar problem.[^choy]  However, I *wouldn't*
like to change `~/.vim/bundle/vim-latex/plugin/imaps.vim`, so I got
stuck at this point for hours.  I tried to substitute `{Down-Mapping}`
with `<C-a>j` in VIMRC, but it *didn't* work.

Lessons Learnt
---

1. Accept simple ways to do things

    Even though I *can't* set `{Down-Mapping}` to `<C-j>`, the Vim
    editor command `:TmuxNavigateDown` *isn't* so hard to type.  I
    failed to realise that typing `:tm<Tab>` will do, and wasted time
    on that.  Now I accept the use of *two* different sets of
    keystrokes for switching to the Tmux pane/Vim buffer below.  We
    can look at this problem from another angle.

2. Store a list of windows in a file

    A sample file can be found on Super User.[^su]  I found that if I
    had run Byobu before, a session `0` would *also* be created on top
    of `tmuxs`.  To avoid this problem, remove the first line in the
    sample window list and type `byobu attach -t 0` starting from the
    second time of opening Byobu.

---
[^pp_tmux]:
    See [*Use Tmux for Previewing Posts*][pp] in this blog for
    details.

[^choy]:
    See [*Key mapping collision between vim-navigation and vim-latex*][choy]
    by Chris Choy for details.

[^su]:
    See [*Proper Format for Byobu's windows.tmux?*][su747819] on Super
    User.

[Byobu]: http://byobu.co
[Tmux]: http://tmux.sourceforge.net
[pp]: /blog/2015/02/14/use-tmux-for-previewing-posts/
[Vim]: http://www.vim.org
[src1]: http://robots.thoughtbot.com/seamlessly-navigate-vim-and-tmux-splits
[src2]: http://robots.thoughtbot.com/tmux-copy-paste-on-os-x-a-better-future
[Vim Tmux Navigator]: https://github.com/christoomey/vim-tmux-navigator
[vim-latex]: https://github.com/vim-latex/vim-latex
[choy]: https://chrischoy.github.io/blog/notes/vim-tmux-navigation-and-vim-latex/
[su747819]: http://superuser.com/a/747819
