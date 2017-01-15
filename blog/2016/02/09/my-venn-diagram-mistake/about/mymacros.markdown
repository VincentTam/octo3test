---
layout: page
title: "My $\\rm \\LaTeX$ Macros for Math Writing"
date: 2014-11-08 19:39
comments: true
sharing: true
footer: false
---

Basically, I just copied all the custom macros defined in
[the local configuration file][MathJaxLoc] `MathJaxLocal.js` and
adapted it for `mymacros.sty`.

Sample output
---

![sample](/images/posts/mymacros/sample.png)

Using the macros
---

Since I want *both* the simplicity of Markdown syntax and the
convenience of using Vim-$\rm \LaTeX$, I use `.tex` as the file
extension of the pandoc document.  If you mind the *wrong* syntax
highlighting, you may use `.mkd` or whatever way you want.

{% codeblock My sample pandoc document lang:yaml %}
{% raw %}
---
title: Write Efficiently in Markdown!
author: Vincent Tam
date: \today
geometry: margin=1in
header-includes:
- \usepackage{mymacros}
---

# Section 1: sample code block

Use the *following* command to generate a PDF file.

    $ pandoc -f markdown+yaml_metadata_block foo.tex -o foo.pdf

The file extension `.tex` is for using Vim-\LaTeX.

## Subsection 1.1: sample math

Suppose that $\vect{x} \ne \zeros \in \C^n, \Q^n, \Z^n, \N^n$.  Then
we have

(@foo) $$\int_{0}^{1} 1 \ud x = \abs{1} =
\normlr{\frac{\vect{x}}{\norm{\vect{x}}}}.$$

# Section 2: sample list

One can refer to (@foo).  Here's a numbered list.

1. Sample link to pandoc's [markdown syntax][pandoc_markdown]
2. Sample link to my blog: <https://vincenttam.github.io>
    - Sample item: my introduction is under `/about`.
    - Sample item: the blog archive is under `/archive`.
3. Sample item.

# Section 3: sample picture

It's **not** so easy to insert pictures in \LaTeX, while it's *simple* in
Markdown.

![Title](fig1.png)

[pandoc_markdown]: http://johnmacfarlane.net/pandoc/demo/example9/pandocs-markdown.html
{% endraw %}
{% endcodeblock %}

Here's [the sample output PDF file][output_pdf] and
[the picture used][output_png] in the document.  I refered to the
following pages while writing the above example.

1. Pandoc [markdown syntax][pandoc_markdown]
2. Using YAML metadata block as header.[^yaml_metadata_block]
3. Adding numbered equations in pandoc.[^pandoc_num_eq]

Source code for the macros
---

{% render_code mymacros/mymacros.sty My custom macros %}

{% render_code mymacros/test-macros.tex Sample output %}

The use of the `varwidth` option before the `standalone` class is for
line breaks and the displayed equation at the first line in the sample
output.[^varwidth]  Loading the `amsfonts` packages avoid an
"undefined control sequence error".[^amsfonts]

---
[^varwidth]: See [this page][texse82736] for details.
[^amsfonts]: See [this page][texse38771] for details.
[^yaml_metadata_block]: See [this page][texse139139] for details.
[^yaml_metadata_block]: See [this page][texse139139] for details.
[^pandoc_num_eq]: See [this page][texse111868] for details.

[MathJaxLoc]: /javascripts/MathJaxLocal.js
[output_pdf]: /downloads/foo.pdf
[output_png]: /images/posts/mymacros/fig1.png
[pandoc_markdown]: http://johnmacfarlane.net/pandoc/demo/example9/pandocs-markdown.html
[texse82736]: http://tex.stackexchange.com/a/82736 "\documentclass[convert]{standalone} ignores linebreak"
[texse38771]: http://tex.stackexchange.com/a/38771 "\mathbb{Z} yields undefined control sequence error"
[texse139139]: http://tex.stackexchange.com/q/139139 "Adding headers and footers using Pandoc"
[texse111868]: http://tex.stackexchange.com/q/111868 "Pandoc: How can I get numbered LaTeX equations to show up in both PDF and HTML output"
