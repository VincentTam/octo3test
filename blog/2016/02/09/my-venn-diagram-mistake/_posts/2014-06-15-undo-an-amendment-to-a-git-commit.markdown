---
layout: post
title: "Undo an Amendment to a Git Commit"
date: 2014-06-15 20:52:32 +0800
comments: true
categories: Git
---

Objective
---

To undo the command `git commit --amend`.

Background (TL;DR)
---

Tonight, I changed something in a Git repository, and wanted to write
a Git commit, but I carelessly ran `git commit --amend`, instead of
`git commit --all`.  As a result, I was brought to a Vim buffer which
showed the commit message of the latest commit.  I quit the editor
with `:q`.  Unfortunately, the SHA-1 name of that commit was
*replaced* with another one.  The original latest commit had been
pushed to GitHub.  In other words, I *amended a pushed commit*—this is
an absolutely *bad* practice![^1]  Therefore, I need to undo the
"amendment" to the commit.

<!-- more -->

Solution
---

I googled "undo git commit amend", and, at the first glance, found
three relevant web pages.

1. A question on [Stack Overflow][so1459150]

    At first, I *didn't* understand what `HEAD@{1}` was, and jumped to
    the next item.

2. An article on [Pivotal Labs][Pivotal]

    I just skimmed through the whole essay for commands.  I *didn't*
    think that `git diff 8751261..9d3a192 | git apply -` was helpful.
    I feared that applying older commits would lead to the failure of
    `rake deploy`.  What I learnt from this site was the existence of
    the command `git reflog`.

3. A blog post which has a link to a YouTube video on Coderwall
([URL][Coderwall])

    By viewing the video fullscreen in HD, I was finally *sure* what
    `git reflog` really did.  To save time, I suggest users to look at
    the terminal at [2:38].

Going back to the first item, I've *eventually* understood the chosen
answer.

Lessons learnt
---

For non-professionals, using multimedia to illustrate abstract ideas
is better than just using words.

---
[^1]:
    According to the original version of a GitHub help page, changing
    a pushed commit will "cause the wrath of Git gods".  However, the
    quoted phrase has gone, but I can still find it on
    [Stack Overflow][so19096170].

[so19096170]: http://stackoverflow.com/questions/19096170/ "Pushing to remote after locally rebasing commits"
[so1459150]: http://stackoverflow.com/a/1459264 'How to undo "git commit --amend" done instead of "git commit"'
[Pivotal]: http://pivotallabs.com/rewinding-git-commit-amend/ "Rewinding git commit --amend"
[Coderwall]: https://coderwall.com/p/psskyq "How to undo a git commit --amend"
[2:38]: http://youtu.be/pW0bITv07ok?t=2m38s
