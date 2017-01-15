---
layout: post
title: "Distribution of User Reputation on Math Stack Exchange"
date: 2016-01-07 17:34:38 +0800
comments: true
categories: [SQL, Octave]
---

Background
---

Recently, I post math on [Mathematics Stack Exchange][mathse] instead
of here.

Problem
---

How can one get a table for the distribution of reputation on that
site?

Solution
---

Write a SQL query on [Stack Exchange Data Explorer][datase].

{% codeblock User's Total Reputation Distribution lang:sql http://goo.gl/Kqwepp %}
select u.range as [prev row <= Reputation <= this row], count(*) as [Users]
from (
    select case
    when Reputation between 1 and 4 then 4
    when Reputation between 5 and 9 then 9
    when Reputation between 10 and 14 then 14
    when Reputation between 15 and 19 then 19
    when Reputation between 20 and 49 then 49
    when Reputation between 50 and 74 then 74
    when Reputation between 75 and 99 then 99
    when Reputation between 100 and 124 then 124
    when Reputation between 125 and 249 then 249
    when Reputation between 250 and 499 then 499
    when Reputation between 500 and 999 then 999
    when Reputation between 1000 and 1999 then 1999
    when Reputation between 2000 and 2499 then 2499
    when Reputation between 2500 and 2999 then 2999
    when Reputation between 3000 and 4999 then 4999
    when Reputation between 5000 and 9999 then 9999
    when Reputation between 10000 and 14999 then 14999
    when Reputation between 15000 and 19999 then 19999
    when Reputation between 20000 and 24999 then 24999
    else 400000 end as range
        from Users) u
    group by u.range
{% endcodeblock %}

The indentation is automatically done by [Vim].  I know that the
syntax is *ugly*.  If I assign text string to the column `u.range`,
then the table is sorted in *alphabetical order* of that column
instead of numerical order.  This *doesn't* make sense.  Therefore, I
use a dirty way to get the statistics, and played with the built-in
graphing function.  However, the visual result *isn't* so
satisfactory.

{% img fancybox /images/posts/MathSE/reputation985.png 300 'Reputation v.s. Users on Math Stack Exchange' ['MathSE reputation statistics'] %}

Anyone who has completed high school will realise that a log graph is
better.  Asking for this feature on [Meta Stack Exchange][metase]
takes time.  I believe that such feature request will be rejected by
the moderator to reduce the workload of Stack Exchange company.
Therefore, I plot the log graph using [GNU Octave][octave].

1. Download the CSV file to get the data.
2. Change it to an GNU Octave script file.
3. Open it using Vim.
4. Do the necessary text substitutions so that the data becomes a
   matrix.
5. Complete the script file by adding the plot commands.
    - [Line format arguments][line-format]
    - [Add coordinates to points][3184351]

{% render_code mathse-rep.m The source code for the log plot %}

I choose `loglog` because `semilogx` causes the labels on tail to
overlap.  Here's the results.

<picture class="fancybox" title="Target log graph">
  <source srcset="/images/posts/MathSE/loglog1215.svg"
    media="(min-width: 800px)"></source>
  <img alt="Target log graph" width="300"
    src="/images/posts/MathSE/loglog576.svg" />
</picture>

Lessons learnt
---

I can save plots in GNU Octave as a SVG file.  I know this after
searching "octave export svg".  From
[*Printing and Saving Plots*][svg-export], I see `print -d[device]`,
in which one can substitute the output format.  For example, I used
`print -dsvg` to generate the SVG's shown above.

[mathse]: http://math.stackexchange.com
[datase]: http://data.stackexchange.com
[Vim]: http://www.vim.org
[metase]: http://meta.stackexchange.com
[octave]: https://www.gnu.org/software/octave
[line-format]: https://www.gnu.org/software/octave/doc/interpreter/Two_002dDimensional-Plots.html
[3184351]: http://stackoverflow.com/a/22822575/3184351
[svg-export]: https://www.gnu.org/software/octave/doc/interpreter/Printing-and-Saving-Plots.html
