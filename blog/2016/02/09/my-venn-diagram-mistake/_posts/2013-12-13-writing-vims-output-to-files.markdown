---
layout: post
title: Writing Vim's Output to Files
date: 2013-12-13 01:01:00 +08:00
categories: Vim
comments: true
---

Changing environment variables in vimrc
---

Refer to [Vim Wiki's page on environment variables][wiki]. The tips
uses paths in *\*nix in the examples. However, for Win\**, some
inexperienced users don't know whether slashes or backslashes should
be used. In fact, backslashes should be used, and the string should be
enclosed by a pair of single quote (I don't know if double quotes
work.) Then things should run. If you're unlucky and receive a runtime
error in the next time you start Vim, then it may be due to the
missing space characters around the equal sign.

Writing external commands to files
---

It's easy! (`:r ![command]` will do.)

Writing variables to files
---

Use the `=` register. First get into normal mode, then type the
following command.

    "=sin(1)p

The `p` have to be typed before any further changes of contents.
Otherwise, it may not work. For details, see
[Unix & Linux Stack Exchange question 8101][nixse8101].

Writing internal commands to files
---

A forum post has answered my doubt. I redirect interested readers to
[Object Mix][redi].

---
(Added on APR 09, 2016)

Fearing that this post will be deleted, I added tianlan's code below.

    :redi @+
    :version
    :redi END
    "+p
{:.cliUB}

Quick reference lists of some easy Vim commands
---

* [100 Vim commands every programmers should know][list1]
* [130+ Essential Vim Commands][list2]

[wiki]: http://vim.wikia.com/wiki/Environment_variables
[nixse8101]: http://unix.stackexchange.com/q/8101/
[redi]: http://objectmix.com/editors/786190-how-redirect-vim-internal-command-output-current-buffer.html
[list1]: http://www.catswhocode.com/blog/100-vim-commands-every-programmer-should-know
[list2]: http://php.dzone.com/articles/130-essential-vim-commands
