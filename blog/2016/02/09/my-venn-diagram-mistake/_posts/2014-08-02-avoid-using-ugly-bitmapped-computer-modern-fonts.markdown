---
layout: post
title: "Avoid Using Ugly Bitmapped Computer Modern Fonts"
date: 2014-08-02 14:22:20 +0800
comments: true
categories: LaTeX
---

In a $\rm \LaTeX$ guide found on the website of George Mason
University, it's said that Computer Modern fonts can look ugly.[^1]
Like most Computer Modern users, I *didn't* notice that until I wrote
an article using $\rm \LaTeX$ last weekend.

To illustrate the problem, I used a minimum example which I had posted
on Gist.[^2]  To simply matters, one may use
`\pagenumbering{gobble}` to suppress page numbers.[^3]

{% img fancybox /images/posts/CMvsLM/cmodern.png 800 'Ugly bitmapped Computer Modern fonts' ['fig1'] %}

If one thinks that downloading the Blue Sky fonts from the American
Mathematical Society is too troublesome, simply including the package
`lmodern` will do.

{% img fancybox /images/posts/CMvsLM/lmodern.png 800 'Improved outlook using Latin Modern fonts' ['fig2'] %}

P.S. I have learnt an ImageMagick command from a Stack Overflow
question to convert a PDF file to an image.[^4]

---

[^1]: Luke, S. (n.d.). *Doing LaTeX Right: Correcting Common LaTeX Formatting Mistakes*. Retrieved from <http://cs.gmu.edu/~sean/stuff/DoingLatexRight/>
[^2]: My Gist for testing Bib$\rm \TeX$ ([URL][Gist])
[Gist]: https://gist.github.com/VincentTam/527f4ce84aa20d821a93
[^3]: $\rm \TeX–\LaTeX$ Stack Exchange question 7355 ([URL][TeXSE7355])
[TeXSE7355]: http://tex.stackexchange.com/a/7357 "How to suppress page number?"
[^4]: Stack Overflow question 6605006 ([URL][SO6605006])
[SO6605006]: http://stackoverflow.com/a/6605085 "Convert PDF to image with high resolution"
