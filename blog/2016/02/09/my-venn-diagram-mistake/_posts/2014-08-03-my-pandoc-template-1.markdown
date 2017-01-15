---
layout: post
title: "My Pandoc Template (1)"
date: 2014-08-03 17:21:01 +0800
comments: true
categories: [pandoc, template]
---

The last post about [pandoc] was written four months ago.  Last week,
I slightly changed the pandoc template `default.latex` on
[jgm/pandoc-templates] so that users can easily create $\rm \LaTeX$
documents with

- 1-inch margin; and
- one-half (or double) spacing.

The following command can create a PDF using the template.

<pre class="cli"><code>$ pandoc src.mkd --template=my_template1.latex -o out.pdf
</code></pre>

I hope that more people will use pandoc and write in Markdown.

<!-- more -->

{% gist ffad6efe2c65d5e70b28 my_template1.latex %}

[pandoc]: http://johnmacfarlane.net/pandoc/ "pandoc—a universal document converter"
[jgm/pandoc-templates]: https://github.com/jgm/pandoc-templates "Templates for pandoc"
