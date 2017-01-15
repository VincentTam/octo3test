---
layout: post
title: "Basic Use of Aptitude"
date: 2014-06-30 09:02:49 +0800
comments: true
categories: Linux
---

Why use Aptitude?
---

I tried upgrading the Linux kernel on Ubuntu using `apt-get`, but it
*failed*.

{% img /images/posts/Aptitude/GnomeTerm.png 'fig:gnome-term' ['apt-get cannot upgrade kernel'] %}

**How can I upgrade the Linux kernel?**

<!-- more -->

### A trivial solution

Using the GUI Update Manager is extremely simple—a click will quickly
settle this down.

{% img /images/posts/Aptitude/GUI.png 'fig:GUI' ['Update Manager'] %}

However, many geeks want a solution in CLI, *not* GUI.

Solution
--

The command `sudo aptitude` brings user into an interactive program.

{% img fancybox /images/posts/Aptitude/AptitudeBig.png 'Aptitude (Big version)' ['fig1'] %}

However, the screenshot is *too wide*.  How can one make it smaller so
that it's easier to view the image?

{% img /images/posts/Aptitude/Aptitude-0.png 'fig:Aptitude' ['Aptitude'] %}

The answer is *not* so difficult.  Several basic `stty` commands will
be enough.

### Some simple `stty` commands

    $ stty -a       # print all settings
    $ stty size     # print the buffer height and width
    64 160
    $ stty cols 80  # set buffer width to 80 characters
    $ stty rows 32  # set buffer height to 32 rows
{:.cliUB}

The default `size` for `gnome-terminal` is `24 80`, while the figures
for `/dev/tty[1-6]` is `64 160`.

I have observed that the changes to `stty` settings should be
permanent.  If one has quit the `tty`, and then goes back to the
*same* `tty` again, the settings are still there.  That's why I've
written down the default buffer sizes above.

I then use the following command to take a screenshot of Aptitude from
`/dev/tty1`.

    $ fbgrab -c 1 Aptitude.png
{:.cliUB}

Only the left top quarter of the image is needed.  Using [GIMP] to
crop the image will be an overkill.  Many users who love using CLIs
*won't* like that.  Moreover, how above repeating the cropping for
*several* screenshots with the *same* size?

### ImageMagick commands learnt

`-resize` option will scale down the input image with size
1280px×1024px to 300px×240px.

    $ convert -resize 300 1280x1024.png output.png
{:.cliUB}

That's the true cropping command.

    $ convert -crop 640x512 1280x1024.png output.png
{:.cliUB}

The outputs are four equally-sized image files like `output-0.png`.

### A list of simple Aptitude keystrokes

The basic key motions for moving the cursor is *exactly* the same as
those in Vim.

#### Seeking help

- Press `?` for help

    However, there's *too much* keys, and I'll list out some
    elementary ones.

#### Searching

- Press `/` to search
- Press `n` to repeat search
- Press `N` to repeat search *backward*
- Press `l` to view the matched packages *only*[^mod150410]

#### Working with windows

- Press `<F6>` to move to the next window
- Press `<F7>` to move to the previous window
- Press `q` to quit

#### Browsing through nodes

- Press `<Enter>` to expand a node.

    {% img /images/posts/Aptitude/AptitudeEnter-0.png 'fig:Enter' ['Press Enter'] %}

- Press `^` to go back to the parent node (`utils` → `Security
    Updates`)

    {% img /images/posts/Aptitude/AptitudeParent1-0.png 'fig:Parent1' ['Original position'] %}

    {% img /images/posts/Aptitude/AptitudeParent2-0.png 'fig:Parent2' ['Jumped to parent node'] %}

- Press `[` to expand recursively (`utils` expanded)

    {% img /images/posts/Aptitude/AptitudeExpand1-0.png 'fig:Expand1' ['Before expansion'] %}

    {% img /images/posts/Aptitude/AptitudeExpand2-0.png 'fig:Expand2' ['After expansion'] %}

- Press `]` to collapse all

#### Updating packages

- Press `u` to update the package list
- Press `U` to apply the upgrade to all upgradable packages

Note: One needs to confirm the action by pressing `g`.  See 
[a section below][a:applying-the-changes] for details.

#### Action on individual packages

- Press `+` to install/upgrade a package
- Press `-` to remove a package
- Press `_` to purge a package

Note: One needs to confirm the action by pressing `g`.  See 
[a section below][a:applying-the-changes] for details.

#### Applying the changes

- Press `g` to preview the actions

    {% img /images/posts/Aptitude/AptitudePreview-0.png 'fig:Preview' ['Aptitude preview window'] %}

    - Press `g` *again* in the preview window to apply the actions

    {% img /images/posts/Aptitude/AptitudePreview2-0.png 'fig:Preview2' ['Aptitude showing download progress'] %}

#### More commands

There's still more commands, like `i` for switching the tabbed panes
which contain the information of the packages.  One may view more in
[Aptitude Survival Guide][more_cmd] in Ubuntu's *Community Help Wiki*.

---
[^mod150410]: Last added on Apr 10, 2015.

[GIMP]: http://www.gimp.org/ "GIMP - The GNU Image Manipulation Program"
[a:applying-the-changes]: #applying-the-changes "Applying the changes"
[more_cmd]: https://help.ubuntu.com/community/AptitudeSurvivalGuide
