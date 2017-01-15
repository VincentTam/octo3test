---
layout: post
title: 'Testing Online Code Syntax Highlighters for Blogs (6): Multilingual Source Code Display in Web Pages'
date: 2014-01-09 19:22:00 +0800
categories: [online code highlighter]
comments: true
---

*Note: This post won't make sense here.  Refer to the
[original post][op].*

<!-- more -->

[One of my earlier posts][pp] suggests that [SyntaxHighlight] supports
*only one* language in a `pre` tag *without* proof.  Before embedding
a source code list to show this, I'll make more assertions and then
verify them.

[highlight.js] has the support, while [google-code-prettify]
*doesn't*.  For example, you want to attach the following Matlab code
to your blog entry.  [SyntaxHighlight] doesn't have the Matlab
support.  For [highlight.js], here's the result.

{% codeblock lang:matlab %}
function [rr_array] = nest_fun(x,a)
%function to find sets of polynormials.
% a: set of constants, [A B C]
% x: variables in array
% Example: rr=nest_fun(2:10,[1 2 4;2 4 8])
n = size(a);
  for i = 1:n
  A = a(i,1);B = a(i,2);C = a(i,3);
  rr_array{1,i}=['A=',num2str(A),', B=',...
      num2str(B),', C=',num2str(C)];
  rr_array{2,i}=polyx(x);
　end
  function r = polyx(xx)
  　　r = A.*x.^2 + B.*x +C;
  end
end
{% endcodeblock %}

{% img /images/posts/CodeDisplay6/d8435-matlab-correct.png 'highlight.js works on some computer(s)' ['result of highlight.js'] %}

When I was writing the post, [highlight.js] didn't worked right, but
as I gave up trying it and view this post on the next day, things just
go fine.

We just see how [google-code-prettify] works.

{% codeblock lang:matlab %}
function [rr_array] = nest_fun(x,a)
%function to find sets of polynormials.
% a: set of constants, [A B C]
% x: variables in array
% Example: rr=nest_fun(2:10,[1 2 4;2 4 8])
n = size(a);
  for i = 1:n
  A = a(i,1);B = a(i,2);C = a(i,3);
  rr_array{1,i}=['A=',num2str(A),', B=',...
      num2str(B),', C=',num2str(C)];
  rr_array{2,i}=polyx(x);
　end
  function r = polyx(xx)
  　　r = A.*x.^2 + B.*x +C;
  end
end
{% endcodeblock %}

Code copied from [Applications of Matlab in Engineering][matlab_samp].

Note: In [the official README][prettify_doc], it's said that we
specify the `lang-*` class by its file extension (i.e. `m`), but in
the page that display the source code of lang-matlab.js on Google
Code, it points to [the author's Github repository][prettify_repo],
which has a README file.  According to that file, the HTML tag should
be `<pre class="prettyprint lang-matlab">`, instead of `<pre
class="prettyprint lang-m">`.

So when one embeds the above source code list using
[google-code-prettify], one would write

{% codeblock lang:html %}
<pre class="prettyprint lang-matlab">function [rr_array] = nest_fun(x,a)
%function to find sets of polynormials.
% a: set of constants, [A B C]
% x: variables in array
% Example: rr=nest_fun(2:10,[1 2 4;2 4 8])
n = size(a);
for i = 1:n
A = a(i,1);B = a(i,2);C = a(i,3);
rr_array{1,i}=['A=',num2str(A),', B=',...
num2str(B),', C=',num2str(C)];
rr_array{2,i}=polyx(x);
　end
function r = polyx(xx)
　　r = A.*x.^2 + B.*x +C;
end
end
</pre>
{% endcodeblock %}

Let's go back to the topic.

SyntaxHighlighter
---

The SyntaxHighlighter code for embedding Java:

{% codeblock lang:html %}
<pre class="brush: java">public class Hello {
public static void main(String args[]) {
System.out.println("Hello world!");
}
}</pre>
{% endcodeblock %}

As the language in determined by `brush: html`, there's *no* multiple
language feature in SyntaxHighlighter.

highlight.js
---

{% codeblock lang:html %}
<pre class="brush: java">public class Hello {
    public static void main(String args[]) {
	System.out.println("Hello world!");
    }
}</pre>
{% endcodeblock %}

So [highlight.js] can display multiple languages at one container.

google-code-prettify
---

{% codeblock lang:html %}
<pre class="brush: java">public class Hello {
    public static void main(String args[]) {
	System.out.println("Hello world!");
    }
}</pre>
{% endcodeblock %}

So the result of [google-code-prettify] is similar to that of
SyntaxHighlighter.

Further results of highlight.js
---

We end this essay with more results in [highlight.js].

In order to embed multilingual source code in a list, [highlight.js]
is what you need, but if you insist on using [google-code-prettify],
here's some sample code.

{% codeblock %}
<pre class="prettyprint">public class Hello {
    // Java code sample
	public static void main(String args[]) {
	    System.out.println("Hello world!");
	}
    }

    <!-- CSS code-->
    .sidebar #sidebar, .ss{
     margin-top: 12px !important;
     overflow-y: scroll !important;
    }

    # C++ code
    #include 
    using namespace std;

    int main(void)
    {
        cout << &quot;Hello world!&quot; << endl;
        return 0;
    }
</pre>
{% endcodeblock %}

[op]: http://blogue-un.blogspot.hk/2014/01/testing-online-code-syntax-highlighters_8.html
[pp]: http://blogue-un.blogspot.hk/2014/01/testing-code-syntax-highlighters-for.html
[SyntaxHighlight]: http://alexgorbatchev.com/SyntaxHighlighter
[highlight.js]: http://highlightjs.org/
[google-code-prettify]: http://code.google.com/p/google-code-prettify/
[matlab_samp]: http://bime-matlab.blogspot.hk/2006/10/66.html
[prettify_doc]: http://google-code-prettify.googlecode.com/svn/trunk/README.html
[prettify_repo]: https://github.com/amroamroamro/prettify-matlab
