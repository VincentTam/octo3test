---
layout: post
title: "Git for Windows, Curl, Gist.vim with Vundle (5)"
date: 2016-02-29 00:35:30 +0800
comments: true
categories: [Git, M$ Win*, Vim]
---

Background
---

In [the third post of this series][seri3], I ran the editor command

    :!git config --list
{:.cli}

inside [GVim Portable][gvim-portable], but I got a fatal error.  I
found out how to get [Gist.vim] work *without* solving this problem.

Problem
---

**How to avoid this fatal error?**

    C:\Windows\system32\cmd.exe /c (git config --global --list)
    fatal: unable to read config file 'C:\Temp\PortableApps\gVimPortable\Data\settin
    gs/.gitconfig': No such file or directory
    shell returned 128
    Hit any key to close this window...
{:.cli}

<!-- more -->

Solution
---

I forgot [this article about programming][prog] that I'd read several
weeks ago.  I should have pay more attention of the error message
itself, rather than the Google search results of this message.  Hence,
creating a symbolic link for `C:\Users\foo\.gitignore` to the
`path/to/Data/settings` folder.

Remarks
---

While writing this post, I re-read
[*Rake Aborted Due to a Vim Swap File*][pp1] so as to find the URL of
the article about programming.  I discovered a broken link in the
GitHub page for [Octopress issue #600][i600].  From the list of
branches in the homepage for this GitHub project, I found `site-2.1`,
on which commit [2399008] was located.  Therefore, I made commit
[68b0adb] in the repository for this blog.

[seri3]: /blog/2016/02/22/git-for-windows-curl-gist-dot-vim-with-vundle-3/
[gvim-portable]: http://portableapps.com/apps/development/gvim_portable
[Gist.vim]: https://github.com/mattn/gist-vim
[prog]: http://polymerhk.com/articles/2016/02/03/27363/
[pp1]: /blog/2016/02/09/rake-aborted-due-to-a-vim-swap-file/
[i600]: https://github.com/imathis/octopress/issues/600#issuecomment-6206116
[2399008]: https://github.com/imathis/octopress/commit/2399008
[68b0adb]: https://github.com/VincentTam/vincenttam.github.io/commit/68b0adb
