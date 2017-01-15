---
layout: post
title: "Testing Online Code Syntax Highlighters for Blogs (3): google-code-prettify"
date: 2014-01-08 08:10:00 +0800
categories: [online code highlighter]
comments: true
---

*Note: This post won't make sense here.  Refer to the
[original post][op].*

<!-- more -->

Here's another online code syntax highlighter called
[google-code-prettify].  The following are the test results.

In order to use this technology in your post, the following simple
steps will do.

Step one
---

Add an "HTML/JavaScript" gadget to your blog.  In the contents, just
paste the following line of code found on
[the official tutorial][tut].[^blogger_cb]

    <script
      src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js">
    </script>

Step two
---

Insert the following lines of code and replace the text inside the
`<pre>` tag with your code.

Note: Like [SyntaxHighlighter] and [highlight.js], you need to encode
`<`, `>`, `&`, etc into HTML encoding using an HTML encoder.  At the
bottom part of [one of my older posts][pp], I included a link to an
HTML encoder, and here's a list of two more.

* [Web 2.0 Generators][web2gen]: it contains a list of reserved
    characters and their entity names, as well as an HTML decoder.
* [OpinionatedGeek][og_dec]: it contains an HTML decoder.

i.e. If you want to embed HTML code using an HTML encoder, you need to
type the following *unencoded* code first.

{% codeblock lang:html %}
<pre class="prettyprint lang-html">
  <!-- your code here-->
</pre>
{% endcodeblock %}

Then you use a HTML encoder to generate the following output and paste
it inside the `<pre>` tag.

    <pre class="prettyprint lang-html">
      <!-- your code here-->
    </pre>

Exercise: If you think that you understand the above text, try making
a web page that teaches users how to embed HTML code into a web
page.  
Hint: Right click and choose "**V**iew Page Source" in the pop up
menu.

Step three
---

If your source code contains too many characters in a line, the right
part of the code will go out of the box.  Add the following CSS code
to automatically fix the problem.

{% codeblock lang:css %}
pre {
  overflow: auto;
}
{% endcodeblock %}

Then a scrollbar will be automatically attached to the source code
container if the source code has too many columns and/or lines.

Suppose you see the following lines of code in message in response to
[a question on Stack Overflow][so20977752].  However, it has *no* line
number, and you want to embed this piece of code into your web page
*with* line number.  So I append `linenums` to the `class` attribute
of the `<pre>` tag.

{% codeblock lang:php %}
<select>

<?php for ($i = date('G') < 17 ? 0 : 1; $i <= 2; ++$i) { ?>

  <optgroup label="<?php echo date('l j F', strtotime('+ ' . $i . ' day')); echo !$i ? ' (Today)' : (1 === $i ? ' (Tomorrow)' : ''); ?>">

    <?php for ($n = 9; $n < 16; $n += 2) { if ($i || date('G', strtotime('+ 15 minutes')) < $n + 2) { ?>

      <option><?php echo str_pad($n, 2, '0', STR_PAD_LEFT); ?>:00 - <?php echo str_pad($n + 2, 2, '0'); ?>:00</option>

    <?php } } ?>

  </optgroup>

<?php } ?>

</select>
{% endcodeblock %}

For further details, refer to the [official README][doc].

---
[^blogger_cb]:
    [在Blogger上用Google Code Prettify及GitHub Gist顯示程式碼...][fn1]

[op]: http://blogue-un.blogspot.hk/2014/01/testing-code-syntax-highlighters-for_8.html
[google-code-prettify]: https://code.google.com/p/google-code-prettify/
[tut]: https://code.google.com/p/google-code-prettify/wiki/GettingStarted
[fn1]: http://andmobiz.blogspot.hk/2013/05/blogger-google-code-prettify-github-gist.html
[SyntaxHighlighter]: http://alexgorbatchev.com/SyntaxHighlighter/
[highlight.js]: http://highlightjs.org/
[pp]: http://blogue-un.blogspot.hk/2014/01/testing-syntaxhighlighter_5977.html
[web2gen]: http://www.web2generators.com/html/entities
[og_dec]: http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Default.aspx
[so20977752]: http://stackoverflow.com/q/20977752/ "PHP select box with multiple options in of times and dates"
[doc]: http://google-code-prettify.googlecode.com/svn/trunk/README.html
