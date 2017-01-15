---
layout: post
title: "Used More Bash Utilities"
date: 2015-08-22 11:59:26 +0800
comments: true
categories: [Git, Linux]
---

Background
---

Same as what has been written in my older post
[*Using Xclip*][pp_xclip].

Drawback
---

Inputing the keyboard command for the paste action is, in my opinion,
*laborious*.

Tools used
---

1. `find`
2. `grep`
3. `sed`
4. `awk`
5. `xargs`

<!-- more -->

### The find command


    find . -path ./dir -prune -o -name '*.txt' -type f -print
    find ./foo -exec wc {} \;
{:.cliUB}

- `-path ./dir -prune -o`: exclude the directory `./dir`
- `-name '*.txt'`: match the name of the file
- `-type f`: match files only, not directories
- `-print`: print all matched paths
- `-exec {cmd} {} \;`
    - execute *one single* command `{cmd}`, no pipes are allowed
    - `{}`: an instance of matched path
    - `\;`: terminator

I've found that if `-type f` goes *before* `-path ./dir -prune -o`,
the path `./dir` *won't* be excluded.  **Don't use `./`, use `.`!** on
Mac.

Using `-not -path ./dir` option *doesn't* work.

### The grep command

- `-I`: ignore binary files
- `-q . {}`: match any characters and suppress output for faster
    execution

### The sed command

- `-i .bak`: edit file with backup extension `.bak` (Mac only, not in
    \*nix)
- `-i ''`: no backup (Also Mac only)
- `sed 'p;s/foo/bar/'`: print original and replaced strings, separated
  by newline.

### The awk command

The command `awk '{ print $2 }'` extracts the second column.  For more
examples, see [the simple awk tutorial][awk_tut].

### The xargs command

This is a very powerful command when combined with `find`.  This
utility reads from `stdin` and echos it.

- no flags: all output joined into a single line
- `-n3`: 3 space-delimited stdin in each line
- `xargs -n2 {cmd}`: execute `{cmd} {arg1} {arg2}`, ..., `{cmd}
    {arg2n-1} {arg2n}`.

### Putting things together

Here's some sample commands.

#### Find and replace for all text files under a path

    find . -path ./.git -prune -o -type f -exec grep -Iq . {} \; -and \
    -exec sed -i 's/foo/bar/g' {} \;
{:.cliUB}

Ignore the `.git` folder, which is the Git repository, to avoid
damaging it.

#### Find and replace substrings in path names

    find . -path ./.git -prune -o -name "*foo*" -print | sed \
    'p;s/foo/bar/g' | xargs -n2 mv
{:.cliUB}

All instances of `foo` in path names are replaced with `bar`.  Note
that that `-print` option *should be included*.  Otherwise, the path
`./.git` which is intended to be omitted will appear in the piped
output and processed by `sed`, and then the terminal will throw the
follow error message.

    fatal: can not move directory into itself, source=.git, destination=.git/.git
{:.cliUB}

#### Find and replace Git remote paths

    $ git remote -v | awk '{ print $2 }' | head -1 | \
    xargs git remote set-url origin
    $ git remote -v
    origin	https://github.com/VincentTam/StudentList1.git (fetch)
    origin	https://github.com/VincentTam/StudentList1.git (push)
    $ git remote -v | awk '{ print $2 }' | head -1 | sed \
    's/StudentList1/StudentList4/' | xargs git remote set-url origin
    $ git remote -v
    origin	https://github.com/VincentTam/StudentList4.git (fetch)
    origin	https://github.com/VincentTam/StudentList4.git (push)
{:.cliUB}

* * * * *
(ADDED ON DEC 26TH, 2015)

#### The highlighting of grep after find

In Gnome Terminal, the `grep` command alone highlights the matched
text in red by default.  However, if it's placed after `find ...
-exec`, then the highlighting will be *disabled*.  In order to enable
it again, add the option `--color=auto` to `grep`.

[pp_xclip]: /blog/2014/12/12/using-xclip/
[awk_tut]: http://www.hcs.harvard.edu/~dholland/computers/awk.html
