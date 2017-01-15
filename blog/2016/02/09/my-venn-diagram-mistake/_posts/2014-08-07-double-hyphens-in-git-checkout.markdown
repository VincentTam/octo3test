---
layout: post
title: "Double Hyphens in Git Checkout"
date: 2014-08-07 18:08:56 +0800
comments: true
categories: Git
---

While I was writing my [previous post][PrevPost], I made a link to
[a Git cheatsheet][GitSheet].  In the list, I saw a *wrong* command.

    git checkout – <file>

It is *incorrect* to use an en-dash `–` in the above command, instead
of a double hyphen `--`.  I'll illustrate this with an example below.
Assume that the current file is `~/octopress`.

<pre class="cli"><code class="UBMono">$ cat &gt;&gt; Gemfile
bullshxt
$ git diff
<span class="UBHLCode">diff --git a/Gemfile b/Gemfile
index 4d028d3..a1718ff 100644
    --- a/Gemfile
    +++ b/Gemfile</span>
<span class="gitA">@@ -20,3 +20,4 @@</span> group :development do
 end
 
 gem 'sinatra', '~&gt; 1.4.2'
<span class="gitP">+bullshxt</span>

...

$ git checkout <span class="err">—</span> Gemfile
<span class="err">error: pathspec '—' did not match any file(s) known to git.</span>

$ git checkout <span class="UBHLCode">--</span> Gemfile  # correct command
</code></pre>

[PrevPost]: /blog/2014/08/07/double-hyphens-in-git-diff/ "Double Hyphens in Git Diff"
[GitSheet]: http://supercollider.sourceforge.net/wiki/index.php/Developer_cheatsheet_for_git#Common_git_commands "Developer Cheatsheet for Git"
