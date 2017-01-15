---
layout: post
title: "Fixing Embedded Gists in Octopress"
date: 2014-08-05 20:18:53 +0800
comments: true
categories: [Octopress, online code highlighter]
---

Background
---

Octopress's default plugins for including code snippets/blocks enable
users to share code.  This is good for open source technologies.
*Without* intelligent and generous users of open source tools, I
*won't* be able to

1. show images which can be enlarged with a click;[^1]
2. display a category list of Octopress posts;[^2]
3. find out how to include contents rendered by Mathjax (e.g. $\rm
\LaTeX$) in the category list;[^3]
4. figure out a way to remove the line numbers and repeating figures
in the RSS (category) feeds;[^4]
5. embed SVG images that support zooming, panning and dragging.[^5]

While I was writing [my previous post][PrevPost], which was about a
basic pandoc template for generating a $\rm \LaTeX$ PDF file, I would
like to include a [Gist] in my post.

Some users will say that Octopress's default fuctionality `{% raw %}{%
include_code %}{% endraw %}` can highlight the code.

***Why does one think of embedding a Gist in Octopress?***

Rationale
---

To easily modify the embedded code block.

- Octopress's default plugins: `rake generate` is slow, especially
    when there's a lot of contents.  (say, more than a hundred posts)

- Embedded Gist: `{% raw %}{% gist gist_id [<file>] %}{% endraw %}` is
    responsible for embedding the code snippet for `<file>`---changing
    the contents of the Gist for `<file>` *doesn't* change this piece
    of [Jekyll] code.  Moreover, posting code to Gist is quite fast if
    you have [Gist.vim] plugin installed in Vim.[^6]

Problem
---

However, if one uses Gist instead of Octopress's default plugins for
sharing code, one will see that the line numbers *aren't* in the right
position.

{% img /images/posts/FixGist/wrong.png 'Gist #1' ['A Gist that does not look good'] %}

<!-- more -->

In [a comment][Octopress#847b] left by Brandon Mathis, the father of
Octopress, in Octopress issue #847, he said that **external contents**
in Octopress posts/pages *weren't* good.  However, with [Gist.vim] and
[fugitive.vim], managing code snippets in multiple places (i.e. the
Git repository for one's Octopress blog, and the Gist for the code
snippet) *isn't* so difficult.

Solution
---

There's a solution on devspade.[^7]  However, due to my *poor*
knowledge on Ruby, I *couldn't* understand what was actually done in
`plugins/git_tag.rb`.

Therefore, I followed Alex Rothberg's approach of changing a few CSS
properties of embedded Gists.[^8]

After an hour of testing, I realized that changing
`sass/partials/_syntax.scss` would suffice.  There's no need to
actually change `.themes/classic/sass/partials/_syntax.scss` unless
one wants to customize the theme.[^9]  Now I can use Gists in my
posts.[^10]

---
[^1]: Refer to [*Testing jQuery Image Popup*][imgpopup] for details.
[imgpopup]: /blog/2014/03/30/testing-jquery-image-popup/
[^2]: Refer to [*Octopress Category List*][CatList] for details.
[CatList]: /blog/2014/04/27/octopress-category-list/
[^3]:
    Refer to [*Fixing Broken URLs in the Catetory List*][CatListURL]
    for details.

[CatListURL]: /blog/2014/06/20/fixing-broken-urls-in-the-catetory-list/
[^4]:
    Refer to *My Settings for RSS [(1)][RSS1], [(2)][RSS2]* for
    details.

[RSS1]: /blog/2014/06/10/my-settings-for-rss-1/
[RSS2]: /blog/2014/06/11/my-settings-for-rss-2/
[^5]: Refer to [*Zooming SVG in Web Browsers*][SVGZoom] for details.
[^6]:
    Refer to [*Posting Code to Gist Efficiently*][VimGist] for
    details.

[VimGist]: /blog/2014/01/30/posting-code-to-gist-efficiently/
[SVGZoom]: /blog/2014/08/02/zooming-svg-in-web-browsers/
[^7]:
    Caffrey, B. Aug 6, 2014. *Fixing Gist Embeds in Octopress*.
    Retrieved from
    <http://devspade.com/blog/2013/08/06/fixing-gist-embeds-in-octopress/>

[^8]:
    For details, refer to

    1. Rothberg's comment in [Octopress issue #847][Octopress#847a];
    and
    2. [cancan101/cancan101.github.io@d30d956][d30d956]

[Octopress#847a]: https://github.com/imathis/octopress/issues/847#issuecomment-43047234 "GitHub gist changes break gist plugin formatting"
[d30d956]: https://github.com/cancan101/cancan101.github.io/commit/d30d956
[^9]:
    Before fixing the embedded Gists in Octopress, I *didn't* know how
    the SCSS files under `.themes/classic/partials/` affect those
    under `sass`.  Therefore, to prepare for a possible failure, I
    divided the process into two Git commits.

    1. Commit [233b333]: I changed
    `.themes/classic/sass/partials/_syntax.scss`, according to
    [cancan101/cancan101.github.io@d30d956][d30d956]

    2. Commit [e5668de]: I ran the command for installing a theme, and
    found out that my changes to the HTML and XML files were *lost*,
    just like commits [f687612] and [fc59e2a].  Though running `git
    checkout -- source/_includes/<file>` could revert the `<file>` to
    its previous version, it's still troublesome.

[233b333]: https://github.com/VincentTam/vincenttam.github.io/commit/233b333
[e5668de]: https://github.com/VincentTam/vincenttam.github.io/commit/e5668de
[f687612]: https://github.com/VincentTam/vincenttam.github.io/commit/f687612
[fc59e2a]: https://github.com/VincentTam/vincenttam.github.io/commit/fc59e2a
[^10]:
    For a successful example, you may refer to a Gist in my
    [previous post][PrevPost].

[PrevPost]: /blog/2014/08/03/my-pandoc-template-1/#gist13584483 "My Pandoc Template (1)"
[Gist]: https://gist.github.com
[Jekyll]: http://jekyllrb.com/
[Gist.vim]: https://github.com/mattn/gist-vim "Vim script for Gist"
[Octopress#847b]: https://github.com/imathis/octopress/issues/847#issuecomment-11386079
[fugitive.vim]: https://github.com/tpope/vim-fugitive "a Git wrapper in Vim"
