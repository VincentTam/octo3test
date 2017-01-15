---
layout: post
title: "Set Up Another Local Repository for an Existing Octopress Blog"
date: 2015-03-09 15:17:20 +0800
comments: true
categories: Octopress
---

Motivation
---

Same as the raison d'être in [*Using Octopress on Another Device*][pp]
in Blog 1.

Problem
---

When I wrote that post last year, I gave *too little* commands for the
actual process of setting up the local repository.  Yesterday, I
re-read [Robert Anderson's post][src] again, and tried reproducing the
steps, and got some redundant Git branches.

<!-- more -->

My steps
---

Assume that throughout this post, the current working directoy is
`~/octopress`.

    $ pwd
    /home/owner/octopress
    $ git clone -b source git@github.com:VincentTam/vincenttam.github.io.git .
    Cloning into '.'...
    remote: Counting objects: 71346, done.
    remote: Compressing objects: 100% (76/76), done.
    remote: Total 71346 (delta 8), reused 0 (delta 0), pack-reused 71266
    Receiving objects: 100% (71346/71346), 63.71 MiB | 3.08 MiB/s, done.
    Resolving deltas: 100% (33764/33764), done.
    Checking connectivity... done.
{:.cliUB}

This is a standard command, and I first created the folder
`~/octopress` before cloning the `source` branch to the folder, so
that my commands *aren't* exactly the same as Anderson's.

To make another difference, I also fetched the `master` branch from
Octopress.

    $ git remote add octopress git@github.com:imathis/octopress.git
    $ git fetch octopress master
    From github.com:imathis/octopress
     * branch            master     -> FETCH_HEAD
     * [new branch]      master     -> octopress/master
    $ git branch -av
    * source                   bd39cb2 Corrected the MathJax syntax for X ~ Exp(λ)
      remotes/octopress/master 5080107 Fixed improper canonical url
      remotes/origin/HEAD      -> origin/source
      remotes/origin/master    7f8f845 Site updated at 2015-03-08 12:59:04 UTC
      remotes/origin/source    bd39cb2 Corrected the MathJax syntax for X ~ Exp(λ)
{:.cliUB}

Since I *dont't* and *won't* have a Mac laptop, I *skipped* the
command `rbenv rehash`.

<picture class="fancybox" title="A Macbook exploded">
  <source srcset="/images/posts/MacExplosion/MacExplosion.jpg" media="(min-width: 340px)" />
  <img alt="Macbook exploded" src="/images/posts/MacExplosion/MacExplosion300.jpg" />
</picture>

<small>Source:
<http://www.homelandsecureit.com/wp-content/uploads/2011/07/MacExplosion.jpg>
</small>

I then viewed the task `setup_github_pages` in `Rakefile`, and
discovered that if I cloned the whole remote repository of the
Octopress blog into `_deploy`, the there'd be an extra `master` branch
in the default deploy directory.  To avoid this, I typed a longer
command.

    $ gem install bundler
    $ bundle install
    $ git clone git@github.com:VincentTam/vincenttam.github.io.git -b master _deploy
    Cloning into '_deploy'...
    remote: Counting objects: 71346, done.
    remote: Compressing objects:  68% (52/76)   Receiving objects:   0% (1/71346)
    remote: Compressing objects: 100% (76/76), done.
    remote: Total 71346 (delta 8), reused 0 (delta 0), pack-reused 71266
    Receiving objects: 100% (71346/71346), 63.71 MiB | 2.77 MiB/s, done.
    Resolving deltas: 100% (33764/33764), done.
    Checking connectivity... done.
    Checking out files: 100% (644/644), done.
    $ cd _deploy && git branch -av && cd ..
    * master                7f8f845 Site updated at 2015-03-08 12:59:04 UTC
      remotes/origin/HEAD   -> origin/source
      remotes/origin/master 7f8f845 Site updated at 2015-03-08 12:59:04 UTC
      remotes/origin/source bd39cb2 Corrected the MathJax syntax for X ~ Exp(λ)
{:.cliUB}

To test if the last two words of the command in Anderson's post could
be *omitted*, I *changed* the Markdown source of one of my old posts
slightly, committed the change and pushed it to GitHub.

<pre class="cliUB"><code>$ gvim source/_posts/2014-03-16-latex-template-for-essays.markdown
$ git commit -am "Another small minor change" &amp;&amp; git push
[source 4be7fba] Another small minor change
1 file changed, 2 insertions(+), 4 deletions(-)
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 435 bytes | 0 bytes/s, done.
Total 5 (delta 4), reused 0 (delta 0)
To git@github.com:VincentTam/vincenttam.github.io.git
bd39cb2..4be7fba  source -&gt; source
$ cd _deploy/ &amp;&amp; git branch -av &amp;&amp; cd ..
* master		7f8f845 Site updated at 2015-03-08 12:59:04 UTC
  remotes/origin/HEAD   -&gt; origin/source
  remotes/origin/master 7f8f845 Site updated at 2015-03-08 12:59:04 UTC
  <span class="HLCode">remotes/origin/source bd39cb2 Corrected the MathJax syntax for X ~ Exp(λ)</span>
$ cd _deploy/ &amp;&amp; <span class="HLCode">git pull</span> &amp;&amp; git branch -av &amp;&amp; cd ..
* master		7f8f845 Site updated at 2015-03-08 12:59:04 UTC
  remotes/origin/HEAD   -&gt; origin/source
  remotes/origin/master 7f8f845 Site updated at 2015-03-08 12:59:04 UTC
  <span class="HLCode">remotes/origin/source 4be7fba Another small minor change</span>
</code></pre>

From `Rakefile` and the above highlighted command output, I could
deduce that before starting to blog on another machine and publish
them to GitHub Pages, one needed to pull the commits from the remote
repository by `git pull origin source` and `git pull` in `~/octopress`
and `~/octopres/_deploy` respectively.

Then I faced the same errors I saw yesterday.[^pp2]  After solving
them, I proceeded to deploying the site to GitHub Pages.

    $ rake deploy

    ...

     30 files changed, 44 insertions(+), 46 deletions(-)

    ## Pushing generated _deploy website
    Counting objects: 130, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (64/64), done.
    Writing objects: 100% (65/65), 5.37 KiB | 0 bytes/s, done.
    Total 65 (delta 35), reused 0 (delta 0)
    To git@github.com:VincentTam/vincenttam.github.io.git
       7f8f845..5af7b9d  master -> master

    ## Github Pages deploy complete
    cd -
{:.cliUB}

Lastly, I found that the remote tracking branch `origin/master`
*wasn't* necessary in `~/octopress`.  However, the creation of this
branch *couldn't* be avoided: using `git clone` to clone either the
*whole repository* or *a single branch only* will lead the creation of
*all* remote branches.  To minimize the number of branches in the
local repository for an Octopress blog, I suggest deleting the
outdated `origin/master` branch.

<pre class="cliUB"><code>$ cd _deploy &amp;&amp; git branch -av &amp;&amp; cd ..
<span class="HLCode">* master                5af7b9d Site updated at 2015-03-09 06:54:16 UTC</span>
  remotes/origin/HEAD   -&amp;gt; origin/source
  <span class="HLCode">remotes/origin/master 5af7b9d Site updated at 2015-03-09 06:54:16 UTC</span>
  remotes/origin/source 4be7fba Another small minor change
$ git branch -av
* source                   4be7fba Another small minor change
  remotes/octopress/master 5080107 Fixed improper canonical url
  remotes/origin/HEAD      -&amp;gt; origin/source
  <span class="HLCode">remotes/origin/master    7f8f845 Site updated at 2015-03-08 12:59:04 UTC</span>
  remotes/origin/source    4be7fba Another small minor change
$ git branch -rd origin/master
Deleted remote branch origin/master (was 7f8f845).
</code></pre>

---
[^pp2]: See [*Another Jekyll Error*][pp2] in Blog 1 for details.

[pp]: /blog/2014/05/26/using-octopress-on-another-device/#raison-dtre
[src]: http://blog.zerosharp.com/clone-your-octopress-to-blog-from-two-places/
[pp2]: /blog/2015/03/08/another-jekyll-error/
