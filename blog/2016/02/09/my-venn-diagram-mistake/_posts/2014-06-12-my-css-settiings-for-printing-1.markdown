---
layout: post
title: "My CSS Settiings for Printing (1)"
date: 2014-06-12 21:41:44 +0800
comments: true
categories: [Octopress, CSS]
---

Objective
---

To set up a printer-friendly framework for blog posts/pages.

Background
---

Two months ago, in order to install [Clapper's image popup plugin][imgpopup] in this blog[^1], I studied [the source code of his blog on GitHub][BrizzledSrc].  In this process, I learnt the roles of `/sass\/(custom\/_)?(screen|print).scss/`.  (To be concise, I write a [Perl] regex.)  Lacking time to learn CSS, I just directly copied Clapper's CSS settings for printing.

Problems on the printed page
---

1. Missing author and date
2. Screenshots were too large and part of them flowed out of the page.

<!-- more -->

Solution
---

### Display author and dates

Using [Firefox]'s "**Inspect Element**" and searching the generated HTML code for a post, I discovered that those missing parts belonged to `<pre class="meta">` tags.  In Clapper's `sass/custom/_print.scss`, he *didn't* display them.  Before the removal of the section of CSS code that hid the author and date, I input ".meta" in the search box above the panel that showed the HTML code of the current document.

{% img fancybox /images/posts/PrintScss/SearchCode.png 'Using Firefox Style Inspector to search code' ['fig1'] %}

I *don't* want the links for previous and next posts to appear in the printed version of a post in this blog, so I inspected the HTML code for those two links, and saw that only those two links belonged to an `<a class="base-alignment ...">` tag.  Therefore, I change `p.meta` to `a.base-alignment` in `sass/custom/_print.scss`.[^2]

### Scaling down the screenshots

After I wrote the HTML and CSS code of an HTML5 slide used for a presentation, I knew something about the `max-width` property in CSS.

Google searches:

| Query string                                 | Rank              | Remarks                                                            |
| :------------------------------------------- | ----------------: | :----------------------------------------------------------------- |
| image max-width                              | [1][R1]           | Failed                                                             |
| resize image max width height                | [1][R2a],[2][R2b] | They're about C#.                                                  |
| resize image max width ratio                 | [1][R3]           | I *haven't* learnt jQuery.                                         |
| max-width, max-height: aspect ratio not kept | [1][R4]           | The image was horizontally squeezed *without* changing the height. |
| keep aspect ratio                            | [7][R5]           | I knew what to do from the first two answers.                      |

You may refer to [commit 4be1bbf][4be1bbf] for details.

---
[^1]: Commit [94c7d97]
[^2]: `sass/custom/_print.scss` at commit [4be1bbf]

[imgpopup]: http://brizzled.clapper.org/blog/2012/02/05/a-simple-octopress-image-popup-plugin/ "A Simple Octopress Image Popup Plugin"
[94c7d97]: https://github.com/VincentTam/vincenttam.github.io/commit/94c7d97
[BrizzledSrc]: https://github.com/bmc/brizzled/
[Perl]: http://www.perl.org/ "The Perl Programming Language"
[4be1bbf]: https://github.com/VincentTam/vincenttam.github.io/commit/650c711a68c847b49b3beb96769380f4b2c878f7#diff-2
[R1]: http://stackoverflow.com/a/11079048 "How to set max width of an image in CSS"
[R2a]: http://stackoverflow.com/questions/6501797/ "Resize image proportionally with MaxHeight and MaxWidth constraints"
[R2b]: http://www.microtuts.com/c-resize-an-image-proportionally-specify-max-widthheight/ "C#: Resize an image proportionally (specify max width/height)"
[R3]: http://stackoverflow.com/questions/3971841/ "How to resize images proportionally / keeping the aspect ratio?"
[R4]: http://stackoverflow.com/questions/12991351/ "CSS force image resize and keep aspect ratio"
[R5]: http://stackoverflow.com/questions/757782/ "How to preserve aspect ratio when scaling image using one (CSS) dimension in IE6?"
[4be1bbf]: https://github.com/VincentTam/vincenttam.github.io/commit/4be1bbf
