---
layout: post
title: "Simplex Tableau Generation With GNU Octave"
date: 2017-02-17T00:04:07+01:00
categories: math
---

Background
---

I encountered a [linear programming problem][2144734] on math.SE.  I
used [my Octave simplex code][op].

{% codeblock Generate simplex tableau lang:octave http://math.stackexchange.com/a/1605301/290189 %}
format rat;
c = [-1 2 -3 -1 0 0 0]'; b = [4 2 1]';
A = [
1 -1 -2 -1 1 0 0
2 0 1 -4 0 1 0
-2 1 0 1 0 0 1];
basis = 5:7;
B = A(:,basis); cB = c(basis); T = [B\A B\b; cB'*(B\A)-c' cB'*(B\b)]
T =

          1         -1         -2         -1          1          0          0          4
          2          0          1         -4          0          1          0          2
         -2          1          0          1          0          0          1          1
         -1          2          3          1          0          0          0          0
{% endcodeblock %}

Problem
---

It's tedious to identify the right pivot element by naked eye.

Solution
---

I wrote several lines of code to find the right row and column indices.

{% codeblock Automatic selection of pivot element lang:octave %}
zrow = T(end,:); nv = find(zrow==min(zrow(zrow<=0)));
r = T(1:end-1,end)./T(1:end-1,nv); ovp = find(r==min(r(r>0)));
disp([ovp nv])
2          1
basis(ovp) = nv;
B = A(:,basis); cB = c(basis); T = [B\A B\b; cB'*(B\A)-c' cB'*(B\b)]
T =

          0         -1       -5/2          1          1       -1/2          0          3
          1          0        1/2         -2          0        1/2          0          1
          0          1          1         -3          0          1          1          3
          0          2        7/2         -1          0        1/2          0          1

zrow = T(end,:); nv = find(zrow==min(zrow(zrow<=0)));
r = T(1:end-1,end)./T(1:end-1,nv); ovp = find(r==min(r(r>0)));
disp([ovp nv])
          1          4
basis(ovp) = nv;
B = A(:,basis); cB = c(basis); T = [B\A B\b; cB'*(B\A)-c' cB'*(B\b)]
T =

         -0         -1       -5/2          1          1       -1/2         -0          3
          1         -2       -9/2         -0          2       -1/2         -0          7
          0         -2      -13/2          0          3       -1/2          1         12
          0          1          1          0          1          0          0          4
{% endcodeblock %}

Here, I use

- `zrow`: objective function row
- `r`: ratio for pivot selection (an $n$-row column vector)
- `nv`: new/entering variable
- `ovp`: old/leaving variable *position*
    + I used `ov` at first, but I got a logic error with
        `basis(find(basis==ov)) = nv`.
    + In fact, the function `find(r==min(r(r>0)))` returns the row
        number (i.e. position) of the leaving variable.  We have to
        pass this position to `basis` so as to get the actual number
        representing the leaving variable.
        - `r = r .* (r > 0)` *didn't* work since 0 is selected as
            `min(r)`.
        - `r(r>0)` alters the indices and the size of positive
            elements.
        - So I have to use `find(r==...)` to get the right indices.

Lessons learnt
---

Some Octave syntax for finding (non-negative minimum) elements in an
one-dimensional array.

- `find(vect==val)` returns an array of indices of matching elements.
- `vect(cond)` extracts the elements satisfying `cond` from `vect`.

Issues
---

If there're two or more matches for the most negative entry at the
$z$-row or the ratio vector, [GNU Octave's `find` function][find]
returns an array.  Then the variables `nv` and `ovp` will be *wrong*.
I'll fix it if I have time in the future.

Unexpected discovery
---

An excellent [introduction to simplex method][simplex] with detailed
steps, illustrations and explanation for the impatient.

[2144734]: http://math.stackexchange.com/q/2144734/290189
[op]: https://git.io/vD9m7
[find]: https://www.gnu.org/software/octave/doc/v4.0.3/Finding-Elements-and-Checking-Conditions.html
[simplex]: http://math.uww.edu/~mcfarlat/s-prob.htm
