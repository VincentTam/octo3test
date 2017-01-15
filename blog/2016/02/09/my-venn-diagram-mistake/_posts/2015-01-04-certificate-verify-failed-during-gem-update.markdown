---
layout: post
title: "Certificate Verify Failed during Gem Update"
date: 2015-01-04 22:41:05 +0800
comments: true
categories: [M$ Win*, Ruby]
---

Background
---

I pull the Git commits from the `origin` of this blog to Git Bash on
M\$ Win*.  The `Gemfile` has changed due to commit [fbc3c0b].

Problem
---

I ran `bundle install` according to the official documentation, and
got an *unexpected error*.[^doc]

<pre class="cli"><code><span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ bundle install
DL is deprecated, please use Fiddle
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...
<span class="err">Bundler could not find compatible versions for gem "sass":
  In snapshot (Gemfile.lock):
    sass (3.2.19)

  In Gemfile:
    compass (~> 1.0.1) x64-mingw32 depends on
      sass (< 3.5, >= 3.3.13) x64-mingw32</span>

Running `<span class="HLCode">bundle update</span>` will rebuild your snapshot from scratch, using only
the gems in your Gemfile, which may resolve the conflict.
</code></pre>

*Without* updated gems, even though everything in the `source` folder
is *correct*, one *can't* generate an Octopress blog.  **How can one
get the gems updated?**

<!-- more -->

I then tried to follow the suggestion, but received *another* error.

<pre class="cli"><code><span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
Owner@OWNER-PC /c/github/vincenttam.github.io (source)
$ bundle update
DL is deprecated, please use Fiddle
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...

<span class="err">Gem::RemoteFetcher::FetchError: SSL_connect returned=1 errno=0 state=SSLv3 read
server certificate B: certificate verify failed (https://rubygems.org/gems/rake-
10.4.2.gem)
An error occurred while installing rake (10.4.2), and Bundler cannot continue.
Make sure that `<span class="HLCode">gem install rake -v '10.4.2'</span>` succeeds before bundling.</span>
</code></pre>

I ran the **command in bold** in the above message, and got *similar*
messages.

<pre class="cli"><code><span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ gem install rake -v '10.4.2'
<span class="err">ERROR:  Could not find a valid gem 'rake' (= 10.4.2), here is why:
          Unable to download data from https://rubygems.org/ - SSL_connect retur
ned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (
https://rubygems.org/specs.4.8.gz)</span>
</code></pre>

Solution
---

I googled "windows unable to download data from https //rubygems.org/
- ssl_connect returned=1", and clicked on the
[first Stack Overflow question that I saw][so19150017].  I quickly
skimmed through the first answer of this question, and read the last
section "Windows note", which referred interested readers to two
places:

1. RubyInstaller issue [249] on GitHub,
2. The second answer of this question.

I clicked the first webpage, and quickly jumped to
[Luis Lavena's response][249rep] to the issue.  Unlike the previous
webpages, I read every word from the beginning to the third section
this time, and read the Stack Overflow question again, before deciding
what to be done.

I followed the instructions in the third section, instead of manually
downloading and inserting the PEM file back to the folder which the
command `gem which rubygems` returned.

<pre class="cli"><code><span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ gem install --local ~/Downloads/rubygems-update-2.0.15.gem
Successfully installed rubygems-update-2.0.15
Parsing documentation for rubygems-update-2.0.15
Installing ri documentation for rubygems-update-2.0.15
1 gem installed

<span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ update_rubygems --no-ri --no-rdoc
RubyGems 2.0.15 installed

=== 2.0.14 / 2013-11-12

Bug fixes:

* Restore concurrent requires following the fix for ruby bug #8374.  Pull
  request #637 and issue #640 by Charles Nutter.
* Gem::Specification::remove_spec no longer checks for existence of the spec
  to be removed.  Issue #698 by Tiago Macedo.
* Restored wildcard handling when installing gems.  Issue #697 by Chuck Remes.
* Added DigiCert High Assurance EV Root CA certificate for the cloudfront.net
  certificate change.
* The Gem::RemoteFetcher tests now choose the test server port more reliably.
  Pull Request #706 by akr.


------------------------------------------------------------------------------

RubyGems installed the following executables:
        c:/Ruby200-x64/bin/gem

<span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ gem uninstall rubygems-update -x
Removing update_rubygems
Successfully uninstalled rubygems-update-2.0.15
</code></pre>

Then I ran `bundle install` *again*, and I still got the *same* error
shown at the very beginning of the post.  However, I *could* update the
gems.

<pre class="cli"><code><span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ bundle update
DL is deprecated, please use Fiddle
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...
<span class="HLCode">Installing rake 10.4.2 (was 10.3.2)</span>
Using RedCloth 4.2.9
Using blankslate 2.1.2.4
Installing hitimes 1.2.2
Installing timers 4.0.1 (was 1.1.0)
Installing celluloid 0.16.0 (was 0.15.2)
Installing chunky_png 1.3.3 (was 1.3.1)
Using fast-stemmer 1.0.2
Installing classifier-reborn 2.0.3 (was 2.0.1)
Using coffee-script-source 1.8.0
Installing execjs 2.2.2 (was 2.2.1)
Using coffee-script 2.3.0
Using colorator 0.1
Installing multi_json 1.10.1
Installing sass 3.4.9 (was 3.2.19)
Installing compass-core 1.0.1
Installing compass-import-once 1.0.5
Using rb-fsevent 0.9.4
Installing ffi 1.9.6 (was 1.9.3)
Using rb-inotify 0.9.5
Installing compass 1.0.1 (was 0.12.7)
Using tilt 1.4.1
Installing haml 4.0.6 (was 4.0.5)
Installing jekyll-coffeescript 1.0.1 (was 1.0.0)
Using jekyll-gist 1.1.0
Installing jekyll-paginate 1.1.0 (was 1.0.0)
Installing jekyll-sass-converter 1.3.0 (was 1.2.0)
Installing listen 2.8.4 (was 2.7.9)
Installing jekyll-watch 1.2.0 (was 1.1.0)
Installing kramdown 1.5.0 (was 1.4.1)
Using liquid 2.6.1
Installing mercenary 0.3.5 (was 0.3.4)
Using posix-spawn 0.3.9
Using yajl-ruby 1.1.0
Using pygments.rb 0.6.0
Installing redcarpet 3.2.2 (was 3.1.2)
Installing safe_yaml 1.0.4 (was 1.0.3)
Using parslet 1.5.0
Installing toml 0.1.2 (was 0.1.1)
Installing jekyll 2.5.3 (was 2.3.0)
Installing jekyll-sitemap 0.7.0 (was 0.5.1)
Installing octopress-hooks 2.2.3 (was 2.2.1)
Installing octopress-date-format 2.0.2 (was 2.0.1)
Installing rack 1.6.0 (was 1.5.2)
Using rack-protection 1.5.3
Using rubypants 0.2.0
Using sass-globbing 1.0.0
Using sinatra 1.4.5
Using stringex 1.4.0
Using wdm 0.1.0
Using bundler 1.7.2
<span class="HLCode">Your bundle is updated!</span>
</code></pre>

Lessons learnt
---

To save space in the hard disk, I removed the old versions of gems
with a short and simple command.

<pre class="cli"><code><span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ gem cleanup
Cleaning up installed gems...
Attempting to uninstall rake-10.3.2
Successfully uninstalled rake-10.3.2
Attempting to uninstall rack-1.5.2
Successfully uninstalled rack-1.5.2
Attempting to uninstall octopress-date-format-2.0.1
Successfully uninstalled octopress-date-format-2.0.1
Attempting to uninstall octopress-hooks-2.2.1
Successfully uninstalled octopress-hooks-2.2.1
Attempting to uninstall jekyll-sitemap-0.5.1
Successfully uninstalled jekyll-sitemap-0.5.1
Attempting to uninstall jekyll-2.3.0
Successfully uninstalled jekyll-2.3.0
Attempting to uninstall jekyll-watch-1.1.0
Successfully uninstalled jekyll-watch-1.1.0
Attempting to uninstall listen-2.7.9
Successfully uninstalled listen-2.7.9
Attempting to uninstall jekyll-sass-converter-1.2.0
Successfully uninstalled jekyll-sass-converter-1.2.0
Attempting to uninstall jekyll-coffeescript-1.0.0
Successfully uninstalled jekyll-coffeescript-1.0.0
Attempting to uninstall jekyll-paginate-1.0.0
Successfully uninstalled jekyll-paginate-1.0.0
Attempting to uninstall toml-0.1.1
Successfully uninstalled toml-0.1.1
Attempting to uninstall redcarpet-3.1.2
Successfully uninstalled redcarpet-3.1.2
Attempting to uninstall safe_yaml-1.0.3
Successfully uninstalled safe_yaml-1.0.3
Attempting to uninstall mercenary-0.3.4
Successfully uninstalled mercenary-0.3.4
Attempting to uninstall kramdown-1.4.1
Successfully uninstalled kramdown-1.4.1
Attempting to uninstall haml-4.0.5
Successfully uninstalled haml-4.0.5
Attempting to uninstall ffi-1.9.3-x64-mingw32
Successfully uninstalled ffi-1.9.3-x64-mingw32
Attempting to uninstall execjs-2.2.1
Successfully uninstalled execjs-2.2.1
Attempting to uninstall compass-0.12.7
Successfully uninstalled compass-0.12.7
Attempting to uninstall classifier-reborn-2.0.1
Successfully uninstalled classifier-reborn-2.0.1
Attempting to uninstall chunky_png-1.3.1
Successfully uninstalled chunky_png-1.3.1
Attempting to uninstall celluloid-0.15.2
Successfully uninstalled celluloid-0.15.2
Attempting to uninstall timers-1.1.0
Successfully uninstalled timers-1.1.0
Attempting to uninstall sass-3.2.19
Successfully uninstalled sass-3.2.19
<span class="HLCode">Clean Up Complete</span>
</code></pre>

---
[^doc]: [Updating Octopress][doc] in *Octopress Documentation*.

[fbc3c0b]: https://github.com/imathis/octopress/commit/fbc3c0b
[doc]: http://octopress.org/docs/updating/
[so19150017]: https://stackoverflow.com/q/19150017  "SSL Error When installing rubygems, Unable to pull data ..."
[249]: https://github.com/oneclick/rubyinstaller/issues/249 "Change OpenSSL certificates path"
[249rep]: https://gist.github.com/luislavena/f064211759ee0f806c88 "SSL upgrades on rubygems.org and RubyInstaller versions"
