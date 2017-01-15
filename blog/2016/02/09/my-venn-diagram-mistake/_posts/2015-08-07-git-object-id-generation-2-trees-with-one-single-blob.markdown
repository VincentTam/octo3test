---
layout: post
title: "Git Object ID Generation (2): Trees with One Single Blob"
date: 2015-08-07 19:36:21 +0800
comments: true
categories: Git
---

Background
---

In [the first post][seri1] in this series, I've claimed that the
generation of object IDs in Git is the SHA-1 hash of the string

    <object type name> SP <len> NUL <data>

,where

- `<data>` stands for the output of `git cat-file -p {hash}`
- `<len>` means the length of `<data>`.  It can be measured with the
    command `wc -c`.

Problem
---

To verify my claim, I followed the steps in Chapter 4 of *Version
Control with Git*.

1. Create a folder named `hello` and go to that directory.
2. Initialise an empty Git repository.
3. Create the file `hello.txt` with one single line "hello world".
4. Add the file to Git's object storage.
5. Get a tree object from the index.
6. Capture the contents of the tree object in `test.txt`.
7. Count the number of bytes in `test.txt`.
8. Create the file `len.txt` consisting of

        "tree" SP <result in item 6> NUL
    {:.cliUB}

    *without* the line terminator.

9. Concatenate the contents of the files `len.txt` and `test.txt` and
compute its SHA-1 hash.

<pre class="cliUB"><code>$ mkdir hello && cd hello
$ git init
$ echo "hello world" &gt; hello.txt
$ git add hello.txt
$ git write-tree
<span class="UBHLCode">68aba62e560c0ebc3396e8ae9335232cd93a3f60</span>
$ git cat-file -p 68aba62e560c0ebc3396e8ae9335232cd93a3f60 | tee test.txt
<span class="UBHLCode">100644 blob 3b18e512dba79e4c8300dd08aeb37f8e728b8dad	hello.txt</span>
$ wc -c test.txt
63 test.txt
$ printf "tree 63\0" &gt; len.txt
$ cat len.txt test.txt | shasum
<span class="err">10bd0f0350027c25edc4ce72aba60e641f55596d  -</span>
</code></pre>

As can be seen above, I've <span class="err">a wrong SHA-1
hash</span>.  *How can I get back **the right SHA-1 hash**?*

<!-- more -->

Method
---

I googled "git tree hash id", and I found the chosen answer of
[this Stack Overflow question][so13977017] very explanative.  One may
shorten the included command by replacing `echo -en` with `printf`.

### Get the object size right

In this case, the object size of the tree
`68aba62e560c0ebc3396e8ae9335232cd93a3f60` containg the blob
`3b18e512dba79e4c8300dd08aeb37f8e728b8dad` which corresponds to the
file `hello.txt` should be 37 (= 6 + 1 + 9 + 1 + 20).

### Get the object content right

As the blob ID is stored as binary value, I copied it and pasted it
Vim so that I could easily insert `\x` in front of a pair of hex
digits in the blob ID.  I then put the things together in a command.

    # Contents of `testing.sh' as seen inside Vim
    # Note that there's NO newline character in the following command
    printf "tree 37\x00100644 hello.txt\x00\x3b\x18\xe5\x12\xdb\xa7\x9e\x4
    c\x83\x00\xdd\x08\xae\xb3\x7f\x8e\x72\x8b\x8d\xad" | shasum
{:.cliUB}

### Result

By executing the above command, I got **the right SHA-1 hash**:
`68aba62e560c0ebc3396e8ae9335232cd93a3f60`.

Fact learnt: formatting printf's output
---

In the Stack Overflow question, there's a command

    find .git/objects/ -type f -printf "%h%f %s\n"
{:.cliUB}

- The flag `-type f` stands for files.  *Without* this flag,
    directories like `.git/objects` will be displayed.
- The flag `-printf` formats the output.
    - `%h` means the head of the file name *without* the last
        component of the file name.  Thus, it expands to a the path of
        a directory *without* the trailing `/`.
    - `%f` means the last component of the file name.  As a result,
        the `/` inside the displayed SHA-1 hashes are taken away.
    - `%s` means the file size

[seri1]: /blog/2015/08/07/git-object-id-generation-1-blobs-and-commits/
[so13977017]: http://stackoverflow.com/a/13977017
