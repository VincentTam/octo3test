---
layout: post
title: "Generate $\\rm \\LaTeX$ code for Octave Matrices"
date: 2016-01-16 15:33:39 +0800
comments: true
categories: [LaTeX, Linux, math, Octave]
---

Background
---

- [Mathematics Stack Exchange][mathse] use [Markdown] and [MathJax] to
    typeset math expressions.
- I use [GNU Octave][octave] to efficiently perform (matrix)
    calculations for a quick and correct response on Mathematics Stack
    Exchange.

Problem
---

Recently, I encountered a [linear algebra problem][1614115] on
Mathematics Stack Exchange.

For any given matrix $A$ in Octave,

    A = [1 2 2; 2 3 4; 4 4 2]
    A =
    
       1   2   2
       2   3   4
       4   4   2
{:.cliUB}

**how can one generate its $\rm \LaTeX$ code**

{% codeblock $\rm \LaTeX$ code for matrix $A$ %}
A = \begin{bmatrix} 1&2&2\\ 2&3&4\\ 4&4&2 \end{bmatrix}
{% endcodeblock %}

so that one gets

<div class="myeqn">
\[
  A = \begin{bmatrix} 1&2&2\\ 2&3&4\\ 4&4&2 \end{bmatrix}?
\]
</div>

<!-- more -->

Solution
---

I searched "octave to latex matrices" and I found [this answer][43733]
quite useful.  I issued the first command to see the result.

    strrep(strrep(mat2str(A),",","&"),";","\\\\\n")(2:end-1)
    ans = 1 2 2\\
    2 3 4\\
    4 4 2
{:.cliUB}

I suspected that it *didn't* work.  I posted it as a comment and
verified that I was right.  To fix this, I extracted the function
`mat2str(A)` in the middle of this command to see the results.  From
its result (`ans = [1 2 2;2 3 4;4 4 2]`), I realised that `strrep`
standed for "string replace".  Then, I changed the double-quoted comma
in the second argument of function `strrep` to a double-quoted
whitespace character, and got the anticipated result.

    strcat("\\begin{bmatrix}\n",strrep(strrep(mat2str(A)," ","&"), ...
    ";","\\\\\n")(2:end-1),"\n\\end{bmatrix}\n")
    ans = \begin{bmatrix}
    1&2&2\\
    2&3&4\\
    4&4&2
    \end{bmatrix}
{:.cliUB}

Inadequacies
---

I *don't* know how to do this for matrices with fractions.  I think I
can work it out by searching and testing in several hours, but I
*don't* have the time to do so.

Lessons learnt
---

### Math

I revised some definitions in linear algebra.

- A matrix $U$ is **unitary** iff $UU^\star = U^\star U = I$.
- A matrix $N$ is **normal** iff $NN^\star = N^\star N$.

### GNU Octave

- The function `strrep(str,"foo","bar")` replaces all instances of
    `foo` in `str` with `bar`.  It can be used in a nested manner for
    multiple replacements.
- The function `strcat(str1,str2,...)` concatenates the strings
    inside.

### Grep

When I was writing this article, I wanted to search for "[octave]"
(with the square brackets "[]") with `grep` inside [Vim], but I got
over 1270 results.  I tried adding single/double quotes and escaping
the square brackets with a backslash, but I faied again.  Finally, I
googled "grep escape character" for a solution.  Since then, I know
that I should [add the `-F` flag to `grep`][3184351] to fix the
string.

[mathse]: http://math.stackexchange.com
[Markdown]: https://daringfireball.net/projects/markdown/
[MathJax]: https://mathjax.org/
[octave]: https://www.gnu.org/software/octave
[1614115]: http://math.stackexchange.com/q/1614115/290189
[43733]: http://tex.stackexchange.com/a/43733
[Vim]: http://www.vim.org/
[3184351]: http://stackoverflow.com/a/12387802/3184351
