---
layout: post
title: "Ubuntu on Windows 10 Custom Display"
date: 2017-01-11 15:29:23 +0100
comments: true
categories: [Linux, M$ Win*]
---

Background
---

*Same* as some of my recent posts: get `jekyll serve` working to watch
for changes during a preview of [my Jekyll-bootstrap blog](/blog2).

Since I found the [Ruby gems setup][pp] too *difficult*, I switched to
[Ubuntu on Windows 10][wls] after reading [a Ruby setup guide][rbwin10].

Problem
---

The default display settings *didn't* look great, so I installed
[Ubuntu Mono font][ubfont].  Unluckily, one *can't* type Chinese
characters, and the bottom line of [tmux] keeps jumping up from time
to time.  Most importantly, the copy and paste function *isn't*
convenient to use: every time I need to paste something, I have to
move the mouse to the top of the window, then right click and select
"Modify" → "Paste".  That's too slow when compared to `<S-Ins>` in
[mintty] which is shipped with [Git for Windows][git4win].

However, on WLS, aptitude takes good care of package dependencies.
That's *much better* for installing necessary stuff for blogging with
frameworks like [Jekyll].

**How can I run WLS using a mintty shell?**

<!-- more -->

Solution
---

Use [wsl-terminal][wslterm].

Lessons learnt
---

Firstly, I've revised the use of `chown`, `chgrp` and `chmod`, and
learnt the function of `umask`.

- `u`, `g`, `o` stand for "user", "group" and "others" respectively.
- The rights to `r`, `w`, `x` can be `+` or `-`.
- Put them together: `chmod og-w [target-dir]`.

Unfortunately, the Windows 10 bash creates folders and files with
permissions 777 and 666 respectively.  The comments for
[Microsoft/BashOnWindows#352][wlsi352] solved this problem: instead of
putting `umask 022` in `/etc/profile` or `~/.profile`, it should be
added in `~/.bashrc` because the login mechanism on WLS is *different*
from a usual GNU/Linux OS.  I think the profiles *aren't* process
during WLS startup after having added a simple statement for echoing a
few words in `~/.profile`.  Lilred's method is even better.

Secondly, I've learnt the meaning of `eval`.

    user@OWNER-PC:~$ ssh-agent
    SSH_AUTH_SOCK=/tmp/ssh-xiwtTnVlI90S/agent.6636; export SSH_AUTH_SOCK;
    SSH_AGENT_PID=5764; export SSH_AGENT_PID;
    echo Agent pid 5764;
    user@OWNER-PC:~$ ssh-add
    Could not open a connection to your authentication agent.
{:.cliUB}

From [user456814's answer][so17848593] on a Stack Overflow question
about SSH authentication agent, we can see that `ssh-agent` returns
the commands to be copied, pasted and ran in the terminal.  The
command `eval` saves these steps by taking the output as the command
input.

[pp]: /blog/2017/01/10/octopress-config-for-ruby-2-dot-3-on-windows-10/
[wls]: https://msdn.microsoft.com/en-us/commandline/wsl/about
[rbwin10]: https://gorails.com/setup/windows/10
[ubfont]: http://font.ubuntu.com/
[tmux]: https://tmux.github.io/
[mintty]: https://mintty.github.io/
[git4win]: https://git-for-windows.github.io/
[Jekyll]: https://jekyllrb.com/
[so17848593]: http://stackoverflow.com/a/17848593/3184351
[wlsi352]: https://github.com/Microsoft/BashOnWindows/issues/352
[wslterm]: https://github.com/goreliu/wsl-terminal

*[WLS]: Windows Linux Subsystem
