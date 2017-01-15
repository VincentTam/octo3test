---
layout: post
title: "$\\rm \\LaTeX$-Suite in Portable Git"
date: 2016-04-09 14:34:38 +0800
comments: true
categories: [Git, LaTeX, LaTeX-Suite, Linux, M$ Win*, Vim]
---

Background
---

A year ago, I was using msysgit on M\$ Win\* 7. Its support for
Unicode characters *isn't* so good, and I *can't* write a text file
with accents like "café" in the Vim editor that shipped with msysgit.
As a result, I needed GVim for editing my $\rm \LaTeX$ documents.

Unluckily, unlike Linux, the GVim can *never* have forward control.
Therefore, I needed to switch windows between GVim and Git Bash.

More importantly, if I want to apply the Linux skills and the tools on
M\$ Win\*, I need *portable* programs excutable on a USB unless I
carry my laptop.

Luckily, the bash shell in Git for Windows has improved a lot.  The
accents are well supported.  Then, I have switched from GVim to the
embedded Vim in Git for Windows.  Luckily, the setup of Vundle was
smooth. Most of the installed plugins work fine in terminal Vim.

Problem 1
---

In the post [*Git Portable Home Path*][pp1], a BAT file is included so
that the home folder and the `HOMEDRIVE` environment are automatically
set.  Since the *same* Git repository can be shared among multiple
devices, such as my Linux desktop, my M\$ Win\* 7 laptop, and my USB
stick, a bare repository is needed for efficient pulling and pushing
of Git commits.  Since I work outside home, I place a bare Git repo in
my USB stick.  However, for each local Git repository stored in the
USB stick (under `~/local_repo`, a.k.a.
`$HOMEDRIVE/PortableGit/home/owner/local_repo`), I need to run the
following command for each time I use Git Bash.

Problem 2
---

After making some changes on a $\rm \TeX$ file, I compiled the file
using Mik$\rm \TeX$ Portable.

1. Browse the folder `$HOMEDRIVE/MikTeXPortable/`.
2. Double-click on `miktex-portable.cmd`.
3. In the Command Prompt popped up, switch to
   `$HOMEDRIVE/PortableGit/home/owner/local_repo`.
4. Type `pdflatex file.tex`.

This sounds really slow.  The goal is to find a more efficient $\rm
\LaTeX$ editing workflow.

That's *not* the end.  Another bad news came from `eu1lmr.fd`.  I've
got error similar to [fengbaobao6's][err].  The compilation was
*stuck* at `...\tex\latex\euenc\eu1lmr.fd`.  Then an error was shown:
"Fontconfig error: Cannot load config file".

<!-- more -->

Solution 1
---

1. Create a file `~/.bashrc` if it *doesn't* exist.
2. Write an array consisting of all local Git repositories saved in
   the USB stick in BASHRC.
3. Then Write a for loop to reset the remote location.

Solution 2
---

Searching the error text, I found kounoupis's answer on
[Ask Ubuntu][au708541].  Even though the `export` command *didn't*
work for me, I still found his answer informative.

Finally, reading `miktex-portable.cmd`, I gave up on investigating the
problem, and added the last line of this file into BASHRC since I have
other important things to do.

{% render_code miktex-portable.cmd Actual CMD file found in Mik$\rm \TeX$ Portable %}

To include Mik$\rm \TeX$ into `PATH`, I first extracted `$HOMEDRIVE`
in the form `/f` instead of `F:/`.  If not, Mik$\rm \TeX$ *won't*
work.

Conclusion
---

Here's my BASHRC for Git Bash.

{% render_code bashrc My BASHRC %}

If the setup is correct, then `\ll` in $\rm \LaTeX$-Suite should
automatically trigger the $\rm \LaTeX$ compilation.  I give up on
finding ways to open a viewer with `\lv` since I can use the keyboard
to switch to a web browser to see the compiled PDF file *without*
installing another PDF viewer in my USB stick.

Lessons learnt
---

I've learnt some Perl and bash after writing this BASHRC.

1. A little bit of Perl
    - `$ENV{HOMEDRIVE}` for extracting the environment variable
        `HOMEDRIVE`.
    - `/(regex_pat)/;` for extracting matching string to capture
        groups `$1`, `$2`...  (The `()` around `regex_pat` is
        *crucial*.)
    - `.` for string concatenation.
    - `lc()` for converting a string to lowercase.
2. Bash for loop writing: described in [one of my recent posts][pp2].

[pp1]: /blog/2016/03/20/git-portable-home-path/
[err]: http://bbs.ctex.org/forum.php?mod=viewthread&tid=75679
[au708541]: http://askubuntu.com/a/708541
[pp2]: /blog/2016/04/08/loop-through-an-array-having-only-one-element-in-bash/
