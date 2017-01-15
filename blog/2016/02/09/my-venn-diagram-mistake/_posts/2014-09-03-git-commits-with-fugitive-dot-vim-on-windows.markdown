---
layout: post
title: "Git Commits with fugitive.vim on Windows"
date: 2014-09-03 00:48:13 +0800
comments: true
categories: [Vim, M$ Win*]
---

Background
---

In \*nix, one can use `:Gcommit` to commit the staged changes,
provided that [fugitive.vim] has been installed.

Problem
---

How can one use the Vim plugin *within* Vim on M\$ Win\*?

Discussion
---

Inspired by [a Stack Overflow question][so2863038], I set my
`core.editor` to `gvim -f` through `git config`.

Then I tried running `git commit` in 
{% img nobd /images/posts/OctopressOnOtherDev/gitbash1.png 'icon' ['Git Bash icon'] %},
but it's "aborting commit due to empty commit message".

Why is the `-f` flag there?  It's because the `--nofork` option causes
gVim to be in the foreground in \*nix.  I've learnt this from [GitHub].
The `-w` flag in the commands for setting other editors as the default
editor for Git is the key for the above quoted message.

I tried to solve this problem by reading Vim's offical manual about
`nofork`, and it's clearly stated that this option *wasn't* supported
in M\$ Win\* unless I'm "running it with an installed ... gvim.bat".

To conclude, if I'm working on M\$ Win*, I'll just forget about
`:Gcommit` in Vim, and use
{% img nobd /images/posts/OctopressOnOtherDev/gitbash1.png 'icon' ['Git Bash icon'] %}.

[fugitive.vim]: https://github.com/tpope/vim-fugitive "An awesome Git wrapper"
[so2863038]: http://stackoverflow.com/a/19416705 "GCommit doesn't work with fugitive.vim under windows xp?"
[GitHub]: https://help.github.com/articles/associating-text-editors-with-git "Associating text editors with Git"
