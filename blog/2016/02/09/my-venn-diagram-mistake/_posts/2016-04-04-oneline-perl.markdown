---
layout: post
title: "Oneline Perl"
date: 2016-04-04 00:47:40 +0800
comments: true
categories: [Git, Linux, Perl]
---

Motivation
---

Knowing some regular expressions in Vim, I hope to apply these
concepts to Perl so that I can search and replace some simple strings
directly in base *without* having to open the editor.

As a Vim user, the class of special characters in Perl is more
*natural* than that of `sed`.

Problem
---

In [the previous post][pp], the list of Git commit messages containing
the string "HTTPS" is the main focus.  However, the alignment of this
list *isn't* good: in the column representing the day, the data can be
either one or two digit.  Though I can still extract information with
`awk '{print $[col_num]}'`, it's better to fix the alignment.

    $ git log -2 --grep="HTTPS" --pretty="%h %cd %s"
    7400582 Sun Mar 20 20:19:47 2016 +0800 Updated my Rakefile with HTTPS
    b6f4f1f Mon Feb 8 00:45:02 2016 +0800 A new article about Flair, Octopress and HTTPS
{:.cliUB}

<!-- more -->

Start using Perl
---

Searching "perl intro" online, one can easily find some basic Perl
scripts.  I tried to issue some simple one-line Perl command to save
time, but I *couldn't* easily find them.  Thanks to
[a webpage by Philippe Bruhat][oneline], I managed to starting using
Perl.  I jot them down here.

    $ perl -e 'print "hello \n"'  # single quote outside
    hello
    $ perl -e "\$str='abc'; print \$str;"  # escape $, no EOL
    abc
    $ perl -e "$str='test'; print $str.'\n';"  # not desired
    test\n
    $ perl -e '$str="test"; print $str."\n";'  # want newlne
    test
{:.cliUB}

The `-e` flag above stands for "execute".

Read from external command
---

Unluckily, I *didn't* know how to use `system()` nor backticks to pass
output of a command into Perl.  After trying a few search keywords,
"perl oneline read command output" worked best for me.  It was quite
*uncommon* that I found the *eighth* result useful.  In the article
[*Perl One-liners*][1er], I found out the answer.

    $ for (( i = 1; i <= 10; i++ )); do
      echo $i
      done | perl -e 'while (<>) {s/(?<!\d)\d{1}(?!\d)/0$&/; print $_}'
    01
    02
    03
    04
    05
    06
    07
    08
    09
    10
{:.cliUB}

In fact, the flag `-n` can be used to replace the `while (<>) {...}`
loop.  The `-p` flag has the function of `-n` but *also* prints the
output.  I learnt them from [Git manual web page for git-log][gitlog].

Solution
---

Combine the above observations together.

    $ git log -2 --grep="HTTPS" --pretty="%h %cd %s" \
      | perl -pe 's/(?<=\u\l\l )\d{1}(?= )/0$&/'
    7400582 Sun Mar 20 20:19:47 2016 +0800 Updated my Rakefile with HTTPS
    b6f4f1f Mon Feb 08 00:45:02 2016 +0800 A new article about Flair, Octopress and 
    HTTPS
{:.cliUB}

Lessons learnt
---

1. Perl: Apart from the above syntax, I've also learnt to use `$&` and
   `\b` in the replacement.  This is the Perl counterpart of `&` and
   `\<` or `\>` in Vim respectively.
2. Git: In `git log` and `git show`,
    - `--name-only`: suppress the diff hunk
    - `--pretty=format:` display nothing
    - `format` vs `tformat`: `t` stands for "terminator" (a.k.a. EOL)

    Each of each flags seems to be useless.  Nevertheless, *when
    combined together*, they help extract the edited files in a
    particular commit.

3. Posting long commands in a blog entry

    From the two codeblocks explaining the difference between `format`
    and `tformat` in the Git manual, I understand that it's better to
    end each line with a backslash, then continue with the command.
    In bash,  a `>` is then automatically inserted at the beginning of
    each line.  This is carried from the shell to the source file of
    the blog article by copy and paste.  I used to think that it's
    good to keep this so that this and the Ubuntu font will give a
    sense of reality to the reader.  However, this also causes
    inconvenience to those who want to try this command.  From now on,
    I *won't* include this character anymore at the beginning of a
    long command exceeding 80 characters.  I will replace it with a
    white space instead.

[pp]: /blog/2016/04/03/searching-git-commit-messages/
[oneline]: http://articles.mongueurs.net/magazines/linuxmag50.html
[1er]: http://www.theperlreview.com/articles/one-liners.html
[gitlog]: https://www.kernel.org/pub/software/scm/git/docs/git-log.html
