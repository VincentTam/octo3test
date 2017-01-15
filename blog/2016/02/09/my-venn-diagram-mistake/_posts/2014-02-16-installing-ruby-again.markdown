---
layout: post
title: Installing Ruby Again!
date: 2014-02-16 17:32:23 +0800
categories: [Linux, Ruby]
published: true
comments: true
---

It seems that the installation of Ruby through rvm is *not* as easy as
I think. The following two commands have failed.

    $ rvm pkg install iconv
{:.cliUB}

![failure of installing iconv][fig1]

    $ rvm install 1.9.2 -C --with-openssl-dir=$HOME/.rvm/usr,--with-iconv-dir=$HOME/.rvm/usr
{:.cliUB}

![failure of compiling ruby 1.9.2][fig2]

The [Octopress official documentation][1] as well as
[a Chinese page][2] have those commands. Luckily,
[Krish\'s approach][3] works on my computer.

I created this post to see if this affects [UltraBlog.vim][4].

Posted via [UltraBlog.vim][4].

[1]: http://www.lennu.net/2012/05/11/octopress-installation-in-ubuntu-12-dot-04-with-rsync/
[2]: http://whbzju.github.io/blog/2013/02/02/octopress-peizhi/
[3]: https://gist.github.com/aahan/5226975
[4]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/

[fig1]: /images/posts/RubyInstall2/rvm-install-iconv.png
[fig2]: /images/posts/RubyInstall2/rvm-install-ruby1.png
