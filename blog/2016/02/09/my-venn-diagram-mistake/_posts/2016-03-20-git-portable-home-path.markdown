---
layout: post
title: "Git Portable Home Path"
date: 2016-03-20 17:47:21 +0800
comments: true
categories: [Git, Linux, M$ Win*, Vim]
---

Background
---

I often included Unicode characters in my commit messages, such as
"Committed in a café".  Since I *couldn't* input the character 'é'
inside the [Vim] editor shipped with msysgit, and the `curl` utility
*didn't* get along well with my [GVim Portable][gvim-portable]
I decided to [upgrade it][pp].

Then I set up things after the installation of [Git for Windows][g4w]
so that it works well with [Vundle] now.[^setup]  After that, I
thought that it would be great if I can set it up on a USB stick so
that the Vim editor with the powerful plugins can be executed on
*every* M\$ Win\* 7 machine.

The first Google search result for "git portable" is the webpage for
Git for Windows downloads.  To get it installed on a USB device,
*don't* click "Save file" for the dialog box that popped up upon the
page is loaded.  *Choose the "thumbdrive edition".*

Problem
---

Each time I opened the Vim editor from Portable Git Bash from the USB,
a new `.viminfo` file was created in the home folder of current user
in the C drive.  (e.g. `C:\Users\Foo\.viminfo`)  Therefore, it could
be deduced that VIM installed (under `/usr/share/vim/vim74`) in the
USB *couldn't* load the configurations from `.vimrc` stored on the
*same* USB.  What an irony!

**How can one build a truly *portable* Vim in the USB stick?**

<!-- more -->

Discussion
---

Searching "git portable home path" on Google, I found
[an article about setting `$HOME` and SSL keys for GitHub][art].
However, it was written *several years ago*.  In the current version
of Git for Windows, `git-bash.bat` *doesn't* even exist.

Another search result was [a Stack Overflow question][so3455231].  I
tried copying [dgw]'s [wrapper] into `git-bash-portable.bat`.  I
adapted it to my installed copy of Git Portable by changing the
extension name at the last line from `bat` to `exe`.  Unluckily, it
took a long time to load the Portable Git Bash on clicking the batch
file.

Solution
---

I found [Jason Cemra's comment on issue #320][i320] of Git for Windows
on GitHub extremely useful.

{% render_code git-bash.bat Launch Portable Git Bash with proper a home folder %}

I borrow the line `set HOMEDRIVE=%~d0` from [dgw] since the drive
letter of the USB can *change*.  This facilitates the process of
adjusting the path of the `origin` when it comes to pushing a non-bare
Git repository in the USB device to a bare one in the *same* device.
(If the Win\* machine *doesn't* have Git and Vim installed, I use the
ones in my USB stick.  Otherwise, I use the installed versions of
those softwares.)

Remarks
---

Since the shell of a Vim session invoked by Git Bash is automatically
set to `/usr/bin/bash`, it is expected that
[Zaadi’s VIMRC configuration][zaadi] for automatic installation of
[Vundle] works.  Though I'm using the version written two years ago,
it still functions well.

To write in $\rm \LaTeX$ on *every* Win\* 7 device, I also copied the
[Mik$\rm \TeX$ Portable][miktexp] from my laptop to my USB stick.

I practised my `sed` skills by using `sed '2 i set HOMEDRIVE=%~d0'` to
insert contents *before* the second line.

---
[^setup]:
    See the newest series *Git for Windows, Curl, Gist.vim with
    Vundle* for details.

[Vim]: http://www.vim.org
[gvim-portable]: http://portableapps.com/apps/development/gvim_portable
[pp]: /blog/2016/02/22/git-for-windows-curl-gist-dot-vim-with-vundle-1/
[g4w]: https://git-for-windows.github.io/
[Vundle]: https://github.com/VundleVim/Vundle.vim
[art]: http://markb.co.uk/portable-git-windows-setting-home-environment-variable.html
[so3455231]: http://stackoverflow.com/a/3455231
[dgw]: http://stackoverflow.com/users/5991/dgw
[wrapper]: https://gist.github.com/533267
[i320]: https://github.com/git-for-windows/git/issues/320#issuecomment-140278002
[miktexp]: http://miktex.org/portable
[zaadi]: http://www.erikzaadi.com/2012/03/19/auto-installing-vundle-from-your-vimrc/
