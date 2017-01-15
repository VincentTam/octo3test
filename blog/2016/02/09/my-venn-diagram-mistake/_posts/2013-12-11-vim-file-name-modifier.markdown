---
layout: post
title: "Vim File Name Modifier"
date: 2013-12-11 13:19:00 +08:00
categories: Vim
comments: true
---

Typing `:h %:p` will give you a list of file name modifiers in
`cmdline.txt`, and the section below `filename-modifiers` is
`extension-removal`.  The list maybe too detailed, especially for
users who don't have much time to learn it.  Bram Moolenaar, the
father of [Vim], once said that trying to learn all the things in his
lecture called [7 Habits of Effective Text Editing][7habit] (see
habit 7).  (The video is on [Youtube][video].)  Fortunately, there're
some examples below the list.  I found some useful in the following
cases.

<!-- more -->

Case 1: Executing compiled programs
---

See [my another blog post on programming with Vim][pp] for details!

Case 2: Finding old files
---

1.  Type `:old` for a list of recently opened files (some may not
    appear)
2.  If you can find a right file, note its corresponding line number
    on the list and type `:e #<[num]` to open the file.

Case 3: Searching contents of *The User Manual*
---

In the very first section of the user manual, it's said that users
should read the user manual "from the beginning to the end like a
book".  However, you sometimes don't have much time to do so and you
need to quickly perform some tasks not covered in the sections of the
user manual that you've read, such as compiling programs.  Using the
command `:![compiler] [src-file] ...` and `:![command-to-run-prog]` is
already good since you don't have to leaving [Vim], but you may want to
see if [Vim] has some special features.  Searching something like "vim c
programming" probably gives users links to an array of [GitHub]
repositories for [Vim] plugins.  Even though you have [pathogen.vim] or
[Vundle], if things are in conflict with each other, you need a lot of
time to figure out the culprits and fix the problem.  If there's
already something written on the official manual, why don't read them
first?

The official manual has 2 parts, namely the user manual and the
reference manual.  For the former, the contents are easier to learn,
but the parts are often hard to locate with `:h howto` and search
commands.  For the latter, it's easier to locate with `:h [sth]` since
you can pass the `[command]` that you don't know to `[sth]` before
reaching a relevant section that is too hard for you to keep reading.
Therefore, *searching contents in the user manual is needed*.

Then you have to extract the path of the documentation files, which in
under some folders that you don't know.  Searching it with a file
browser will certainly be ineffective, which using searching commands
in the terminal needs time and may not guarantee a success due to the
possibility of making syntax errors.  A more efficient approach is,
assuming that the reference manual is *near* to the user manual, to
first open only page in the reference manual in order to make use of
`%` in [Vim] commands for the extraction of the path of the user manual.
Of course you need to check the *actual* contents inside the
directory.  (I have [NERDTree] installed so I use `:NERDTree %` for a
popup file tree and `cd` for a change of current directory.)

Thus, with some knowledge in the reference manual (I learn this from
`:h %:p`.), one will find out that the modifier needed is `:h`.  *In
\*nix, the command `grep` can find contents in a file; in M\$ Win\**,
I'm too lazy to learn something new so I use something like [Cygwin]
for `grep`.

Case 4: More about extraction of path of the current file
---

In the previous case, `%` and its modifiers enables you to refer to
the path of the file, but you don't *see* its full path.  In order to
do so, type `:echo expand("%")`.

Conclusion: Stop repeatedly typing the same long thing
---

Leave machines to machines since they can efficiently replicate long
things.  That's another tip from Bram Moolenaar ([Tip 2][7habit]).

[Vim]: http://www.vim.org
[7habit]: http://www.moolenaar.net/habits.html
[video]: http://youtu.be/p6K4iIMlouI
[pp]: /blog/2013/12/11/fast-compilation-and-execution-of-source-code/
[GitHub]: https://github.com
[pathogen.vim]: https://github.com/tpope/vim-pathogen
[vundle]: https://github.com/gmarik/vundle
[NERDTree]: https://github.com/scrooloose/nerdtree
[Cygwin]: http://cygwin.com
