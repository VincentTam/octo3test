---
layout: post
title: "Jekyll Serve Error"
date: 2016-08-20 22:15:43 +0800
comments: true
categories: [blogging]
---

Background
---

I updated the [Jekyll-Bootstrap][jb] source code for [Blog 2][blog2].

Problem
---

Then, I wanted to preview it.

    [owner@localhost ~/blog2]$ jekyll serve
    /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bundler/resolver.
    rb:357:in `resolve': Could not find gem 'jekyll (~> 3.1) ruby' in the gems avail
    able on this machine. (Bundler::GemNotFound)
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler/resolver.rb:164:in `start'
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler/resolver.rb:129:in `resolve'
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler/definition.rb:203:in `resolve'
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler/definition.rb:133:in `specs'
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler/definition.rb:178:in `specs_for'
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler/definition.rb:167:in `requested_specs'
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler/environment.rb:18:in `requested_specs'
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler/runtime.rb:13:in `setup'
            from /home/owner/.rvm/gems/ruby-2.1.2@global/gems/bundler-1.6.5/lib/bund
    ler.rb:120:in `setup'
            from /home/owner/.rvm/gems/ruby-2.1.2/gems/jekyll-2.5.3/lib/jekyll/plugi
    n_manager.rb:37:in `require_from_bundler'
            from /home/owner/.rvm/gems/ruby-2.1.2/gems/jekyll-2.5.3/bin/jekyll:16:in
     `<top (required)>'
            from /home/owner/.rvm/gems/ruby-2.1.2/bin/jekyll:23:in `load'
            from /home/owner/.rvm/gems/ruby-2.1.2/bin/jekyll:23:in `<main>'
            from /home/owner/.rvm/gems/ruby-2.1.2/bin/ruby_executable_hooks:15:in `e
    val'
            from /home/owner/.rvm/gems/ruby-2.1.2/bin/ruby_executable_hooks:15:in `<
    main>'
{:.cliUB}

**How can it be previewed?**

<!-- more -->

N.B. I replaced all tabs with spaces due to a
[remark of my article][pp] *Recent Vundle Plugin Update*.

Solution
---

From the head of the error message, it's reasonable to guess that the
outdated Ruby gems were the cause.

    [owner@localhost ~/blog2]$ gem update
    Updating installed gems
    Updating RedCloth
    Fetching: RedCloth-4.3.2.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed RedCloth-4.3.2
    Updating bigdecimal
    Fetching: bigdecimal-1.2.7.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed bigdecimal-1.2.7
    Updating blankslate
    Fetching: blankslate-3.1.3.gem (100%)
    Successfully installed blankslate-3.1.3
    Updating bundler
    Fetching: bundler-1.12.5.gem (100%)
    Successfully installed bundler-1.12.5
    Updating celluloid
    Fetching: timers-4.1.1.gem (100%)
    Successfully installed timers-4.1.1
    Fetching: celluloid-essentials-0.20.5.gem (100%)
    Successfully installed celluloid-essentials-0.20.5
    Fetching: celluloid-supervision-0.20.6.gem (100%)
    Successfully installed celluloid-supervision-0.20.6
    Fetching: celluloid-pool-0.20.5.gem (100%)
    Successfully installed celluloid-pool-0.20.5
    Fetching: celluloid-fsm-0.20.5.gem (100%)
    Successfully installed celluloid-fsm-0.20.5
    Fetching: celluloid-extras-0.20.5.gem (100%)
    Successfully installed celluloid-extras-0.20.5
    Fetching: celluloid-0.17.3.gem (100%)
    Successfully installed celluloid-0.17.3
    Updating chunky_png
    Fetching: chunky_png-1.3.6.gem (100%)
    Successfully installed chunky_png-1.3.6
    Updating classifier-reborn
    Fetching: classifier-reborn-2.0.4.gem (100%)
    Successfully installed classifier-reborn-2.0.4
    Updating coffee-script
    Fetching: coffee-script-2.4.1.gem (100%)
    Successfully installed coffee-script-2.4.1
    Updating coffee-script-source
    Fetching: coffee-script-source-1.10.0.gem (100%)
    Successfully installed coffee-script-source-1.10.0
    Updating colorator
    Fetching: colorator-1.1.0.gem (100%)
    Successfully installed colorator-1.1.0
    Updating domain_name
    Fetching: domain_name-0.5.20160615.gem (100%)
    Successfully installed domain_name-0.5.20160615
    Updating execjs
    Fetching: execjs-2.7.0.gem (100%)
    Successfully installed execjs-2.7.0
    Updating ffi
    Fetching: ffi-1.9.14.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed ffi-1.9.14
    Updating gem-wrappers
    Fetching: gem-wrappers-1.2.7.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed gem-wrappers-1.2.7
    Updating haml
    Fetching: haml-4.0.7.gem (100%)

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
    Updating hitimes
    Fetching: hitimes-1.2.4.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed hitimes-1.2.4
    Updating io-console
    Fetching: io-console-0.4.6.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed io-console-0.4.6
    Updating jekyll
    Fetching: liquid-3.0.6.gem (100%)
    Successfully installed liquid-3.0.6
    Fetching: rouge-1.11.1.gem (100%)
    Successfully installed rouge-1.11.1
    Fetching: forwardable-extended-2.6.0.gem (100%)
    Successfully installed forwardable-extended-2.6.0
    Fetching: pathutil-0.14.0.gem (100%)
    Successfully installed pathutil-0.14.0
    Fetching: jekyll-3.2.1.gem (100%)
    Successfully installed jekyll-3.2.1
    Updating jekyll-gist
    Fetching: addressable-2.4.0.gem (100%)
    Successfully installed addressable-2.4.0
    Fetching: multipart-post-2.0.0.gem (100%)
    Successfully installed multipart-post-2.0.0
    Fetching: faraday-0.9.2.gem (100%)
    Successfully installed faraday-0.9.2
    Fetching: sawyer-0.7.0.gem (100%)
    Successfully installed sawyer-0.7.0
    Fetching: octokit-4.3.0.gem (100%)
    Successfully installed octokit-4.3.0
    Fetching: jekyll-gist-1.4.0.gem (100%)
    Successfully installed jekyll-gist-1.4.0
    Updating jekyll-sass-converter
    Fetching: jekyll-sass-converter-1.4.0.gem (100%)
    Successfully installed jekyll-sass-converter-1.4.0
    Updating jekyll-sitemap
    Fetching: jekyll-sitemap-0.11.0.gem (100%)
    Successfully installed jekyll-sitemap-0.11.0
    Updating jekyll-watch
    Fetching: rb-inotify-0.9.7.gem (100%)
    Successfully installed rb-inotify-0.9.7
    Fetching: listen-3.0.8.gem (100%)
    Successfully installed listen-3.0.8
    Fetching: jekyll-watch-1.5.0.gem (100%)
    Successfully installed jekyll-watch-1.5.0
    Updating json
    Fetching: json-2.0.2.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed json-2.0.2
    Updating kramdown
    Fetching: kramdown-1.12.0.gem (100%)
    Successfully installed kramdown-1.12.0
    Updating mercenary
    Fetching: mercenary-0.3.6.gem (100%)
    Successfully installed mercenary-0.3.6
    Updating mime-types
    Fetching: mime-types-data-3.2016.0521.gem (100%)
    Successfully installed mime-types-data-3.2016.0521
    Fetching: mime-types-3.1.gem (100%)
    Successfully installed mime-types-3.1
    Updating mini_magick
    Fetching: mini_magick-4.5.1.gem (100%)
    Successfully installed mini_magick-4.5.1
    Updating minitest
    Fetching: minitest-5.9.0.gem (100%)
    Successfully installed minitest-5.9.0
    Updating multi_json
    Fetching: multi_json-1.12.1.gem (100%)
    Successfully installed multi_json-1.12.1
    Updating octopress-date-format
    Fetching: octopress-date-format-3.0.3.gem (100%)
    Successfully installed octopress-date-format-3.0.3
    Updating octopress-hooks
    Fetching: octopress-hooks-2.6.1.gem (100%)
    Successfully installed octopress-hooks-2.6.1
    Updating parslet
    Fetching: parslet-1.7.1.gem (100%)
    Successfully installed parslet-1.7.1
    Updating pdf-core
    Fetching: pdf-core-0.6.1.gem (100%)
    Successfully installed pdf-core-0.6.1
    Updating posix-spawn
    Fetching: posix-spawn-0.3.11.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed posix-spawn-0.3.11
    Updating prawn
    Fetching: prawn-2.1.0.gem (100%)
    Successfully installed prawn-2.1.0
    Updating psych
    Fetching: psych-2.1.0.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed psych-2.1.0
    Updating pygments.rb
    Fetching: pygments.rb-0.6.3.gem (100%)
    Successfully installed pygments.rb-0.6.3
    Updating rack
    Fetching: rack-2.0.1.gem (100%)
    ERROR:  Error installing rack:
            rack requires Ruby version >= 2.2.2.
    Updating rake
    Fetching: rake-11.2.2.gem (100%)
    Successfully installed rake-11.2.2
    Updating rb-fsevent
    Fetching: rb-fsevent-0.9.7.gem (100%)
    Successfully installed rb-fsevent-0.9.7
    Updating rdoc
    Fetching: rdoc-4.2.2.gem (100%)
    Depending on your version of ruby, you may need to install ruby rdoc/ri data:

    <= 1.8.6 : unsupported
     = 1.8.7 : gem install rdoc-data; rdoc-data --install
     = 1.9.1 : gem install rdoc-data; rdoc-data --install
    >= 1.9.2 : nothing to do! Yay!
    Successfully installed rdoc-4.2.2
    Updating redcarpet
    Fetching: redcarpet-3.3.4.gem (100%)
    Building native extensions.  This could take a while...
    Successfully installed redcarpet-3.3.4
    Updating rest-client
    Fetching: rest-client-2.0.0.gem (100%)
    Successfully installed rest-client-2.0.0
    Updating rubypants
    Fetching: rubypants-0.5.0.gem (100%)
    Successfully installed rubypants-0.5.0
    Updating sass
    Fetching: sass-3.4.22.gem (100%)
    Successfully installed sass-3.4.22
    Updating sass-globbing
    Fetching: sass-globbing-1.1.5.gem (100%)
    Successfully installed sass-globbing-1.1.5
    Updating sinatra
    Fetching: sinatra-1.4.7.gem (100%)
    Successfully installed sinatra-1.4.7
    Updating stringex
    Fetching: stringex-2.6.1.gem (100%)
    Successfully installed stringex-2.6.1
    Updating test-unit
    Fetching: power_assert-0.3.0.gem (100%)
    Successfully installed power_assert-0.3.0
    Fetching: test-unit-3.2.1.gem (100%)
    Successfully installed test-unit-3.2.1
    Updating tilt
    Fetching: tilt-2.0.5.gem (100%)
    Successfully installed tilt-2.0.5
    Gems updated: RedCloth bigdecimal blankslate bundler celluloid celluloid-essenti
    als celluloid-extras celluloid-fsm celluloid-pool celluloid-supervision timers c
    hunky_png classifier-reborn coffee-script coffee-script-source colorator domain_
    name execjs ffi gem-wrappers haml hitimes io-console forwardable-extended jekyll
     liquid pathutil rouge addressable faraday jekyll-gist multipart-post octokit sa
    wyer jekyll-sass-converter jekyll-sitemap jekyll-watch listen rb-inotify json kr
    amdown mercenary mime-types mime-types-data mini_magick minitest multi_json octo
    press-date-format octopress-hooks parslet pdf-core posix-spawn prawn psych pygme
    nts.rb rack rake rb-fsevent rdoc redcarpet rest-client rubypants sass sass-globb
    ing sinatra stringex power_assert test-unit tilt
    [owner@localhost ~/blog2]$ jekyll serve
    Configuration file: /home/owner/blog2/_config.yml
                Source: /home/owner/blog2
           Destination: /home/owner/blog2/_site
     Incremental build: disabled. Enable with --incremental
          Generating... 
                        done in 1.135 seconds.
     Auto-regeneration: enabled for '/home/owner/blog2'
    Configuration file: /home/owner/blog2/_config.yml
        Server address: http://127.0.0.1:4000/
      Server running... press ctrl-c to stop.
    [2016-08-18 19:19:37] ERROR `/favicon.ico' not found.
{:.cliUB}

Due to the error on `favicon.ico`, I made commit [4aafebe].

[jb]: https://github.com/plusjade/jekyll-bootstrap
[blog2]: /blog2
[pp]: /blog/2015/05/16/recent-vundle-plugin-update/
[4aafebe]: https://github.com/VincentTam/blog2/commit/4aafebe
