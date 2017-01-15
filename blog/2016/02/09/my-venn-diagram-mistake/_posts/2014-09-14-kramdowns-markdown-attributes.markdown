---
layout: post
title: "Kramdown's Markdown Attributes"
date: 2014-09-14 16:37:49 +0800
comments: true
categories: kramdown
---

While writing a post about purging old Linux kernels, I made use of
[fancybox]'s plugin to show a popup window which contains some HTML
elements.[^1]

{% codeblock lang:html Original container for popup contents http://goo.gl/rdMWNf View raw %}
<div id="list1" class="noscr">
<p>The <strong>bolded</strong> lines represent the packages that are
going to be completely removed.</p>
<!-- omitted a pre tag -->
</div>

<div id="list2" class="noscr">
<p>There's <em>no</em> lines beginning with <code>rc</code>.</p>
<!-- omitted a pre tag -->
</div>
{% endcodeblock %}

I tried writing Markdown code inside these `<div>` containers, but the
Markdown code *failed* to be changed to HTML.  As a result, *not*
being familiar with much of the Markdown syntax specified by
[kramdown], I simply write HTML inside these `<div>` elements.

Fancybox is great, but if I need to give up Markdown, then what's the
point of overcoming so many technical problems related to Octopress?
*Without* [Markdown] and [Vim], blogging will be *incredibly*
difficult for me.  For the former, when compared with HTML, it's much
easier to read and write; for the latter, it offers an efficient text
editing experience.

Therefore, this afternoon, I browsed *kramdown Syntax* in kramdown's
official website, and found out that the `markdown="1"` attribute can
solve this problem.[^2]

{% codeblock lang:html Current container for popup contents http://goo.gl/53zo2d View raw %}
<div id="list1" class="noscr" markdown="1">
The **bolded** lines represent the packages that are going to be
completely removed.
<!-- omitted a pre tag -->
</div>

<div id="list2" class="noscr" markdown="1">
There's *no* lines beginning with `rc`.
<!-- omitted a pre tag -->
</div>
{% endcodeblock %}

---
[^1]: [*Completely Remove Linux Kernels*][pp] in Blog 1.
[^2]: [HTML Blocks][official] in *kramdown Syntax*.

[fancybox]: http://fancyapps.com/fancybox/
[pp]: /blog/2014/09/13/completely-remove-linux-kernels/
[kramdown]: http://kramdown.gettalong.org/ "fast, pure-Ruby Markdown-superset converter"
[Markdown]: http://daringfireball.net/projects/markdown/
[Vim]: http://www.vim.org
[official]: http://kramdown.gettalong.org/syntax.html#html-blocks

*[HTML]: HyperText Markup Language
*[Vim]: VIsual editor, iMproved
