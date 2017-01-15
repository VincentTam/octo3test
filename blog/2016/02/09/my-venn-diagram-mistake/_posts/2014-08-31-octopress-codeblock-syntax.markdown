---
layout: post
title: "Octopress Codeblock Syntax"
date: 2014-08-31 22:14:29 +0800
comments: true
categories: Octopress
---

Problem
---

When I was writing the post [*The Daring Fireball Linked List*][op], I
included a sample Markdown source file for an Ocotpress post.  I would
like to have a monospaced font and a line number at the left of each
line of the source file.  In addition, I *didn't* need any syntax
highlighting for that file.

I looked at the official manual, and it's said that "passing `plain`
disables highlighting".[^1]  *However, I got errors from [Pygments]!*

<pre class="cli"><code class="UBMono">127.0.0.1 - - [30/Aug/2014 21:36:51] "GET /images/noise.png?1408511469 HTTP/1.1"
 304 - 0.0010
      Regenerating: 1 files at 2014-08-30 21:38:38 ...done.
      Regenerating: 1 files at 2014-08-30 21:43:53   <span class="err">Liquid Exception: Pygments 
can't parse unknown language: plain. in _posts/2014-08-30-the-daring-fireball-li
nked-list.markdown/#excerpt</span>
...error:
             <span class="RakeErr2">Error: Pygments can't parse unknown language: plain.
             Error: Run jekyll build --trace for more information.</span>
      Regenerating: 1 files at 2014-08-30 21:44:21   <span class="err">Liquid Exception: Pygments 
can't parse unknown language: plain. in _posts/2014-08-30-the-daring-fireball-li
nked-list.markdown/#excerpt</span>
...error:
             <span class="RakeErr2">Error: Pygments can't parse unknown language: plain.
             Error: Run jekyll build --trace for more information.</span>
      Regenerating: 1 files at 2014-08-30 21:48:26 ...done.
</code></pre>

<!-- more -->

Solution
---

1. Just use `{% raw %}{% codeblock %}{% endraw %}`
    - Omit `lang: xxx`
    - I'm *not* sure if I can add title after `codeblock`.
2. Use `lang:text` to indicate plain text.[^2]

---
[^1]: Codeblock in *Octopress Documentation*. ([URL][doc1])
[^2]: Available lexers in *Pygments Documentation*. ([URL][doc2])

[op]: /blog/2014/08/30/the-daring-fireball-linked-list/
[doc1]: http://octopress.org/docs/plugins/codeblock/
[doc2]: http://pygments.org/docs/lexers/#pygments.lexers.special.TextLexer
[Pygments]: http://pygments.org/ "A generic syntax highlighter"
