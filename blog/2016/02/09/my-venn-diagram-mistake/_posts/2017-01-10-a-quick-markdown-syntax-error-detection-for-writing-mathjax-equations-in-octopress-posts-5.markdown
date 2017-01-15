---
layout: post
title: "A Quick Markdown Syntax Error Detection for Writing MathJax Equations in Octopress Posts (5)"
date: 2017-01-10 22:52:52 +0100
comments: true
categories: [Octopress, Linux]
---

Background
---

In the [previous post in this series][siri4], I included three [Vim]
editor commands.

Problem
---

As I've already typed hundreds of lines of source code, I feel tired
and I often *make mistakes* while typing those commands despite these
two command mode mappings in my `~/.vimrc`.

{% codeblock lang:vim title:"More efficient recall from Vim command history" link_text:"link" http://bit.ly/2idDlxa %}
" Practical Vim Tip 34: Avoid cursors when rcl'g cmd from hist
cnoremap <C-p> <Up>
cnoremap <C-n> <Down>
{% endcodeblock %}

<!-- more -->

Solution
---

Convert these three commands into a shell script.  Since I'm using
[FuzzyFinder][fzfdr], I assume that the current working directory
(as shown by `:pwd`) is the root of the local repository for the
[Octopress] blog.

{% render_code quik-prv.sh title:"Script for Octopress editing within Vim" %}

1. The YAML header is chopped off since I just want to verify the
   [kramdown] syntax.
2. I appended `~` after the file extension names `.html` since I had
added `*~` in my `.gitignore` and I *didn't* want these files
(including this shell script) to be tracked by Git.
3. I created a symbolic link on Windows 10 with `mklink` in `cmd`.
   (ran as admin)  Other options are more *complicated*:
       - Graphical programs: more disk space is consumed for programs
           rarely used which have command line alternatives.
       - Windows Power Shell: this method *won't* work for Home
           edition.  (That's my case.)  I'm quite satisfied by the
           current edition and I *don't* see any reason to spend
           a thousand dollar and a whole day to have it changed to Pro
           version for functionalities that are too advanced for me.

Lessons learnt
---

While I was writing this post, I used

    grep -e "\[kramdown\]" %:h/*.markdown

in the current buffer in order to quickly retrieve the links to
websites to which I had previously referred.  To escape the square
brackets and the search pattern, the flag `-e` is added in between the
utility name and the pattern string.  I tried using marks, but I had
forgotten the difference between a mark named with a small letter and
a capital letter.

Mark    | Range
---     | ---
small   | local
capital | global

[siri4]: /blog/2016/12/12/a-quick-markdown-syntax-error-detection-for-writing-mathjax-equations-in-octopress-posts-4/
[Vim]: http://www.vim.org
[Octopress]: http://octopress.org
[fzfdr]: http://www.vim.org/scripts/script.php?script_id=1984
