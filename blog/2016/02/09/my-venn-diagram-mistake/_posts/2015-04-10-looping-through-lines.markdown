---
layout: post
title: "Looping through Lines"
date: 2015-04-10 15:01:48 +0800
comments: true
categories: Vim
---

Problem
---

I copied lines from an enumerated list in this blog and pasted it to
Vim.  The content in each list item was seen in the current Vim
buffer, but *not* the numbers.

### An illustration of the problem

A sample ordered list with 2015 items

1. Item one
2. Item two
3. Item three 

...

<ol start="2015"><li>Item 2015</li></ol>

What is seen in Vim after copy and paste

    Item one
    Item two
    Item three
    ...
    Item 2015

If one writes in Markdown and he/she copies a numbered list from
elsewhere to a text editor, then it will be very *inconvenient* to
manually add back the numbers.  To exaggerate this inconvenience, I
put "2015" above.

Goal
---

Insert the item number at the beginning.

    1. Item one
    2. Item two
    3. Item three
    ...
    2015. Item 2015

<!-- more -->

Solution
---

I read chapters 28--30 and 36 of
[*Learn Vimscript the Hard Way*][hard] by Steve Losh, and searched
"vim loop through lines" on Google.  After I saw `while liner <
line("$")` in a forum thread, I typed the following editor commands in
Vim.

{% codeblock A while-loop which runs through the lines lang:vim %}
let l = 1
1
wh l <= line("$")
  exe "norm! I" . l . "\<esc>j"
  let l += 1
endwh
{% endcodeblock %}

Why is `exe "norm!` used instead of `norm`?  Since `\<esc>` *can't* go
with `norm`.  Similarly, to include compound keys like `<S-v>` in `exe
norm!`, insert a backslash `\` before `<`.

[hard]: http://learnvimscriptthehardway.stevelosh.com/
