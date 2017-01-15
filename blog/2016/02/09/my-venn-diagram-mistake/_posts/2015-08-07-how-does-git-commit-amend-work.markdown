---
layout: post
title: "How Does Git Commit Amend Work?"
date: 2015-08-07 17:15:29 +0800
comments: true
categories: [Git, kramdown]
---

Situation
---

I've written and commited the post [*My Git Command List (3)*][pp1],
but after a while, I changed that post.  In order not to complexify
my Git commit history, I used `git commit --amend -a`.  That's quite
simple and convenient.  I observed that the displayed time in the
amended commit was the *same* as the original one, whereas the SHA-1
hash was *changed* so that Git knows that they're *different*.
However, from
[*Git Object ID Generation (1): Blobs and Commits*][pp2], I've learnt
that the ID of Git commit objects is totally determined by

1. the content of the commit message
2. the commit time
3. the author

In this case, no difference of the above factors between the original
commit and the amended commit can be observed with `git show`.

Problem
---

**In what way do the original commit and the amended commit differ?**

<!-- more -->

Difference
---

To solve this problem, I scrolled up the screen and captured the SHA-1
hashes fo the two commits.

- the original commit's hash: `9de8974b93a2e4032b608c0de17ea5ed0c55524b`
- the amended commit's hash: `5b7b566b8a07d4813ba9f08a326e169cf38ca20f`

Note: I just *make up* the email address `demo@example.com` to replace
my real email address to [avoid email spams][nomailto].  Therefore,
**the above commit hashes don't correspond to the content displayed
below**.  In fact, they correspond to the commits in the Git
repository for this blog.

<pre class="cliUB"><code>$ git cat-file -p 9de8974b93a2e4032b608c0de17ea5ed0c55524b
tree b9f4fb708327e25c8b1b822711ec7dda9c5b2198
parent <a href="https://github.com/VincentTam/vincenttam.github.io/commit/afcb4d97cb447112bd2e930159966d92b8e4754a">afcb4d97cb447112bd2e930159966d92b8e4754a</a>
author Vincent Tam &lt;demo@example.com&gt; 1438859683 +0800
committer Vincent Tam &lt;demo@example.com&gt; <span class="UBHLCode">1438859683</span> +0800

A new post on some Git low level commands

I *don't* go over the details of the book *Pro Git*, which is available
online.  I just select some important ones for quick reference.
$ git cat-file -p 5b7b566b8a07d4813ba9f08a326e169cf38ca20f
tree 2d864bcb7e4944e9d98b663649c79084692873c1
parent <a href="https://github.com/VincentTam/vincenttam.github.io/commit/afcb4d97cb447112bd2e930159966d92b8e4754a">afcb4d97cb447112bd2e930159966d92b8e4754a</a>
author Vincent Tam &lt;demo@example.com&gt; 1438859683 +0800
committer Vincent Tam &lt;demo@example.com&gt; 1438864942 +0800

A new post on some Git low level commands

I *don't* go over the details of the book *Pro Git*, which is available
online.  I just select some important ones for quick reference.</code>
</pre>

Hence, the difference of the timestamp of the `committer` causes the
difference in the hashes, whereas the timestamp of the `author` is
converted to a human readable date for display.

Facts learnt
---

### Unix timestamp

A Unix timestamp is the number of seconds elasped since the start of
the year 1970 in GMT.

### A little bit kramdown syntax: EOB marker

According to kramdown's syntax guide,
[the EOB marker *won't* be found in most Markdown documents][eob].  In
order to include a list followed by a code block that *isn't*
contained inside the list, the boundary of the list has to be
specified by a line consisting of a leading '^' character.

[pp1]: /blog/2015/08/06/my-git-command-list-3/
[pp2]: /blog/2015/08/07/git-object-id-generation-1-blobs-and-commits/
[nomailto]: http://www.problogger.net/archives/2008/12/06/10-reasons-to-avoid-mailto-links/
[eob]: http://kramdown.gettalong.org/syntax.html#eob-marker

*[GMT]: Global Mean Time
*[EOB]: End-Of-Block
