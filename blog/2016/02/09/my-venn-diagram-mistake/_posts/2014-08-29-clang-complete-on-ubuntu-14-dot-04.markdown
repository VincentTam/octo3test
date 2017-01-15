---
layout: post
title: "Clang Complete on Ubuntu 14.04"
date: 2014-08-29 13:44:03 +0800
comments: true
categories: [Linux, Vim]
---

Problem
---

Last night, when I tried to write a new file `hello.cpp`, I got the
following problem.

    "hello.cpp" 8L, 105C
    Loading libclang failed, completion won't be available. Are you sure '/usr/lib/'
     contains libclang?
	/usr/lib//libclang.so: cannot open shared object file: No such file or direc
    tory. To provide a path to libclang use Config.set_library_path() or Config.set_
    library_file().

    Press ENTER or type command to continue
{:.cliUB}

<!-- more -->

Solution
---

I googled "loading libclang failed", and skimmed two results.  The
first one was an clang complete issue on GitHub.[^1]  However, at
first glance, the problem was on Ubuntu *13.10, not 14.04*, and the
error messages *didn't* resemble the above message.  The second one
was a Stack Overflow question.[^2]  From the first answer, I knew that
I need to check if `libclang1` package was installed.  `dkpg -l | grep
clang` told me that I'd got clang.  I read the second answer, and
viewed the list of files in `/usr/lib/`.  There's *no* folders whose
name started with `x86`, and *no* file called `libclang.so.1` in each
sub-folder.  Looking at the issue *again* on GitHub, I found out how
to make use of the information from both sites.

    [root@localhost /usr/lib/]# ln -s /usr/lib/llvm-3.4/lib/libclang.so .
{:.cliUB}

To avoid problems, I *didn't* set Vim global variable
`clang_library_path`.

I *didn't* know whether `.1` should be appended to the end of
`libclang.so`.  Finally, I *didn't* do so, and the plugin just
*worked*.

---
[^1]: See clang complete [issue #370][f1] for details.
[^2]: See Stack Overflow [question 22733943][f2] for details.
[f1]: https://github.com/Rip-Rip/clang_complete/issues/370
[f2]: http://stackoverflow.com/q/22733943 "Where is libclang.so?"
