---
layout: post
title: "Jekyll Serve Error (2)"
date: 2016-08-28 21:32:58 +0800
comments: true
categories: [blogging, M$ Win*]
---

Background
---

*Same* as the [previous post][pp] in this series, except that I ran
this command from M\$ Win\* 10.

Problem
---

*Similar* to the previous post.

    Owner@Owner-PC MINGW64 /c/github/blog2 (gh-pages)
    $ jekyll serve
    WARN: Unresolved specs during Gem::Specification.reset:
          pygments.rb (~> 0.6.0)
          jekyll-watch (~> 1.1)
    WARN: Clearing out unresolved specs.
    Please report a bug if this causes problems.
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/resolver.rb:35
    7:in `resolve': Could not find gem 'jekyll (~> 3.1) x64-mingw32' in the gems ava
    ilable on this machine. (Bundler::GemNotFound)
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/r
    esolver.rb:164:in `start'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/r
    esolver.rb:129:in `resolve'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/d
    efinition.rb:193:in `resolve'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/d
    efinition.rb:132:in `specs'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/d
    efinition.rb:177:in `specs_for'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/d
    efinition.rb:166:in `requested_specs'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/e
    nvironment.rb:18:in `requested_specs'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler/r
    untime.rb:13:in `setup'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/bundler-1.7.2/lib/bundler.r
    b:121:in `setup'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/jekyll-2.5.3/lib/jekyll/plu
    gin_manager.rb:37:in `require_from_bundler'
            from C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/jekyll-2.5.3/bin/jekyll:16:
    in `<top (required)>'
            from C:/Ruby200-x64/bin/jekyll:23:in `load'
            from C:/Ruby200-x64/bin/jekyll:23:in `<main>'
{:.cli}

<!-- more -->

A failed attempt
---

I *didn't* know the reason for this problem.

    Owner@Owner-PC MINGW64 /c/github/blog2 (gh-pages)
    $ bundle update
    DL is deprecated, please use Fiddle
    Fetching source index from https://rubygems.org/
    Resolving dependencies...
    Could not verify the SSL certificate for
    https://rubygems.org/quick/Marshal.4.8/jekyll-3.2.1.gemspec.rz.
    There is a chance you are experiencing a man-in-the-middle attack, but most
    likely your system doesn't have the CA certificates needed for verification. For
    information about OpenSSL certificates, see bit.ly/ruby-ssl. To connect without
    using SSL, edit your Gemfile sources and change 'https' to 'http'.
{:.cli}

Some gems updated
---

*Without* knowing the difference between these two commands, I used
the second one as an alternative to the first one.

    Owner@Owner-PC MINGW64 /c/github/blog2 (gh-pages)
    $ gem update
    unable to convert "\x86" from ASCII-8BIT to UTF-8 for ext/redcloth_scan/redcloth
    _attributes.o, skipping
    unable to convert "\x86" from ASCII-8BIT to UTF-8 for ext/redcloth_scan/redcloth
    _inline.o, skipping
    unable to convert "\x86" from ASCII-8BIT to UTF-8 for ext/redcloth_scan/redcloth
    _scan.o, skipping
    unable to convert "\x90" from ASCII-8BIT to UTF-8 for ext/redcloth_scan/redcloth
    _scan.so, skipping
    unable to convert "\x90" from ASCII-8BIT to UTF-8 for lib/redcloth_scan.so, skip
    ping
    unable to convert "\x86" from ASCII-8BIT to UTF-8 for bigdecimal.o, skipping
    unable to convert "\x90" from ASCII-8BIT to UTF-8 for bigdecimal.so, skipping
    unable to convert "\x90" from ASCII-8BIT to UTF-8 for lib/hitimes/2.0/hitimes.so
    , skipping
    ERROR:  Error installing io-console:
            ERROR: Failed to build gem native extension.

        C:/Ruby200-x64/bin/ruby.exe extconf.rb
    checking for rb_funcallv()... no
    checking for rb_sym2str()... no
    creating Makefile

    make "DESTDIR="
    generating console-x64-mingw32.def
    compiling console.c
    console.c: In function 'console_cursor_set':
    console.c:716:5: warning: implicit declaration of function 'RARRAY_AREF' [-Wimpl
    icit-function-declaration]
    linking shared-object io/console.so
    console.o: In function `console_cursor_set':
    C:\Ruby200-x64\lib\ruby\gems\2.0.0\gems\io-console-0.4.6/console.c:716: undefine
    d reference to `RARRAY_AREF'
    C:\Ruby200-x64\lib\ruby\gems\2.0.0\gems\io-console-0.4.6/console.c:716: undefine
    d reference to `RARRAY_AREF'
    collect2.exe: error: ld returned 1 exit status
    make: *** [console.so] Error 1

    Gem files will remain installed in C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/io-co
    nsole-0.4.6 for inspection.
    Results logged to C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/io-console-0.4.6/./gem
    _make.out

    invalid options: -SHN
    (invalid options are ignored)
    ERROR:  While executing gem ... (Encoding::InvalidByteSequenceError)
        "\xE9" followed by "\x94" on CP950
    Updating installed gems
    Updating RedCloth
    Temporarily enhancing PATH to include DevKit...
    Building native extensions.  This could take a while...
    Successfully installed RedCloth-4.3.2
    Parsing documentation for RedCloth-4.3.2
    Installing ri documentation for RedCloth-4.3.2
    Installing darkfish documentation for RedCloth-4.3.2
    Updating bigdecimal
    Building native extensions.  This could take a while...
    Successfully installed bigdecimal-1.2.7
    Parsing documentation for bigdecimal-1.2.7
    Installing ri documentation for bigdecimal-1.2.7
    Installing darkfish documentation for bigdecimal-1.2.7
    Updating blankslate
    Successfully installed blankslate-3.1.3
    Parsing documentation for blankslate-3.1.3
    Installing ri documentation for blankslate-3.1.3
    Installing darkfish documentation for blankslate-3.1.3
    Updating bundler
    Successfully installed bundler-1.12.5
    Parsing documentation for bundler-1.12.5
    Installing ri documentation for bundler-1.12.5
    Installing darkfish documentation for bundler-1.12.5
    Updating celluloid
    Successfully installed timers-4.1.1
    Successfully installed celluloid-essentials-0.20.5
    Successfully installed celluloid-supervision-0.20.6
    Successfully installed celluloid-pool-0.20.5
    Successfully installed celluloid-fsm-0.20.5
    Successfully installed celluloid-extras-0.20.5
    Successfully installed celluloid-0.17.3
    Parsing documentation for timers-4.1.1
    Installing ri documentation for timers-4.1.1
    Installing darkfish documentation for timers-4.1.1
    Parsing documentation for celluloid-essentials-0.20.5
    Installing ri documentation for celluloid-essentials-0.20.5
    Installing darkfish documentation for celluloid-essentials-0.20.5
    Parsing documentation for celluloid-supervision-0.20.6
    Installing ri documentation for celluloid-supervision-0.20.6
    Installing darkfish documentation for celluloid-supervision-0.20.6
    Parsing documentation for celluloid-pool-0.20.5
    Installing ri documentation for celluloid-pool-0.20.5
    Installing darkfish documentation for celluloid-pool-0.20.5
    Parsing documentation for celluloid-fsm-0.20.5
    Installing ri documentation for celluloid-fsm-0.20.5
    Installing darkfish documentation for celluloid-fsm-0.20.5
    Parsing documentation for celluloid-extras-0.20.5
    Installing ri documentation for celluloid-extras-0.20.5
    Installing darkfish documentation for celluloid-extras-0.20.5
    Parsing documentation for celluloid-0.17.3
    Installing ri documentation for celluloid-0.17.3
    Installing darkfish documentation for celluloid-0.17.3
    Updating chunky_png
    Successfully installed chunky_png-1.3.6
    Parsing documentation for chunky_png-1.3.6
    Installing ri documentation for chunky_png-1.3.6
    Installing darkfish documentation for chunky_png-1.3.6
    Updating classifier-reborn
    Successfully installed classifier-reborn-2.0.4
    Parsing documentation for classifier-reborn-2.0.4
    Installing ri documentation for classifier-reborn-2.0.4
    Installing darkfish documentation for classifier-reborn-2.0.4
    Updating coffee-script
    Successfully installed coffee-script-2.4.1
    Parsing documentation for coffee-script-2.4.1
    Installing ri documentation for coffee-script-2.4.1
    Installing darkfish documentation for coffee-script-2.4.1
    Updating coffee-script-source
    Successfully installed coffee-script-source-1.10.0
    Parsing documentation for coffee-script-source-1.10.0
    Installing ri documentation for coffee-script-source-1.10.0
    Installing darkfish documentation for coffee-script-source-1.10.0
    Updating colorator
    Successfully installed colorator-1.1.0
    Parsing documentation for colorator-1.1.0
    Installing ri documentation for colorator-1.1.0
    Installing darkfish documentation for colorator-1.1.0
    Updating execjs
    Successfully installed execjs-2.7.0
    Parsing documentation for execjs-2.7.0
    Installing ri documentation for execjs-2.7.0
    Installing darkfish documentation for execjs-2.7.0
    Updating ffi
    Successfully installed ffi-1.9.14-x64-mingw32
    Parsing documentation for ffi-1.9.14-x64-mingw32
    Installing ri documentation for ffi-1.9.14-x64-mingw32
    Installing darkfish documentation for ffi-1.9.14-x64-mingw32
    Updating haml

    HEADS UP! Haml 4.0 has many improvements, but also has changes that may break
    your application:

    * Support for Ruby 1.8.6 dropped
    * Support for Rails 2 dropped
    * Sass filter now always outputs <style> tags
    * Data attributes are now hyphenated, not underscored
    * html2haml utility moved to the html2haml gem
    * Textile and Maruku filters moved to the haml-contrib gem

    For more info see:

    http://rubydoc.info/github/haml/haml/file/CHANGELOG.md

    Successfully installed haml-4.0.7
    Parsing documentation for haml-4.0.7
    Installing ri documentation for haml-4.0.7
    Installing darkfish documentation for haml-4.0.7
    Updating hitimes
    Building native extensions.  This could take a while...
    Successfully installed hitimes-1.2.4
    Parsing documentation for hitimes-1.2.4
    Installing ri documentation for hitimes-1.2.4
    Installing darkfish documentation for hitimes-1.2.4
    Updating io-console
    Building native extensions.  This could take a while...
    Updating jekyll
    Successfully installed liquid-3.0.6
    Successfully installed rouge-1.11.1
    Successfully installed forwardable-extended-2.6.0
    Successfully installed pathutil-0.14.0
    Successfully installed jekyll-3.2.1
    Successfully installed rb-inotify-0.9.7
    Successfully installed listen-3.0.8
    Parsing documentation for liquid-3.0.6
    Installing ri documentation for liquid-3.0.6
    Installing darkfish documentation for liquid-3.0.6
    Parsing documentation for rouge-1.11.1
    Installing ri documentation for rouge-1.11.1
    Installing darkfish documentation for rouge-1.11.1
    Parsing documentation for forwardable-extended-2.6.0
    Installing ri documentation for forwardable-extended-2.6.0
    Installing darkfish documentation for forwardable-extended-2.6.0
    Parsing documentation for pathutil-0.14.0
    Installing ri documentation for pathutil-0.14.0
    Installing darkfish documentation for pathutil-0.14.0
    Parsing documentation for jekyll-3.2.1
    Installing ri documentation for jekyll-3.2.1
    Installing darkfish documentation for jekyll-3.2.1
    Parsing documentation for rb-inotify-0.9.7
    Installing ri documentation for rb-inotify-0.9.7
    Installing darkfish documentation for rb-inotify-0.9.7
    Parsing documentation for listen-3.0.8
    Installing ri documentation for listen-3.0.8
    Installing darkfish documentation for listen-3.0.8
    Updating jekyll-gist
    Successfully installed multipart-post-2.0.0
    Successfully installed faraday-0.9.2
    Successfully installed addressable-2.4.0
    Successfully installed sawyer-0.7.0
    Successfully installed octokit-4.3.0
    Successfully installed jekyll-gist-1.4.0
    Parsing documentation for multipart-post-2.0.0
    Installing ri documentation for multipart-post-2.0.0
    Installing darkfish documentation for multipart-post-2.0.0
    Parsing documentation for faraday-0.9.2
    Installing ri documentation for faraday-0.9.2
    Installing darkfish documentation for faraday-0.9.2
    Parsing documentation for addressable-2.4.0
    Installing ri documentation for addressable-2.4.0
    Installing darkfish documentation for addressable-2.4.0
    Parsing documentation for sawyer-0.7.0
    Installing ri documentation for sawyer-0.7.0
    Installing darkfish documentation for sawyer-0.7.0
    Parsing documentation for octokit-4.3.0
    Installing ri documentation for octokit-4.3.0
    Installing darkfish documentation for octokit-4.3.0
    Parsing documentation for jekyll-gist-1.4.0
    Installing ri documentation for jekyll-gist-1.4.0
    Installing darkfish documentation for jekyll-gist-1.4.0
    Updating jekyll-sass-converter
    Successfully installed jekyll-sass-converter-1.4.0
    Parsing documentation for jekyll-sass-converter-1.4.0
    Installing ri documentation for jekyll-sass-converter-1.4.0
    Installing darkfish documentation for jekyll-sass-converter-1.4.0
    Updating jekyll-sitemap
{:.cli}

Effect
---

The preview *failed*.

    Owner@Owner-PC MINGW64 /c/github/blog2 (gh-pages)
    $ jekyll serve
    WARN: Unresolved specs during Gem::Specification.reset:
          jekyll-watch (~> 1.1)
    WARN: Clearing out unresolved specs.
    Please report a bug if this causes problems.
    Configuration file: C:/github/blog2/_config.yml
                Source: C:/github/blog2
           Destination: C:/github/blog2/_site
     Incremental build: disabled. Enable with --incremental
          Generating...
                        done in 2.227 seconds.
    I, [2016-08-28T21:50:30.210479 #7440]  INFO -- : Celluloid 0.17.3 is running in 
    BACKPORTED mode. [ http://git.io/vJf3J ]
    jekyll 3.2.1 | Error:  wrong number of arguments (2 for 1)
{:.cli}

Then, I googled "unable to convert x90 from ascii-8bit to utf-8" and
clicked on the first link, which was a Stack Overflow question about
[an similar error][so18235293].

    $ gem update --system
    RubyGems 2.6.6 installed
    Parsing documentation for rubygems-2.6.6
    Installing ri documentation for rubygems-2.6.6

    === 2.6.6 / 2016-06-22

    Bug fixes:

    * Sort installed versions to make sure we install the latest version when
    ## RELEASE NOTES OMITTED
      by Michal Papis.


    ------------------------------------------------------------------------------

    RubyGems installed the following executables:
	    C:/Ruby200-x64/bin/gem

    Ruby Interactive (ri) documentation was installed. ri is kind of like man
    pages for ruby libraries. You may access it like this:
      ri Classname
      ri Classname.class_method
      ri Classname#instance_method
    If you do not wish to install this documentation in the future, use the
    --no-document flag, or set it as the default in your ~/.gemrc file. See
    'gem help env' for details.

    Updating rubygems-update
    Successfully installed rubygems-update-2.6.6
    Parsing documentation for rubygems-update-2.6.6
    Installing ri documentation for rubygems-update-2.6.6
    Installing darkfish documentation for rubygems-update-2.6.6
    Installing RubyGems 2.6.6
    RubyGems system software updated
{:.cli}

The error *unable to convert "\\x86" from ASCII-8BIT to UTF-8 for ...*
was *gone*, but the rests were still there.

    Owner@Owner-PC MINGW64 /c/github/blog2 (gh-pages)
    $ gem update
    ERROR:  Error installing io-console:
            ERROR: Failed to build gem native extension.

        current directory: C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/io-console-0.4.6
    C:/Ruby200-x64/bin/ruby.exe -r ./siteconf20160829-1756-1m1r5xm.rb extconf.rb
    checking for rb_funcallv()... no
    checking for rb_sym2str()... no
    creating Makefile

    To see why this extension failed to compile, please check the mkmf.log which can
     be found here:

      C:/Ruby200-x64/lib/ruby/gems/2.0.0/extensions/x64-mingw32/2.0.0/io-console-0.4
    .6/mkmf.log

    current directory: C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/io-console-0.4.6
    make "DESTDIR=" clean

    current directory: C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/io-console-0.4.6
    make "DESTDIR="
    generating console-x64-mingw32.def
    compiling console.c
    console.c: In function 'console_cursor_set':
    console.c:716:5: warning: implicit declaration of function 'RARRAY_AREF' [-Wimpl
    icit-function-declaration]
    linking shared-object io/console.so
    console.o: In function `console_cursor_set':
    C:\Ruby200-x64\lib\ruby\gems\2.0.0\gems\io-console-0.4.6/console.c:716: undefine
    d reference to `RARRAY_AREF'
    C:\Ruby200-x64\lib\ruby\gems\2.0.0\gems\io-console-0.4.6/console.c:716: undefine
    d reference to `RARRAY_AREF'
    collect2.exe: error: ld returned 1 exit status
    make: *** [console.so] Error 1

    make failed, exit code 2

    Gem files will remain installed in C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/io-co
    nsole-0.4.6 for inspection.
    Results logged to C:/Ruby200-x64/lib/ruby/gems/2.0.0/extensions/x64-mingw32/2.0.
    0/io-console-0.4.6/gem_make.out
    ERROR:  While executing gem ... (Encoding::InvalidByteSequenceError)
        "\xE9" followed by "\x94" on CP950
    Updating installed gems
    Updating io-console
    Temporarily enhancing PATH to include DevKit...
    Building native extensions.  This could take a while...
    Updating jekyll-sitemap
{:.cli}

[pp]: /blog/2016/08/20/jekyll-serve-error/
[so18235293]: http://stackoverflow.com/q/18235293
