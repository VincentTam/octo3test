---
layout: post
title: "Remove Octopress's Default Image Border"
date: 2014-06-08 13:45:31 +0800
comments: true
categories: [Octopress, CSS]
---

Background
---

Two days ago, when I was writing
[a post about viewing Octopress blogs over HTTPS][PrevPost], which is
a *secure* and *encrypted* connection, I saw
[a Moziila Support page][MozSupp] which contained inline icons.  I
attempted to include those tiny pictures into some paragraphs.
However, the resulting appearance of those paragraphs *wasn't*
appealing—the white border surrounding the tiny icon *didn't* look
great.  It would be *better* if it could be removed.

<!-- more -->

Failed attemps
---

I did try to find the solution using Google, but it *wasn't*  useful
this time.  I re-read the source code of
[Clapper's image plugin][imgpop], that of
[the Solarized theme for Octopress][Solarized], and that of
[Larry Nung's GitHub page][LarryNung], but I still had *not* yet come
up with a solution.

Solution
---

With the help of a modern browser like Firefox, I inspected the CSS
rules and properties of an image. Clicking the checkbox for some CSS
properties, I finally found the four properties that were responsible
for the default white border.  By unchecking three of them, the border
would disappear.

To illustrate the function of those checkboxes in Firefox's DOM and
Style Inspector, I've included two screenshots from
[a page in Octopress's official documentation][OctopressDocImg].

Right-click the image and choose "**Inspect Element**".  Scroll down
the panel on the right that shows the CSS rules, as shown in the below
figure.

{% img fancybox /images/posts/RemoveImgBorder/Border.png 'Firefox DOM and Style Inspector' ['fig1'] %}

Uncheck the three checkboxes as shown in the below figure.

{% img fancybox /images/posts/RemoveImgBorder/NoBorder.png 'Instant preview of layout changes' ['fig2'] %}

The white border will disappear.

Flash videos were also affected by this CSS rule.  Therefore, I
searched for files under the `sass/` folder that contains
`flash-video`, after learning the command from
[a question on StackExchange][StackExchange1987926].

    $ grep -r flash-video ./sass
{:.cliUB}

I observed that the mixin `shadow-box` was used in
`sass/partials/_blog.scss`.[^1]  I performed another search, and found
the mixin in `sass/base/_utilities.scss`.[^2]

I tried setting `border: none` for `img` tags in
`sass/custom/_screen.scss`, but it was overridden by the above four
CSS rules.  Modifying the CSS files created by other developers
*wasn't* a good idea for me.  Therefore, I created a custom mixin to
override the default one.  I learned a way for overriding mixins from
[another Stack Exchange question][StackExchange7115959].

Though it is an ugly approach, I'm quite satisfied and I would like to
work on other things, such as my studies and another CSS problem in
this blog—improve the settings in `sass/custom/_print.scss` for
better printing experience.

---
[^1]: `sass/partials/_blog.scss` at commit [2d1cec6a]
[2d1cec6a]: https://github.com/VincentTam/vincenttam.github.io/blob/2d1cec6/sass/partials/_blog.scss#L48
[^2]: `sass/base/_utilities.scss` at commit [2d1cec6b]
[2d1cec6b]: https://github.com/VincentTam/vincenttam.github.io/blob/2d1cec6/sass/base/_utilities.scss#L8-L13
[PrevPost]: /blog/2014/06/05/mathjax-in-octopress-via-https/ "MathJax in Octopress via HTTPS"
[MozSupp]: http://mzl.la/13jCUSU "How does content that isn't secure affect my safety?"
[imgpop]: http://brizzled.clapper.org/blog/2012/02/05/a-simple-octopress-image-popup-plugin/ "A Simple Octopress Image Popup Plugin"
[Solarized]: http://erikzaadi.com/2012/04/22/solarized-color-scheme-for-octopress/ "Source code of Solarized theme for Octopress"
[LarryNung]: https://github.com/larrynung/larrynung.github.io/tree/source " Source code of Larry Nung's GitHub page"
[OctopressDocImg]: http://octopress.org/docs/plugins/image-tag/ "Image Tag"
[StackExchange1987926]: http://stackoverflow.com/questions/1987926/ "How do I grep recursively?"
[StackExchange7115959]: http://stackoverflow.com/questions/7115959/ "Adding !important using a Compass Mixin"
