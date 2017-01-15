---
layout: post
title: "Octopress Category List"
date: 2014-04-27 10:38:23 +0800
comments: true
categories: Octopress
---

Yesterday, the category list of this blog was still like the one in
[Vigo's *Development Tips*][old_cat_list].[^1]  However, I think that
[Watson's Category List Plugin][new_cat_list] is more user-friendly
because users can view the categories by scrolling, instead of
clicking and waiting for another page to load. 

I tried copying everything, and put them in the right places, but
initially I failed.  I quickly realized that I *wrongly* named the
plugin file as `category_list.rb`, and `rake preview` still didn't
produce the desired list.  Then I moved the HTML file that calls the
plugin, namely the `category_list.html`, from
`/source/_includes/asides` to `/source/_includes/custom/asides`, and
changed `_config.yml` a little bit.[^2]

Finally, I copied the contents from my *working* example (i.e.
`/source/_includes/custom/asides/about.html`) *first*.  As expected, I
could see that the "About Me (Brief)" section was duplicated.  I
changed the code bit by bit, and I managed to include a list of
categories.

---
[^1]:
    `source/blog/categories/index.markdown` at commit [94c7d97]

[^2]: `_config.yml` at commit [7dcf6b7]
[7dcf6b7]: https://github.com/VincentTam/vincenttam.github.io/commit/7dcf6b7#diff-0

[94c7d97]: https://raw.githubusercontent.com/VincentTam/vincenttam.github.io/94c7d97/source/blog/categories/index.markdown
[old_cat_list]: http://vigodome.com/blog/categories/
[new_cat_list]: http://www.dotnetguy.co.uk/post/2012/06/25/octopress-category-list-plugin/
