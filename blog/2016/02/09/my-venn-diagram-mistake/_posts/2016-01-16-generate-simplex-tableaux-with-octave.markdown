---
layout: post
title: "Generate Simplex Tableaux with Octave"
date: 2016-01-16 14:53:15 +0800
comments: true
categories: Octave
---

Background
---

It's easy that one makes [careless mistakes][mistake] in a pivot
operation.  As a result, in test/exams in which calculators are
allowed, I used a simple program to save time.

Answering linear programming question on
[Mathematics Stack Exchange][mathse], I used [GNU Octave][octave] to
do the tedious work.

Initial tableau
---

First write the LPP in standard form.  I assume that $b$ and $c$ are
column vectors.

- `c` is the objective function.
- `A` is the coefficient matrix of the constraints.  (a.k.a technology
    matrix)
- `b` is the RHS of the constraints.
- `T0` is the initial tableau.

My habit is to

1. place $b$ on the RHS;
2. place the objective function row at the bottom;
3. omit the coefficient for $z$ since it'll *never* be changed.

{% codeblock Generate the initial tableau lang:octave http://math.stackexchange.com/a/1605301/290189 %}
format rat;
c = [-1 2 -3 0 0 0]'; b = [11 0 8]';
A = [
1 -.5 1 1 0 0;
0 2 -1 0 1 0;
0 0 0 2 0 1];
T0 = [A b; -c' 0]
{% endcodeblock %}

Current simplex tableau
---

The command `basis = [3 2 6]` is used to choose the decision variables
<span class="myeqn" markdown="0">$x_3,x_2$ and $x_6$</span> as the
basis.  Note that the order of the entries in the array `basis` is
very *important*.  By setting this array, I *don't* need to repeat
typing the same set of numbers for $B$ and <span class="myeqn"
markdown="0">$c_B$</span>.

{% codeblock Generate the tableau from the current basis lang:octave http://math.stackexchange.com/a/1605301/290189 %}
basis = [3 2 6]; B = A(:,basis); cB = c(basis);
T = [B\A B\b; cB'*(B\A)-c' cB'*(B\b)]
{% endcodeblock %}

Inadequacies
---

Since I'm no longer in an LP course, I'm too lazy to write the code
for finding the suitable elements for a pivot operation.  We *don't*
need to re-develop something that has been well-developed.

[mistake]: http://chat.stackexchange.com/transcript/message/26730376#26730376
[mathse]: http://math.stackexchange.com
[octave]: http://www.gnu.org/software/octave
