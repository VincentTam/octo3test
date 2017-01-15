---
layout: post
title: "My Git command List (1)"
date: 2014-06-16 00:04:04 +0800
comments: true
categories: Git
---

Since I have *poor long-term memory* in commands, I'll write down the
[Git] commands that I know.

This list is written for my reference *only*.  Therefore, I *won't*
include everything.  I'm going to write some basic stuff, so that I
can review it if I've forgotten it.  If you want detailed explanation
for a command, find the documentation instead.  If you've encountered
a problem using Git, the *best* teacher is, in general, a search
engine.

<!-- more -->

Initial Setup
---

Refer to [*Pro Git* section 1.5][GitBook1.5].

I recommend new Git users to set the configuration variable
`push.default` using `git config` with the `--global` option, which
make Git save the variables in `~/.gitconfig`, so as to avoid the
warning shown in [Marko's Stack Overflow question][so13148066].[^1]
Due to my limited understanding of Git, I *couldn't* find a way to
suppress the warning after reading the Stack Overflow question.  I
eventually figured it out after reading a Chinese blog post found in
the first footnote.

Initialize repositories
---

    $ git init
    $ git init --bare
{:.cliUB}

For the first one, it's the usual command used for a repository which
contains the source code.  For the second one, it can be used on a
remote server.[^2]

Note: "Running `git init` on an existing repository is safe."[^3]

Clone repositories
---

See [*Pro Git* section 2.1][GitBook2.1].

From [Nowhere man's answer][so2816369], I know that one can pass the
`--bare` option to `git clone`.

    $ git clone --bare repo.old repo
{:.cliUB}

In the above command, `repo.old` is an old repository, and one creates
a new bare repository `repo` from that old non-bare repository.

Get things from remote repositories
---

There are basic commands: `git pull`, `git fetch` and `git merge`.
Roughly speaking, the first one is the "sum" of the following two.

    $ git fetch           # fetch from origin/upstream
    $ git fetch host      # fetch all branches from remote "host"
    $ git fetch host foo  # fetch branch "foo" from remote "host"
{:.cliUB}

Note: In the above codeblock, `pull` can be substituted by `pull`.

Before actually merging the branches, we can see their differences
first.

Viewing the differences
---

I only know `git diff`.

### Basic usage

If you've written something and have *not yet* committed your changes,
you may issue `git diff` in the terminal to see the difference between
your uncommitted changes and the latest commit.  `-` represents the
older committed contents, whereas `+` represents the newer uncommitted
changes.

### Compare the tip of the branch with older commits in the same branch

Just appending the first seven digits of the 40-digit SHA-1 hash of
the commit to `git diff` will do.

### Comparing branches

I found a page in the official reference. ([URL][GitRefGitDiff])  The
`<1>` form worked well if I compared `origin/source` and
`octoress/linklog` in `~/octopress`.  However, I *haven't* fully
understand this command.

    $ git diff origin/source source
    fatal: ambiguous argument 'source': both revision and filename
    Use '--' to separate paths from revisions, like this:
    'git <command> [<revision>...] -- [<file>...]'
{:.cliUB}

---
(Added on AUG 07TH, 2014)

Now I know how to correct the above Git command.  Refer to my newer
post [*Double Hyphens in Git Diff*][NewPost].

---

Add/remove Files
---

There are three basic commands:

- `git add`
- `git mv`
- `git rm`

See [Charles Bailey's post][GitAdd] for the difference between `git
add -A` and `git add .`.

    $ git add <file>...             # Add <file> to the staging area
    $ git add .                     # Add all modified/new files that are tracked
    $ git add -A                    # The '-A' flag stands for "all"
    $ git mv <file> <new dir/path>  # move the file and record the action in Git
    $ git rm <file>                 # delete a file and record the action in Git
{:.cliUB}

I've read a simplified Chinese blog post which explained the
difference between `git rm` and `rm`.  ([URL][(git )?rm])

You may include some untracked files in `.gitignore`, so that those
files will be ignored by Git.

Commit changes
---

The only command is `git commit`.  There are some basic options that
one can make use of.

- `-a` (a.k.a. `--all`): commit changes of all tracked files.
- `--amend`: change the commit message of the tip the working branch.
- `-m <msg>` (a.k.a. `--message`): Directly input the commit message.

If the `-m` flag is used, then an editor window *won't* be invoked.
In the editor window that contains the commit message, the first line
is the header of the commit, while the second line should be left
blank. The subsequent lines that *don't* begin with `#` is the content
of the commit message.

If you want revert `git commit --amend`, you may refer to my
[previous post][PrevPost1].

Revert changes
---

To me, it's the *most important* part of this post.  I know *only* two
commands for this type of task.

<pre class="cli"><code class="UBMono">$ git reset HEAD &lt;file&gt;...   # unstage &lt;file&gt;
$ git reset HEAD --soft      # unstage all uncommitted chanages <span class="UBHLCode">without</span> changing the file(s)
$ git reset HEAD --hard      # revert the files to the latest commit
$ git checkout -- &lt;file&gt;...  # undo all uncommitted changes to &lt;file&gt;
</code></pre>

Working with branches
---

I know that it's an important feature of Git, but I *don't* that very
often now, so I just include some simple commands here.

<pre class="cli"><code class="UBMono">$ git branch                 # list all branches, <span class="UBHLCode">excluding</span> the remote ones
$ git branch --list          # same as above
$ git branch -a              # list all branches, <span class="UBHLCode">including</span> the remote ones
$ git branch foo             # create `foo' branch from the current one
$ git checkout foo           # switch to `foo' branch from the current one
$ git checkout -b foo        # the "sum" of the above two commands
$ git branch -d foo          # delete `foo' branch
$ git checkout --orphan foo  # create a new orphan branch named `foo'
</code></pre>

When I started using Octopress, I *wasn't* familiar with Git.  Thus,
I messed up the commands that dealt with branches and the network
graph of my Git repository of this blog.

Show the history
---

There's [a GUI way](#gitk) to do so.

    $ git show    # Show the diff hunks of recent commits
    $ git log     # Show the commits without diff hunks
    $ git log -6  # Show the 6 most recent commits
    $ git log -p  # Show the commits with diff hunks
{:.cliUB}

*Without* the `-p` flag, `git log` will show the user's name and
email, time, SHA-1 hash, header and content of each commit, but *not*
the diff hunk(s).  The key motions for browsing through commits in
`git log` is similar to those in the `less` utility.  If the number of
commits *isn't* specified, one can browse through the *whole* commit
history by scrolling down to the bottom.

One can use `git show` to format the output, but I *haven't* learnt
that.

I am looking forward to writing a second list, but I *don't* think I
can make it in the next few months.

Some off-topic stuff
---

### gitk

One can invoke `gitk`, which is a GUI tool for viewing the Git commit
for showing history, if he/she *doesn't* want to learn the commands in
the above section.

### fugitive.vim

(EDITED ON FEB 09TH, 2016)

[fugitive.vim] is a great Vim plugin.

    :Gst[atus]      # Show the `git status' on a horizontal split window
    :Git <command>  # Equivalent to `:!git <command>'
    :Glog           # Show commits of the current file in a quickfix list
    :Gllog          # Show commits of the current file in a location list
    :Glog --        # Show all commits of the current branch as diff hunks
    :Glog -- %      # Show all commits containing the current file as diff hunks
    :Glog -- foo    # Show all commits containing the file `foo' as diff hunks
{:.cliUB}

<del>I *don't* know the use of `:Glog`.</del>

Within `Gstatus`, you can conveniently add/remove files from the
staging area.

- `<C-n>` and `<C-p>` jump to the next and previous files
    respectively.
- `cc` is for a Git commit.
- `g?` invokes a list of key mappings which can be used in the `:Gstatus` help
    window.
- `D` is like `git diff`, but with the layout of `vimdiff`.  By
    default, one window is on top of another.
- `dv` is like `D`, but one window is on the right of another.

---
[^1]: The last sentence of [this blog post][ChinPost].
[^2]: See my post [*Local Huge File Sharing*][PrevPost2] for details.
[^3]: Refer to a [Stack Overflow question][so5149861].

[Git]: http://git-scm.com/
[GitBook1.5]: http://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup "Getting Started - First-Time Git Setup"
[so13148066]: http://stackoverflow.com/q/13148066/ "Warning: push.default is unset; its implicit value is changing in Git 2.0"
[ChinPost]: http://www.zhetenga.com/view/git%20push警告：warning:%20push.default%20is%20unset-c0e395114.html "git push警告：warning: push.default is unset"
[PrevPost2]: /blog/2014/06/14/local-huge-file-sharing/
[so5149861]: http://stackoverflow.com/a/5149861 "Does running git init twice initialize a repository or reinitialize an existing repo?"
[GitBook2.1]: http://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository#Cloning-an-Existing-Repository "Cloning an Existing Repository"
[so2816369]: http://stackoverflow.com/a/14879452 "Git push error '[remote rejected] master -> master (branch is currently checked out)'"
[GitRefGitDiff]: http://git-scm.com/docs/git-diff#_examples "git-diff(1) Manual Page"
[NewPost]: /blog/2014/08/07/double-hyphens-in-git-diff/
[GitAdd]: http://stackoverflow.com/a/572660
[(git )?rm]: http://yang3wei.github.io/blog/2013/02/03/git-rm-he-rm-de-qu-bie/ '"git rm" 和 "rm" 的区别'
[PrevPost1]: /blog/2014/06/15/undo-an-amendment-to-a-git-commit/ "Undo an Amendment to a Git Commit"
[fugitive.vim]: https://github.com/tpope/vim-fugitive "a Git wrapper in Vim"
