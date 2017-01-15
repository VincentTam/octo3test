---
layout: post
title: "Git Object ID Generation (1): Blobs and Commits"
date: 2015-08-07 13:52:47 +0800
comments: true
categories: Git
---

The SHA-1 hash for blobs *isn't* so hard to generate, and the process
is now well-known.  I *don't* repeat it here.  The one for commits can
be similarly generated.

<!-- more -->

For example, `5b7b566b8a07d4813ba9f08a326e169cf38ca20f` is a hash of
the repository of this blog.

Remark: The email shown below is *fake*, so the SHA-1 hash of `HEAD`
*isn't* real.  For the reason of displaying that email, you may refer
to [the remark in *Git Object Id Generation (4): General Trees*][pp1].

    $ git rev-parse head
    5b7b566b8a07d4813ba9f08a326e169cf38ca20f
    $ git cat-file -p 5b7b566b8a07d4813ba9f08a326e169cf38ca20f | tee test.txt
    tree 2d864bcb7e4944e9d98b663649c79084692873c1
    parent afcb4d97cb447112bd2e930159966d92b8e4754a
    author vincent tam <demo@example.com> 1438859683 +0800
    committer vincent tam <demo@example.com> 1438864942 +0800

    a new post on some git low level commands

    I *don't* go over the details of the book *Pro Git*, which is available
    online.  I just select some important ones for quick reference.
    $ wc -c test.txt
    379 test.txt
    $ printf "commit 379\0" > len.txt
    $ cat len.txt test.txt | shasum
    5b7b566b8a07d4813ba9f08a326e169cf38ca20f  -
{:.cliUB}

We get the *same* SHA-1 hash.  Therefore, the ID for Git commit
objects is just the SHA-1 hash of the contents of the Git commits with
the string `commit {len}\0` inserted at the beginning, where `{len}`
stands for the number of bytes of the Git commit object (which is
stored in `test.txt` in the above situation).

Facts learnt
---

### The printf command

The commands `printf "\0"` and `printf "\000"` *doesn't* differ.
Therefore, if a digit zero follows the null character, one may
indicate the null character using hex digits: `printf "\x000"`.
`printf` will interpret `\x00` as a null character and the trailing
digit `0` *won't* be mixed up with the characters on its left.

### The wc command

Apart from counting words, the `wc` command provide various flags
which return the number of lines, characters, etc.  In the past, I
knew three flags only: `-l`, `-w`, and `-c`.  I thought that they told
`wc` to count the number of **l**ines, **w**ords and **c**haracters
respectively.  After running the `wc` command on strings that include
accents (e.g. "café", "resumé", etc), I realised that I misunderstood
the function of the `-c` flag, which actually counts the number of
*bytes* of the input.  To count the number of characters, use the `-m`
flag instead.

[pp1]: /blog/2015/08/07/how-does-git-commit-amend-work/
