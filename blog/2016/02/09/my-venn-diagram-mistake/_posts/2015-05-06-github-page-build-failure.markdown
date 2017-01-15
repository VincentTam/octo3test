---
layout: post
title: "GitHub Page Build Failure"
date: 2015-05-06 20:21:54 +0800
comments: true
categories: 
---

Problem
---

I received two emails from GitHub today at 01:15.  The emails says
that a recent GitHub Page build failed.

![fail build 1](/images/posts/GHPagesBuild/fail1-300.png)

![fail build 2](/images/posts/GHPagesBuild/fail2-300.png)

Cause
---

In my YouTube videos about the use of Vim for efficient $\rm \LaTeX$
editing and APA citing, I shared the sample source files and the
output PDFs using Ubuntu One, which is now dead.[^ub1dead]

To fix this problem, I moved these files from `~/Ubuntu
One/path/to/files` to `~/octopress` as well as `~/octopress/_deploy`.
Then I pushed my commits to GitHub, and received notifications of an
unexpected error.  Since I've other things to do, I *won't* try to
learn something from this problem.

Resolution
---

I just locally generated this site with Rake and deployed it to
GitHub.  Finally, the URLs for the sample files have been corrected.

Lessons learnt
---

One may open a text file on the Internet with the following editor
command in Vim.

    :e http://www.example.com/path/to/file.txt

---
[^ub1dead]:
    [Shutting down Ubuntu One file services][src] by Jane Silber on
    *Canonical Blog*.

[src]: http://blog.canonical.com/2014/04/02/shutting-down-ubuntu-one-file-services/
