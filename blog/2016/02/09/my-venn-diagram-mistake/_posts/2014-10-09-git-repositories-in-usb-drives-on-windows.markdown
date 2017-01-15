---
layout: post
title: "Git Repositories in USB drives on Windows"
date: 2014-10-09 22:59:24 +0800
comments: true
categories: [Git, M$ Win*]
---

Problem
---

![git bash](/images/posts/MSysGitUSB/problem.jpg)

**How to access my USB drive (F:/) in Git Bash?**

I had tried closing all instances of Git Bash and re-opening them
again.[^reopen]  However, it *didn't* worked.

Raison d'être
---

If users can use Git command line utilities in `cmd.exe`, then what's
the point of asking the above question?

*Without* stopping `ssh-agent.exe`, one *can't* pull Git repositories
from the hard disk to the USB drive.

<!-- more -->

Solution
---

![taskmgr](/images/posts/MSysGitUSB/taskmgr.jpg)

The culprit is `ssh-agent.exe`.  Killing it will do.[^sol]

Result
---

![result](/images/posts/MSysGitUSB/result.jpg)

The USB drive (F:/) can now be *detected* in Git Bash.


---
[^reopen]:
    [*mount external drive on windows7 for git*][so442297] in Super
    User

[^sol]:
    [*Git "unable to determine absolute path of git directory"*][sol]
    in Stack Overflow

    {% raw %}
    {% quote author:"Nikolaos Georgiou" %}
    {% endraw %}
    Killing the ssh-agent.exe process works for me.
    {% raw %}
    {% endquote %}
    {% endraw %}

[so442297]: http://superuser.com/a/442297
[sol]: http://stackoverflow.com/a/21375551
