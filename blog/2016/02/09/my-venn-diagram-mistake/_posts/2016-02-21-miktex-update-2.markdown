---
layout: post
title: "Mik$\\rm \\TeX$ Update (2)"
date: 2016-02-21 22:37:20 +0800
comments: true
categories: [LaTeX, M$ Win*]
---

Background
---

I need to write something in $\rm \LaTeX$.

Problem
---

I *can't* get any update by clicking "Update Mik$\rm \TeX$" in the
icon triggered by `miktex-portable.cmd`.  I faced the same problem as
[rantrave's][texse251242].

<!-- more -->

Discussion
---

If one urgently needs to get the updated version of a particular
package, one may directly download the LZMA file.[^pp1]  Actually, the
remote package repositories are still *online*.  I guess the problem
is in Mik$\rm \TeX$ update tool.  Anyways, I am still grateful for the
effort of its developers.

Resolution
---

The easiest way is to sit there and *wait for a day*.  Then the
problem will be *gone*.  It is possible that some difficulties occur,
but they can be overcome.

<picture class="fancybox" title="Windows API error 145">
  <source srcset="/images/posts/MikTeXUpdate2/api-err.png"
    media="(min-width: 460px)"></source>
  <img alt="Windows API error 145" width="300"
    src="/images/posts/MikTeXUpdate2/api-err.png" />
</picture>

{% render_code miktex-update2/err-2016-02-22-22-00.txt I clicked "Copy Info" and got this. %}

From [*Mik$\rm \LaTeX$ Update*][pp1], I know that only the "Update
Mik$\rm \TeX$" in the menu triggered by clicking the small icon will
work.  The update wizard inside the big window for the package manager
*won't*.

Sometimes, the chosen remote package repository can fail.  In this
case, just click the button and search for another one.

{% render_code miktex-update2/update-2016-02-21-20-19.txt An example of failed update. %}

Lessons learnt
---

When there's nothing can be done, then one needs the mind of
non-action or non-being.

---
[^pp1]:
    For example, the situation described in
    [*Mik$\rm \LaTeX$ Update*][pp1].

[texse251242]: http://tex.stackexchange.com/q/251242
[pp1]: /blog/2015/06/09/miktex-update/


