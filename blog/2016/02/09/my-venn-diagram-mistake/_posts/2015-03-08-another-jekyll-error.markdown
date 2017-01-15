---
layout: post
title: "Another Jekyll Error"
date: 2015-03-08 17:08:53 +0800
comments: true
categories: Octopress
---

Problem
---

Markdown encountered an error when I ran `rake generate`.

    $ rake generate && rake preview
    ## Generating Site with Jekyll
        write source/stylesheets/screen.css
    Configuration file: /home/owner/octopress/_config.yml
                Source: source
           Destination: public
          Generating... 
      Conversion error: Jekyll::Converters::Markdown encountered an error while conv
    erting '_posts/2014-01-31-comparison-of-latexs-quote-and-quotation-environments.
    markdown/#excerpt':
                        "\xC2" from ASCII-8BIT to UTF-8
    jekyll 2.5.3 | Error:  "\xC2" from ASCII-8BIT to UTF-8
    Starting to watch source with Jekyll and Compass. Starting Rack on port 4000
    Configuration file: /home/owner/octopress/_config.yml
    [2015-03-08 15:49:51] INFO  WEBrick 1.3.1
    [2015-03-08 15:49:51] INFO  ruby 2.1.2 (2014-05-08) [i686-linux]
    [2015-03-08 15:49:51] INFO  WEBrick::HTTPServer#start: pid=5560 port=4000
    >>> Compass is watching for changes. Press Ctrl-C to Stop.
    directory public/stylesheets
        write public/stylesheets/print.css
                Source: source
           Destination: public
          Generating... 
        write public/stylesheets/screen.css
      Conversion error: Jekyll::Converters::Markdown encountered an error while conv
    erting '_posts/2014-04-05-latex-template-for-chinese-essays.markdown/#excerpt':
                        "\xE6" from ASCII-8BIT to UTF-8
    jekyll 2.5.3 | Error:  "\xE6" from ASCII-8BIT to UTF-8
{:.cliUB}

<!-- more -->

Discussion
---

I feel that this problem is similar to the YAML error which I
encountered last year.[^pp_yaml]  However, I had *already* added the
line `encoding: UTF-8` to `_config.yml`, and when I opened the file
with Vim, I saw, from `:se fenc` and `:se enc` that the encoding was
UTF-8.

I googled "incompatible character encodings utf-8 and ascii-8bit
octopress" and clicked the first result, which was an article written
in 2013.[^chin1]  According to the blog post, I opened
`:~/.rvm/gems/ruby-2.1.2/gems/jekyll-2.5.3/lib/jekyll/converters/markdown.rb`,
but I *couldn't* find line 120 because I'm now using Ruby 2.1.2 and
Jekyll 2.5.3.

Though the steps mentioned in another blog posts found were the same,
from the first paragraph of that post, I knew that the cause was the
embedded Gists in Octopress posts/pages.[^chin2]

Resolution
---

I continued viewing other Google search results, and discovered a
single question on two different sites.  That question was actually a
Stack Overflow question which had two responses.[^so16264160]  The
second one seemed to solve my problem.

I googled "vim remove bom", and found another web page.[^vim_bom]
Later, I realised that I could find the information using `:h bom`.  I
typed `:se nobomb` in the affected files, and Rake could finally
generate the site.

---
[^pp_yaml]:
    See [*Resolving Jekyll’s YAML Exception*][pp_yaml] in Blog 1 for
    details.

[^chin1]:
    [*Octopress 上的 utf-8和ASCII-8BIT 冲突的解决方案*][chin1] in
    txx's blog

[^chin2]:
    [*Octopress里插入带中文Gist的问题和解决*][chin2] @Lenciel

[^so16264160]:
    [Unicode weirdness with octopress, kramdown, and Heroku][16264160] on Stack
    Overflow

[^vim_bom]:
    [*Remove BOM mark from files with VIM*][vim_bom] by Santiago
    Lizardo.

[pp_yaml]: /blog/2014/06/04/resolving-jekylls-yaml-exception/
[chin1]: http://blog.txx.im/blog/2013/08/25/octopress-utf-8-ascii-8bit-conflict-error/
[chin2]: http://lenciel.cn/2014/05/fix-gist-style-in-octopress/
[16264160]: https://stackoverflow.com/a/25228668
[vim_bom]: http://www.santiagolizardo.com/article/remove-bom-mark-from-files-with-vim
