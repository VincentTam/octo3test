---
layout: post
title: Compilation of Ruby's Source Code on Ubuntu
date: 2014-01-10 03:22:00 +0800
categories: [Linux, Ruby]
comments: true
---

Oliver's guide has listed the packages on which Ruby depends.
Following strictly to the guide, you should start working with the
programming language, instead of wasting time to read this article.

Goal
---

To compile Ruby for whatever reasons.

Background
---

You've read Oliver's guide. However, your goal does *not* match with
those in [Oliver's guide][oliver_guide]. Therefore, you *don't* need
to do all the things in the guide and start to skim through the text
and to scan for commands useful to you. This is an essential skill to
survive in \*nix.[^skim_doc]

Problem
---

You've found *some* useful commands, and tried working out their
dependencies. Nonetheless, you missed out some important commands and
thus the dependencies were wrong. Unfortunately, you're unaware of
such careless mistake and continued the process, before being stopped
by the compiler's error message.

<!-- more -->

In this case, you found the following commands useful.

    $ curl
    # Substitute [version-number] with that of your downloaded archive.
    # If you're NOT sure, use `ls' to list the files inside your folder.
    $ tar -xvzf ruby-[version-number].tar.gz
    $ cd ruby-[version-number]
    $ make
{: .cliUB}

Therefore, you ran all of these commands. Expecting to get things done
and to proceed to the next step, you got an error message from the
compiler.

Trial
---

Using a part of the compiler's error message as the query string a
search engine, you get some other web pages on the same or similar
topics. If you could find blog entries like this some, they might have
links to other similar web pages, so you've got *even more* to read.

I've found [DiStasio's article][DiStasio], which contains a hyperlink
to [Ladd's essay][Ladd]. I tried issuing the following commands
according to the instructions there.

    # Suppose that the current working directory is the same as the one in the above
    # command list.
    # If you're NOT sure, use `pwd' to check it.
    $ cd ext/openssl
    $ make
    $ sudo make reinstall  # I'd installed the wrong version of Ruby.
{: .cliUB}

Lacking patience to read the blogs, knowledge of using makefiles and
experience of compiling softwares from their source code, I don't know
how to uninstall the wrong version of Ruby. Are there any `make
uninstall` command?

I tried searching for `reinstall` and `uninstall` in the `makefile`,
and failed to find any. Then, I realised that using search engines to
answer my questions was inefficient. Reading the official manual of
Make *wouldn't* be effective. Thus, *without* knowing the truth, I
just try the last line of the above list of commands.

The `make reinstall` command successfully triggered a reinstallation
of Ruby, but after running the command, I still received complaints
form the compiler. Having *no* idea on the process, I did the same
thing again: copied a part of the message and googled it, and ended up
with further more pages to read. The amount of tab pages in my current
browser window is too high and this stopped me from opening more web
pages on Ruby compilation errors on Google's search result in a new
tab.

It took me some time to find out that I overlooked the command below

    $ sudo apt-get install build-essential zlib1g-dev libssl-dev \
    > libreadline-dev libyaml-dev libcurl4-openssl-dev curl git-core \
    > python-software-properties
{: .cliUB}

In Oliver's guide, the above command is right above those commands for
compiling and installing Ruby. Therefore, I installed them, and tried
rebuilding Ruby by running `make` and `sudo make reinstall` in my
`ruby -[version-number]`. (i.e. my Ruby source folder) It failed
again.  *Without* changing the current working directory directory in
the above command list, I did the following because of Ladd's web
page.

    $ make
    $ sudo make reinstall
{: .cliUB}

But it failed again. Maybe I need to go back to
`ruby-[version-number]`, recompile the source code and reinstall Ruby
again. So using the *same* current working directory as the one in the
above command list, I did the following thing.

<pre class="cli"><code class="UBMono"><span class="UBHLCode">$ cd ../..</span> # For changing the current working directory to `ruby-[version-number]'.
$ make
$ sudo make reinstall
</code></pre>

Things still went wrong! I remembered the `make clean` command, so
*without* changing the current working directory, I ran the following
commands.

    $ make clean
    $ make
    $ sudo make reinstall
{: .cliUB}

Remark: With the command `dkpg -l | grep ruby`, I realised that `make
clean` *doesn't* uninstall Ruby. It just deletes all compiled files in
`ruby -[version-number]`.

It still *wouldn't* compile with the OpenSSL feature. However, some
features that had failed to compile before I had run the command `make
clean` could be compiled.

This inspired me to run the following commands.

    $ cd ext/openssl
    $ make clean
    $ make
    $ sudo make reinstall
{: .cliUB}

However, I still got errors. There was a problem in getting the file
`ossl.o` work. (I've forgotten the exact name of that file, and I
*couldn't* find web pages about the same error.) I ignored the message
and ran the following commands.

    $ cd ../..
    $ make clean
    $ make
    $ sudo make reinstall
{: .cliUB}

But it still *didn't* go right. After running the commands `make` and
`make clean` for a number of times, I eventually worked out a solution
for my problem.

Solution
---

1.  Run the command `make clean` in *both* the `ruby-[version-number]`
    and `ruby-[version-number]/ext/openssl` directories.
2.  Run `make` in `ruby-[version-number]` to compile the source code.
    Some errors like "Failed to compile gdbm" will come out. It
    depends on your needs. Having *no* clue on what `gdbm` is, I just
    proceed to the reinstallation of Ruby.
3.  Run the command `sudo make reinstall` in `ruby-[version-number]`.
    Then the command `gem install bundle` in Oliver's guide should
    work.

Lessons learnt
---

1.  Always figure out the dependencies of a package.
2.  Be careful and patient while reading instructions on commands.
3.  Always clear *all* compiled files before any recompilation.

Posted via [UltraBlog.vim][end].

---
[^skim_doc]: Refer to [*如何有效學習電腦*][ckhung] by C.K. Hung.

[oliver_guide]: http://excid3.com/blog/setting-up-ubuntu-12-04-with-ruby-1-9-3-nginx-passenger-and-postgresql-or-mysql/
[ckhung]: http://user.frdm.info/ckhung/a/c013.php
[DiStasio]: http://jndistasio.wordpress.com/2012/06/10/installing-ruby-1-9-3-on-opensuse-12-1-openssl-zlib-and-other-problems/ "Installing Ruby 1.9.3 on openSUSE 12.1 – openssl, zlib and other problems"
[Ladd]: http://blog.sethladd.com/2007/03/installing-openssl-support-for-ruby-on.html "Installing OpenSSL Support for Ruby on Ubuntu"
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
