---
layout: post
title: "Double Hyphens in Git Diff"
date: 2014-08-07 15:41:10 +0800
comments: true
categories: Git
---

Two months ago, I wrote my first list of Git commands, and said that I
*didn't* know how to use Git commands to view the changes.[^1]

Now, I can understand how one can "use '`--`' to separate paths from
revisions [or branches]".

<!-- more -->

For example, if a developer relies on [this Git cheatsheet][GitSheet]
for blogging with Octopress, then he/she will learn some Git commands,
for example:

1. `git diff <branch>` to view the uncommitted changes;
2. `git diff <path>` to show the uncommitted changes in files under
`<path>`.

Those commands should be enough for most cases.  However, if he/she
blogs with [Octopress], then he/she will encounter the some problems:

1. `git diff source` *can't* view the uncommitted changes on `source`
branch;  (Click the linked post in [footnote 1](#fn:1) for the error
thrown by Git.)
2. `git diff source` *can't* show the uncommitted changes in files
under `source` folder.

In order to use `git diff` to do the intended task, one has to avoid
ambiguity.

1. If necessary, one can use `--` to separate branch name(s) from
file/path names;
2. One can use `./source` to mean `source` folder.

<pre class="cli"><code class="UBMono"><span class="err">$ git diff origin/source source
fatal: ambiguous argument 'source': both revision and filename
Use '--' to separate paths from revisions, like this:
'git &lt;command&gt; [&lt;revision&gt;...] -- [&lt;file&gt;...]'</span>
$ git diff origin/source source <span class="UBHLCode">--</span>  # correct command
$ git diff <span class="UBHLCode">./</span>source                 # correct command
</code></pre>

If one *doesn't* want to type in shell commands, one may consider
using [fugitive.vim]: in a window invoked by `:Gst`, press `D` at the
line where the modified file is shown.

---
[^1]: Tam, V. 2014, Jun 16. *My Git Command List (1)*. Retrieved from <https://vincenttam.github.io/blog/2014/06/16/my-git-command-list-1/#comparing-branches>

[GitSheet]: http://supercollider.sourceforge.net/wiki/index.php/Developer_cheatsheet_for_git#Simple_work_on_your_main_.28master.29_branch "Developer Cheatsheet for Git"
[Octopress]: http://www.octopress.org
[fugitive.vim]: https://github.com/tpope/vim-fugitive
