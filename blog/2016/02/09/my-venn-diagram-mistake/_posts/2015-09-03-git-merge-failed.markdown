---
layout: post
title: "Git Merge Failed?"
date: 2015-09-03 14:34:31 +0800
comments: true
categories: [Git, Octopress]
---

Problem
---

Octopress has recently removed Rubypants, so the automatic smartquotes
*aren't* supported any more.  However, after typing `git pull
octopress master` on the `source` branch of the local working
directory for this blog, `git` simply said that it's "already
up-to-date".  I compared the stored trees for `plugins/` by using `git
show HEAD:plugins` on the `source` and `octopress/master` branches.
If the former has the commits of the later, then
`plugins/rubypants.rb` *shouldn't* be found on the former.  I issued
the command `git merge octopress/master` again, and the version
control system still said that there's *no* unmerged commits from the
`octopress/master` branch.[^remote]

<!-- more -->

Cause
---

By using `git log --abbrev-commit --pretty=oneline --graph` and `git
merge-base octopress/master HEAD`, I can quickly browse through the
commits.  Finally, I identified the reason for this failed merge: I
reverted the first merge of those two branches three months ago.  I
belive that I can revert this reversion to achieve my desired merge.

---
[^remote]:
    Since Octopress 3 is currently in development, I still use the
    original version.
