---
layout: post
title: "Git for Windows, Curl, Gist.vim with Vundle (3)"
date: 2016-02-22 16:54:53 +0800
comments: true
categories: [Git, M$ Win*, Vim]
---

Background
---

A VIMRC is important for efficient text editing.  It can be over one
hundred lines.  It's good to have the changes tracked.  One *entire*
folder `.git` for *one* single text file will be too much.  Since my
VIMRCs *don't* have anything secret, I upload them to Gist like many
other users, and read others' configuration files so as to learn from
them.

Nonetheless, my workflow of uploading Gists on M\$ Win\* was not quite
efficient.  Therefore, I re-read the installation instructions for
[Gist.vim].  Since `curl.cmd` has already been set up during the
installation of Vundle.vim, I used Vundle to install Gist.vim.

Due to the problem mentioned in
[the previos post in this series][pp1], I opened GVim from Command
Prompt instead of Git Bash.

Problem
---

I have already configure `github.user` to my GitHub user name, but
Gist.vim still complained that *no* GitHub user name was found.

    You have not configured a Github account. Read ":help gist-vim-setup".
{:.cli}

<!-- more -->

Discussion
---

I tried looking into the source code of the Vim plugin.  I learnt from
*Learn Vim Script the Hard Way* the difference between `echo` and
`echom`: the former *isn't* persistent; the later can be retrieved by
`message`.  It took me a few minutes to find out that Command Prompt,
the program set by `shell` option, *didn't* take my global
configurations into account.  I viewed the list of my configurations
using the following command.

    :!git config --list
{:.cli}

I *didn't* see `github.user` in the list.  I tried adding `--global`,
and I got an error.

    C:\Windows\system32\cmd.exe /c (git config --global --list)
    fatal: unable to read config file 'C:\Temp\PortableApps\gVimPortable\Data\settin
    gs/.gitconfig': No such file or directory
    shell returned 128
    Hit any key to close this window...
{:.cli}

I *failed* to comprehend the second line of the above output.  I just
realised that this had something to do with GVim Portable.  If I use
GVim instead, I *won't* have such trouble since `.gitconfig` is
located at the home folder.

Solution
---

I searched for a tutorial of using this plugin.  Finally, from a
Japanese website which I forgot its URL, I found out that one can
manually set the variable `github_user` in VIMRC.

After that, I restarted the editor and invoked the plugin, which then
asked for my GitHub password and created a token in
`/path/to/gVimPortable/Data/settings/.gist-vim`.

[Gist.vim]: https://github.com/mattn/gist-vim
[pp1]: /blog/2016/02/22/git-for-windows-curl-gist-dot-vim-with-vundle-2/ 
