---
layout: post
title: "A Comment for New Users on Math.SE"
date: 2017-01-10 12:34:53 +0100
comments: true
categories: [metase, template]
---

Background
---

Mathematics learners ask questions on
[Mathematics Stack Exchange][mathse] to get an answer from others
*without* geographical or time restrictions, unlike teachers in
schools.  Users answer questions to gain virtual points called
*reputation*.

Problem
---

Among them, many are new users who *don't* use [MathJax] while typing
their questions.  As a result, the output is *difficult* to read.
This discourages users from answering those questions, so we would
have *less* answers to read.  Since we can sometimes benefit from
alternative solutions, it's better to post a question that is clear
enough to attract others to offer an answer.  We can downvote those
poorly rendered questions, but I think it's a bit cruel to do so on
the very first post from new users.  Therefore, I choose to leave a
comment which suggests them to use [$\rm \LaTeX$][LaTeX].  They often
say they *don't* know how to use it.  To avoid responses like that, I
include a link to the [MathJax guide on Meta Math.SE][mmathse5020].

> Please use [$\rm \LaTeX$][mmathse5020].

However, it's tedious to type the [markdown][mathse.md] source code
every time I want to leave this comment.

Solution
---

I'll include the code below, so that it can be simply copied and
pasted next time.

{% codeblock Comments for those who *don't* use $\rm \LaTeX$ %}
Please use [$\rm \LaTeX$](http://meta.math.stackexchange.com/q/5020/290189).
{% endcodeblock %}

[mathse]: http://math.stackexchange.com/
[MathJax]: https://www.mathjax.org/
[LaTeX]: https://www.latex-project.org/
[mmathse5020]: http://meta.math.stackexchange.com/q/5020/290189
[mathse.md]: http://math.stackexchange.com/help/formatting
