---
layout: post
title: "Git Push to USB"
date: 2015-01-01 22:51:20 +0800
comments: true
categories: Linux
---

Background
---

1. I created a bare Git repository in my USB stick on GUI.
2. I pushed some Git commits to the bare repository in the USB.

The commands for the above steps *shouldn't* be difficult.  In step 2,
if one sets the upstream repository to the bare repository in the USB,
the command to be issued is even easier: just `git push` will do, and
the remote and branch names can be omitted.

Problem
---

I worked on Linux text mode instead of GUI.  After committing the
changes, I tried pushing them into the bare Git repository in the USB.

    [owner@localhost ~/MATH2220]$ git status
    On branch master
    Your branch is ahead of 'origin/master' by 1 commit.
      (use "git push" to publish your local commits)
    nothing to commit, working directory clean
    [owner@localhost ~/MATH2220]$ sudo mount -t vfat /dev/sdf1 \
    > /media/owner/08F1-B181/
    [owner@localhost ~/MATH2220]$ git push
    Counting objects: 4, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (4/4), done.
    Writing objects: 100% (4/4), 551 bytes | 0 bytes/s, done.
    Total 4 (delta 1), reused 0 (delta 0)
    remote: error: insufficient permission for adding an object to repository databa
    se objects
    remote: fatal: failed to write object
    error: unpack failed: unpack-objects abnormal exit
    To /media/owner/08F1-B181/MATH2220/MATH2220.git
     ! [remote rejected] master -> master (unpacker error)
    error: failed to push some refs to '/media/owner/08F1-B181/MATH2220/MATH2220.git
    '
{:.cliUB}

**How can I push commits into the USB?**

<!-- more -->

Solution
---

I googled "git push usb rejected" for a similar problem, and "linux
text mode git" for a Git tutorial on CLI, but I *couldn't* find what I
wanted.  I observed that this *wasn't* a problem of Git, but a problem
about file permissions on \*nix.

    [owner@localhost ~/MATH2220]$ ll /media/owner/
    total 12
    drwxr-x---+ 3 root root 4096 Jan  1 21:40 ./
    drwxr-xr-x  4 root root 4096 Aug 13 02:09 ../
    drwxr-xr-x  2 root root 4096 Jan  1 21:40 08F1-B181/
{:.cliUB}

Then I changed the search words, and finally found a page on SUSE
Communities.[^suse]  I read the commands and their descriptions, and
eventually solved the problem.

After I had unmounted the USB drive, I typed the command for mounting
the USB stick again.

    [owner@localhost ~/MATH2220]$ sudo umount /media/owner/08F1-B181/
    [owner@localhost ~/MATH2220]$ sudo mount -t vfat -o uid=owner,gid=owner\
    > /dev/sdf1 /media/owner/08F1-B181/
    [owner@localhost ~/MATH2220]$ git push
    Counting objects: 4, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (4/4), done.
    Writing objects: 100% (4/4), 551 bytes | 0 bytes/s, done.
    Total 4 (delta 1), reused 0 (delta 0)
    To /media/owner/08F1-B181/MATH2220/MATH2220.git
       9e8e53e..4fa36c7  master -> master
{:.cliUB}

Lessons learnt
---

One can specify the owner and the user group of the VFAT filesystem to
be mounted with `-o uid=foo,gid=bar` for USB devices.

---
[^suse]:
    [*Manually Mount a USB Flash Drive in Linux*][suse] by
    coolguys-suse on SUSE Communities.

[suse]: https://www.suse.com/communities/conversations/manually-mounting-a-usb-flash-drive-in-linux/
