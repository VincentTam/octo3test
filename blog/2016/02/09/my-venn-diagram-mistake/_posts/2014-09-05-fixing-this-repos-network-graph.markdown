---
layout: post
title: "Fixing This Repo's Network Graph"
date: 2014-09-05 23:33:17 +0800
comments: true
categories: [Git, Octopress]
---

Tonight, I worked on my blog.  Here're something done.

1. Fixed a dead link in [Using Octopress on Another Device][pp] in
*Blog 1*.
2. Fixed `url` in `_config.yml`: it should be in lower case.[^1]
3. Understand item 5 of Scott Cheng's post on setting up
[Octopress].[^2]  In May, I *didn't* understand it.[^3]  I've tested
it in order to understand what it really means.  After running `rake
setup_github_pages`, `_deploy` folder has *only* local `master`
branch, and *no* remote branch.  Therefore, it's *impossible* to
remote the *only* branch there.  To avoid conflicts when I push my
commits on `master` branch to my remote repository in GitHub, I ran
some commands as shown below.
3. Fixed the network graph of the GitHub repository for *Blog 1*.
    - Original graph: Due to my poor knowledge on [Git], `master`
	branch shares, as shown in the graph, a common node with
	`source` branch.  This is *wrong*!
    - Deleted locally `origin/master` branch and `master` branch in
	the remote repository to clear the mess.
    - In the new graph, those two branches *don't* share a common node
	anymore.

<pre class="cli"><code class="UBMono">[owner@localhost ~/octopress/_deploy]$ git branch -rd origin/master
Deleted remote branch origin/master (was e745caf).
[owner@localhost ~/octopress/_deploy]$ git branch -a
* <span class="GitBrName">master</span>
[owner@localhost ~/octopress/_deploy]$ git push origin --delete master
To git@github.com:vincenttam/vincenttam.github.io.git
 - [deleted]         master
</code></pre>

---
[^1]: See commit [49f9d1b] for details.
[^2]: This Markdown source code of the [post] can be found in GitHub.
[^3]: See the [post] in item 1 for details.

[pp]: /blog/2014/05/26/using-octopress-on-another-device/
[49f9d1b]: https://github.com/VincentTam/vincenttam.github.io/commit/49f9d1b "Corrected the config file"
[Octopress]: http://www.octopress.org
[post]: https://github.com/scottcheng/scottcheng.com-v1/blob/3bb8142/source/_posts/2012-11-07-setting-up-existing-octopress-blog-on-a-new-computer.markdown
[Git]: http://git-scm.com/
