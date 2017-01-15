---
layout: post
title: 'Testing Online Code Syntax Highlighters for Blogs (2): highlight.js'
date: 2014-01-07 23:52:00 +0800
categories: [online code highlighter]
comments: true
---

*Note: This post won't make sense here.  Refer to the
[original post][orig_post].*[^updated140207]

<!-- more -->

Now I know the reason for failing to make highlight.js work on my blog
yesterday.  It is because of Blogger's dynamic view, which is the
*real* thing that I'm going to give up using forever.  For details,
refer to [my newer post][np].[^updated140108]

Thanks to [Chris], I know more ways of embedding source code lists
now.

Confucius said that we need to practice what we've learnt.  So this is
my sample usage of [highlight.js].

In my previous post titled
[*Fast Compilation and Execution of Source Code*][pp], I included the
following sample `makefile`:

{% codeblock lang:make %}
hello : hello.c
	gcc -o hello hello.c
clean:
	rm -f hello
{% endcodeblock %}

Note: See the note of making a makefile in the previous blog post.  In
order to include this list, I used Alex Gorbatchev's
[SyntaxHighlighter] to do this.

{% codeblock lang:make %}
hello : hello.c
	gcc -o hello hello.c
clean:
	rm -f hello
{% endcodeblock %}

This template looks pretty, but there's some inadequacies for me:

1.  Makefile (and other popular languages as well) support
2.  Multiple language syntax detection: For example, in the second
    source code list, I try to explain how to write the HTML code for
    including a source code list of *another* language (In this case,
    it's makefile).

Unluckily, I can only get the background, but not the syntax
highlighted.  I don't know the cause of the problem.  Anyways,
everyone should be able to do it on a simple web page, and I've
achieved my aim: to know how to make use of highlight.js.  We should
treasure what we already have before seeking something new.  Maybe I
do too many things on this template.  <del>What's below shows how it
fails.</del>

Code copied from [the live demo of highlight.js][highlightjs_demo].

{% codeblock lang:python %}
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
{% endcodeblock %}

---
[^updated140207]: Updated on 07/02/14 22:18:24 HKT.
[^updated140108]: Updated on 08/01/14 09:45:00 GMT.

[orig_post]: http://blogue-un.blogspot.hk/2014/01/testing-code-syntax-highlighters-for.html
[np]: /blog/2014/01/08/testing-online-code-syntax-highlighters-for-blogs-4-giving-up-using-bloggers-dynamic-view/
[Chris]: http://blog.chrisflicker.com/post/36729926566
[highlight.js]: http://highlightjs.org/
[pp]: /blog/2013/12/11/fast-compilation-and-execution-of-source-code/
[SyntaxHighlighter]: http://alexgorbatchev.com/SyntaxHighlighter/
[highlightjs_demo]: http://highlightjs.org/static/test.html
