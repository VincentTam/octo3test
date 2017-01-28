---
layout: post
title: "Migrated From Octopress 2.0"
date: 2017-01-28T21:50:44+01:00
categories: blogging
---

Original blog: <https://git.io/vtblog>

Improvements
---

1. Better codeblock and Gists
    - mark and range support
    - faster code rendering thanks to the pure Ruby code highlighter
        Rouge instead of pygments, which used both Python and Ruby
    - nice looking terminal display thanks to jekyll-terminal
2. Simpler structure and easier maintenance
    - plugins are actually Ruby gems, so they are no longer mixed
        together in the `plugins` folder
    - more up-to-date Jekyll plugins thanks to newer gem versions
        specified in `Gemfile`.
3. Improved backward support
    - the display in older tablets and browers of this blog *doesn't*
        break, unlike my old one

Sample TODO list
---

- [ ] revise algebra
- [ ] try real & complex analysis
- [ ] learn functional analysis
- [ ] practise probability
- [ ] know PDE
- [ ] take tutorials in C
- [X] install GNU/Linux tools on Windows 10
- [X] configure my vimrc
- [X] set up a blog which enables writing in Vim for note taking
- [X] upload my dotfiles for easier migration
