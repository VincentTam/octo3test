---
layout: post
title: "Comparison of $\\rm \\LaTeX$'s \"quote\" and \"quotation\" Environments"
date: 2014-01-31 00:25:10 +0800
categories: LaTeX
comments: true
---

To quote another one's words, one can paraphrase the words.  For some
reason(s), (Perhaps being too lazy, or want to accurately reflect
another one's words.) one would like to directly quote what another
one has said.

To show the difference in $\rm \LaTeX$, I've made
[a PDF file a year ago][sample].  It's now on Google Docs.

I created the above PDF document using `quote.tex`.

{% gist 8703633 quote.tex %}

For many computer users who *aren't* familiar with $\rm \LaTeX$'s
syntax but HTML's, they should find [Markdown] easy to write, and
[pandoc] easy to use.

<pre class="cli"><code class="UBMono">$ pandoc -s \
&gt; <span class="UBHLCode">--mathjax=http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML-full</span> \
&gt; foo.markdown foo.tex</code></pre>

The result is shown in `quote.markdown`.

{% gist 8703633 quote.markdown %}

Posted via [UltraBlog.vim][end].

[sample]: https://drive.google.com/file/d/0B04KfPVI9QNeanNSYmc2RlE3VmM/edit?usp=sharing
[Markdown]: http://daringfireball.net/projects/markdown
[pandoc]: http://johnmacfarlane.net/pandoc/
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
