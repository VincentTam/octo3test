---
layout: post
title: Vi Key Bindings in Emacs
date: 2013-12-23 23:40:00 +08:00
categories: Emacs
comments: true
---

From [Wikipedia's entry on the Editor's War][wiki], we can see some
nicknames of [GNU Emacs][Emacs], such as "EMACS Makes All Computers
Slow", "Esc Meta Alt Ctrl Shift", etc.  I found the second one true.
I tried using [Viper], but it's inconvenient to browse info files
since the `<C-]>` button doesn't work.  As a result, I need to toggle
[Viper] using `<C-z>` all the time.  Nevertheless, it's too
inconvenient.  Maybe that's because of my low level of [Viper] set
(level 1), and there are other plug-ins that enables users to use
Vi(m)'s key bindings in [Emacs], but I'm tired of this sort of tedious
work.

After overcoming a steep slope in the very first part of the learning
curve of a powerful tool, maybe you'll find out that there's some
other more productive tool for doing the job.  That's not something
new and that's the reason for so many different tools to come up.  For
example, [Vim] is originally intended to be part of the shell, and
you've spent hours to get a [Vim] plug-in for [GDB] integration (e.g.
pyclewn).  Finally you found out that you forgot that both [Emacs] and
[GDB] are developed by GNU, and they are the early famous softwares
from GNU, so they should work well together.  Otherwise, how can GNU
encourage users to use free softwares? Therefore, it's sensible to
expect that [Emacs] has a built-in support for [GDB].  \(And it
does!\)

*Hence, the best way is to be flexible and use suitable tools to do
different jobs.*

After realising the use of both of the two most famous text editors
for \*nix users, it's important for us to get use to them.  As a [Vim]
user, reading the official [Emacs] tutorial available on the homepage
of [Emacs], I've found out that it's too long if what I need is to do
some basic editing work.  Some introductory web pages on elementary
[Emacs] commands from some tertiary educational institutions can help
some newbies of [Emacs], but if you can link up new knowledge with any
previously known ideas, it'll be even better to refer to
[this post][src].

[wiki]: https://en.wikipedia.org/wiki/Editor_war
[Emacs]: https://www.gnu.org/software/emacs
[Viper]: https://www.gnu.org/software/emacs/manual/html_mono/viper.html
[Vim]: http://www.vim.org
[GDB]: https://www.gnu.org/software/gdb/
[src]: http://www.elmindreda.org/emacs.html
