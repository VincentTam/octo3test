---
layout: post
title: "Restore Corrupt Git Repository"
date: 2016-08-17 11:16:33 +0800
comments: true
categories: [Git, Linux]
---

Background
---

I *hadn't* used [Vim] on my GNU/Linux desktop for a month.  When I
used it again, an error message was shown on the screen.

    [owner@localhost ~]$ vi
    Error detected while processing
    /home/owner/.vim/bundle/nerdtree/plugin/NERD_tree.vim:
    line  153:
    E117: Unknown function: nerdtree#ui_glue#setupCommands
    Error detected while processing function nerdtree#postSourceActions:
    line    2:
    E117: Unknown function: nerdtree#ui_glue#createDefaultBindings
    Press ENTER or type command to continue
{:.cliUB}

Since I was occupied with [another blog][blog2], thinking that the
problem would be quickly fixed by an update of
[the NERD tree][nerdtree], a [Vim] plugin for showing a file tree in a
sidebar, I *didn't* want to find out the cause.

Problem
---

During this [Vundle] update, an exclamation mark with red background
was displayed on the LHS of the item `Plugin 'scrooloose/nerdtree'` in
the list contained in the status bar.  I then checked Vundle's update
log.

    [2016-08-12 15:18:40] Plugin scrooloose/nerdtree
    [2016-08-12 15:18:40] $ cd '/home/owner/.vim/bundle/nerdtree' && git pull && git submodule update --init --recursive
    [2016-08-12 15:18:40] > error: object file .git/objects/2e/2b649232d6ae4d02d74793e5da0ee08480ad8d is empty
    [2016-08-12 15:18:40] > error: object file .git/objects/2e/2b649232d6ae4d02d74793e5da0ee08480ad8d is empty
    [2016-08-12 15:18:40] > fatal: loose object 2e2b649232d6ae4d02d74793e5da0ee08480ad8d (stored in .git/objects/2e/2b649232d6ae4d02d74793e5da0ee08480ad8d) is corrupt
    [2016-08-12 15:18:40] > fatal: The remote end hung up unexpectedly
    [2016-08-12 15:18:40] > 
{:.cliUB}

While I was trying to update this plugin manually by typing in
[Git commands][pp1] in bash, the electricity supply of my desktop went
off suddenly.  After it had been switched on again, I tried typing in
the commands again, and I got the same error.

**How can the Git repository be restored to its previous state**, so
that it's intact?

<!-- more -->

Solution
---

This problem can be fixed by simply undoing all changes done to the
directory `.git/`.  First, a list of recently changed files is needed,
and `find` can be used for this purpose.  I searched "ls filter by
time", then this [question about `ls`][unixse10043] on Unix & Linux
Stack Exchange appeared in the search results.  After reading the
first answer, I tried to find the defective binary objects in
`.git/objects`.

    [owner@localhost ~/.vim/bundle/nerdtree/.git]$ find . -maxdepth 1 -mindepth 1 \
    > -mtime -1 -type d -print -and -exec ls -lt {} \;
    ./2e
    total 20
    -r--r--r-- 1 owner owner   0 Aug 12 15:18 2b649232d6ae4d02d74793e5da0ee08480ad8d
    -r--r--r-- 1 owner owner 256 May 12 20:38 c9b3dd9d6b8d11f2a3c12924f88588a846517d
    ./7e
    total 44

    -r--r--r-- 1 owner owner  341 May 12 20:38 8be22b1d5052e9140fc7c7b840755980cb960
    9
    -r--r--r-- 1 owner owner   49 May 12 20:38 9492c9f3b3b463114c0b6308a8ccd46ce3869
    2
    -r--r--r-- 1 owner owner 3029 Nov  1  2014 12c042bb8f5ab387a2bd0aabcfe30fce25027
    f
    ./a0
    total 20
    -r--r--r-- 1 owner owner   0 Aug 12 15:43 019ff4d6b033f37efd9b1a99daf6c9797796b1
    -r--r--r-- 1 owner owner 468 May 12 20:38 b89b83d8cd02f8043840a48b0b2cf3724bee1c
    ./29
    total 20
    -r--r--r-- 1 owner owner   0 Aug 12 15:43 24ab207162ca18cf5844d00b351ade1b5122f6
    -r--r--r-- 1 owner owner 342 May 12 20:38 0935cab8f1e7dec23bb3bda0e2f7dd84c867d9
    ./38
    total 20
    -r--r--r-- 1 owner owner  0 Aug 12 15:43 d79fd1123213f2ceb3d6c32e8dad42bd587ec8
    -r--r--r-- 1 owner owner 55 May 15  2015 569aab72ab0cbf466c40658ab9a3d86b55263e
    ./d7
    total 8
    -r--r--r-- 1 owner owner 0 Aug 12 15:43 9f81cd6e309fa01e063f3e12fb7615e712d7f4
    ./2a
    total 36
    -r--r--r-- 1 owner owner    0 Aug 12 15:43 a3bece220f147f85172fe43430d069276d835
    c
    -r--r--r-- 1 owner owner 7025 Jun 24  2015 f07ddbaf243cef8de791b45e7ff4232025a93
    6
    -r--r--r-- 1 owner owner  277 May 15  2015 a1964c1ba8fd40f3fdebf64efd0ba3756115a
    f
    ./b7
    total 20
    -r--r--r-- 1 owner owner   0 Aug 12 15:43 23fee57c918ba3fd06057398e0a905fde7b80e
    -r--r--r-- 1 owner owner 277 May 15  2015 2300417059ab5c52ac26c318e6b67bcefbe1e2
    ./c9
    total 20
    -r--r--r-- 1 owner owner  0 Aug 12 15:43 9312442b0961241eb0de3d6d65893c52f4d9d1
    -r--r--r-- 1 owner owner 49 May 15  2015 ab6021b2473c60ba443c5ad197f2e3e3692895
    ./e8
    total 20
    -r--r--r-- 1 owner owner   0 Aug 12 15:43 7e67fafb0d6c63b790b37ab46f67cf0654ea22
    -r--r--r-- 1 owner owner 466 May 15  2015 258b21d3a02dfcc0c5c10f3ab186763ae0c38b
    ./4c
    total 36
    -r--r--r-- 1 owner owner    0 Aug 12 15:43 bfb3869eb16ca691d93e1a3a05d375e87c1c7
    7
    -r--r--r-- 1 owner owner   57 May 15  2015 be8a2baee075d0935e3af349d85c2553d77bf
    8
    -r--r--r-- 1 owner owner 6830 Nov  1  2014 df1a366dbdf08c5f7412ff867d859d6818376
    4
{:.cliUB}

Objects are grouped according to the first two digits of their [Git]
hash.  The following list is easier to read.

    [owner@localhost ~/.vim/bundle/nerdtree/.git/objects]$ find . -mindepth 2 \
    > -maxdepth 2 -mtime 0 -type f -exec file {} \;
    ./2e/2b649232d6ae4d02d74793e5da0ee08480ad8d: empty 
    ./7e/e42eb25e86a6825cdba370f20d2e146ed61ae6: empty 
    ./a0/019ff4d6b033f37efd9b1a99daf6c9797796b1: empty 
    ./29/24ab207162ca18cf5844d00b351ade1b5122f6: empty 
    ./38/d79fd1123213f2ceb3d6c32e8dad42bd587ec8: empty 
    ./d7/9f81cd6e309fa01e063f3e12fb7615e712d7f4: empty 
    ./2a/a3bece220f147f85172fe43430d069276d835c: empty 
    ./b7/23fee57c918ba3fd06057398e0a905fde7b80e: empty 
    ./c9/9312442b0961241eb0de3d6d65893c52f4d9d1: empty 
    ./e8/7e67fafb0d6c63b790b37ab46f67cf0654ea22: empty 
    ./4c/bfb3869eb16ca691d93e1a3a05d375e87c1c77: empty 
{:.cliUB}

I *removed* these files and typed `git status`.

    [owner@localhost ~/.vim/bundle/nerdtree]$ git status
    fatal: bad object HEAD
{:.cliUB}

I googled "invalid sha1 pointer in cache-tree", and read a webpage a
Stack Overflow [post on empty Git objects][so11706215].  The command
`git fsck --full` can be used to check the integrity of a [Git]
repository.

    [owner@localhost ~/.vim/bundle/nerdtree/.git]$ git fsck --full
    Checking object directories: 100% (256/256), done.
    Checking objects: 100% (3525/3525), done.
    error: HEAD: invalid sha1 pointer 2e2b649232d6ae4d02d74793e5da0ee08480ad8d
    error: refs/heads/master: invalid sha1 pointer 2e2b649232d6ae4d02d74793e5da0ee08
    480ad8d
    error: refs/remotes/origin/HEAD: invalid sha1 pointer 2e2b649232d6ae4d02d74793e5
    da0ee08480ad8d
    error: refs/remotes/origin/master: invalid sha1 pointer 2e2b649232d6ae4d02d74793
    e5da0ee08480ad8d
    error: HEAD: invalid reflog entry 2e2b649232d6ae4d02d74793e5da0ee08480ad8d
    error: refs/heads/master: invalid reflog entry 2e2b649232d6ae4d02d74793e5da0ee08
    480ad8d
    error: refs/remotes/origin/master: invalid reflog entry 2e2b649232d6ae4d02d74793
    e5da0ee08480ad8d
    error: d79f81cd6e309fa01e063f3e12fb7615e712d7f4: invalid sha1 pointer in cache-t
    ree
    missing blob 2aa3bece220f147f85172fe43430d069276d835c
{:.cliUB}

The above message inspired me to make the following list of files
changed due to this failed [Git] pull.

    [owner@localhost ~/.vim/bundle/nerdtree/.git]$ find . -mtime 0 -type f -print
    ./refs/heads/master
    ./refs/remotes/origin/master
    ./FETCH_HEAD
    ./logs/HEAD
    ./logs/refs/heads/master
    ./logs/refs/remotes/origin/master
    ./ORIG_HEAD
    ./index
{:.cliUB}

I looked at the relevant files in the folder `logs/refs/`.  The change
time in Unix timestamp, the old and new commit IDs were found.
I restored these files (including the logs) with the help of these
logs *except* `FETCH_HEAD` and `index`.

At this stage, `git status` would still throw out an error if it was
invoked.  However, since the references to `HEAD` and `ORIG_HEAD` had
been manually set, `git reset --hard HEAD` could restore the [Git]
repository.

Result
---

Finally, I could update [the NERD Tree][nerdtree].

    [owner@localhost ~/.vim/bundle/nerdtree]$ git pull
    remote: Counting objects: 11, done.
    remote: Total 11 (delta 3), reused 3 (delta 3), pack-reused 8
    Unpacking objects: 100% (11/11), done.
    From https://github.com/scrooloose/nerdtree
       d280b15..2e2b649  master     -> origin/master
    Updating d280b15..2e2b649
    Fast-forward
     autoload/nerdtree/ui_glue.vim | 16 ++++++++--------
     1 file changed, 8 insertions(+), 8 deletions(-)
{:.cliUB}

Lessons learnt
---

### find

- Control the depth of the search with `-maxdepth` and `-mindepth`.
- Search files by time.  (To be put *before* `-type`)
    - `-mtime [n]`: last modified time equal to `n` <del>day(s)</del>
        `*24` hours.  (rounded down to an integer)
        - `-mtime +[n]`: modified *before* `n` <del>day(s)</del> `*24`
            hours.
        - `-mtime -[n]`: modified *within* the last `n`
            <del>day(s)</del> `*24` hours.
        - `-mmin [n]`: modified time calculated in number of *minutes*
            instead of days.
    - `-atime [n]`, `-amin [n]`: last access time
    - `-ctime [n]`, `-cmin [n]`: last change of file status
    - `-anewer`, `-cnewer`, `-newer`: followed by filename (`-mnewer`
        *doesn't* exist.)
    - `-daystart`: use the start of day for calculations.  (Preceed
        `-mtime`)

### ls

Use `-t` flag to sort files using their last modified time in
descending order.

### Git

One can find files from a Git SHA1 hash using `git ls-tree -r <hash>`.
To search contents in commits, you may refer to a
[question about Git][so460331] on Stack Overflow.

When I wrote my [list of low-level commands][pp2] last year, I
*couldn't* understand the role of `index`.  Now, I know that the
binary objects stored in `objets/` and the references can work
*independently* of `index`, which can be re-created by `git
write-tree`.

[Vim]: http://www.vim.org
[Vundle]: https://github.com/VundleVim/Vundle.vim
[blog2]: /blog2
[nerdtree]: https://github.com/scrooloose/nerdtree/
[Git]: https://git-scm.com/
[pp1]: /blog/2014/06/16/my-git-command-list-1/
[unixse10043]: http://unix.stackexchange.com/a/10043
[so11706215]: http://stackoverflow.com/q/11706215
[so460331]: http://stackoverflow.com/q/460331
[pp2]: /blog/2015/08/06/my-git-command-list-3/
