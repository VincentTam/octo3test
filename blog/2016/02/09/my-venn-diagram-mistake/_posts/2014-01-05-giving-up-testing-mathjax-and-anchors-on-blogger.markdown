---
layout: post
title: Giving up Testing MathJax and Anchors on Blogger
date: 2014-01-05 01:45:00 +08:00
categories: [web technologies, MathJax]
comments: true
---

In dynamic view, though the code for dynamic loading of [MathJax]
contents has been pasted into the HTML code for the template, things
just work in a strange way: in the class mode, [MathJax] works the
best; in other modes, it may not work or it works partially.  For
example, in a mode, the dollar sign in the code tag is interpreted,
and the script file for [MathJax] is loaded.  But when you click a
blog entry for a popup frame containing some [MathJax] code, then it
simply won't load.  Nonetheless, anchors don't work in a desired way
in the dynamic view—after clicking an anchor, I am immediately
directed to the destination, which is covered by the header.  Finally,
to ensure that the contents are correctly interpreted, the best way is
to use the `tex2jax_ignore` class.[^no_render]  Anyways, if readers
are also writers of HTML, $\rm \LaTeX$, etc, they'll know what I
intend to write by testing the HTML code, and for the remaining
readers, I just apologize for the inconvenience caused and suggest
them to right click the article in the default "Sidebar" view and
press `<F5>` to reload for the correctly rendered contents.  I've
forgotten about anchors since toggling between the "Compose" and
"HTML" modes while writing a new post will cause some strange change
in the `<href>` attribute of the `<a>` tag.

---
[^no_render]:
    See [*How to prevent rendering: use tex2jax_ignore*][wiki] by
    Davide P.  Cervone.

[MathJax]: http://www.mathjax.org
[wiki]: https://github.com/mathjax/mathjax-docs/wiki/How-to-prevent-rendering:-use-tex2jax_ignore
