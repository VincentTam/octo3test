---
layout: post
title: "One use of Google Cache"
date: 2015-05-16 19:37:07 +0800
comments: true
categories: [web technologies]
---

Problem
---

This Thursday, I wanted to browse Evsseny's article about setting up a
Jekyll site using Jekyll-Bootstrap on a GitHub project page.[^blocked]
Unluckily, this site had been blocked for the administrator.

<picture class="fancybox"
  title="Web site blocked">
  <source srcset="/images/posts/UseGooCache/blocked621.png"
    media="(min-width: 621px)"></source>
  <img alt="web site blocked"
    src="/images/posts/UseGooCache/blocked294.png" />
</picture>

**How can I view the contents of the page?**

<!-- more -->

Solution
---

Use Google's web cache.

1. Search "http://www.your-blocked-site.com/path/to/your/page" on
Google.

    <picture class="fancybox"
      title="Paste the URL of the blocked site to text box">
      <source srcset="/images/posts/UseGooCache/search609.png"
	media="(min-width: 609px)"></source>
      <img alt="google the blocked URL"
	src="/images/posts/UseGooCache/search300.png" />
    </picture>

2. Click the down arrow next to the URL.

    <picture class="fancybox"
      title= 'Click the down arrow next to the URL and then "Cached"'>
      <source srcset="/images/posts/UseGooCache/cached300.png"></source>
      <img alt='click the down arrow and "cached"'
	src="/images/posts/UseGooCache/cached300.png" />
    </picture>

3. Click the first item in the pop-up menu.

Finally, I could read the contents of the post.

<picture class="fancybox"
  title="Enjoy reading the post!">
  <source srcset="/images/posts/UseGooCache/view508.png"
    media="(min-width: 508px)"></source>
  <img alt="google the blocked URL"
    src="/images/posts/UseGooCache/view300.png" />
</picture>

Lessons learnt
---

1. Define new variables in shell scripts.
2. Use `s/foo/bar/` in `sed` for manipulating the name of the output
files.

The screenshots were intially under the home folder `~` and their
names were like `temp_foo.png` or `temp_bar.png` so that they would
stay close to each other in [Nautilus].  However, when I included
these PNG files under the directory
`~/octopress/source/images/flalign_spacing` for uploading them to this
blog, I *wouldn't* like to keep `temp_` because they're already in a
separate folder.  Therefore, I wrote a script to do this.

Since `mv` can overwrite files and commands can be wrongly typed, I
used `cp` instead of `mv` so that the original files *wouldn't*
disappear even though something went wrong.  If everything proceeds
smoothly, then the old files in the home folder can then be safely
deleted.

{% render_code custom-move.sh A little script for moving the files %}

If I use single quotes to surround the destination (e.g.
`'~/.../$newf'`), the syntax highlighting for `$newf` will be *gone*
in Vim.  Therefore, I used double quotes `""` instead, but I then
received errors similar to the one below from `cp`.

    cp: cannot create regular file `/home/octopress/source/images/posts/UseGooCache/
    blocked300.png': No such file or directory
{:.cliUB}

---
[^blocked]:
    *在github的Project Pages上部署jekyll*  
    The original link http://evsseny.appspot.com/?p=63001 is dead now.

[Nautilus]: https://help.ubuntu.com/community/DefaultFileManager
