---
layout: post
title: "Custom JavaScripts in the Head of Octopress Pages"
date: 2014-09-12 21:51:59 +0800
comments: true
categories: Octopress
---

When I set up *Blog 1* for MathJax and fancybox, I included some
custom code in `source/_includes/custom/head.html`.  I moved them to
`source/javascripts/MathJaxLocal.js` and
`source/javascripts/FancyBoxLocal.js` because I *don't* like
JavaScript code inside HTML files.[^1]

In the past, I put those code in `source/_includes/custom/head.html`
because of Felix Chern's post.[^2]  However, there's another better
way.[^3]  Why is it better?  It saves thousands of lines of code.
Apart from that, it's a way to separate the behaviour of a document
from the contents.[^4]

{% img fancybox /images/posts/OctHead/MasterPull.png 900 'Statistics on the changes' ['git-diff --stat'] %}

---
[^1]: Commits [697d086] and [d6d3633].
[^2]:
    See [*Writing Math Equations on Octopress*][f2] in Carpe Diem.

[^3]:
    See [*Blogging With Math: Octopress, MathJax, and Pandoc*][f3] in
    DrZ.ac.

[^4]:
    See
    [*Separation of semantic and presentational markup, to the extent possible, is architecturally sound*][f4]
    in W3C.

[697d086]: https://github.com/VincentTam/vincenttam.github.io/commit/697d086 "Moved javascript code from a HTML file"
[d6d3633]: https://github.com/VincentTam/vincenttam.github.io/commit/d6d3633 "Added two new posts, and updated MathJax equations"
[f2]: http://www.idryman.org/blog/2012/03/10/writing-math-equations-on-octopress/
[f3]: http://drz.ac/2013/01/03/blogging-with-math/
[f4]: http://www.w3.org/2001/tag/doc/contentPresentation-26.html
