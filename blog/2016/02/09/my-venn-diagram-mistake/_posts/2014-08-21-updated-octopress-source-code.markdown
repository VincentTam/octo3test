---
layout: post
title: "Updated Octopress Source Code"
date: 2014-08-21 21:37:59 +0800
comments: true
categories: Octopress
---

Background
---

1. Upgraded to Ubuntu 14.04 LTS[^UpUb]
2. Installed Ruby 2.1.2.[^UpRVM]
3. Tried to generate the blog from the *same* Markdown and HTML
source, but failed.[^Ruby2Fail]

During the merge of Octopress source code last week, there're some
conflicts between my old working source code and the new one fetched
from Octopress's Github repository.  When `rake` complained, I changed
my original code bit by bit---this turned out to be a *failed and
inefficient* approach.  *Not* familiar with Ruby, I gave up the whole
idea of updating Octopress's source code and generating the contents
on top of a new version of Ruby.  In order to keep posting things to
this blog, I kept using *old* things on this *new* Ubuntu release.

<!-- more -->

Solution
---

Glimpsing the commit messages and their corresponding dates, I decided
to try the Octopress update again.

### Yesterday's work

I simply fetched and merged the code from Octopress's remote Git
repository.[^merge]  I remembered *minimizing* the changes while
resolving the expected conflicts.  Here's a brief outline of what I
had done using *Ruby 1.9.3*.

1. `git pull octopress master`
2. Resolved conflicts and committed the changes *without* pushing it,
so that I can easily undo the commit *without* leaving a mark in the
commit history.
3. Ran `rake update_source` to apply the changes in
`.themes/classic/soruce/*` to `source/*`.
4. Ran `rake generate`, *failed*, and learnt that there're some syntax
errors.

    - At the beginning of some files, `layout: nil` had *not* yet been
	changed to `layout: null`.
    - [Clapper's image popup plugin][imgpopup] *didn't* work with the
      *updated* Octopress code.  In order to use the updated Octopress
      source code, I *temporarily* removed the curly brackets that
      surrounded each
      `{% raw %}{% imgpopup /path/to/image nn% title %}{% endraw %}`
      tag, using Vim's `:argdo %s/pat/rep/ge | up` command.

5. Corrected the above mistakes, and amended the last commit.
6. Ran `rake generate` *again*, and *succeeded*.
7. Found [fancyBox] to replace the image popup plugin.
8. Followed Erv Walter's instructions to use fancyBox in my
posts.[^ewal]

    1. Downloaded the *whole* ZIP archive from fancyBox's official
    website.
    2. Extracted the archive to `source/` and renamed the folder as
    `source/fancybox/`, and deleted `source/fancybox/demo/`.
    3. Just added the references to the necessary CSS and JS files to
    `source/_includes/custom/head.html` for simplicity.
    4. Used `:vimgrep /pat/rep/ source/_posts/*` to obtain a list of
    files which contained "imgpopup".  The list was in a quickfix
    window, which could be invoked by `:cw`.  `:cn` and `:cp` point to
    the next and previous match respectively.
    5. In *one* of my posts, I changed the line containing "imgpopup"
    to "img fancybox".
    6. Misunderstood his words[^ewal_quote], I added his jQuery
    function at the end of my post.  However, as I clicked the image,
    *nothing* popped up.
    7. Used a simpler jQuery function found on fancyBox's website for
    testing, and put it in `source/_includes/custom/head.html`.  This
    time, a box popped up upon a click on the images.  However, after
    I closed the popped up window, the clicked image *disappeared*.
    8. Read and understood these two jQuery functions, incorporated
    them into `source/_includes/custom/head.html`, and *succeeded*.
    9. Changed *all* instances of "imgpopup" to "img fancybox".

9. Cleared up the Ruby scripts in `plugins/`.[^del_imgpopup]
10. Used fancyBox for embedded Youtube videos.
11. Added back the default white round border for pictures in
Octopress posts except for tiny icons.[^img_bd]

### Today's work

![Screenshot of GNOME Terminal][term]

Lessons learnt
---

Do things bit by bit at a time, so that one can adapt to the changes.

---
[^UpUb]:
    Tam, V.  (Aug 13, 2014).  *Upgraded Ubuntu*.  Retrieved from
    <https://vincenttam.github.io/blog/2014/08/13/upgraded-ubuntu/>

[^UpRVM]:
    Tam, V.  (Aug 13, 2014).  *Install Ruby Again! (2)*.  Retrieved
    from
    <https://vincenttam.github.io/blog/2014/08/13/install-ruby-again-2/>

[^Ruby2Fail]: *Ibid*.
[^merge]: Commit [f090aac].
[^ewal]:
    Walter, E.  (Sep 8, 2012).  *Octopress Customizations*.  Retrieved
    from <http://www.ewal.net/2012/09/08/octopress-customizations/>

[^ewal_quote]:
    {% raw %}
    {% quote author:"Erv Walter" url:http://www.ewal.net/2012/09/08/octopress-customizations/ title:"Octopress Customizations" %}
    {% endraw %}
     It's done per-post so that when viewing the main index of the
     blog, unrelated images don't end up getting added to one large
     gallery.
    {% raw %}
    {% endquote %}
    {% endraw %}

[^del_imgpopup]: Commit [b787cd7].
[^img_bd]: Commit [a3b5986].

[f090aac]: https://github.com/VincentTam/vincenttam.github.io/commit/f090aac
[imgpopup]: http://brizzled.clapper.org/blog/2012/02/05/a-simple-octopress-image-popup-plugin/
[fancyBox]: http://fancyapps.com/fancybox/
[b787cd7]: https://github.com/VincentTam/vincenttam.github.io/commit/b787cd7
[a3b5986]: https://github.com/VincentTam/vincenttam.github.io/commit/a3b5986
[term]: /images/posts/OctopressUpdate/rvm212.png

*[RVM]: Ruby Version Manager
