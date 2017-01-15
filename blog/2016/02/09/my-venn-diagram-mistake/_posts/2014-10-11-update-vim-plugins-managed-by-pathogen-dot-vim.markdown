---
layout: post
title: "Update Vim Plugins Managed by pathogen.vim"
date: 2014-10-11 16:58:38 +0800
comments: true
categories: Vim
---

Objective
---

To update *many* Vim plugins under `runtimepath` managed by
[pathogen.vim] *efficiently*.

Raison d'être
---

With the `:BundleUpdate` editor command, users of [Vundle] can easily
keep his/her plugins up to date with the remote repository.  However,
pathogen.vim is a popular plugin, so it's worth studying.

<!-- more -->

Method
---

Write a for-loop which runs through the directories (i.e. plugins
folders) and

1. `cd $f`: change to the plugin folder
2. `git pull`: fetch and merge commits from the tracking branch
    - One can set the tracking branch with `git branch -u
	[remote]/branch`.  In this case, the command is `git branch -u
	origin/master`.
3. `cd ..`: *without* this command, it won't proceed to the next
folder.

~~~
$ for f in $(ls); do cd $f; echo $f; git pull; echo ""; cd ..; done
DrawIt~
Already up-to-date.

FuzzyFinder
Already up-to-date.

L9
Already up-to-date.

OmniCppComplete
Already up-to-date.

a.vim
Already up-to-date.

c.vim
Already up-to-date.

cscope.vim
Already up-to-date.

loremipsum
Already up-to-date.

nerdtree
Already up-to-date.

taglist.vim
Already up-to-date.

tlib_vim
remote: Counting objects: 9, done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 9 (delta 1), reused 4 (delta 1)
Unpacking objects: 100% (9/9), done.
From git://github.com/tomtom/tlib_vim
   b7fc1e3..bc4097b  master     -> origin/master
Updating b7fc1e3..bc4097b
Fast-forward
 autoload/tlib/input.vim | 20 ++++++++++++++------
 plugin/02tlib.vim       |  4 ++--
 2 files changed, 16 insertions(+), 8 deletions(-)

vim-addon-mw-utils
Already up-to-date.

vim-easy-align
remote: Counting objects: 24, done.
remote: Compressing objects: 100% (19/19), done.
remote: Total 24 (delta 6), reused 14 (delta 2)
Unpacking objects: 100% (24/24), done.
From https://github.com/junegunn/vim-easy-align
   cbb005e..2595ebf  master     -> origin/master
Updating cbb005e..2595ebf
Fast-forward
 .travis.yml                 |  4 +++-
 README.md                   |  2 +-
 autoload/easy_align.vim     | 20 ++++++--------------
 test/blockwise.vader        | 22 ++++++++++++++++++++++
 test/fixed.vader            | 13 +++++++++++++
 test/include/setup.vader    |  1 +
 test/include/teardown.vader |  3 ++-
 7 files changed, 48 insertions(+), 17 deletions(-)
 create mode 100644 test/blockwise.vader

vim-easymotion
remote: Counting objects: 27, done.
remote: Compressing objects: 100% (17/17), done.
remote: Total 27 (delta 11), reused 18 (delta 9)
Unpacking objects: 100% (27/27), done.
From https://github.com/Lokaltog/vim-easymotion
   3b8a2dd..868cd71  master     -> origin/master
Updating 3b8a2dd..868cd71
Fast-forward
 TODO.md                              | 54 ------------------------------------
 autoload/EasyMotion.vim              | 17 ++++++++----
 autoload/EasyMotion/cmigemo.vim      |  1 -
 autoload/EasyMotion/command_line.vim |  1 -
 autoload/EasyMotion/helper.vim       |  1 -
 autoload/EasyMotion/highlight.vim    |  1 -
 plugin/EasyMotion.vim                |  4 +--
 t/easymotion_spec.vim                |  1 -
 t/operator_pending_spec.vim          |  1 -
 t/smartsign_spec.vim                 |  1 -
 10 files changed, 12 insertions(+), 70 deletions(-)
 delete mode 100644 TODO.md

vim-fugitive
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 2 (delta 0)
Unpacking objects: 100% (4/4), done.
From github.com:tpope/vim-fugitive
   90ee6fb..0374322  master     -> origin/master
Updating 90ee6fb..0374322
Fast-forward
 plugin/fugitive.vim | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

vim-latex
Already up-to-date.

vim-markdown
remote: Counting objects: 119, done.
remote: Compressing objects: 100% (61/61), done.
remote: Total 119 (delta 59), reused 85 (delta 41)
Receiving objects:  64% (77/11
R)
Receiving objects: 100% (119/119), 25.96 KiB | 0 bytes/s, done.
Resolving deltas: 100% (59/59), done.
From git://github.com/plasticboy/vim-markdown
   9a3b312..74c9c60  master     -> origin/master
Updating 9a3b312..74c9c60
Fast-forward
 .travis.yml            |  12 ++++
 CONTRIBUTING.md        |  10 +--
 README.md              |  72 ++++++++++++++++-----
 after/ftplugin/mkd.vim |   8 ---
 ftplugin/mkd.vim       |   5 +-
 indent/mkd.vim         |   3 +-
 syntax/mkd.vim         |  28 ++++++--
 test/README.md         |   7 ++
 test/indent.md         |  26 ++++++++
 test/run-tests.sh      |   3 +
 test/syntax.md         |  74 +++++++++++++++++++++-
 test/syntax.vader      | 169 +++++++++++++++++++++++++++++++++++++++++++++++++
 test/vimrc             |   8 +++
 13 files changed, 379 insertions(+), 46 deletions(-)
 create mode 100644 .travis.yml
 create mode 100644 test/README.md
 create mode 100644 test/indent.md
 create mode 100755 test/run-tests.sh
 create mode 100644 test/syntax.vader
 create mode 100644 test/vimrc

vim-misc
remote: Counting objects: 40, done.
remote: Compressing objects: 100% (23/23), done.
remote: Total 40 (delta 12), reused 30 (delta 9)
Unpacking objects: 100% (40/40), done.
From https://github.com/xolox/vim-misc
   6ce98ee..77b23c8  master     -> origin/master
 * [new tag]         1.16.1     -> 1.16.1
 * [new tag]         1.15.1     -> 1.15.1
 * [new tag]         1.16       -> 1.16
Updating 8551f2b..77b23c8
Fast-forward
 README.md                          | 357 ++++++++++++++++++++++++++++++-
 autoload/xolox/misc.vim            |   4 +-
 autoload/xolox/misc/async.vim      | 261 +++++++++++++++++++++++
 autoload/xolox/misc/complete.vim   |   8 +-
 autoload/xolox/misc/cursorhold.vim |  71 +++++++
 autoload/xolox/misc/path.vim       |  29 ++-
 autoload/xolox/misc/perm.vim       | 100 +++++++++
 autoload/xolox/misc/persist.vim    |  50 +++++
 autoload/xolox/misc/str.vim        |   7 +-
 autoload/xolox/misc/timer.vim      |  80 ++++++-
 doc/misc.txt                       | 424 +++++++++++++++++++++++++++++++++----
 plugin/xolox/misc.vim              |  19 ++
 12 files changed, 1342 insertions(+), 68 deletions(-)
 create mode 100644 autoload/xolox/misc/async.vim
 create mode 100644 autoload/xolox/misc/cursorhold.vim
 create mode 100644 autoload/xolox/misc/perm.vim
 create mode 100644 autoload/xolox/misc/persist.vim
 create mode 100644 plugin/xolox/misc.vim

vim-repeat
Already up-to-date.

vim-session~
remote: Counting objects: 8, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 8 (delta 1), reused 5 (delta 1)
Unpacking objects: 100% (8/8), done.
From https://github.com/xolox/vim-session
   6773a22..4fb9cdd  master     -> origin/master
 * [new tag]         2.7        -> 2.7
Updating a55318b..4fb9cdd
Fast-forward
 README.md                              |  54 +++++++++++--
 autoload/xolox/session.vim             | 136 ++++++++++++++++++++-------------
 autoload/xolox/session/suggestions.vim |  42 ++++++++++
 doc/session.txt                        | 112 +++++++++++++++++++++------
 plugin/session.vim                     |  21 +++--
 5 files changed, 277 insertions(+), 88 deletions(-)
 create mode 100644 autoload/xolox/session/suggestions.vim

vim-snipmate
remote: Counting objects: 6, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 6 (delta 0), reused 2 (delta 0)
Unpacking objects: 100% (6/6), done.
From git://github.com/garbas/vim-snipmate
   f8aa804..e6eb057  master     -> origin/master
Updating f8aa804..e6eb057
Fast-forward
 Contributors.md     | 1 +
 plugin/snipMate.vim | 4 ++++
 2 files changed, 5 insertions(+)

vim-snippets
remote: Counting objects: 290, done.
remote: Compressing objects: 100% (175/175), done.
remote: Total 290 (delta 177), reused 195 (delta 115)
Receiving objects:  80% (232
Receiving obj
Receiving objects: 100% (290/290), 67.94 KiB | 0 bytes/s, done.
Resolving deltas: 100% (177/177), done.
From git://github.com/honza/vim-snippets
   049934c..3216ac2  master     -> origin/master
Updating 049934c..3216ac2
Fast-forward
 UltiSnips/c.snippets                              |   1 -
 UltiSnips/javascript_angular.snippets             |  46 +-
 UltiSnips/javascript_jsdoc.snippets               |   2 +-
 UltiSnips/pandoc.snippets                         |  11 +-
 UltiSnips/perl.snippets                           |   7 +
 UltiSnips/php.snippets                            |  79 +-
 UltiSnips/python.snippets                         |  48 +-
 UltiSnips/rust.snippets                           |  14 +-
 UltiSnips/scss.snippets                           |  22 +-
 UltiSnips/tex.snippets                            |   2 +-
 snippets/coffee/requirejs_coffee.snippets         |  11 +
 snippets/eruby.snippets                           |   2 +
 snippets/html.snippets                            |  45 +-
 snippets/javascript/javascript-requirejs.snippets |  14 +
 snippets/javascript/javascript.node.snippets      |   3 +-
 snippets/javascript/javascript.snippets           | 185 ++--
 snippets/perl.snippets                            |  10 +-
 snippets/rails.snippets                           |   2 +
 snippets/ruby.snippets                            |   6 +-
 snippets/rust.snippets                            |  14 +-
 snippets/scala.snippets                           |  19 +-
 snippets/stylus.snippets                          | 993 ++++++++++++++++++++++
 snippets/zsh.snippets                             |  12 +-
 23 files changed, 1403 insertions(+), 145 deletions(-)
 create mode 100644 snippets/coffee/requirejs_coffee.snippets
 create mode 100644 snippets/javascript/javascript-requirejs.snippets
 create mode 100644 snippets/stylus.snippets

vim-surround
Already up-to-date.

visualrepeat
Already up-to-date.
~~~
{:.cliUB}

[pathogen.vim]: https://github.com/tpope/vim-pathogen
[Vundle]: https://github.com/gmarik/Vundle.vim
