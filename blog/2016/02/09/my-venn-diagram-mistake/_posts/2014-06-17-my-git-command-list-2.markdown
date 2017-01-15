---
layout: post
title: "My Git Command List (2)"
date: 2014-06-17 22:51:14 +0800
comments: true
categories: Git
---

Situation (TL;DR)
---

Since I tried to import my old WordPress posts to this blog *without*
affecting `source` branch, I created a new branch called
`wpcom-importer` branch, on which `rake deploy` was successfully run.
However, some of my old WordPress posts contain some unusual
characters, which triggered an encoding problem in
[Chuang's WordPress XML to Octopress importer][importer].  Looking at
`rake`'s error message, I feel that I've put the converted posts from
WordPress's XML on the right branch.

Thus, I drafted my new posts on `source` branch, but *not* on
`wpcom-importer` branch.  I then switched to `wpcom-importer` and
deleted some unwanted parts of XML file.  However, I *couldn't* switch
back to `source` branch to do another commit.  As a result, I used
`git stash` to solve the problem.

After finishing the draft, I committed the change, switched to
`wpcom-importer` and "merged" the last change on `source` branch for
`rake preview`.  The reason for *not* running the preview command on
`source` branch is to avoid huge changes in `public` folder.
<del>I've learnt to do the "merge" from
[a post published by Jason Rudolph][GitMergeTip].</del>

Being *unfamiliar* with kramdown syntax for displayed math
equations[^1], I had made some mistakes in the source code for my
[previous post] while writing the draft on `source` branch.

* * *
(Last edited on JUN 19,2014)

From the network graph, I realized my mistake in understanding merging
in Git.  I *shouldn't* manually commit the *same* changes on
*different* branch, but to commit it *once only* on a branch and
*merge* the commit on *another* branch, if the two diverging branches
have *no* conflict.

I continued writing `<posts>`.  Unfortunately, I had *mistakenly*
committed the changes on `wpcom-importer`, instead of `source` branch.
I would like to

1. Remove the commit, but *keep* the changes in the files.
2. "Move" the changed file from `wpcom-importer` to `source` branch.
3. Commit the changes on `source` branch.
4. Merge the changes from `source` branch into `wpcom-importer`.

I issued the following commands to do so.

    $ git reflog                   # For checking purpose
    $ git reset --soft HEAD^       # Revert to the previous commit
    $ git log -3                   # For checking purpose
    $ git status                   # `<post>' should be in `... not staged for commit'
    $ less <post>                  # For checking purpose
    $ git reset HEAD <post>        # Unstage `<post>' for commit
    $ git checkout source          # Go to the correct place for the commit
    $ git add <post>               # Add back `<post>' to `source' branch
    $ git commit -am "<msg>"       # Do the commit on the correct branch
    $ git checkout wpcom-importer  # Go back to another branch for merging
    $ git merge source             # Merge the changes back
{:.cliUB}

* * *

The little list
---

### Stashing and Grabbing

"Stash" means going to another branch with *uncommitted* changes in
the staging area here.

[This list][GitCmdList] written in Chinese is a quick summary of Git
commands.  I learnt the use of `git stash` commands from there.

    $ git stash                      # save the uncommitted changes
    $ git stash list                 # show a list of stashes
    $ git stash show                 # inspect a list of stashes
    $ git stash pop                  # apply and discard the topmost stash
    $ git stash apply                # apply but don't discard the topmost stash
    $ git checkout source -- <file>  # copy the file from other branch
{:.cliUB}

In the last "merge" command, `--` avoids an ambiguity since `source`
can be either the name of a branch or a folder in this case.  In
addition, this command *doesn't* affect the commit history.

### More about rewinding things

#### Rewinding to previous versions on the same branch

Here's more commands about reseting the working tree to previous
versions.

    $ git reset --soft HEAD^   # Revert to the previous commit without changing the files
    $ git reset --hard HEAD~2  # Take a further step back from `HEAD' and discard all changes in the files in the disappeared commits
{:.cliUB}

#### Difference between resetting and reverting things

In the manual of `git reset`, I saw a link to`git revert`, and
*couldn't* understand the difference between those two command from
there.

> If you want to undo a commit other than the latest on a branch,
> [git-revert(1)] is your friend.

A page in Stack Overflow is really my friend.
([URL][StackOverflow8358035])  `git revert` *won't* overwrite the
commit history, so it's suitable for published changes, while
`git reset` *can* rewrite history.

#### Undoing merges

See *Undo a merge or pull* and the following section in the manual of
`git reset` for explanations.

##### Undoing conflicted merges

The SCM will say:

    Automatic merge failed; fix conflicts and then commit the result.
{:.cliUB}

Thus, the problematic merge *hasn't* been committed.  Simply running
`git reset --hard` will solve the problem.

##### Undoing successful automatic merges

Use `ORIG_HEAD` instead of `HEAD` for the tip of the branch before the
merge.  (i.e. `git reset --hard ORIG_HEAD`)

### Using git-diff for merging commits

(Added on JUN 20, 2014)

#### A shortcoming of ".."

To forsee possible conflicts in `git merge`, one may run
`git diff <branch1>..<branch2>` to see the differences between two
diverged branches.  However, the diff hunk *doesn't* show the
additions and deletions on each branch.  A `-` in the diff hunk can be
caused by either

1. Addition of contents in `<branch1>`; or
2. Deletion of contents in `<branch2>`.

Running `git merge <branch1>` on `<branch2>` gives *different*
results in different cases.

1. The line starting with `-` in the diff hunk will be inserted into
`<branch2>`.
2. The line starting with `-` in the diff hunk *won't* be inserted
into `<branch1>`.

In order to predict whether there will be a conflict, one needs to
know the *changes done on each branch*.  Therefore, one needs to
compare the tip of each branch with their common ancestors.

Let me illustrate this by two examples.

##### Example 1

One has a file like this.

``` text Parent of the two branches
line 1
line 2
line 3
```

Then it diverged into two branches.

``` text Branch 1 (line 1 deleted)
line 2
line 3
```

``` text Branch 2 (line 2 deleted)
line 1
line 3
```

Running `git diff <branch1>..<branch2>`, one gets

    +line 1
    -line 2
     line 3

##### Example 2

One has a file like this.

``` text Parent of the two branches
line 3
```

Then it diverged into two branches.

``` text Branch 1 (line 2 inserted)
line 2
line 3
```

``` text Branch 2 (line 1 inserted)
line 1
line 3
```

Running `git diff <branch1>..<branch2>`, one gets

    +line 1
    -line 2
     line 3

Observation: The diff hunks in the two examples are the **same**, even
though their common ancestors and changes in files are **different**.

#### Overcoming the shortcoming

From the above sub-section, it's clear that one needs to compare the
tip of each branch with the common ancestor of the two branches.  To
see how `<branch1>` has been modified,
`git diff <branch2>...<branch1>` can be used to compare the tip of
`<branch1>` with the common ancestor of `<branch1>` and `<branch2>`.

---
[^1]: The official kramdown syntax documentation. ([URL][kramdownDoc])

[kramdownDoc]: http://kramdown.gettalong.org/syntax.html#math-blocks
[importer]: https://gist.github.com/1394128
[GitMergeTip]: http://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/ 'Git Tip: How to "Merge" Specific Files from Another Branch'
[previous post]: /blog/2014/06/17/injectivity-of-stable-mappings/ "Injectivity of Stable Mappings"
[GitCmdList]: http://blog.longwin.com.tw/2009/05/git-learn-initial-command-2009/ "Git 初學筆記-指令操作教學-Tsung's Blog"
[git-revert(1)]: https://www.kernel.org/pub/software/scm/git/docs/git-revert.html
[StackOverflow8358035]: http://stackoverflow.com/a/8358039
