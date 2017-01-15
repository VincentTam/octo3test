---
layout: post
title: "Fixing Broken URLs in the Catetory List"
date: 2014-06-20 23:51:06 +0800
comments: true
categories: [Octopress, Ruby]
---

(Added on AUG 20, 2014)

Since the update of Octopress source code, this post *won't* make
sense anymore.  I *can't* find a way to use MathJax in category list
entries anymore because `category` in `plugins/category_generator.rb`
and `plugins/category_list_tag.rb` have both been changed to *lower
case*.  I *don't* know how to track the Ruby code to revert it.

<!-- more -->

Background
---

I imported some posts in [my old blog on WordPress.com][OldWPBlog],
and some categories like "$\rm \LaTeX$-Suite" *weren't* displayed
properly.  Moreover, the link for some categories like "C/C++" was
*dead* in [Watson’s Category List Plugin][CatList].

{% img fancybox /images/posts/CatList/CatList404.png 800 'Dead links in category list' ['fig1'] %}

Unlike two months ago[^1], I now think that it's better for me to find
out why the catergory list *failed* to generate a correct URL for a
category page, but the default links for category pages in the blog
archive are *right*.

{% img fancybox /images/posts/CatList/CatListURL.png 800 'Correct links in blog archive' ['fig2'] %}

I certainly know the precise location of the part of
`plugins/category_list_tag.rb` that has generated the *erroneous*
links for some category pages.

    category_url = File.join(category_dir, category.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase)

Finding the solution
---

I tried to browse the code in `plugins/category_generator.rb` to find
out Octopress's way of generating the URL of categories and what's
wrong with the above method to extract `category_url`.

At the beginning, I saw `category_dir`, and used `*` and `n` in Vim to
explore the script.  I did so because in
`plugins/category_list_tag.rb`, `category_dir` was a part of
`category_url`.  I jumped through the `category_dir`s for a few times
since they *weren't* related to the generation of the URL for a
category page.  When the cursor was at line 109, I discovered the word
`category.to_url`. I typed `*` on `to_url`, and was brought to line
176.  This `category.to_url` was in `category_link` method.  From the
`<a>` tag inside this method, I'm sure that I should give `to_url` a
try.

    "<a class='category' href='/#{dir}/#{category.to_url}/'>#{category}</a>"

Verifying my guess
---

To test if my guess is correct, I used to most primitive method for
debugging: insert `puts category + ": " + category.to_url` below the
line that defined `category_url` in `plugins/category_list_tag.rb`.
After that, I generated and previewed the site.

For the terminal output, I could see that `catergory` was the name of
the a category, while `category_url` was part of the correct URL for
a category page.  Therefore, in `plugins/category_list_tag.rb`, the
method that generated `category_url` should be changed like this:

    category_url = File.join(category_dir, category.to_url)

---
[^1]:
    Last month, I used a specfic way to get things work.

    {% raw %}
    {% quote author:"Me" url:https://vincenttam.github.io/blog/2014/05/24/using-mathjax-in-category-list-entries/ title:"Using MathJax in Category List Entries" %}
    {% endraw %}
    As I am not going to spend most of my time to study IT, I aimed at merely changing "LaTeX" to "$\rm \LaTeX$".
    {% raw %}
    {% endquote %}
    {% endraw %}

[OldWPBlog]: https://blogue.wordpress.com/
[CatList]: http://www.dotnetguy.co.uk/post/2012/06/25/octopress-category-list-plugin/
