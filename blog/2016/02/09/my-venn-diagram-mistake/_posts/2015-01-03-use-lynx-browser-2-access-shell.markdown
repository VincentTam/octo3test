---
layout: post
title: "Use Lynx Browser (2): Access Shell"
date: 2015-01-03 21:26:24 +0800
comments: true
categories: Linux
---

Background
---

I often use [Lynx] due to several reasons.[^use_lynx]

Problem
---

While browsing the Internet with Lynx, one can spawn the shell, so that
one can resume the browsing session after executing some commands.

When one wants to exit the shell invoked by '!' in Lynx, the command
required is the *same* as the one needed for logging out: `exit`.
These are pretty *easy*.

However, in Linux text mode, if one typed some commands and the
contents in the browser were *completely* covered by the output of
these commands, **how can one distinguishs a shell started by Lynx
from the one that simply exists after one has logged in?**

<!-- more -->

Solution
---

At first, I typed `ps aux | grep lynx` to determine whether Lynx was
running.  After that, I issued `ps`, and got a small list of running
processes.  Then I tried adding the letters `a`, `u`, and `x` after
the previous command.

- `a`: Received processes from all TTY consoles, instead of the
    current one.
- `x`: A `STAT` column was shown.
- `u`: More details were shown, including the `STAT` column.

---
[^use_lynx]: See [*Use Lynx Browser*][pp_lynx] for the reasons.

[Lynx]: http://lynx.isc.org/ "Lynx Browser"
[pp_lynx]: /blog/2014/06/07/use-lynx-browser/
