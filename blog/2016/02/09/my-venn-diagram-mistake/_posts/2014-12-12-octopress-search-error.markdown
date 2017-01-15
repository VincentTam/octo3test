---
layout: post
title: "Octopress Search Error"
date: 2014-12-12 12:52:12 +0800
comments: true
categories: Octopress
---

Problem
---

I used the search box in the navigation bar to search for pages in
this blog.

<picture class="fancybox center" title="Searched with the search box for pages in this blog">
  <source srcset="/images/posts/OctSearchErr/err1.png" media="(min-width: 880px)"></source>
  <img alt="err1" src="/images/posts/OctSearchErr/err1-s.png" />
</picture>

It had been working well, but a month ago, the box searched for
webpages *other* than those in this blog.

<picture class="fancybox center" title="Custom search failed">
  <source srcset="/images/posts/OctSearchErr/err2.png" media="(min-width: 880px)"></source>
  <img alt="err2" src="/images/posts/OctSearchErr/err2-s.png" />
</picture>

**How to limit the search to pages within this site only**?

<!-- more -->

Discussion
---

I read the generated HTML code for the search box, and compared the
difference between a version of an HTML file in November, and another
version in early October.  However, I *couldn't* find out the reason.

A temporary "fix"
---

### Local re-generation and preview of site contents on \*nix

I noticed that the custom search failed after I had uploaded a Git
commit which had been written on M\$ Win\* 7.[^befd4a7]  Therefore,
when I was using my \*nix desktop, I re-generated this site and
previewed it.

{% img fancybox center /images/posts/OctSearchErr/temp-fix1.png 800 'Locally generated site on Ubuntu' ['temp_fix1'] %}

I saw that The search box worked fine this time.

{% img fancybox center /images/posts/OctSearchErr/temp-fix2.png 800 'The problem was gone!' ['temp_fix2'] %}

Then, I *didn't* hesitate to deploy this site to GitHub
Pages.[^2e56754]

### Confirmed the "fix"

I browsed this blog on GitHub Pages to make sure that the problem had
been "fixed".

{% img fancybox center /images/posts/OctSearchErr/temp-fix3.png 800 'Test the fix on GitHub Pages' ['temp_fix3'] %}  
{% img fancybox center /images/posts/OctSearchErr/temp-fix4.png 800 'The problem was really gone!' ['temp_fix4'] %}

### Failed to find the cause

I guessed that this was due to the difference between \*nix and M\$
Win\*, after failing to find any clue from comparing the source code
in different versions.

Problem appeared again
---

I generated this site again on M\$ Win\* since I had updated a
page.[^6ea49e8] [^31c066a]  Then the search box *couldn't* limit the
search to pages within this blog.

Repeating the "fix"
---

Three days ago, after pulling the recent commits from the remote
repository of this blog on GitHub, I wrote another post on Ubuntu, and
locally generated this site before publishing the post.[^af4f216]
Unluckily, the search box still *failed* to work.

Moreover, I *couldn't* understand why the custom search *failed* in
Mozilla Firefox and Google Chrome, but *worked* in M\$ Internet
Explorer.

Solution
---

### Fix the problem

I found the page [*Add a Search Box*][guide] from the Columbia
University.  I followed the steps for limiting the search by
site.[^35955df]  *Without* the line `<input type="hidden" name="as_dt"
value="i"/>` in `source/_includes/navigation.html`, the search box
still work fine.

{% img fancybox center /images/posts/OctSearchErr/sol1.png 800 'Locally generated site on Ubuntu' ['sol1'] %}  
{% img fancybox center /images/posts/OctSearchErr/sol2.png 800 'The search box can finally limit the search by site.' ['sol2'] %}

### Test the fix

In the past, I used `rake preview` to detect any errors.  As the
number of posts and pages grew, this method has become *inefficient*.

While testing the instructions in this guide, I put the HTML code for
the custom search box in an HTML file, and viewed the effects in
Firefox.  The URL variable `ei` was still there, but the custom search
was restricted to this site *only*.

After solving this problem, I discovered another solution in the pull
requests of Octopress.[^alt_sol]

---
(Added on Dec 21, 2014)

Now, the problem has been *fixed*.[^514ed5e]

---
[^befd4a7]: See commit [befd4a7] on the `source` branch for details.
[^2e56754]: See commit [2e56754] on the `master` branch for details.
[^6ea49e8]: See commit [6ea49e8] on the `source` branch for details.
[^31c066a]: See commit [31c066a] on the `master` branch for details.
[^af4f216]: See commit [af4f216] on the `source` branch for details.
[^35955df]: See commit [35955df] on the `source` branch for details.
[^alt_sol]: See [Octopress issue 1681][alt_sol] for details.
[^514ed5e]:
    See commit [514ed5e] on the `master` branch of Octopress's
    repository on GitHub.

[befd4a7]: https://github.com/VincentTam/vincenttam.github.io/commit/befd4a7
[2e56754]: https://github.com/VincentTam/vincenttam.github.io/commit/2e56754
[6ea49e8]: https://github.com/VincentTam/vincenttam.github.io/commit/6ea49e8
[31c066a]: https://github.com/VincentTam/vincenttam.github.io/commit/31c066a
[af4f216]: https://github.com/VincentTam/vincenttam.github.io/commit/af4f216
[guide]: https://cuit.columbia.edu/add-search-box
[35955df]: https://github.com/VincentTam/vincenttam.github.io/commit/35955df
[alt_sol]: https://github.com/imathis/octopress/pull/1681
[514ed5e]: https://github.com/imathis/octopress/commit/514ed5e
