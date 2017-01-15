---
layout: post
title: "5 ImageMagick command line examples–part 1"
date: 2014-09-14 17:58:13 +0800
comments: true
categories: ImageMagick
external-url: http://www.ioncannon.net/linux/81/5-imagemagick-command-line-examples-part-1/
---

In the second example, the command only produces *one* image.  In the
past, *without* knowing the use of `+[x-pos]+[y-pos]`, I got *more
than one* image, and needed to delete them *except* the desired
one.[^1]

When I wrote a post about `screendump`, I took a screenshot of TTY1 so
as to prove that the text that followed the screenshot was *really*
contents in TTY1.[^2]  The width and height of the screenshot was
1280 px and 1024 px respectively.  I then used my old way to crop it
to an image with width 520 px and height 230 px, and got similar error
message described in ImageMagick's examples.[^3].

---
[^1]:
    In "[ImageMagick commands learnt][pp1]" in *Basic Use of
    Aptitude*, I got *four* images because I *didn't* append `+0+0`
    after `640x512`.

[^2]:
    There's an image cropped with ImageMagick in "[Usage][pp2]" in
    *Record Linux Terminal*.

    ~~~
    $ convert src.png -crop 512x225+0+0 tty1.png
    ~~~
    {:.cliUB}

[^3]:
    In "[The Missed Image (from a bad crop)][err]" in *Examples of
    ImageMagick Usage (version 6)*.

[pp1]: /blog/2014/06/30/basic-use-of-aptitude/#imagemagick-commands-learnt
[pp2]: /blog/2014/09/14/record-linux-terminal/
[err]: http://www.imagemagick.org/Usage/crop/#crop_missed
