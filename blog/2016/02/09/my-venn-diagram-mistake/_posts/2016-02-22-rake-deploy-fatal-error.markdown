---
layout: post
title: "Rake Deploy Fatal Error"
date: 2016-02-22 12:16:16 +0800
comments: true
categories: [Git, M$ Win*, Octopress]
---

Background
---

I had finished writing [my previous post][pp1].  In `rake preview`, I
got the desired output.  Then, the next step is to commit the changes
and to deploy the generated contents to GitHub Pages.

Problem
---

A large block of red text appeared after I ran `rake deploy`.  The
commit on the `master` branch was *unsuccessful*.

    $ rake deploy
    (in C:/github/vincenttam.github.io)
    cp -r source/fancybox/.gitattributes public/fancybox/.gitattributes
    cd _deploy
    Already up-to-date.
    cd -
    rm -rf _deploy/404.html
    ...
    rm -rf _deploy/stylesheets
    cp -r public/. _deploy
    cd _deploy
    fatal: CRLF would be replaced by LF in fancybox/README.md.
    On branch master
    Your branch is up-to-date with 'origin/master'.
    Changes not staged for commit:
            modified:   404.html
            modified:   about/index.html
            ...
    
    Untracked files:
            blog/2016/02/21/
            blog/2016/02/22/
            downloads/code/miktex-update2/
            images/posts/MikTeXUpdate2/
            posts/31/
    
    no changes added to commit
    Everything up-to-date
    cd -
    ## Set the codepage to 65001 for Windows machines
    ## Deploying branch to Github Pages
    ## Pulling any updates from Github Pages
    
    ## Copying public to _deploy
    
    ## Committing: Site updated at 2016-02-22 03:37:22 UTC
    
    ## Pushing generated _deploy website
    
    ## Github Pages deploy complete
{:.cli}

Even though the system said that the deploy was "complete", in fact,
it had *never* been carried out.

**How can I update my blog on GitHub Pages?**

<!-- more -->

Discussion
---

In the above error output, it took me a minute to find out *at which
stage* the deploy had failed: the line starting with "fatal".
Therefore, I stripped off all `\r` from `source/fancybox/README.md`.
I tried deploying it again, and it *failed*---the *same* "fatal" error
appeared for *another file*.  I tried committing the change for
`source/fancybox/README.md`, but I *couldn't* commit this.  I tried
googling "fatal crlf would be replaced by lf", and clicked on
[the first search result][so20168639].  The answers in this Stack
Overflow question suggested that the option `core.autocrlf` should be
configured to `false`.  To be safe, I
[turned on `core.safecrlf`][sa].[^2]

When I [updated Git for Windows][pp1], I chose "**Checkout
Windows-style, commit Unix-style line endings**" (the *first* radio
button), which the Git Setup dialog recommended.

<picture class="fancybox" title="Git line conversion configuration">
  <source srcset="/images/posts/GitUpdate/autocrlf.png"
    media="(min-width: 505px)"></source>
  <img alt="Git line conversion configuration" width="300"
    src="/images/posts/GitUpdate/autocrlf.png" />
</picture>
<small>Picture from [imgur][pic-src].</small>

I love using bash utilities and (G)Vim.  In Git Bash, the former gives
LF line terminators, while the later gives CRLF.  Therefore, I decided
to `set fileformat=unix` in my VIMRC.[^1]  However, this *doesn't*
unify the EOL of files in the local repository.

As I clone Git repositories, the line terminators are automatically
converted to CRLF.

Solution
---

*Completely* get rid of carriage returns `\r` in Git repositories!

To see how many files had CRLF line terminators, I tried using `grep`
in Git Bash, but [this answer on Stack Overflow][so73886] *didn't*
work.

    $ find source -type f -exec grep -Iq . {} \; -and -exec dos2unix {} \;
    dos2unix: converting file source/404.md to Unix format...
    dos2unix: converting file source/about/index.markdown to Unix format...
    dos2unix: converting file source/about/mybyobuconf.markdown to Unix format...
    ...
    dos2unix: converting file source/_posts/2016-02-22-git-for-windows-curl-with-vun
    dle-1.markdown~ to Unix format...
    dos2unix: converting file source/_posts/2016-02-22-testing-octopress-and-ruby-2-
    dot-0-on-windows-7-3.markdown to Unix format...
    dos2unix: converting file source/_posts/2016-02-22-testing-octopress-and-ruby-2-
    dot-0-on-windows-7-3.markdown~ to Unix format...
{:.cli}

For the explanation of the above command, you may refer to
[*Used More Bash Utilities*][pp2].

After that, since `core.autocrlf` has been set to `false`, `git
checkout` no longer inserts `\r` into the files in the local
repository.  Therefore, even though `git status` reports unstaged
changes, running `git checkout -- source` *won't* hurt the files.  I
can finally deploy the contents to GitHub Pages.[^3]

Lessons learnt
---

*Never* run `rake generate` nor `rake preview` in `cmd.exe`!  Run this
in Git Bash, or other shells that *don't* give you carriage returns.

When a new post is created with `rake new_post['...']` in either Git
Bash or Command Prompt, the created post has DOS line endings.
Therefore, we need to take extra care with this by using `dos2unix` in
Git Bash.

---
[^1]: Refer to line 100 of my `_vimrc` at version [07ab878].
[^2]:
    Refer to [this Stack Overflow question][so1547108] for my reason
    of enabling `core.safecrlf`.

[^3]:
    You may verify this by comparing the line

        ## Committing: Site updated at 2016-02-22 03:37:22 UTC
    {:.cli}

    in the above error message in the "Problem" section with commit
    [748fbd7] on GitHub.  Due to the growth of this site, each commit
    on the `master` branch now involves over 400 files and thousands
    of lines of insertion and deletion.  If I provide a direct link to
    the commit, it will take too long to load the page.  Therefore, I
    give the commit history at a particular node instead.

[pp1]: /blog/2016/02/22/git-for-windows-curl-gist-dot-vim-with-vundle-1/
[07ab878]: https://goo.gl/iETw5d
[pic-src]: http://i.stack.imgur.com/vPJCI.png
[so20168639]: http://stackoverflow.com/q/20168639
[sa]: https://github.com/VundleVim/Vundle.vim/wiki#win1
[so1547108]: http://stackoverflow.com/a/1547108
[pp2]: /blog/2015/08/22/used-more-bash-utilities/
[so73886]: http://stackoverflow.com/a/73886
[748fbd7]: https://github.com/VincentTam/vincenttam.github.io/commits/748fbd7
