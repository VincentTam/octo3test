---
layout: post
title: "The Daring Fireball Linked List"
date: 2014-08-30 14:44:16 +0800
comments: true
categories: Octopress
external-url: http://daringfireball.net/linked/
---

{% raw %}
{% quote author:"Daring Fireball" %}
{% endraw %}
<div class="article"><h5>The Daring Fireball Linked List</h5><h6 class="dateline">Friday, 29 Aug 2014</h6>
<dl class="linkedlist"><dt><a href="http://recode.net/2014/08/29/codered-apple-wearable-wont-ship-until-next-year/">Paczkowski: Apple Wearable Won't Ship Until Next Year</a>&nbsp;<a class="permalink" title="Permanent link to 'Paczkowski: Apple Wearable Won't Ship Until Next Year'." href="http://daringfireball.net/linked/2014/08/29/paczkowski">&#9733;</a></dt><dd>
<p>John Paczkowski:</p><quote><p>So that new wearable device Apple is introducing on September 9?  It's going to be a while before anyone is actually wearing it.  Sources in position to know tell me it won't arrive at market for a few months.  "It's not shipping anytime soon," said one.  So when does Apple plan to ship its eagerly anticipated wearable?  That's not clear, but my understanding is that we're unlikely to see it at retail until after the holiday season—think early 2015.</p></quote><p>If true, why?  I'm guessing something similar to why they pre-announced the original iPhone—otherwise it would leak through regulatory filings with various governments around the world.  Plus, they have no worries about the <a href="https://en.wikipedia.org/wiki/Osborne_effect">Osborne Effect</a> with a new product category.</p></dd></dl></div>...<div class="article"><h5>About the Linked List</h5><p>The Daring Fireball Linked List is a daily list of interesting links and brief commentary, updated frequently but not frenetically. Call it a "link log", or "linkblog", or just "a good way to dick around on the Internet for a few minutes a day".</p></div>
{% raw %}
{% endquote %}
{% endraw %}

Since I like the clarity of the linked list format, I'd been looking
for ways to do this in June, but I *couldn't* understand them.
Moreover, as can be seen from the size of `git diff
octopress/linklog`[^1], the difference between `linklog` and `master`
branches is *very large*.  I *couldn't* understand the git-diff result
for `source/javascripts/octopress.js`. This would discourage any
ordinary users from looking into the issue.  Therefore, I once said
that I *didn't* know how to write an Octopress linklog.[^2]

Last night, I added an *unofficial* linklog feature to Octopress.[^3]
The official guide *didn't* worked for me.[^4]  I could see the
complaints from some users who had found that this feature *wasn't*
working.[^5]  At the same time, I could see some blogs that included
this feature.[^6]  The last commit of the `linklog` branch was in
2012.[^7]  It seems that it *isn't* likely that Octopress will work on
this in the next few months.[^8]

<!-- more -->

Yesterday, I *finally* understood the following posts about DIY
Octopress linklogs.

1. [Make a Linked List With Octopress][candler] in *the Candler Blog*.
2. Octopress pull request #[1538]
3. [Creating a Linklog Post][wllm] in *New Learnings from Old
Understandings*

In the commit in item 2, only *a few* lines was changed, and it should
be comprehensible even for one who knows basic HTML and programming
only.  In item 1, there's *no* `page.external-url` in
`source/_includes/article.html`, but it's present in item 3.  I
compared those [Liquid] code with the relevant files in `linklog`
branch.  Item 1 also contains the changes in `source/atom.xml`.  From
this, I worked out `source/_includes/custome/category_feeds.xml`,
though the code is *far from beautiful*.  To work out the blog
archive, I looked at Dr.Z's one.

I was bored of this kind of writing code and *didn't* want to further
change the CSS properties of linklog titles.  The linklog markers and
permalink labels should be enough.

Lessons learnt
---

### YAML front matter of each post

In the following sample Markdown source file for a post, there's a
variable `external-url`.  After looking at the above code blocks, I've
learnt how to use those variables.

{% codeblock lang:text Contents of "2014-08-30-title-goes-here.markdown" %}
{% raw %}
---
layout: post
title: "Title goes here"
date: 2014-08-30 14:44:16 +0800
comments: true
categories: [category 1, category 2]
external-url: http://www.example.com
---

Blog contents goes here...
{% endraw %}
{% endcodeblock %}

- `{% raw %}{{% if post.external-url %}}{% endraw %}` tests if the
    front matter of a post contains `external-url` variable.
- `{% raw %}{{ post.external-url }}{% endraw %}` returns the value of
    `external-url` variable.

### YAML variables in `_config.yml`

- I added a line `myVar: value` into `_config.yml`.
- While configurating `source/_includes/article.html`, if I need to
    access an variable in `_config.yml`, I have to use
    `{% raw %}{{ site.myVar }}{% endraw %}`.  You'll get *nothing* if
    you miss `site.`.

---
[^1]:
    I assume that Ocotpress's GitHub repository has been added to the
    list of remote repositories as `remotes/octopress`.

[^2]:
    {% raw %}
    {% quote author:"Me" url:http://localhost:4000/blog/2014/06/14/electronic-gadgets-and-absent-mindedness/ title:"九成人感眼睛疲倦 藍光加快退化" %}
    {% endraw %}
    <del>Unfortunately, I *haven't* find out how to include Octopress's linklog feature into my Octopress blog.</del>
    {% raw %}
    {% endquote %}
    {% endraw %}

[^3]: Commits [39293af] and [e35fab7].
[^4]: [Writing a Linklog][OctoLinklog] in *Octopress Documentation*.
[^5]: Ocotpress issue #[418].
[^6]:
    For example,

    - [DrZ.ac]
    - [Moving to Linklog][workingeg2] in *Weblog Сергія Макаренка*.

[^7]: Commit [1750830] at the tip of `linklog` branch.
[^8]:
    {% raw %}
    {% quote author:@octopress url:https://alpha.app.net/octopress/post/14385019 %}
    {% endraw %}
    @matrixagent sorry.  It's killing us too.  The linklog feature is going to be theme based and right now we're working on breaking out the theme from the release to distribute the development a little better.  It's tricky to manage asset installation.
    {% raw %}
    {% endquote %}
    {% endraw %}

[39293af]: https://github.com/VincentTam/vincenttam.github.io/commit/39293af "Unofficial linklog support in progress..."
[e35fab7]: https://github.com/VincentTam/vincenttam.github.io/commit/e35fab7 "Added unofficial linklog support to more pages"
[418]: https://github.com/imathis/octopress/issues/418 "Allow linklog style posts"
[DrZ.ac]: http://drz.ac/blog/
[workingeg2]: http://makarenko.me/07-17-2013-moving-to-linklog/
[1750830]: https://github.com/imathis/octopress/commit/1750830 "Merge pull request #800 from mxmerz/linklog"
[OctoLinklog]: http://octopress.org/docs/blogging/linklog/
[candler]: http://www.candlerblog.com/2012/01/30/octopress-linked-list/
[linklog]: http://octopress.org/docs/blogging/linklog/
[1538]: https://github.com/imathis/octopress/pull/1538 "Add a capture to article include to use external-url"
[wllm]: https://wllmtrng.github.io/blog/2014/04/17/creating-a-linklog-post/
[Liquid]: http://docs.shopify.com/themes/liquid-documentation/basics
