---
layout: post
title: "Loop Through an Array Having Only One Element in Bash"
date: 2016-04-08 22:59:29 +0800
comments: true
categories: [Linux, Perl]
---

Background
---

To find out a way to loop through all elements in an array consisting
of more than one element, it's easy.

    $ for f in {"hello","world"}; do echo $f; done
    hello
    world
{:.cliUB}

Problem
---

When I try to take away the second element in the above array so that
it becomes an array consisting in *one* single element, then I get
`{hello}` instead of `hello`.

    $ for f in {"hello"}; do echo $f; done
    {hello}
{:.cliUB}

**How can one get back an output consistent with the case of arrays
consisting of multiple elements?**

<!-- more -->

Motivation
---

This problem seems nonsense---loops are supposed to do repetitive
tasks.  If the loop has *only* one iteration, then we can directly
type in the command, instead of adapting it into a loop and setting up
the scope of the loop.

Nevertheless, if one converts multiple lines of short texts into one
long single line with `xargs`, then the items will be separated by
white spaces.  This *won't* work with the above for loop.  To change
the delimiter from white space to comma, one may use `paste -d, -s`.

| Syntax | Meaning                                                         |
| :----- | :-------------------------------------------------------------- |
| :--:   | :--:                                                            |
| `-d,`  | Use `,` as the delimiter.                                       |
| `-s`   | *Without* this flag, `$1` and `$2` are displayed in *parallel*. |

Surely, there are other tools to do this, such as `sed`.  However, I
think that `paste -d, -s` should be the *simplest* way to do this.
Note that the white space character between the two flags are
*important*.  Otherwise, this command *won't* work.

*Without* prior knowledge of the text to be processed, it's possible
that the output of `paste -d, -s` consists of *only* one item.  This
single case is easy to deal with, even though the handling may be a
bit different from the case of multiple elements.  However, if the
syntax for the command that handles the output of `paste -d, -s`
*isn't exactly the same* in the case of *one* single element and the
case of *multiple* elements, then we need to look at the content and
make manual judgement--this is tedious and error-prone.

In the problem posed in the previous section, if the list in the
for loop has *only* one item, then we need to do something different
from a list having two or more items.  If we observe this difference
with our naked eyes, the whole process will lack efficiency.

To solve this problem, we seek an *unified* approach.  In other words,
I try to change the syntax of the above for loop so that the for loop
will work for *any* one of these two cases.

Solution
---

1. Surround each string in the array by a pair of *double quotes*.
2. Add a comma *either* before the first element or after the last
   element.

The first step is needed if in the array, there exists an element
having two or more words *separated by a white space*; the second step
is needed for an array with one single element.

    $ for f in {"hello world",}; do echo $f; done
    hello world
{:.cliUB}

Remarks
---

As the number of steps increases, the difficulty of constructing a
one-line command to do the thing rises tremendously.  It's possible
that a shell script is *easier* to write.  By searching "bash array
tutorial" on Google, I got [a tutorial on the Geek Stuff][tut] in the
first search result.

{% render_code oneelt.sh A shell script that display an array %}

[tut]: http://www.thegeekstuff.com/2010/06/bash-array-tutorial/
