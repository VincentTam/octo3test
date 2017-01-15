---
layout: post
title: Don't Kill a Fly with a Cannon—Console Creation of GIF Files
date: 2013-12-29 16:30:00 +0800
categories: ImageMagick
published: true
comments: true
---

As the saying goes, a picture is worth a thousand words. Some netizens
believe that if a picture tells the truth.

If you want to take a screenshot in GNU/Linux text mode, you may use
`fbgrab` to get a PNG file (`fbcat` gives you a PPM file).

If you want to illustrate a process with a series of pictures, then
you'll probably need a GIF file. GIMP provides an easy way of creating
GIF files by selecting menu items and clicking a few buttons, but for
geeks who are used to CLI, this is not the final answer for them.

If your source PNG files are named as `[name]%s.png`, then the right
command is:[^1]

    $ convert $(for ((a=0; a<700; a++)); do printf -- "-delay 10 \
    > [name]%s.png" $a; done;) [result].gif
{:.cliUB}

- `-delay 10` means that each image is displayed for 0.1s.
- `[name]`: file name of the source PNG files without the ordinal
    number.
- `%s`: the n-th PNG file.
- `[result]`: file name of the target GIF file.

Without the whitespace between `png` and the ending `"`, things
*won't* work.

If the GIF animation has not been finished and intermediate files need
to be saved, *don't* use the GIF format, use MIFF instead.[^2]

---
[^1]:
    [Creating a GIF animation from PNG files][linuxse24014] on Unix &
    Linux Stack Exchange

[^2]:
    [GIF Animations and Animation Meta-data][official] in *Examples of
    ImageMagick Usage (Version 6)*

[linuxse24014]: http://unix.stackexchange.com/q/24014/
[official]: http://www.imagemagick.org/Usage/anim_basics/#gif_anim

*[CLI]: Command Line Interfaces
*[GIF]: Graphics Interchange Format
*[GIMP]: GNU Image Manipulation Program
*[MIFF]: Magick Image File Format
*[PPM]: Portable Pix Map
*[PNG]: Portable Network Graphics
