---
layout: post
title: "Changed My FancyBoxLocal.js"
date: 2014-12-13 18:09:31 +0800
comments: true
categories: [Octopress, web technologies]
---

Background
---

I've been using fancyBox for image popup since August.[^pp1]

Problem
---

I would like to have large screenshots which belongs to the `fancybox`
CSS class *centre-aligned*.

<!-- more -->

Solution
---

Refer to `source/javascripts/FancyBoxLocal.js` at commit [460b575] for
details.

I successfully worked out another solution using [JavaScript] regular
expressions.  However, after looking at [jQuery]'s `removeClass()`
method in it's [API documentation][doc], I dediced to start it all
over again using [jQuery] due to the simplicity of this approach.

Lessons learnt
---

In [Vim]'s search pattern, `\>` denotes the end of a word.  It took me
a while to find out its counterpart in [JavaScript] --- `\b`.  The
character 'b' stands for "boundary".

---
[^pp1]: See [*Updated Octopress Source Code*][pp1] for details.

[pp1]: /blog/2014/08/21/updated-octopress-source-code/
[460b575]: https://github.com/VincentTam/vincenttam.github.io/commit/460b575
[JavaScript]: http://www.w3schools.com/js/
[jQuery]: http://jquery.com
[Vim]: http://www.vim.org
[doc]: https://api.jquery.com/removeclass/
