---
layout: post
title: "Find Files For Vim to Edit in Bash"
date: 2015-08-23 23:48:54 +0800
comments: true
categories: [Linux, Vim]
---

Background
---

Since copying and pasting the output of a command can be a tedious
job.  For example, if you want to create your blog using a framework,
you may first logon to your [GitHub] account and create an *empty*
repository there, then `git clone` [Octopress]/[Jekyll-Bootstrap] from
GitHub, reset the `origin` URL, and input the new URL based on the old
one.

After having created a repository online, you will see the URL of the
repository using the SSH protocol.  If one *doesn't* want to repeat
the start of the URL `git@github.com:`, one may use the bash commands
introduced in [the previous post][pp] to extract its useful parts for
the `sed` substitution.

    $ git remote -v
    octopress	git@github.com:imathis/octopress.git (fetch)
    octopress	git@github.com:imathis/octopress.git (push)
    origin	git@github.com:VincentTam/vincenttam.github.io.git (fetch)
    origin	git@github.com:VincentTam/vincenttam.github.io.git (push)
    $ name=userName; repo=repoName
    $ git remote -v | sed -n '3{p;q}' | awk '{print $2}' | sed -r \
    "s;(\w*)/(.*).git;$name/$repo.git;"
    $ unset name repo
{:.cliUB}

Problem
---

I tried extracting a list of Markdown files containing a particular
word and passing them to [Vim] as arguments using `find`, `grep` and
`xargs`.  Unluckily, I got an error.

    $ find source/_posts/ -name "*.markdown" -exec grep -q ^tag {} \; \
    > -print | xargs vi
    Vim: Warning: Input is not from a terminal
    3 files to edit
    $ 
{:.cliUB}

Note: *Without* the `-print` flag, the above command *won't* work.

<!-- more -->

Solution
---

As a result, I searched "vim warning input is not from a terminal
xargs" on Google, and found [this question][su336016] very useful.  I
should have wrapped the `find` command like `$(find ...)`.

    $ vi $(find source/_posts/ -name "*.markdown" -exec \
    > grep -q ^tag {} \; -print | xargs)
    3 files to edit
{:.cliUB}

Facts learnt
---

### sed
- `3{p;q}`: quit after printing the third line for the sake of
    efficiency
- `-r`: use extended regular expression to save the trouble of
    escaping `()` for submatches.
- `-n`: suppress standard output.
- Enclose the expression
    - with *single* quotes to *disable* interpretation of bash
        variables
    - with *double* quotes to *enable* interpretation of bash
        variables.
- One can replace the delimiter `/` in the expression
    `s/{pat}/{repl}/` by any one character from `_;#| `.
- Specify a custom delimiter like `\%.%s%foo%bar%`.  (The
    variable/range `.` is *needed*.)

### bash

- Set variables using `var1=value1;var2=value2;...`
- Unset variable usign `unset var1 var2 ...`

[GitHub]: https://github.com
[Octopress]: http://octopress.org
[Jekyll-Bootstrap]: http://jekyllbootstrap.com
[pp]: /blog/2015/08/22/used-more-bash-utilities/
[Vim]: http://www.vim.org
[su336016]: http://superuser.com/q/336016

*[URL]: Uniform Resource Locator
*[SSH]: Secure SHell
