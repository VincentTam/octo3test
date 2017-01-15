---
layout: post
title: 'Testing Online Code Syntax Highlighters for Blogs (5): Embedding Makefiles to a Web Page'
date: 2014-01-08 14:38:00 +0800
categories: [online code highlighter]
comments: true
---

*Note: This post won't make sense here.  Refer to the
[original post][op].*

<!-- more -->

In my previous post titled
[*Fast Compilation and Execution of Source Code*][pp1], I included a
`makefile`.  After I've been familiar with [SyntaxHighlighter], I
changed the code of the `makefile` so that the new tool is used.
However, as I've written in [my earlier post][pp2],
[SyntaxHighlighter] has *no* makefile support, while [highlight.js]
and [google-code-prettify] have that feature.[^lose1][^win2][^win3]

{% raw %}
{% quote author:"Réné Descartes (1596--1650)" %}
{% endraw %}
I think, therefore I am.
{% raw %}
{% endquote %}
{% endraw %}

In order to be sure about their claims, I've done a test and the
results are as follow.

highlight.js:
---

{% codeblock lang:make %}
hello: hello.c
	gcc -o hello hello.c
clean:
	rm -f hello
{% endcodeblock %}

Maybe my `makefile` is too simple that it lacks some typical features
for the automatic language recognition of [highlight.js].  Let's see
the sample code copied from [the official demo][highlightjs_demo].

{% codeblock lang:make %}
# Makefile

BUILDDIR      = _build
EXTRAS       ?= $(BUILDDIR)/extras

.PHONY: main clean

main:
	@echo "Building main facility..."
	build_main $(BUILDDIR)

clean:
	rm -rf $(BUILDDIR)/*
{% endcodeblock %}


google-code-prettify
---

{% codeblock lang:make %}
hello: hello.c
	gcc -o hello hello.c
clean:
	rm -f hello
{% endcodeblock %}

Let's see a *real* one.

{% codeblock lang:make %}
# Makefile

BUILDDIR      = _build
EXTRAS       ?= $(BUILDDIR)/extras

.PHONY: main clean

main:
	@echo "Building main facility..."
	build_main $(BUILDDIR)

clean:
	rm -rf $(BUILDDIR)/*
{% endcodeblock %}

Unluckily, I *can't* figure out the way to include a tab, instead of
whitespaces, for makefiles.  Anyways, one who use makefiles will know
that after running `make` on the first day.

---
[^lose1]:
    <http://alexgorbatchev.com/SyntaxHighlighter/manual/api/autoloader.html>

[^win2]: <http://highlightjs.org/static/test.html>
[^win3]:
    <http://google-code-prettify.googlecode.com/svn/trunk/README.html>

[op]: http://blogue-un.blogspot.hk/2014/01/testing-online-code-syntax-highlighters.html
[pp1]: /blog/2013/12/11/fast-compilation-and-execution-of-source-code/
[SyntaxHighlighter]: http://alexgorbatchev.com/SyntaxHighlighter/
[pp2]: http://blogue-un.blogspot.hk/2014/01/testing-code-syntax-highlighters-for.html
[highlight.js]: http://highlightjs.org/
[google-code-prettify]: https://code.google.com/p/google-code-prettify/
[highlightjs_demo]: http://highlightjs.org/static/test.html
