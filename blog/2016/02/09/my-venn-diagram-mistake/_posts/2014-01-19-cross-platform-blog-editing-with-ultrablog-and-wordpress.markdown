---
layout: post
title: Cross-Platform Blog Editing with UltraBlog and WordPress
date: 2014-01-19 19:21:21 +0800
categories: UltraBlog.vim
comments: true
---

I suspect that after I write the blog with UltraBlog in Vim and
editing the contents with the online editor, the changes done using
the online editor will be lost. (Typed with UltraBlog.vim in Vim.)

Let's see how it works. (Typed on [WordPress.com][wp].)

<!-- more -->

When I reopened the *same* post in Vim, I realised that the second
paragraph is gone! I *was* disappointed for a while, and googled
"ultrablog update database". However, there are too few websites about
UltraBlog.vim. Its ineffective to use Google to solve this problem.

{% img fancybox /images/posts/UBWPEdit/posted-via-ultrablog.png 'Screenshot of the first Google search result' ['fig1'] %}

From the above figure, it seems that there's 544 search results that
contain the *entire* string "posted via ultrablog.vim".

{% img fancybox /images/posts/UBWPEdit/posted-via-ultrablog3.png 'screenshot of the last Google search result' ['fig2'] %}

However, I go to the third page and find out that hundreds of search
results have been omitted.

The above two screenshots show that the number of users of
UltraBlog.vim is *not* as many as other free softwares, libraries or
plugins. One may need to wait for the adoption of this plugin by more
Vim users before being able to find a forum post on problems using
this plugin, provided that he/she doesn't start a new thread on the
plugin.

Although there's only a few UltraBlog.vim users, it's still an
incredibly excellent blogging plugin.

How can I solve my doubts about updating the local database with the
remote one?

When Google *doesn't* work, then it's sensible for one to go for the
official documentation. Geeks will find it informative, but I, as a
mediocre [*GNU/Linux*][nix] user, often find it hard to retrieve
information from manuals.

For example, I searched UltraBlog's official documentation for "sync",
but failed. Luckily, in the help for the command `:UBList` (in
`UltraBlog.txt`), I've found something useful:

    :UBList post remote 50

    This command lists the latest 50 posts in the blog.

    Pressing the ENTER key in a remote post list will open the post under
    cursor and save it to the local database if it is not in it, otherwise,
    the local copy will be opened instead of the remote one. This enables
    users to modify markdown source and update the remote post.

    The remote post list doesn't support paging.
{: .cli}

This solves the problem: I just delete my local copy before
downloading the remote copy if the local copy is older than the remote
copy.

Posted via [UltraBlog.vim][end].

[wp]: http://wordpress.com
[nix]: https://www.gnu.org/gnu/gnu-users-never-heard-of-gnu.ht l
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
