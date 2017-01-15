---
layout: post
title: "Git Status of My Octopress Folder"
date: 2014-03-01 17:32:29 +0800
comments: true
categories: [Git, Octopress]
---

I'd like to include my GitHub repositories here.  To do so, it's a
piece of cake to slightly modify `_config.yml`.[^config_octopress]

Once, I curiously typed `git status` in `~/octopress`.  The following
screenshot is from my terminal.

![git status][fig]

Then I blindly followed the "advice" of `git status` and typed

    $ git add .
{:.cliUB}

<del>It seemed that I had made a mistake.</del>  Actually, *without
adding those modified and untracked files on the stage for commit*,
the following two commands will <del>do</del> update the contents on
the GitHub pages.

    $ rake generate
    $ rake deploy
{:.cliUB}

The final step is to view your blog again after going out for a cup
water or some snacks.

How about the `git status`?  <del>Simply *forget about it*!</del>

---

(Last added on MAR 15TH, 2014)

If you have *more than one* local repository of your Octopress or
Jekyll site, you may upload your contents to the Internet as long as
the corresponding branch in the local repository is newer than the one
in the remote repository.  To keep the Octopress or Jekyll code
updated, one needs to use Git to check if the `source` branch contains
the latest changes.  Otherwise, after writing a new post, it is
possible that one *can't* upload the new post to the Octopress or
Jekyll site using `rake deploy`.

Thus, eight days ago, I made Git commit [8c7be99].

----
[^config_octopress]:
    Mathis, B.  (Jul 19, 2011).  *Configuring Octopress*.  Retrieved
    from <http://octopress.org/docs/configuring/>

[8c7be99]: https://github.com/VincentTam/vincenttam.github.io/commit/8c7be99
[fig]: /images/posts/GitStatusOfMyOctopressFolder/GitStatus.png
