---
layout: post
title: "A Comparison of Similar Horizontal Paddings in $\\rm \\LaTeX$ Math Mode"
date: 2015-05-16 22:12:58 +0800
comments: true
categories: [GIMP, ImageMagick, LaTeX]
---

Introduction
---

I prepared this little series of screenshots two years ago.  When
these pictures were made, I *didn't* know anything about [fancybox],
so I just shared it using Ubuntu One, which is now *dead*.[^ub1dead]

Now, with fancybox, the effects of these commands can be compared
below.  Click on the left and right arrows in the pop-up window to see
the little difference in spacing.

Comparison and conclusion
---

<picture class="fancybox"
  title="1. Original equal sign">
  <source srcset="/images/posts/flalign-spacing/1-crop.png"
    media="(min-width: 940px)"></source>
  <img alt="1. Original equal sign"
    src="/images/posts/flalign-spacing/1-crop300.png" />
</picture>

<picture class="fancybox noscr"
  title='2. "\quad" and "\,"'>
  <source srcset="/images/posts/flalign-spacing/2-crop.png"
    media="(min-width: 940px)"></source>
  <img alt='2. "\quad" and "\,"'
    src="/images/posts/flalign-spacing/2-crop300.png" />
</picture>

<picture class="fancybox noscr"
  title='3. "\quad" and "\:"'>
  <source srcset="/images/posts/flalign-spacing/3-crop.png"
    media="(min-width: 940px)"></source>
  <img alt='3. "\quad" and "\:"'
    src="/images/posts/flalign-spacing/3-crop300.png" />
</picture>

<picture class="fancybox noscr"
  title='4. "\quad" and "\;"'>
  <source srcset="/images/posts/flalign-spacing/4-crop.png"
    media="(min-width: 940px)"></source>
  <img alt='4. "\quad" and "\;"'
    src="/images/posts/flalign-spacing/4-crop300.png" />
</picture>

<!-- more -->

As can be seen from the slideshow of pictures, the fourth figure
resembles the first one the most.

Lessons learnt
---

I've found a quicker way to crop images.  In the past, using [GIMP]
for shrinking pictures would result in an image size larger than using
[ImageMagick].  However, I *didn't* know a way to get the coordinates
of the image file inside an image viewer, so I *couldn't* supply them
quickly to ImageMagick's command line utility.  Now, realising that
GIMP can be *regarded* as an image viewer, this problem can be quickly
solved.

Finally, with my experience of writing for loops in bash, it *didn't*
took me long to type this loop.[^pp_for]

    $ for i in {1..4}; do convert $i.png -crop 940x615+160+370 $i\_crop.png; done
{:.cliUB}

---
[^ub1dead]:
    For the link to the related post in the offical blog, you may go
    to the [first footnote][1stfn] of one of my recent posts in
    *Blog 1*: GitHub Page Build Failure.

[^pp_for]:
    Refer to
    [Concatenate Loop Variable's Value and a String in Bash][pp_for]
    in *Blog 1* if you want to know when, why and how I know to put a
    backslash '\\' behind the loop variable.

[fancybox]: http://fancyapps.com/fancybox/
[1stfn]: /blog/2015/05/06/github-page-build-failure/#fn:ub1dead
[GIMP]: http://www.gimp.org
[ImageMagick]: http://www.imagemagick.org
[pp_for]: /blog/2015/05/16/concatenate-loop-variables-value-and-a-string-in-bash/
