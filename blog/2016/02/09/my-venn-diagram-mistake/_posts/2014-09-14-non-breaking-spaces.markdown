---
layout: post
title: "Non-breaking Spaces"
date: 2014-09-14 19:08:39 +0800
comments: true
categories: kramdown
external-url: https://github.com/gettalong/kramdown/issues/159
---

Why use them?
---

This evening, when I was writing a post about an ImageMagick command that I've learnt, I used the unit "pixel" to describe the dimensions of an image.[^1]  In a measurement, the quantity and the unit should be separated by a *non-breaking* space for the sake of readability.[^2]

<!-- more -->

To illustrate the effect of a non-breaking space, I'll use some screenshots.

### With non-breaking space

{% img fancybox /images/posts/NBSP/nbsp1.png 900 'Move the mouse to the right and click for the next image' ['nbsp1'] %}

{% img fancybox noscr nopr /images/posts/NBSP/nbsp2.png 900 'Move the mouse to the left and click for the previous image' ['nbsp2'] %}

### *Without* non-breaking space

{% img fancybox /images/posts/NBSP/space1.png 900 'Move the mouse to the right and click for the next image' ['space1'] %}

{% img fancybox noscr nopr /images/posts/NBSP/space2.png 900 'Move the mouse to the left and click for the previous image' ['space2'] %}

How to use them?
---

Unlike [pandoc] markdown, one *can't* use `\ ` for a non-breaking space.[^3]

The external URL of this linklog has a link to a *Wikipedia* page which is cited in footnote 2.  From the table in the section "Keyboard entry methods", I can directly insert the non-breaking space character using Linux compose key.[^4]

---
[^1]: [*5 ImageMagick Command Line Examples–part 1*][pp1] in Blog 1.
[^2]:
    Non-breaking space. (2014, September 4). In *Wikipedia, The Free Encyclopedia*. Retrieved 11:13, September 14, 2014, from <http://en.wikipedia.org/w/index.php?title=Non-breaking_space&oldid=624117646#Non-breaking_behavior>

[^3]:
    [*Pandoc's markdown*][PandocNBSP] by John MacFarlane.

[^4]:
    For a list of Linux compose keys, see [*Linux Compose Keys List*][pp2].

[pp1]: /blog/2014/09/14/5-imagemagick-command-line-examples-part-1/
[pandoc]: http://johnmacfarlane.net/pandoc/ "a universal document converter"
[PandocNBSP]: http://johnmacfarlane.net/pandoc/demo/example9/pandocs-markdown.html#backslash-escapes
[pp2]: /blog/2014/08/02/linux-compose-keys-list/

*[URL]: Uniform Resource Locator
