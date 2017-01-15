---
layout: post
title: "Jump to $\\rm \\LaTeX$ Syntax Error"
date: 2014-03-22 17:23:19 +0800
comments: true
categories: LaTeX-Suite
---

**This post is written in response to a question of
[one of my video][YouTubeVideo].**

Vim-$\rm \LaTeX$ enables users to jump to a syntax error quickly.  To
show you how, I use a GIF "animation", instead of a video, so that the
file size is much smaller.

{% img fancybox /images/posts/Jump2LaTeXSyntaxErr/vim-latex-err.gif 800 'A GIF animation showing Vim-LaTeX quickfix window' ['fig1'] %}

Explanation:

Error message: The `equation*` environment is "undefined".  
Cause of error: I forget to include the `amsmath` package in the
preamble.

- [Figure 1][fig1]: Compilation error occurs,
  so a quickfix window pops up.
- [Figure 2][fig2]: I typed `j` to move the
  cursor down in the quickfix window by one line, and the window below
  showing the log file automatically scrolled down. 
- [Figure 3][fig3]: I typed `k` to go up one
  line, so the situation goes back to Figure 1.
- [Figure 4][fig4]: I typed `<Enter>` to jump
  to the "error location". (line 6)
- [Figure 5][fig5]: I typed `<C-w>j` to go
  back to the quickfix window, and the situation goes back to Figure 1
  again.
- [Figure 6][fig6]: I typed `j` again, and
  the situation goes back to Figure 2.
- [Figure 7][fig7]: I typed `<Enter>` again
  to jump to *another* "error location".

P.S. As I've said in my "[About](/about)" page, I mainly write in
Markdown now, unless a teacher want me to submit homework with
specific formatting requirements like 1-inch margin, 1.5 line spacing,
etc.  As you can see from the footer of this blog, this post is also
written in Markdown.

[YouTubeVideo]: http://youtu.be/y67t-05nFD0
[fig1]: /images/posts/Jump2LaTeXSyntaxErr/vim-latex-err1.png
[fig2]: /images/posts/Jump2LaTeXSyntaxErr/vim-latex-err2.png
[fig3]: /images/posts/Jump2LaTeXSyntaxErr/vim-latex-err3.png
[fig4]: /images/posts/Jump2LaTeXSyntaxErr/vim-latex-err4.png
[fig5]: /images/posts/Jump2LaTeXSyntaxErr/vim-latex-err5.png
[fig6]: /images/posts/Jump2LaTeXSyntaxErr/vim-latex-err6.png
[fig7]: /images/posts/Jump2LaTeXSyntaxErr/vim-latex-err7.png
