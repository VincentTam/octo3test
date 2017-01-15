---
layout: post
title: "Updated VIMRC for Vundle"
date: 2015-02-28 16:30:16 +0800
comments: true
categories: Vim
---

Background
---

Three days ago, I made a change in [my VIMRC on \*nix][vimrc] due to
[Vundle]'s interface change a year ago.[^src][^vundle_change]

With the following [Vim] editor command, the replacement was done
quickly.

    :%s/\(Plugin \)\@<="\([^"]*\)"/'\2'/

Problem
---

I got some errors when I opened Vim again.

    Error detected while processing /home/owner/.vimrc:
    line   38:
    E471: Argument required: Plugin 
    line   39:
    E471: Argument required: Plugin 
    line   40:
    E471: Argument required: Plugin 
    line   42:
    E471: Argument required: Plugin 
    line   45:
    E471: Argument required: Plugin 
    line   46:
    E471: Argument required: Plugin 
    line   47:
    E471: Argument required: Plugin 
    line   48:
    E471: Argument required: Plugin 
    Press ENTER or type command to continue
{:.cliUB}

<!-- more -->

Discussion
---

The number of errors I had received was *less* than that of the
plugins I had installed.  Therefore, it was reasonable for me to
conclude that the lines in my VIMRC for some plugin were *still*
correct.

Solution
---

After I had saved the console error output into a text file, I opened
my VIMRC with Vim, so that I could use `38G` to jump to the first
erroneous line.  Above that line, I also had some lines starting with
`Plugin`.  I compared their differences, and jumped to other erroneous
lines as well.  I finally discovered that one should *never* use a
double quote for indicating the name of the plugin --- use single
quote only.

---
[^src]:
    Commit [247f888a3c00d90b42ff0f2e2b367ce3294bf874][src] of my VIMRC
    on Gist.

[^vundle_change]: Vundle [version 0.10.2][v0102]

[vimrc]: https://gist.github.com/VincentTam/2379ba75d6ad703a3786
[Vundle]: https://github.com/gmarik/Vundle.vim "A Vim plugin manager"
[src]: https://gist.github.com/VincentTam/2379ba75d6ad703a3786/247f888a3c00d90b42ff0f2e2b367ce3294bf874
[v0102]: https://github.com/gmarik/Vundle.vim/commit/0521de9
[Vim]: http://www.vim.org
