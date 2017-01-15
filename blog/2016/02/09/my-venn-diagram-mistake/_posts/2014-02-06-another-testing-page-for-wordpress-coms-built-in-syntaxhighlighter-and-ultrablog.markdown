---
layout: post
title: "Another Testing Page for WordPress.com's Built-in SyntaxHighlighter and UltraBlog"
date: 2014-02-06 01:55:52 +0800
categories: UltraBlog.vim
comments: true
---

*Note: This post won't make sense here. Refer to the
[original post][op].*

<!-- more -->

This post contains a code block. Following what I've done in the
numbered list and *the last paragraph* in one of my recent post on
WordPress.com, surrounding the code block with 3 backticks should work
in UltraBlog.[^pp]

{% codeblock lang:java %}
public static void main(String[] args) {
    int i = 1;
}
{% endcodeblock %}

However, I tried writing an `<html>` tag in the online editor, and the
code was stripped of. Anyways, there's [Gist] on GitHub, so there
should be no problem.

Posted via [UltraBlog.vim][end].

---
[^pp]: Refer to [*Testing WordPress' Footnotes*][pp] for details.

[op]: http://blogueun.wordpress.com/2014/02/06/another-testing-page-for-wordpress-coms-built-in-syntaxhighlighter-and-ultrablog/
[pp]: /blog/2014/02/06/testing-wordpress-footnotes/
[Gist]: https://gist.github.com
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
