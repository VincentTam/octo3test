---
layout: post
title: "Git Object ID Generation (4): General Trees"
date: 2015-08-07 23:41:40 +0800
comments: true
categories: [Git, Linux]
---

Background
---

After I've written [the third post][seri3] in this series, I believed
that I could generate the SHA-1 hash of *all* Git objects.

Problem
---

In order to understand the object ID of an arbitrary tree object, it
is necessary that I create a file in a sub-folder.  Suppose that I
copied the file `hello.txt` to the sub-directory `subdir` in the
directory `hello` in [the second post][seri2]  In short, I just
followed the steps in Chapter 4 of *Version Control with Git*.  I
include the setup here for convenience.

    $ mkdir hello && cd hello
    $ git init
    $ echo "hello world" > hello.txt
    $ git add hello.txt
    $ git write-tree
    68aba62e560c0ebc3396e8ae9335232cd93a3f60
    $ mkdir subdir
    $ cp hello.txt subdir
    $ git add subdir/hello.txt
    $ git write-tree
    492413269336d21fac079d4a4672e55d5d2147ac
    $ git cat-file -p 492413269336d21fac079d4a4672e55d5d2147ac
    100644 blob 3b18e512dba79e4c8300dd08aeb37f8e728b8dad	hello.txt
    040000 tree 68aba62e560c0ebc3396e8ae9335232cd93a3f60	subdir
{:.cliUB}

After having successfully generated the SHA-1 hash for the tree object
`68aba62e560c0ebc3396e8ae9335232cd93a3f60` in [the second post][seri2]
in this series, I tried the same task for another tree object
`492413269336d21fac079d4a4672e55d5d2147ac`.  Using the *same*
technique describe in [the previous post][seri3], I got another
*wrong* SHA-1 hash `06eb95bda67a8f86e65bb1590744f10a61eeccef`.

    # Note: I *didn't* type enter in the following command.  Just keep typing.
    $ printf "tree 71\x00100644 hello.txt\x00\x3b\x18\xe5\x12\xdb\xa7\x9e\x4c\x83\x0
    0\xdd\x08\xae\xb3\x7f\x8e\x72\x8b\x8d\xad040000 subdir\x00\x68\xab\xa6\x2e\x56\x
    0c\x0e\xbc\x33\x96\xe8\xae\x93\x35\x23\x2c\xd9\x3a\x3f\x60"
    06eb95bda67a8f86e65bb1590744f10a61eeccef  -
{:.cliUB}

*How to get the **right object ID***?

<!-- more -->

Cause of error
---

I realised that I had misunderstood the structure of a tree object
again after reading the first Google search result of "git tree object
format".  It's a Stack Overflow question on the "format of Git tree
object".  I read the largest code block of
[the first answer][so21599232], and find out that *the leftmost zero
digit in* `040000` *should be taken away*.

A primitive method
---

### Get the object size with the wc command

    $ printf "100644 hello.txt\x00\x3b\x18\xe5\x12\xdb\xa7\x9e\x4c\x83\x00\xdd\x08\x
    ae\xb3\x7f\x8e\x72\x8b\x8d\xad40000 subdir\x00\x68\xab\xa6\x2e\x56\x0c\x0e\xbc\x
    33\x96\xe8\xae\x93\x35\x23\x2c\xd9\x3a\x3f\x60" | wc -c
    70
{:.cliUB}

### SHA-1 hash

    $ printf "tree 70\x00100644 hello.txt\x00\x3b\x18\xe5\x12\xdb\xa7\x9e\x4c\x83\x0
    0\xdd\x08\xae\xb3\x7f\x8e\x72\x8b\x8d\xad40000 subdir\x00\x68\xab\xa6\x2e\x56\x0
    c\x0e\xbc\x33\x96\xe8\xae\x93\x35\x23\x2c\xd9\x3a\x3f\x60" | shasum
    492413269336d21fac079d4a4672e55d5d2147ac  -
{:.cliUB}

A more time-saving method
---

The above `printf` command is error-prone.  Here're some less
laborious commands.

### Understand the tree object

While searching for the cause of error, I jumped through many web
pages, and I went back to
[the Stack Overflow question stated in the second post][so13977017]
in this series.

    $ git cat-file tree 492413269336d21fac079d4a4672e55d5d2147ac | od -c
    0000000   1   0   0   6   4   4       h   e   l   l   o   .   t   x   t
    0000020  \0   ; 030 345 022 333 247 236   L 203  \0 335  \b 256 263 177
    0000040 216   r 213 215 255   4   0   0   0   0       s   u   b   d   i
    0000060   r  \0   h 253 246   .   V  \f 016 274   3 226 350 256 223   5
    0000100   #   , 331   :   ?   `
    0000106
{:.cliUB}

- The `c` flag: show the input as characters if possible, otherwise as
    octal 1-byte units.
- The `b` flag: show the input as octal 1-byte units.

Note that the number of bytes can be found at the bottom left hand
corner.  This is actually the object size of the tree object
`492413269336d21fac079d4a4672e55d5d2147ac`.

One can capture the binary output and dump it to `od` with one
command.

    $ git cat-file tree 4924132 | tee test.txt | od -c
{:.cliUB}

### An improved printf command

    $ printf "tree 70\0" > len.txt
    $ cat len.txt test.txt | shasum
    492413269336d21fac079d4a4672e55d5d2147ac  -
{:.cliUB}

We finally get the target object ID in three steps.

Facts learnt
---

### Another use of git cat-file

    $ git cat-file -s 492413269336d21fac079d4a4672e55d5d2147ac
    70
{:.cliUB}

- The `-s` flag: size
- The `-p` flag: pretty-print

From the word "pretty" in the man page for `git-cat-file`, I
understand why I had misunderstood the structure of Git tree objects.

### Use od like hd

From a comment to the second answer to
[the Stack Overflow question][so21599232] about the "format of git
tree object", I saw the word `hexdump`, and I viewed its man page.  At
first, I *didn't* know their difference, so I googled "od vs hexdump",
and then I saw the abbreviation `hd` for `hexdump`, so I changed the
search query string to "hd vs od", but found out that their functions
are basically the *same*, but their display is *different* by default.
I like the default display of `hd`.  To use `od` like `hd`, one only
needs to copy the command from the man page of `od`.


[seri2]: /blog/2015/08/07/git-object-id-generation-2-trees-with-one-single-blob/
[seri3]: /blog/2015/08/07/git-object-id-generation-3-trees-with-multiple-blobs/
[so21599232]: http://stackoverflow.com/a/21599232
[so13977017]: http://stackoverflow.com/a/13977017
