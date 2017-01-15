---
layout: post
title: "Testing Online Code Syntax Highlighters for Blogs (1): SyntaxHighlighter"
date: 2014-01-06 16:41:00 +0800
categories: [online code highlighter]
comments: true
---

*Note: This post won't make sense here.  Refer to the
[original post][op].*

<!-- more -->

This is a test of [a guide for embedding code][guide1] on Blogger
found on Geed Talkin Siebel.  I've some code that I'd like to share.

When I first learnt Java, I saw these few lines of code.

{% codeblock lang:java %}
public class Hello {
    public static void main(String args[]) {
	System.out.println("Hello world!");
    }
}
{% endcodeblock %}

When I was still in secondary school, one of my classmates complained
about the syntactic and conceptual complexity of the `print` method in
Java.  He said that it was a lot simpler in C++.

{% codeblock lang:cpp %}
#include <iostream>
using namespace std;
int main(void)
{
cout << "Hello world!" << endl;
return 0;
}
{% endcodeblock %}

Deeply impressed by what I've done using Java, I didn't took his
words.  After several years, I looked at the code for handling zipped
files in Apache Tomcat 2.5, and I understand him a little bit.

A year ago, when I looked at the official web page of Apache Commons
FileUpload impatiently, I could get nothing from the sample code
there.  Fortunately, with the debugger in Eclipse, I managed to apply
the knowledge on the user guide on that site.  I'm sure that without
any debugging tools, I can *never* get the job done!

Recently, when [I backed up my files][pp1], I browsed
[a tutorial about extracting a zipped file][java_zip] on CodeJava and
looked at the code there, and I've found out that even though I
managed to use the `ZipInputStream` class to handle zipped archives, I
still have no idea on how the machine works because the language is
too high level.  The story ends here.

In the past few months, without any knowledge and effort to get a good
display of the source code, I just typed the following codes directly
into the HTML view of the WYSIWYG editor of Blogger.

{% codeblock lang:html %}
<pre>#include <iostream>
using namespace std;
int main(void)
{
    cout << "Hello world!" << endl;
    return 0;
}
</pre>
{% endcodeblock %}

By doing so, the output is like this:

    #include <iostream>
    using namespace std;
    
    int main(void)
    {
        cout << "Hello world!" << endl;
        return 0;
    }

Apart from unattractive appearance, the above list doesn't have line
numbers.  Though one can easily select and copy and code into a text
editor, this is inefficient, when compared to [SyntaxHighlighter].

After motivation, what's needed is action.

Following the guide mentioned above, I clicked the "copy to clipboard"
icon at the top right-hand corner of relevant blocks of source code,
and pasted them into the HTML of the template.

{% img fancybox /images/posts/CodeDisplay1/2ea26-template.png 'Added SyntaxHighlighter into the HEAD' ['fig1'] %}  
*Don't* worry about the single quotes in line 219.  It works *fine*.

*Without* a successful experience of getting it work, I thought that
the above guide *didn't* work and had treated it as another guide that
I can't make use of.  (After getting things work, I think I *was*
unfair to its author by simply saying that "it *doesn't* work!")

I suspected that Blogger's dynamic view templates inhibits the use of
[SyntaxHighlighter], just like [the case in MathJax][pp2], and would
like to change the template of this blog.  However, the space of
displaying figures would be reduced.  After that, I gave up this idea
and tried to find some way to get [SyntaxHighlighter] work with the
dynamic view.  Then I found
[a detailed but a little bit complicated guide][guide2] for impatient
users on Crux Framework.  Luckily, I managed to find
[another post][guide3] on doing the same thing.  It really saves the
day!  Pasting the three lines of code at the bottom, it finally works!
Yes, there's just three lines.

After getting things done, I've realised that for dynamic views,
there's only one missing step in the first guide, which is the last
part of the last guide.

I can now start embedding source code into my blog posts.  For an
angled block `<>`, they need to be converted to `<tag>` so that the
JavaScript will run *without* errors.  It is better to leave it to
[an online HTML encoder][html_enc] to do this tedious task.

One final note: for indentation of source code with tabs, it's better
to convert it to whitespaces first because toggling between the
"Compose" and "HTML" modes of the online editor on Blogger will lead
to disappearance of the tabs.  The replacement is not difficult in
Vim.  Issuing the command `:[range]s:^\t: [num_of_times]:` will do.
(It depends on the tabstop option on Vim.  Adapt it according to your
needs.)

[op]: http://blogue-un.blogspot.hk/2014/01/testing-syntaxhighlighter_5977.html
[guide1]: http://geektalkin.blogspot.hk/2009/11/embed-code-syntax-highlighting-in-blog.html
[pp1]: /blog/2014/01/05/gnu-ddrescue-a-powerful-data-recovery-tool/
[java_zip]: http://www.codejava.net/java-se/file-io/programmatically-extract-a-zip-file-using-java
[SyntaxHighlighter]: http://alexgorbatchev.com/SyntaxHighlighter/
[pp2]: /blog/2014/01/05/giving-up-testing-mathjax-and-anchors-on-blogger/
[guide2]: http://blog.cruxframework.org/2011/10/easy-code-syntax-highlight-on-blogger.html
[guide3]: http://kevin-junghans.blogspot.hk/2013/01/adding-syntaxhighlighter-to-blogger.html
[html_enc]: http://www.string-functions.com/htmlencode.aspx
