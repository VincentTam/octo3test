---
layout: post
title: "Include Liquid code inside Octopress codeblocks"
date: 2014-06-12 13:58:30 +0800
comments: true
categories: [Octopress, online code highlighter]
---

Last night, I wrote a post on editing a Ruby plugin file and an Atom
Feed XML file for removing redundant images in Atom Feeds.[^1] To show
how to change the files, I put some codeblocks in my post.

{% codeblock Sample codeblock that contains Liquid code lang:xml /blog/2014/06/10/my-settings-for-rss-1/#putting-things-together %}
{% raw %}
{% codeblock Change the XML file as well lang:xml http://www.ewal.net/2012/09/08/octopress-customizations/#categories-in-the-atom-feed %}
<entry>
  <!-- other elements -->
  <content type="html"><![CDATA[{{ post.content | remove_linenumbers | remove_bigfig | expand_urls: site.url | cdata_escape }}]]></content>
</entry>
{% endcodeblock %}
{% endraw %}
{% endcodeblock %}

However, I *couldn't* generate the site.  I tried HTML encoding the
contents and surrounding them using a `<pre>` tag, instead of a
`{% raw %}{% codeblock %}{% endraw %}` tag, but this approach also
*failed*.

<!-- more -->

Walter could post some [Liquid] code, but there's *no* source for his
blog on GitHub, and he *no longer uses* Octopress anymore.  Therefore,
I viewed Clapper's code since he wrote some Liquid template tags for
installing [an image popup plugin][imgpopup].  In the blog post
introducing his plugin, there's a link that took readers to another
post about how his use of Neiner's
[jQuery table of contents plugin][toc] on Octopress.  I studied
[the markdown source of the post][PostMdSrc], and saw that a
`{% raw %}{% raw %}{% endraw %}` tag was used to surround the interior
of the codeblock which contained Liquid code.

---
[^1]: See [My Settings for RSS (1)][pp] for details.

[pp]: /blog/2014/06/10/my-settings-for-rss-1/
[Liquid]: http://liquidmarkup.org/ "Liquid markup language"
[imgpopup]: http://brizzled.clapper.org/blog/2012/02/05/a-simple-octopress-image-popup-plugin/ "A Simple Octopress Image Popup Plugin"
[toc]: http://fuelyourcoding.com/scripts/toc/
[PostMdSrc]: https://raw.githubusercontent.com/bmc/brizzled/master/source/_posts/2012-02-04-generating-a-table-of-contents-in-octopress.markdown

*[XML]: EXtensible Markup Language
