---
layout: post
title: "Git Object ID Generation (3): Trees with Multiple Blobs"
date: 2015-08-07 22:30:55 +0800
comments: true
categories: Git
---

Background
---

Having written [the second post][seri2] in this series, I thought that
I understood how to compute the SHA-1 hash of Git tree objects.

Problem
---

Suppose that I add a file named `rose` which consisted merely of the
word `sweet` and a line terminator to the folder `hello` in
[the second post][seri2] in this series.  I include the setup here for
convenience.

    $ mkdir hello && cd hello
    $ git init
    $ echo "hello world" > hello.txt
    $ git add hello.txt
    $ git write-tree
    68aba62e560c0ebc3396e8ae9335232cd93a3f60
    $ echo "sweet" > rose
    $ git add rose
    $ git write-tree
    b12767ff2f8a8160bca15abfb775bca5ba31ccf1
    $ git cat-file -p b12767ff2f8a8160bca15abfb775bca5ba31ccf1 | tee test.txt
    100644 blob 3b18e512dba79e4c8300dd08aeb37f8e728b8dad    hello.txt
    100644 blob aa823728ea7d592acc69b36875a482cdf3fd5c8d    rose
{:.cliUB}

Therefore, our target hash is
`b12767ff2f8a8160bca15abfb775bca5ba31ccf1`.

Just like what I'd done in the previous post, I manually changed the
hashes into a `printf` command that writes out the binary value of the
hashes.

    # Note: I *didn't* type enter in the following command.  Just keep typing.
    $ printf "tree 70\x00100644 hello.txt\x00\x3b\x18\xe5\x12\xdb\xa7\x9e\x4c\x83\x0
    0\xdd\x08\xae\xb3\x7f\x8e\x72\x8b\x8d\xad\n100644 rose\x00\xaa\x82\x37\x28\xea\x
    7d\x59\x2a\xcc\x69\xb3\x68\x75\xa4\x82\xcd\xf3\xfd\x5c\x8d" | shasum
    a4b430f9da3e22c0854fb26c97da77db271e5acf  -
{:.cliUB}

What I got is `a4b430f9da3e22c0854fb26c97da77db271e5acf`, which is
*different* from the target.  *How can I get back **the right SHA-1
hash**?*

<!-- more -->

Method
---

I read domegetter's comment on [this Gist][gist], and removed the
newline character `\n` in the middle of the quoted string in the above
`printf` command.  Then I decreased the object size by one since a
character had been taken out.

    # Note: I *didn't* type enter in the following command.  Just keep typing.
    $ printf "tree 69\x00100644 hello.txt\x00\x3b\x18\xe5\x12\xdb\xa7\x9e\x4c\x83\x0
    0\xdd\x08\xae\xb3\x7f\x8e\x72\x8b\x8d\xad100644 rose\x00\xaa\x82\x37\x28\xea\x7d
    \x59\x2a\xcc\x69\xb3\x68\x75\xa4\x82\xcd\xf3\xfd\x5c\x8d" | shasum
    b12767ff2f8a8160bca15abfb775bca5ba31ccf1  -
{:.cliUB}

We're done!

[seri2]: /blog/2015/08/07/git-object-id-generation-2-trees-with-one-single-blob/
[gist]: https://gist.github.com/masak/2415865
