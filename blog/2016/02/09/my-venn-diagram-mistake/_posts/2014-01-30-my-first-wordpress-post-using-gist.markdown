---
layout: post
title: My First WordPress Post using Gist
date: 2014-01-30 16:25:03 +0800
categories: [online code highlighter, UltraBlog.vim]
comments: true
---

*Note: This post won't make sense here. Refer to the
[original post][op].*

Note: I can now figure out a way to work with *both* UltraBlog and
WordPress.com's built-in online code highlighter.  See my
[newer post][np] for details.

[Markdown] is easy to write.  <del>However, writing code with `code`
tag (surrounded with `[]`) using UltraBlog in Vim *doesn't* work.  In
order to post some code, one needs to
[use 3 backticks][use3backticks].</del>  (I've found a way to use the
built-in SyntaxHighlighter now because I've realised that a blank line
in Markdown will be changed to a `<p>` tag in HTML.  Thus, *don't* put
any blank lines right above and below the the `<code>` tags.)

{% codeblock lang:js %}
element1 = document.getElementById("foo");
element1.innerHTML = "Hello world!";
{% endcodeblock %}

There's some shortcomings of the above method.  If you need to copy a
list of source code, you'll need to browse the source code, provided
that the "gutter" option of the code list is "true",
[which is the default][default].
Moreover, if you include source code that consists of `<angled
blocks>` in a blog post written in Markdown using the UltraBlog
plugin, then the angled block may be interpreted as an HTML tag
element, such as the statement `#include <iostream>` in a C++ program.
*More importantly, I've found out that [this apporach][fail_way]
**doesn't** work with UltraBlog.*  <del>The above code list verifies
this assertion.<del>

{% img /images/posts/1stWPGist/ultrablog.png Screenshot of the "code list" in UltraBlog.vim %}

<small>Figure 1: This is a screenshot of the "code list" in
UltraBlog.vim.  [Markdown quick reference][md_quick_ref] suggests the
use of 3 backticks.</small>

{% img fancybox /images/posts/1stWPGist/interpreted.png 800 'Screenshot of the interpreted code in WordPress.com online editor' ['fig1'] %}

<small>Figure 2: The above figure shows how the source code for the
"code list" (in lines 12–15 in UltraBlog.vim, see Figure 1) is
interpreted.</small>

<!-- more -->

If you're a [Blogger] user who has made use of [SyntaxHighlighter] to
share your source code online, you'll know that the copy function
depends on [Adobe Flash].  I *don't* have time to figure out whether
this is [a JavaScript trap][js_trap], but it's *better* if I can find
a way to avoid proprietary softwares.

Moreover, the [languages supported][supp_lang] by [WordPress.com] is
*not as much as* [Gist]. For instance, Gist can highlight code in a
VIMRC file, but the plugin used by WordPress.com *can't*.

According to [WordPress's official support][wp_supp], using Gist
should be much easier. The following is the result.

{% gist 8703067 %}

Posted via [UltraBlog.vim].

[op]: http://blogueun.wordpress.com/2014/01/30/1st-wp-post-using-gist/
[np]: /blog/2014/02/06/another-testing-page-for-wordpress-coms-built-in-syntaxhighlighter-and-ultrablog/ "Another Testing Page for WordPress.com's Built-in SyntaxHighlighter and UltraBlog"
[Markdown]: http://daringfireball.net/projects/markdown "Markdown"
[use3backticks]: http://en.support.wordpress.com/markdown/ "WordPress's Markdown Support"
[default]: http://en.support.wordpress.com/code/posting-source-code/#configuration-parameters "Configuartion Parameters"
[fail_way]: http://en.support.wordpress.com/markdown/ "WordPress's Markdown Support"
[md_quick_ref]: http://en.support.wordpress.com/markdown-quick-reference/ "Markdown quick reference"
[Blogger]: http://www.blogger.com "Blogger"
[SyntaxHighlighter]: http://alexgorbatchev.com/SyntaxHighlighter/ "Alex Gorbatchev's SyntaxHighlighter"
[Adobe Flash]: http://www.adobe.com/products/flash/ "Adobe Flash"
[js_trap]: http://www.gnu.org/philosophy/javascript-trap.html
[supp_lang]: http://en.support.wordpress.com/code/posting-source-code/ "Supported Languages"
[WordPress.com]: http://www.wordpress.com
[Gist]: http://gist.github.com/
[wp_supp]: http://en.support.wordpress.com/gist/ "WordPress's Gist Support"
[UltraBlog.vim]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
