---
layout: post
title: "MathJax and RSS"
date: 2014-09-07 22:31:11 +0800
comments: true
categories: [MathJax, Octopress]
---

Motivation
---

In the past, I used double dollar signs `$$` to enclose block
equations.  As a result, readers *couldn't* see them in [Firefox].

{% img fancybox /images/posts/MathJaxDisplay/old.png 900 'No block equation in RSS' ['old'] %}

**How can these missing parts be put back to the RSS feeds?**

<!-- more -->

Method
---

I *didn't* know how to use

1. typeset curly brackets `{}` using MathJax *without* using `$$` to
surround the brackets.  If only one `$` was used, then it would fail.
For example, `$\{a_k\}$` *wouldn't* work.
2. inline display mode for summation, limit, etc.
3. `\[` and `\]` to surround block equations in Octopress.

Now, I know that [kramdown] parses the Markdown source code for a post
*before* [MathJax] does.  Therefore, to mean a backslash '\\', one
needs to "double the effort".  (i.e. use `\\{a_k\\}` for $\\{a_k\\}$)
Moreover, I have to use backslash '\\' to escape askterisks `*` and
underscores `_`.

Before I upgraded to Ruby 2 and updated my Octopress source code[^1],
`$\displaystyle \lim_{k \to \infty} \frac{1}{k} = 0$` *didn't* work.
Now, I can insert inline display equations like
$\displaystyle \lim\_{k \to \infty} \frac{1}{k} = 0$.

With reference to an example on the MathJax CDN, I've learnt to use
`begin{equation}` just like what $\rm \LaTeX$ users do.[^2]  When
using it, there's *no* need to use `$$` to surround it.

Viewing [`MathJaxLocal.js`][JSEg] on *DrZ.ac*, I know why I *couldn't*
use `\[` for a block equation---I *didn't* add it to the corresponding
list of delimiters in `displayMath`.  Actually, at that line, the
whitespace character between two square brackets `[` *aren't*
necessary.[^3]

While editing a multi-line block equation in a post about the
Contraction Mapping Principle, I encountered a technical problem:
there's *no* newline character in the equation.  I could just see
*one very long line*.  To see how the code was interpreted, I made a
screenshot of Firefox before MathJax loaded.

{% img fancybox /images/posts/MathJaxDisplay/trial.png 'MathJax code processed by kramdown' ['interpreted MathJax code'] %}

It was evident that putting four backslashes at the end of lines for a
line break *wasn't* enough.  Therefore, I put *two more* backslashes
there.  This time, the page for an individual post was OK, but the
contents in the blog index page and those under folder `/posts/`
*wasn't*.  I viewed the "$\rm \TeX$ Commands" from the popup menu, and
saw that in the page for an individual post, *two* backslashes were
found; at `/posts/*` and the blog index page, *only one* backslash was
found.

By trial, I finally used *eight* backslashes in the Markdown source
files for a post for a line break.

Result
---

{% img fancybox /images/posts/MathJaxDisplay/new.png 900 'Block equation in RSS' ['new'] %}

The source code for a block equation can now be seen in RSS feeds.

---
[^1]: See [*Updated Octopress Source Code*][pp] in Blog 1 for details.
[^2]:
    View the source of [*A Test of Equation Numbering*][OfficalEg] for
    details.

[^3]:
    See [$\rm \TeX$ and $\rm \LaTeX$ math delimiters][OfficalDoc] in
    *MathJax Documentation* for details.

[Firefox]: https://www.mozilla.org/firefox/
[kramdown]: http://kramdown.gettalong.org/
[MathJax]: http://www.mathjax.org/
[pp]: /blog/2014/08/21/updated-octopress-source-code/
[OfficalEg]: http://cdn.mathjax.org/mathjax/latest/test/sample-eqnum.html
[JSEg]: http://drz.ac/javascripts/MathJaxLocal.js
[OfficalDoc]: http://docs.mathjax.org/en/latest/tex.html#tex-and-latex-math-delimiters

*[CDN]: Content Delivery Network
*[RSS]: Rich Site Summary
