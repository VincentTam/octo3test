---
layout: post
title: "Install Ruby Again! (2)"
date: 2014-08-13 20:26:05 +0800
comments: true
categories: [Ruby, Linux]
---

I installed Ruby 2.1.2 so as to build Octopress on top of it.
Luckily, the installation was successful.

![Installed Ruby 2.1.2 in the terminal][RubyCliInstl]

This afternoon, I tried running `rake` on Ruby 2.1.2.  Unluckily, I
failed.

<!-- more -->

![`rake generate` failed][RakeGenFail]

The above problem could be fixed by simply changing `nil` to `null` at
the second line of `source/_includes/custom/category_feed.xml`, so
it's *not* really a problem.

First, the image popup plugin complained about the new version of gems.

I tried to replace all `imgpopup` by `img` to find further problems
first.

<pre class="cli"><code class="UBMono">[owner@localhost ~/octopress]$ rake generate
## Generating Site with Jekyll
<span class="rake_gen_unchanged">unchanged</span> sass/print.scss
<span class="rake_gen_identical">identical</span> source/stylesheets/screen.css 
Configuration file: /home/owner/octopress/_config.yml
            Source: source
       Destination: public
      Generating... 
<span class="err">Liquid Exception: undefined method `safe_wrap' for #&lt;&lt;Jekyll::ImgPopup:0xa45c82
4&gt;&gt; in _posts/2013-08-16-edit-latex-equations-in-vim.html/#excerpt</span>
jekyll 2.3.0 | Error:  undefined method `safe_wrap' for #&lt;&lt;Jekyll::ImgPopup:0xa4
5c824&gt;&gt;
</code></pre>

Second, it's the `gsub` method *again*!  I'm sorry to that I has been
tired of reading Ruby's documentation, so I decided to reset my commit
history to the tip of `origin/source`, and revert the default RVM
version to 1.9.3 *again* by `rvm use --default 1.9.3`.

[RubyCliInstl]: /images/posts/Ruby212/rvm-install.png
[RakeGenFail]: /images/posts/Ruby212/gen-failed.png
