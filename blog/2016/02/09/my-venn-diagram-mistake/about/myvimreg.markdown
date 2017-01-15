---
layout: page
title: "My Vim Registers for Quick Text Editing"
date: 2014-11-09 13:16
comments: true
sharing: true
footer: false
---

The registers are for writing math in $\rm \LaTeX$, Octopress posts,
HTML, etc.

{% codeblock The list of my Vim macros lang:html %}
"a   cout << "i: " << i << endl;
"b   \mathbf
"c   \mathcal
"d   \,\mathrm{d}
"e   \exists
"f   \forall
"g   &gt;
"i   é
"j   è
"k   :!clang++ -g % -o %<.out^M
"l   &lt;
"m   <!-- more -->
"s   :%s/std:://g^M
"t   target="_blank"
"x   :!./%<.out^M
"z   $\rm \LaTeX$
{% endcodeblock %}

Remark: The `^M` at the end of registers `k` and `s` denote the
"carriage return", which can be input by typing `<C-v><C-m>` in Vim.
