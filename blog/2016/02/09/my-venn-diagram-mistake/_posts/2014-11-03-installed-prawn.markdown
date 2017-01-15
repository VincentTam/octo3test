---
layout: post
title: "Installed Prawn"
date: 2014-11-03 12:21:34 +0800
comments: true
categories: Ruby
---

Problem
---

This noon, I tried to use the [kramdown] command line utility to
generate PDF files, but failed.

    $ kramdown test.tex -o pdf > test.pdf
    /home/owner/.rvm/rubies/ruby-2.1.2/lib/ruby/site_ruby/2.1.0/rubygems/core_ext/ke
    rnel_require.rb:55:in `require': cannot load such file -- prawn (LoadError)
		from /home/owner/.rvm/rubies/ruby-2.1.2/lib/ruby/site_ruby/2.1.0/rubygem
    s/core_ext/kernel_require.rb:55:in `require'
		from /home/owner/.rvm/gems/ruby-2.1.2/gems/kramdown-1.4.1/lib/kramdown/c
    onverter/pdf.rb:10:in `<top (required)>'
		from /home/owner/.rvm/gems/ruby-2.1.2/gems/kramdown-1.4.1/lib/kramdown/d
    ocument.rb:119:in `const_defined?'
		from /home/owner/.rvm/gems/ruby-2.1.2/gems/kramdown-1.4.1/lib/kramdown/d
    ocument.rb:119:in `method_missing'
		from /home/owner/.rvm/gems/ruby-2.1.2/gems/kramdown-1.4.1/bin/kramdown:6
    1:in `block in <top (required)>'
		from /home/owner/.rvm/gems/ruby-2.1.2/gems/kramdown-1.4.1/bin/kramdown:6
    1:in `each'
		from /home/owner/.rvm/gems/ruby-2.1.2/gems/kramdown-1.4.1/bin/kramdown:6
    1:in `<top (required)>'
		from /home/owner/.rvm/gems/ruby-2.1.2/bin/kramdown:23:in `load'
		from /home/owner/.rvm/gems/ruby-2.1.2/bin/kramdown:23:in `<main>'
		from /home/owner/.rvm/gems/ruby-2.1.2/bin/ruby_executable_hooks:15:in `e
    val'
		from /home/owner/.rvm/gems/ruby-2.1.2/bin/ruby_executable_hooks:15:in `<
    main>'
{:.cliUB}

<!-- more -->

Attempt
---

I searched Google for "kramdown pdf", and find
[this question][so4377892] useful.  It linked to a page introducing
[Prawn].

I used the testing code there to figure out that the above problem had
arised because I *didn't* install the Ruby gem.

    $ gem install prawn
    Fetching: ttfunk-1.4.0.gem (100%)
    Successfully installed ttfunk-1.4.0
    Fetching: pdf-core-0.4.0.gem (100%)
    Successfully installed pdf-core-0.4.0
    Fetching: prawn-1.3.0.gem (100%)

      ********************************************


      A lot has changed recently in Prawn.

      Please read the changelog for details:

      https://github.com/prawnpdf/prawn/wiki/CHANGELOG


      ********************************************

    Successfully installed prawn-1.3.0
    3 gems installed
{:.cliUB}

But I still *can't* run the sample code correctly.  Finally, I use
[pandoc].

[kramdown]: http://kramdown.gettalong.org/documentation.html#usage
[so4377892]: http://stackoverflow.com/a/4377892 "How to generate PDF from markdown using pure ruby"
[Prawn]: http://prawn.majesticseacreature.com/
[pandoc]: http://johnmacfarlane.net/pandoc/
