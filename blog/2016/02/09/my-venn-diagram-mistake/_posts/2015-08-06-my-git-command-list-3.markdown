---
layout: post
title: "My Git Command List (3)"
date: 2015-08-06 17:39:08 +0800
comments: true
categories: Git
---

Overview
---

Unlike the Git commands found on the previous posts in this series, in
this article, I'll focus on *low-level* Git commands.

Raison d'être
---

Usually, one *won't* use low-level Git commands in a Git repository,
but I included them here because these commands help one understand
the [Git object model][git_obj_model].

The list
---

    $ find .git/objects       # Return all files/folders under `.git/objects'
    $ git cat-file -p {hash}  # Print the content to which {hash} corresponds
    $ git hash-object {file}  # Return the hash of {file}
    $ git hash-object --stdin # Return the hash of the standard input
    $ git write-tree          # Return the hash of the tree of tracked contents
    $ git ls-files -s         # List all tracked files and their hash
    $ git ls-tree {hash}      # List the contents of a tree
    $ git rev-parse {hash}    # Return the full SHA-1 of {hash}
    $ git rev-parse HEAD      # Return the full SHA-1 of HEAD
    $ git diff                # Show the difference between the working directory and the index
    $ git diff --cached       # Show the difference between HEAD and the index
    $ git diff HEAD           # Show the difference between HEAD and the working directory
{:.cliUB}

It *isn't* necessary to supply the full SHA-1 hash for
`{hash}`---several hex digits at the beginning will be enough.

Facts learnt
---

1. An SHA-1 hash has 160 bits.  Since 1 byte is equal 8 bit, it has 20
bytes.  When it's displayed, it has 40 hex-digits.
2. *The blob for a file is independent of the file name*, which was
actually stored in a tree object.  For example, the object ID of a
file which contains only a single line "hello world" is
`3b18e512dba79e4c8300dd08aeb37f8e728b8dad`, so if the file is stored
inside the `.git` directory as a blob, the blob will be named as
`.git/objects/3b/18e512dba79e4c8300dd08aeb37f8e728b8dad`.
3. If a sub-directory is created in the `dir` directory, then a `tree`
entry will be created in the tree object corresponding to
`dir`.[^tree_obj]

---
[^tree_obj]:
    See the code blocks and the picture in "[Tree Objects][tree_obj]"
    in Section 10.2 "Git Objects" of *Pro Git* a concrete example of a
    `tree` entry inside a tree object.

[git_obj_model]: https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
[tree_obj]: https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#Tree-Objects
