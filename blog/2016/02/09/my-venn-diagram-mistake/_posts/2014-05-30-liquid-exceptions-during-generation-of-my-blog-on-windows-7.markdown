---
layout: post
title: "Liquid Exceptions during Generation of My Blog on Windows 7"
date: 2014-05-30 22:09:24 +0800
comments: true
categories: [M$ Win*, Octopress]
---

Background
---

The crash of my computer in the last weekend motivated me to think
about [using Octopress on Windows 7][octopress_win7].  It is an irony
that the computer had been fixed *before* I could finally build the
site with `rake generate` and start writing posts for this blog on
Windows 7.

Problems
---

Provided that a blogger have some experience in using computers, the
setup should be easy for his/her who wish to start a *new* Octopress
blog on Windows and post simple contents like text, pictures, videos,
etc.

However, I would post something more complicated, such as code blocks
with syntax highlighting.  Having spent time experimenting with code
and commands, I don't want to forget them and it's better to write
them down.  [I prefer a blog over a paper notebook.][prefer_blog]

Before writing anything new, I tested if I could locally build the
site from the `source` branch cloned from the remote repository on
[GitHub][github] on this Sunday, and the first Liquid exception
occurred.  I remembered `rake` said something like this.[^1]

    C:\github\vincenttam.github.io>rake generate
    ## Generating Site with Jekyll
    unchanged sass/print.scss
    identical source/stylesheets/screen.css 
    Configuration from C:/github/vincenttam.github.io/_config.yml
    Building site: source -> public
    Liquid Exception: Pygments can't parse unknown language: tex. in 2014-03-16-latex-template-for-essays.markdown
    C:/github/vincenttam.github.io/plugins/pygments_code.rb:27:in `rescue in pygments'
    C:/github/vincenttam.github.io/plugins/pygments_code.rb:24:in `pygments'
    C:/github/vincenttam.github.io/plugins/pygments_code.rb:14:in `highlight'
    C:/github/vincenttam.github.io/plugins/code_block.rb:82:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/block.rb:94:in `block in render_all'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/block.rb:92:in `collect'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/block.rb:92:in `render_all'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/block.rb:82:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/template.rb:124:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/template.rb:132:in `render!'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.0/lib/jekyll/convertible.rb:79:in `do_layout'
    C:/github/vincenttam.github.io/plugins/post_filters.rb:167:in `do_layout'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.1/lib/jekyll/post.rb:195:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.1/lib/jekyll/site.rb:200:in `block in render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.1/lib/jekyll/site.rb:199:in `each'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.1/lib/jekyll/site.rb:199:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.1/lib/jekyll/site.rb:41:in `process'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.1/bin/jekyll:264:in `<top (required)>'
    C:/Ruby193/lib/ruby/gems/1.9.1/bin/jekyll:23:in `load'
    C:/Ruby193/lib/ruby/gems/1.9.1/bin/jekyll:23:in `<main>'
    Build Failed
{:.cli}

<!-- more -->

I extracted part of the above message and googled "Liquid Exception:
Pygments can't parse unknown language" for web pages that reported on
similar issues.  It's quite abnormal since `tex` is one of
[the lexers recognised by Pygments][lexer].  In the past three months,
I had successfully generated the site for numerous times, so it
*shouldn't* be the problem of the markdown syntax of my posts.  Having
*no* idea on what the error was, I had browsed plenty of pages. Then I
saw [a question on Stack Overflow][stackoverflow14200637] and realized
that I had forgotten to add Python into the `PATH`.  Following Sam
Lin's answer, I got the *exact* problem as described in the code block
in the Stack Overflow question.

    C:\github\vincenttam.github.io>rake generate
    ## Generating Site with Jekyll
    unchanged sass/print.scss
    identical source/stylesheets/screen.css 
    Configuration from C:/github/vincenttam.github.io/_config.yml
    Building site: source -> public
    Liquid Exception: No such file or directory - python
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/pygments.rb-0.3.7/lib/pygments/mentos.py in 2014-03-16-latex-template-for-essays.markdown
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/posix-spawn-0.3.6/lib/posix/spawn.rb:162:in `spawn'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/posix-spawn-0.3.6/lib/posix/spawn.rb:162:in `spawn'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/posix-spawn-0.3.6/lib/posix/spawn.rb:307:in `popen4'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/pygments.rb-0.3.7/lib/pygments/popen.rb:41:in `start'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/pygments.rb-0.3.7/lib/pygments/popen.rb:203: in `mentos'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/pygments.rb-0.3.7/lib/pygments/popen.rb:192: in `highlight'
    C:/github/vincenttam.github.io/plugins/pygments_code.rb:24:in `pygments'
    C:/github/vincenttam.github.io/plugins/pygments_code.rb:14:in `highlight'
    C:/github/vincenttam.github.io/plugins/code_block.rb:82:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/block.rb:94:in `block in render_all'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/block.rb:92:in `collect'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/block.rb:92:in `render_all'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/block.rb:82:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/template.rb:124:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/liquid-2.3.0/lib/liquid/template.rb:132:in `render!'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.0/lib/jekyll/convertible.rb:79:in `do_layout'
    C:/github/vincenttam.github.io/plugins/post_filters.rb:167:in `do_layout'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.0/lib/jekyll/post.rb:195:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.0/lib/jekyll/site.rb:200:in `block in render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.0/lib/jekyll/site.rb:199:in `each'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.0/lib/jekyll/site.rb:199:in `render'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.0/lib/jekyll/site.rb:41:in `process'
    C:/Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.12.0/bin/jekyll:264:in `<top (required)>'
    C:/Ruby193/bin/jekyll:23:in `load'
    C:/Ruby193/bin/jekyll:23:in `<main>'
    Build Failed
{:.cli}

This time, it's *impossible* for me to find the solution in the above
referenced Stack Overflow question.  I tried searching "liquid
exception no such file or directory - python" on Google.  I could find
many pages which suggested me to reinstall the gem(s) or [Ruby][ruby],
but I didn't want to do so since I had just installed them this
afternoon.

I once thought that there's a missing file named `mentos.py` in the
Ruby gem [pygments.rb][pygments.rb].  However, I quickly knew that I
was mistaken.

At that time, I opened lots of tabs in my Firefox.  Even though I had
already known the steps for blogging with Octopress on Windows 7, I
had not yet closed tabs for some related web pages, such as
[*Setup Octopress On Windows7*][tut1].  I went over
[*在 Windows 使用 Octopress–不歸錄*][tut2] written by Tony Jan again, and
the saw the section *安裝 Python*, where I discovered the reason for
this error: Python 3.3 is *not* well-supported by a component on which
Octopress depends.  I followed the advice in the last sentence in that
section and avoided further configurations by changing the Python
version from 3.3 to 2.7.  After downgrading Python, I believe that I
could quickly preview the results.  Nonetheless, I was shocked by
`rake`'s output.

{% img center /images/posts/LiquidExceptionOnWin7/mini-magick.png 800 [1041] My second exception %}

Thinking that the gem `mini_magick` was the cause of this problem, I
realised that there would be *fewer* web pages about this problem.  To
gather more information, I tried googling "liquid exception: undefined
method size", but they *weren't* relevant to my problem.  Learning
*nothing* from the web pages I had seen, I decided to include the word
"mini_magick" in the search query string, but I still *couldn't* find
a useful page.  I decided to be *very* specific and searched
"gems/mini_magick-3.7.0/lib/mini_magick.rb:24:in".  This time, I
managed to find some instructions that I can understand and follow.  I
was inspired by an Ubuntu command in a simple answer for a question
about Liquid exception on Stack Overflow[^2] and finally fixed this
glitch by [installing ImageMagick on Windows 7][imagemagick_win7] and
including it in my `PATH` variable.

    $ sudo apt-get install imagemagick
{:.cliUB}

---
[^1]:
    [Liquid exception with pygments in codeblocks – Google Groups][f1]

[^2]:
    [Raison D'souza's answer to his *own* question on Stack Overflow][f2]

[f1]: https://groups.google.com/forum/#!msg/octopress/EmN5_5nXpRY/rhkzDWV5HoIJ
[f2]: http://stackoverflow.com/a/20485262
[octopress_win7]: /blog/2014/05/26/using-octopress-on-another-device/
[prefer_blog]: /blog/2014/05/30/advantages-of-blogs-over-paper-notebooks/
[github]: https://github.com
[lexer]: http://pygments.org/docs/lexers/#lexers-for-various-shells
[stackoverflow14200637]: http://stackoverflow.com/questions/14200637/octopress-cant-build-with-code-block
[ruby]: https://www.ruby-lang.org/
[pygments.rb]: https://rubygems.org/gems/pygments.rb
[tut1]: http://www.techelex.org/setup-octopress-on-windows7/
[tut2]: http://tonytonyjan.net/2012/03/01/install-octopress-on-windows/
[imagemagick_win7]: http://www.imagemagick.org/script/binary-releases.php#windows
