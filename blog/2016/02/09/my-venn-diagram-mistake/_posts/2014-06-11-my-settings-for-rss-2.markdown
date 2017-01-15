---
layout: post
title: "My Settings for RSS (2)"
date: 2014-06-11 21:08:01 +0800
comments: true
categories: [Octopress, Ruby]
---

Note: I	*don't* use [Clapper's image popup plugin][clapper] anymore,
so the settings below are now gone.

Background
---

Using the following plugin, I finished removing the repeating figures
in my Atom Feed.[^1]

{% codeblock Erv Walter's plugin with my modifications lang:ruby http://www.ewal.net/2012/09/08/octopress-customizations/#remove-line-numbers-in-atom-feed %}
module CustomLiquidFilters
  def remove_linenumbers(input)
    input.gsub(/\<td\ class="gutter"\>.+?\<\/td\>/m, ' ')
  end

  RegexMap = {
    /\<div\ class="caption"\>Click the image for a larger view.\<\/div\>/ => '',
    /\<div\ id="image-dialog-\d+".*?\>.+?\<\/div\>/m => '',
    /\<div\ class="illustration\ print"\>.+?\<\/div\>/m => '',
  }

  def remove_bigfig(input)
    RegexMap.each_pair {|k,v| input.gsub!(k, v)}
    input
  end
end

Liquid::Template.register_filter CustomLiquidFilters
{% endcodeblock %}

Problem
---

**How about category Atom Feeds?**

It took me some time a find out that the file needed to be changed was
`source/_includes/custom/category_feed.xml`.  In that file, I tried to
do the same modification like what I had already did in
`source/atom.xml`.

{% codeblock My initial attempt to solve the problem in category feed page lang:xml /blog/2014/06/10/my-settings-for-rss-1/#putting-things-together %}
{% raw %}
<entry>
  <!-- other elements -->
  <content type="html"><![CDATA[{{ post.content | remove_linenumbers | remove_bigfig | expand_urls: site.url | markdownify | cdata_escape }}]]></content>
</entry>
{% endraw %}
{% endcodeblock %}

Then I generated the site *without* getting any errors.  However, when
I was previewing one of my category Atom Feeds, I found out that the
above changes to the XML had did *nothing*—the popup images still
appeared *twice*.

<!-- more -->

Exploring the default Jekyll code
---

I tried deleting my custom filter `remove_bigfig`, so that I could
test whether [Walter's instructions for removing line numbers][ewal]
worked for category Atom Feeds.  Unfortunately, his method failed.

Having *no* knowledge in how the XML file actually worked, I broke
things down by deleting the word `markdownify`, as well as
`remove_bigfig`, in order to see how things worked.  Then I saw
markdown code at `localhost:4000`.  It means that `markdownify`
converts markdown to HTML.  Thus, I tried to insert the word
`remove_bigfig` again just after `markdownify`, but I *still* saw the
same popup image appearing twice.

Since Walter's steps didn't work for me, I almost wanted to give it
up.

In the morning two days ago, I suddenly realized that I could write
see what's going on inside Octopress by getting the standard output.
*Not* going take an online tutorial about using Ruby debugger, I used
the most primitive way of debugging.

{% codeblock lang:ruby %}
def debug(input)
  puts input
end
{% endcodeblock %}

I recorded the output into a file and then browsed through it.  I
found the `{% raw %}imgpopup ...{% endraw %}` inside the file.
I also viewed the source code of `cdata_escape` so that I knew what
the function did: HTML encode the only argument.  I compared the
output before and after `cdata_escape`, and *couldn't* see any
difference.  Then it's clear that using an HTML tag for a regular
expression match *wasn't* feasible—change it back to Octopress's image
tag instead.

Ruby code learnt
---

- `body.gsub!(/(?=\b).+(?=\b)/) {|m| subs[m]}` from
    [Stack Overflow][so17766216].
    - `/(?<=\b)/` *didn't* work, since Perl and Ruby didn't allow
	variable-length patterns.
    - This is for an array of Strings, *not* a long String.
- `map` and `collect` methods in Array class are the *same*.
- `each` and `each_pair` methods in Hash class are *different*.

An illusory success
---

I wrote a function, and pushed it onto GitHub.[^2]  Viewing the site,
I could see that I successfully change the popup images into ordinary
ones in the category Atom Feed.  However, these changes were *also*
applied to my blog posts.[^3]  I thought that the error was due to the
use of `gsub!`, instead of `gsub`.

New version of my custom filter
---

I've been tired of studying code and reading documentations.
Therefore, I just adopted an ugly approach—input `.gsub(...)` for
*multiple* times.  Eventually, I got the desired output.

---
[^1]:
    For details, you may refer to [my post about RSS][PrevPost]
    written yesterday.

[^2]: `source/plugins/custom_filter.rb` at commit [449a911]
[^3]:
    `source/blog/2014/03/22/jump-to-latex-syntax-error/index.html` at
    commit [fad55d6]

[clapper]: http://brizzled.clapper.org/blog/2012/02/05/a-simple-octopress-image-popup-plugin/ "A Simple Octopress Image Popup Plugin"
[PrevPost]: /blog/2014/06/10/my-settings-for-rss-1/ "My Settings for RSS (1)"
[ewal]: http://www.ewal.net/2012/09/08/octopress-customizations/#remove-line-numbers-in-atom-feed "Remove line numbers in Atom Feed"
[so17766216]: http://stackoverflow.com/a/17766326 "Can I use gsub and Hashes in Ruby?" 
[449a911]: https://github.com/VincentTam/vincenttam.github.io/blob/449a911/plugins/custom_filter.rb#L18-L26
[fad55d6]: https://github.com/VincentTam/vincenttam.github.io/commit/fad55d6#diff-1
