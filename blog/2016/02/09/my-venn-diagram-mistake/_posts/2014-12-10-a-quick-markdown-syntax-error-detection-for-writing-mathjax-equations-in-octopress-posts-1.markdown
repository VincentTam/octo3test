---
layout: post
title: "A Quick Markdown Syntax Error Detection for Writing MathJax Equations in Octopress Posts (1)"
date: 2014-12-10 14:57:23 +0800
comments: true
categories: [MathJax, Octopress]
---

Backgroud
---

I write math in [Octopress] posts using [MathJax].

Problems
---

I include $\rm \LaTeX$ code for mathematical expressions rendered by
MathJax in Markdown source code for Octopress posts.  Then I have to
adapt the $\rm \LaTeX$ code for [kramdown], which is a Markdown parser
that converts kramdown code into HTML.  For example,

1. Add a backslash '\\' before an underscore `\_`.[^underscore]
2. Use *eight* backslashes to stand for a newline in displayed math
equations.[^8backslash]

For the second item, I realized that by *repeated* trials.

Regeneration of the contents in this blog takes more than a minute
since [jekyll] needs to process more than 200 pages.  Therefore, a
*quicker* way to verify the Markdown syntax helps.

Method
---

1. Write the $\rm \LaTeX$ code for the equations.
2. Use a $\rm \LaTeX$ compiler to ensure that the code for the
equations are right.
3. Use [pandoc] to convert the $\rm \LaTeX$ code to Markdown.
4. Use kramdown to convert the Markdown (i.e. kramdown) code to HTML.
5. Copy and paste the HTML code into the `<body>` tag of an HTML file.
6. Add references to MathJax and a local configuration file in the
`<head>` tag in the HTML file.
7. Use a web browser to preview the results.
8. Correct the Markdown syntax, and repeat steps 4--7 if necessary,
until the contents are correctly displayed.
9. Copy the kramdown code and paste it under the YAML header in the
Markdown source file for an Octopress post.

Therefore, I often excute the following editor commands in [Vim].

    :" returns the relative path of the file the current buffer
    :echo expand('%')
    :!kramdown % > %<.html
    :sp %<.html
{: .cliUB}

---
[^underscore]:
    See [*Mathjax, Kramdown and Octopress*][underscore] by Lucy Park.

[^8backslash]:
    See [*MathJax and RSS*][pp] in Blog 1 for details.

[Octopress]: http://octopress.org
[MathJax]: http://www.mathjax.org
[kramdown]: http://kramdown.gettalong.org
[underscore]: http://www.lucypark.kr/blog/2013/02/25/mathjax-kramdown-and-octopress/index.html#escape-markdown-syntax
[pp]: /blog/2014/09/07/mathjax-and-rss/index.html#method
[jekyll]: http://jekyllrb.com
[pandoc]: http://johnmacfarlane.net/pandoc
[Vim]: http://www.vim.org
