---
layout: post
title: "Git Object ID Generation (5): Predict ID"
date: 2015-08-11 10:52:56 +0800
comments: true
categories: [Git, Linux, M$ Win*]
---

Goal
---

The method for getting the Git object ID described in
[previous post in this series][seri4] *isn't* quick enough since it
consists of *several* commands.

The one-line command
---

### Objects with known Git ID

    $ (printf "{obj_type} $(git cat-file -s {hash})\0" && git cat-file {obj_type} {h
    ash}) | shasum
{:.cliUB}

- `{obj_type}` can be `blob`, `tree`, `commit` or `tag`.
- `{hash}` is the SHA-1 hash of the object.

Then the output SHA-1 hash should be the *same* as the input `{hash}`.

### Predict Git object IDs
Hence, we can modify the above command to predict the Git object ID of
a `{file}`.

    $ (printf "{obj_type} $(wc -c {file} | tr -dc '0-9')\0" && cat {file}) | shasum
{:.cliUB}

In order to verify the result for files, one can quickly get the blob
ID from Git by `git log -1 -p -- {file}`.

Facts learnt
---

### Extract numbers from a string in bash

I typed "linux extract number" on Google, and the autocompletion gave
me "from string".  I finally saw two commands for doing this.

1. `sed 's/[^0-9]//g'`
2. `tr -dc '0-9'`

In my opinion, the later is simpler.  The `-c` flag takes the
complement of the characters marked by `-d`.

### Using cat on M\$ Win\*

Using the command in the section "Predict Git object IDs" gives users
a *wrong* SHA-1 sum.  The reason is that M\$ Win\* uses `\r\n` instead
of `\n` for starting newlines.  This also results in the *incorrect*
byte count of the files with `\r\n` as the line terminator in that
command.  Thus, the extra `\r` needs to be deleted with `tr -d '\r'`.

### Using Git for Win\*

For the installed version of Git on M\$ Win\*, one needs to use
`sha1sum` instead of `shasum`.  Otherwise, Git Bash will complain that
it is "Unable to find Digest::SHA or Digest::SHA::PurePerl".

### Using GitPortable on M\$ Win\*

Since one *can't* even issue the command `sha1sum`, use `openssl sha1`
instead.  (Omitting the trailing `1` will result in a *very different*
hexadecimal number.)

[seri4]: /blog/2015/08/07/git-object-id-generation-4-general-trees/
