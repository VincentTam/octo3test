---
layout: post
title: "Stop Using Mic**soft Word!"
date: 2014-01-09 19:55:00 +0800
comments: true
categories: LaTeX
---

I've found a great post in Charlie's Diary showing reasons that
"[*Why M\$ W\*\*d must Die*][word_die]". So I'm going to provide a
link to [a passage on Coding 2 Learn][coding2learn] that explains why
M\$ W\*\*d is *still* dominant these days. The whole passage is long,
but is worth spending time to read. The relevant section of the
passage is *Schools*. From
[Cambridge's $\rm \LaTeX$ Advocacy page][latex_advoc], we can find
Taylor's article titled [*What has WYSIWYG done to us?*][wysiwyg].
<del>I embed an `iframe` for your reference.</del>

<!-- more -->

The HTML code for embedding the PDF document in an `<iframe>` is
simple.

{% codeblock lang:html %}
<iframe height="1125px"
	src="http://www.ntg.nl/doc/taylor/wysiwyg.pdf"
	width="100%"></iframe>
{% endcodeblock %}

However, suppose you have several A4 size PDF documents to upload, and
you want to use the *same* size for the iframes. Then you'll seek a
better solution using the concept of *class* in CSS.

[word_die]: http://www.antipope.org/charlie/blog-static/2013/10/why-microsoft-word-must-die.html
[coding2learn]: http://coding2learn.org/blog/2013/07/29/kids-cant-use-computers/
[latex_advoc]: http://www-h.eng.cam.ac.uk/help/tpl/textprocessing/latex_advocacy.html
[wysiwyg]: http://www.ntg.nl/doc/taylor/wysiwyg.pdf
