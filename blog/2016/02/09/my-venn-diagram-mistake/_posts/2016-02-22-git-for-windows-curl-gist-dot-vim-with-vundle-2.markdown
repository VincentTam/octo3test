---
layout: post
title: "Git for Windows, Curl, Gist.vim with Vundle (2)"
date: 2016-02-22 14:32:04 +0800
comments: true
categories: [Git, M$ Win*, Vim]
---

Background
---

I had been using [pathogen.vim] to manage plugin.  When it comes to
keeping the plugins up-to-date, [I used a for-loop][pp1].

Problem
---

I would like to change it to [Vundle] since I *didn't* know how to
update the helptags after merging the commits from GitHub.  Therefore,
I followed the installation guide of Vundle.  However, when I started
updating, I got the following error.

    Processing 'tpope/vim-fugitive'
    Error detected while processing function vundle#installer#new..<SNR>96_process..
    vundle#installer#run..vundle#installer#install..<SNR>96_sync..<SNR>96_make_sync_
    command..<SNR>96_get_current_origin_url..<SNR>96_system:
    line    1:
    E484: Can't open file C:/Temp/PortableApps/gVimPortable/Data/Temp/VIo985B.tmp
    Error detected while processing function vundle#installer#new..<SNR>96_process..
    vundle#installer#run..vundle#installer#install..<SNR>96_sync:
    -- More -- SPACE/d/j: screen/page/line down, b/u/k: up, q: quit
{:.cli}

**How can I get the Vim plugin updates?**

<!-- more -->

Discussion
---

Google *didn't* help this time.  *Not* knowing what to do, I ran a
simple command `ls`, and this *failed*.

    C:\Program Files\Git\usr\bin\bash -c "ls"
    'C:\Program' is not recognized as an internal or external command,
    operable program or batch file.
    shell returned 1
    Hit any key to close this window...
{:.cli}

From the above output, one knows that the cause of this unexpected
failure is the whitespace character in the path of Git Bash.  As a
result, I searched "vim 'C:\Program' is not recognized as an internal
or external" in Google.  Then I realised that it was
[a bug in Vim][vi2424].  Since I *didn't* want to spend time setting
up GVim again, I stick to GVim Portable, whose runpath is *different*
from what many developers of Vim plugins, who use \*nix, expect.

Solution
---

Invoke GVim from Command Prompt,Start Menu or desktop icon instead of
Git Bash because the `shell` option will then be `cmd.exe`, whose path
contains *no* spaces.  Then everything should be fine, *except the
line breaks*.

Remarks
---

Some developers include a `.gitignore` file in their Vim plugins to
ignore files like `docs/tags`, while some *don't*.  IMHO, it's better
to have one.

One good point of free software is that users can interact with
developers to report and discuss the problems, or even share their
code to improve the software, for example, [vim-octopress] pull
request [#11][p11].

[pathogen.vim]: https://github.com/tpope/vim-pathogen
[pp1]: /blog/2014/10/11/update-vim-plugins-managed-by-pathogen-dot-vim/
[Vundle]: https://github.com/VundleVim/Vundle.vim/
[vi2424]: http://vi.stackexchange.com/a/2424
[vim-octopress]: https://github.com/tangledhelix/vim-octopress
[p11]: https://github.com/tangledhelix/vim-octopress/pull/11
