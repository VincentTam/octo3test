---
layout: post
title: "IPA Symbols in $\\rm \\LaTeX$"
date: 2014-10-01 22:28:49 +0800
comments: true
categories: LaTeX
---

Target
---

![target](/images/posts/LaTeXIPA/out.jpg)

<!-- more -->

Failed attempts
---

- Googled "xelatex ipa symbols"
- Tried the `tipa` package, and got the error "command sups already
    defined".[^tipaFail]

Source code
---

I limited the above google search to academic sites *only*[^SiteEdu],
and I luckily found a blog post which inspired me to work out the
following example.  (This link to the post is included in the
footnotes.)

{% codeblock A minimum working example lang:tex %}
\documentclass[border=5pt]{standalone}
\usepackage{fontspec}
\newfontfamily{\LL}{Linux Libertine O}
\begin{document}
Examples of nasal vowels: {\LL /ɑ̃/, /ɛ̃/, /ɔ̃/}
\end{document}
{% endcodeblock %}

Explanation
---

Line 2: For inserting characters with accents, for example, 'é' and
'ö'.  *Without* this line, those characters *won't* be processed by
the typesetting system.

Line 3: For changing to a font that supports IPA symbols.  Here are
the sources of inspirations.

- Principal: [*Typesetting phonology papers*][IPAFontSrc] by Michael
    Becker
- Practical: [*Using TIPA with fontspec*][XeTeXChFont] on $\rm
    \TeX$–$\rm \LaTeX$ Stack Exchange

---
[^tipaFail]:
    I gave up trying `tipa` after reading
    [*$\rm \TeX$ tips for linguists*][tipaFailSrc] by Kyle Gorman.

[^SiteEdu]:
    This can done by appending "site:*.edu" to the query string.

[tipaFailSrc]: http://sonny.cslu.ohsu.edu/~gormanky/blog/tex-tips-for-linguists/
[IPAFontSrc]: http://www.phonologist.org/papers/becker_IPAandLaTeX.pdf
[XeTeXChFont]: http://tex.stackexchange.com/a/64846
