---
layout: post
title: "Rake Aborted due to a Vim Swap File"
date: 2016-02-09 20:49:29 +0800
comments: true
categories: [Octopress, Vim]
---

Background
---

I'm using [fugitive.vim] for efficient verson control.[^pp1]

Problem
---

Tonight, I wrote [an article about Venn diagram][pp2], and I attempted
to publish it using the Vim editor command

    :Gpush|!rake gen_deploy && rake notify
{:.cliUB}

After that, the following error message popped up.

    [owner@localhost ~/octopress]$ vi
    To git@github.com:VincentTam/vincenttam.github.io.git
       c6c422a..fc8d6b8  source -> source

    ## Generating Site with Jekyll
        write source/stylesheets/screen.css
    Configuration file: /home/owner/octopress/_config.yml
                Source: source
           Destination: public
          Generating... 
                        done.
     Auto-regeneration: disabled. Use --watch to enable.
    cp -r source/_posts/.2016-02-09-my-venn-diagram-mistake.markdown.swp public/_posts/.2016-02-09-my-venn-diagram-mistake.markdown.swp
    rake aborted!
    Errno::ENOENT: No such file or directory @ rb_sysopen - public/_posts/.2016-02-09-my-venn-diagram-mistake.markdown.swp
    /home/owner/octopress/Rakefile:276:in `block (2 levels) in <top (required)>'
    /home/owner/octopress/Rakefile:275:in `block in <top (required)>'
    /home/owner/octopress/Rakefile:265:in `block in <top (required)>'
    /home/owner/.rvm/gems/ruby-2.1.2/bin/ruby_executable_hooks:15:in `eval'
    /home/owner/.rvm/gems/ruby-2.1.2/bin/ruby_executable_hooks:15:in `<main>'
    Tasks: TOP => copydot
    (See full trace by running task with --trace)

    shell returned 1

    Press ENTER or type command to continue
{:.cliUB}

When one sees an error message like above for the first time, one
needs *not* look directly into code, even though one is writing code
in an IDE.  Instead, one may [view the error log][log] to see what's
wrong.

From the command `cp -r ...`, I realised that the problem came from
`Rakefile`, which tried to copy the non-existent
`.2016-blablabla.markdown.swp` in the `public` folder in the local
folder for this blog to the `_deploy` folder.[^gitrepo]  (There are
*no* `_posts` folder under the `public` folder.)

**How can I do the task *within* Vim?**

<!-- more -->

Solution
---

I googled "rake generate ignore swp", and clicked on
[the first search result][1st], which is Octopress issue #1073.  It
provided a link to [issue #600][i600].  Bradon Mathis said that <q
cite="https://github.com/imathis/octopress/blob/site-2.1/Rakefile#L265">this
has been [fixed in 2.1][fixed21]</q>.  Unluckily, after hitting that
hyperlink, I found that the version of `Rakefile` shown online was
*different* from mine. Finally, I installed [vim-octopress] to solve
this problem.[^installation]  If this plugin supports background tasks
like `rake preview`, the blogging experience using [Octopress] within
[Vim] will be further enhanced.

Lessons learnt
---

I've learnt to use [the HTML cite tag][citetag] when I directly quote
a short phrase from others to avoid being penalised by the Google
search engine for lacking originality.

Moreover, I revised the usage of these two Vim plugins.

1. [Visual Star Search][visual-star-search]: Select text in visual
   mode and search it with an asterisk `*`.
2. [textobj-lastpat][lastpat]: Add the last search pattern as a text
   object.

---
[^pp1]: I've used this Vim plugin [for more than a year][pp1].
[^gitrepo]:
    Strictly speaking, the `public` folder *isn't* in the *Git
    repository* because *this folder isn't *tracked by the version
    control system* (VCS).

[^installation]:
    For more details, you may see my gist for the `.vimrc` on Ubuntu
    at version [a2c8028][installation].

[fugitive.vim]: https://github.com/tpope/vim-fugitive "a Git wrapper in Vim"
[pp1]: /blog/2016/02/09/my-venn-diagram-mistake/#fugitivevim
[pp2]: /blog/2016/02/09/my-venn-diagram-mistake/
[log]: http://polymerhk.com/articles/2016/02/03/27363/
[1st]: https://github.com/imathis/octopress/issues/1073
[i600]: https://github.com/imathis/octopress/issues/600
[fixed21]: https://github.com/imathis/octopress/blob/site-2.1/Rakefile#L265
[vim-octopress]: https://github.com/tangledhelix/vim-octopress
[installation]: https://goo.gl/2Uq5AU
[Octopress]: http://octopress.org
[Vim]: http://www.vim.org
[citetag]: http://www.w3schools.com/tags/att_q_cite.asp
[visual-star-search]: https://github.com/bronson/vim-visual-star-search
[lastpat]: https://github.com/kana/vim-textobj-lastpat

*[IDE]: Integrated Development Environment
