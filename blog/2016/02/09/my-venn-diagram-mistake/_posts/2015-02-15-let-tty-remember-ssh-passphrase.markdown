---
layout: post
title: "Let TTY Remember SSH Passphrase"
date: 2015-02-15 09:20:08 +0800
comments: true
categories: Linux
---

Problem
---

After I've written posts for this blog, I would like to publish them
by `rake deploy`, but I was prompted to type my passphrase for
`~/.ssh/id_rsa` for *multiple times* in Linux text mode.[^problem]
(In GNOME shell, this *won't* be a problem.)

In fact, this problem can be generalised to the following one: **What
can be done so that the terminal *only* asks for the SSH passphrase
for the *first* Git push to a remote server**?

<!-- more -->

Solution
---

I searched "linux tty remember ssh passphrase" and I found the answer
on Ask Ubuntu.[^sol]  I then looked at the top of the man page of
`ssh-agent` so as to avoid doing something *wrong*.  After that, I
used `ps` to convince myself that the argument that followed
`ssh-agent` should be `bash`.  After inputting the correct SSH
passphrase, I could push my Git commits to the remote server *without*
any further authentication.[^eg]

Using it with byobu
---

|                          | Case 1        | Case 2        |
| :----------------------- | :------------ | :------------ |
| Right passphrase entered | outside Byobu | inside Byobu  |
| Git push                 | inside Byobu  | outside Byobu |
| Enter passphrase again?  | No            | Yes[^eg2]     |

After I've entered the *right* passphrase, even though I type `ssh-add
~/.ssh/id_rsa` and give the *wrong* passphrase, I can still use the
key *without* supplying the correct passphrase again.[^eg3]

---
[^problem]: See [the bash's sample output](#b4){:.cliwide}.
[^sol]: [*Enter SSH passphrase once*][src] on Ask Ubuntu.
[^eg]: See [the terminal's output](#after){:.cliwide}.
[^eg2]: See [the terminal's output](#eg2){:.cliwide}.
[^eg3]: See [the terminal's output](#eg3){:.cliwide}.

[src]: http://askubuntu.com/a/362287
[fugitive.vim]: https://github.com/tpope/vim-fugitive "best Git wrapper"

*[SSH]: Secure SHell

<div id="b4" class="noscr" markdown="1">
### Typical bash's output

During `rake deploy`, I need to enter the passphrase for *three*
times.

    $ git push; rake deploy; rake notify
    Enter passphrase for key '/home/owner/.ssh/id_rsa':
    Counting objects: 5, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (5/5), done.
    Writing objects: 100% (5/5), 1.32 KiB | 0 bytes/s, done.
    Total 5 (delta 3), reused 0 (delta 0)
    To git@github.com:VincentTam/vincenttam.github.io.git
       79108e1..9aa4bc3  source -> source
    cp -r source/fancybox/.gitattributes public/fancybox/.gitattributes
    ## Deploying branch to Github Pages
    ## Pulling any updates from Github Pages
    cd _deploy
    Enter passphrase for key '/home/owner/.ssh/id_rsa':
    remote: Counting objects: 10, done.
    remote: Compressing objects: 100% (10/10), done.
    remote: Total 10 (delta 3), reused 0 (delta 0)
    Unpacking objects: 100% (10/10), done.
    From github.com:vincenttam/vincenttam.github.io
       50f426a..9aa4bc3  source     -> origin/source
    Already up-to-date.
    cd -
    rm -rf _deploy/fancybox
    rm -rf _deploy/sitemap.xml
    rm -rf _deploy/posts
    rm -rf _deploy/favicon.png
    rm -rf _deploy/blog
    rm -rf _deploy/stylesheets
    rm -rf _deploy/index.html
    rm -rf _deploy/downloads
    rm -rf _deploy/robots.txt
    rm -rf _deploy/javascripts
    rm -rf _deploy/images
    rm -rf _deploy/404.html
    rm -rf _deploy/assets
    rm -rf _deploy/atom.xml
    rm -rf _deploy/about

    ## Copying public to _deploy
    cp -r public/. _deploy
    cd _deploy

    ## Committing: Site updated at 2015-02-14 05:57:32 UTC
    [master f8b161d] Site updated at 2015-02-14 05:57:32 UTC
     337 files changed, 3689 insertions(+), 2382 deletions(-)
     rewrite assets/jwplayer/glow/controlbar/fullscreenButtonOver.png (98%)
     rewrite assets/jwplayer/glow/controlbar/muteButtonOver.png (99%)
     rewrite assets/jwplayer/glow/controlbar/normalscreenButtonOver.png (98%)
     rewrite assets/jwplayer/glow/controlbar/pauseButtonOver.png (98%)
     rewrite assets/jwplayer/glow/controlbar/unmuteButtonOver.png (98%)
     rewrite assets/jwplayer/glow/display/background.png (98%)
     rewrite assets/jwplayer/glow/display/bufferIcon.png (99%)
     rewrite assets/jwplayer/glow/display/playIcon.png (98%)
     rewrite assets/jwplayer/glow/dock/button.png (98%)
     rewrite assets/jwplayer/glow/sharing/embedIcon.png (98%)
     rewrite assets/jwplayer/glow/sharing/embedScreen.png (99%)
     rewrite assets/jwplayer/glow/sharing/shareIcon.png (98%)
     rewrite assets/jwplayer/glow/sharing/shareScreen.png (99%)
     create mode 100644 blog/2015/02/14/tried-range-based-for-loop/index.html
     create mode 100644 blog/categories/c-plus-plus/atom.xml
     create mode 100644 blog/categories/c-plus-plus/index.html
     rewrite favicon.png (98%)
     rewrite images/bird_32_gray.png (99%)
     rewrite images/bird_32_gray_fail.png (98%)
     rewrite images/line-tile.png (68%)
     rewrite images/noise.png (99%)
     rewrite images/rss.png (98%)

    ## Pushing generated _deploy website
    Enter passphrase for key '/home/owner/.ssh/id_rsa':
    Counting objects: 752, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (498/498), done.
    Writing objects: 100% (752/752), 388.87 KiB | 0 bytes/s, done.
    Total 752 (delta 311), reused 48 (delta 0)
    To git@github.com:vincenttam/vincenttam.github.io.git
       95131a7..f8b161d  master -> master

    ## Github Pages deploy complete
    cd -
    * Pinging ping-o-matic
    * Pinging Google about our sitemap
    * Pinging Bing about our sitemap
{:.cliUB}
</div>

<div id="after" class="noscr" markdown="1">
### An example of letting the terminal remember the passphrase

    $ ssh-agent bash
    $ ssh-add ~/.ssh/id_rsa
    Enter passphrase for /home/owner/.ssh/id_rsa:
    Identity added: /home/owner/.ssh/id_rsa (/home/owner/.ssh/id_rsa)
    $ git commit -a
    [source 9579dce] Shortened some links and added highlighting
     2 files changed, 3 insertions(+), 3 deletions(-)
    $ git push
    Counting objects: 6, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (6/6), done.
    Writing objects: 100% (6/6), 598 bytes | 0 bytes/s, done.
    Total 6 (delta 5), reused 0 (delta 0)
    To git@github.com:VincentTam/vincenttam.github.io.git
       3c1c449..9579dce  source -> source
    $ rake gen_deploy
    ## Generating Site with Jekyll
        write source/stylesheets/screen.css
    Configuration file: /home/owner/octopress/_config.yml
                Source: source
           Destination: public
          Generating...
                        done.
     Auto-regeneration: disabled. Use --watch to enable.
    cp -r source/fancybox/.gitattributes public/fancybox/.gitattributes
    ## Deploying branch to Github Pages
    ## Pulling any updates from Github Pages
    cd _deploy
    remote: Counting objects: 11, done.
    remote: Compressing objects: 100% (6/6), done.
    remote: Total 11 (delta 9), reused 7 (delta 5)
    Unpacking objects: 100% (11/11), done.
    From github.com:vincenttam/vincenttam.github.io
       7f470b7..9579dce  source     -> origin/source
    Already up-to-date.
    cd -
    rm -rf _deploy/fancybox
    rm -rf _deploy/sitemap.xml
    rm -rf _deploy/posts
    rm -rf _deploy/favicon.png
    rm -rf _deploy/blog
    rm -rf _deploy/stylesheets
    rm -rf _deploy/index.html
    rm -rf _deploy/downloads
    rm -rf _deploy/robots.txt
    rm -rf _deploy/javascripts
    rm -rf _deploy/images
    rm -rf _deploy/404.html
    rm -rf _deploy/assets
    rm -rf _deploy/atom.xml
    rm -rf _deploy/about

    ## Copying public to _deploy
    cp -r public/. _deploy
    cd _deploy

    ## Committing: Site updated at 2015-02-14 17:47:44 UTC
    [master 26aef9c] Site updated at 2015-02-14 17:47:44 UTC
     31 files changed, 44 insertions(+), 45 deletions(-)
    
    ## Pushing generated _deploy website
    Counting objects: 69, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (66/66), done.
    Writing objects: 100% (69/69), 5.57 KiB | 0 bytes/s, done.
    Total 69 (delta 35), reused 0 (delta 0)
    To git@github.com:vincenttam/vincenttam.github.io.git
       eb76bf3..26aef9c  master -> master
    
    ## Github Pages deploy complete
    cd -
{:.cliUB}
</div>

<div id="eg2" class="noscr" markdown="1">
Inside Byobu, I entered the *right* passphrase.

    $ ssh-agent bash
    $ ssh-add ~/.ssh/id_rsa
    Enter passphrase for /home/owner/.ssh/id_rsa:
    Identity added: /home/owner/.ssh/id_rsa (/home/owner/.ssh/id_rsa)
{:.cliUB}

Then, I entered `<C-a>d`, which is equivalent to `byobu detach`.
After that, I tried pushing my recent Git commit to GitHub, but I
failed.

    $ git push
    Enter passphrase for key '/home/owner/.ssh/id_rsa':
    Permission denied (publickey).
    fatal: Could not read from remote repository.
    Please make sure you have the correct access rights
    and the repository exists.
    $ sudo cat /dev/vcs2 > ~/temp_tty2.txt
{:.cliUB}

The last command above is for capturing every word into a text file.
The output `~/temp_tty2.txt` has one *single* newline character '\n'.
Therefore, in Byobu, this can be done more *easily*: just use `<C-a>[`
to enter the copy mode, use the whitespace character ' ' to start a
selection, use `<Enter>` to copy the highlighted word, and use
`<C-a>]` to paste the word.  (I *assume* that the bind-key of Byobu is
set to be `<C-a>` .)  To cancel a selection, type `<Esc>`; to quit the
copy mode, type `q`.

Once I returned back to Byobu by `byobu attach`, I can send the
commit via SSH.

    $ git push
    Counting objects: 5, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (5/5), done.
    Writing objects: 100% (5/5), 425 bytes | 0 bytes/s, done.
    Total 5 (delta 4), reused 0 (delta 0)
    To git@github.com:VincentTam/vincenttam.github.io.git
       3595d6d..424f978  source -> source
{:.cliUB}
</div>

<div id="eg3" class="noscr" markdown="1">
### An example to show that only the first correct passphrase counts.

I first entered the correct passphrase.

    $ ssh-agent bash
    $ ssh-add ~/.ssh/id_rsa
    Enter passphrase for /home/owner/.ssh/id_rsa:
    Identity added: /home/owner/.ssh/id_rsa (/home/owner/.ssh/id_rsa)
{:.cliUB}

Then I *delibrately* entered a bad passphrase.

    $ ssh-add ~/.ssh/id_rsa
    Enter passphrase for /home/owner/.ssh/id_rsa:
    Bad passphrase, try again for /home/owner/.ssh/id_rsa:
    Bad passphrase, try again for /home/owner/.ssh/id_rsa:
    Bad passphrase, try again for /home/owner/.ssh/id_rsa:
{:.cliUB}

To test if the bad passphrase counts, I made and pushed a Git commit.

    $ vi Rakefile
{:.cliUB}

The commit was made inside Vim, by [fugitive.vim].

    $ git push
    Counting objects: 3, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 284 bytes | 0 bytes/s, done.
    Total 3 (delta 2), reused 0 (delta 0)
    To git@github.com:VincentTam/vincenttam.github.io.git
       9579dce..1049c4b  source -> source
{:.cliUB}

After supplying a *false* passphrase, I *didn't* expect that I *could*
push it to GitHub.  Finally, I cleaned up the mess in `Rakefile`.

    $ git revert HEAD
    [source 3595d6d] Revert "testing"
     1 file changed, 5 insertions(+)
    $ git push
    Counting objects: 3, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 444 bytes | 0 bytes/s, done.
    Total 3 (delta 2), reused 0 (delta 0)
    To git@github.com:VincentTam/vincenttam.github.io.git
       1049c4b..3595d6d  source -> source
{:.cliUB}
</div>
