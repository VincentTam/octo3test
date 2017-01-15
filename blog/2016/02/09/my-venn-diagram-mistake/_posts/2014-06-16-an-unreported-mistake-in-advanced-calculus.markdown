---
layout: post
title: 'An Unreported Mistake in "Advanced Calculus"'
date: 2014-06-16 23:40:05 +0800
comments: true
categories: math
---

After setting up Octopress for several weeks, I can finally begin to
write some math.  The errors of FitzPatrick's *Advanced Calculus* can
be found at [Walla Walla University][err].

Two weeks ago, I found a mistake in the book that *wasn't* in the
error list.  In p. 430, ln. -3, the '<' sign should actually be a '≤',
since it's *given* that
$$\norm{\vect{B} - \vect{A}} \le c / 2$$.

<!-- more -->

P.S. I need to escape the `\` inside an inline equation so as to get
the norm displayed.  [A blog post][post1] contains a macro for the
norm.  [Another one][post2] claims that the $$\rm \LaTeX$$ code
surrounded with double dollar sign (i.e. `$$`) will be interpreted as
an inline equation, but *not* a displayed one.  For example,
`$$\sum_{i=1}^{n} i = n (n + 1) / 2$$` will give you
$$\sum_{i=1}^{n} i = n (n + 1) / 2$$.

[err]: http://people.wallawalla.edu/~thomth/453/Fitzpatrick2ndTextbookErrors.pdf
[post1]: http://blog.ivansiu.com/blog/2014/05/22/my-octopress-blogging-flow/
[post2]: http://www.lucypark.kr/blog/2013/02/25/mathjax-kramdown-and-octopress/
