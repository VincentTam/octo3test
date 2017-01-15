---
layout: post
title: "Record Linux Terminal"
date: 2014-09-14 11:52:09 +0800
comments: true
categories: Linux
---

Why?
---

With detailed output from the terminal, other users can understand the
problem better.  This helps them come up with a solution to the
problem.

Why don't we use `>` and `>>` to capture the standard output?

Using `screendump`, one can record the commands *and* their output at
*one* time; using `[cmd] > output.txt`, `output.txt` only consists of
the output of `[cmd]`, but *not* what he/she has typed.  (i.e.
`[cmd]`)  The commands are often complicated and more than one line in
length---copying and pasting text from the terminal are thus more
difficult.  Therefore, `screendump` is useful.

Why don't we use `fbgrab` or `fbcat` to get a screenshot of the
terminal?

The goal is to let other know what's in the terminal.   A screenshot
of the terminal is easy to make.  However, its file size is *much*
greater than the screen capture made of text.  Bitmaps *don't* look
good when one zooms in on them with a great magnification.  Therefore,
to achieve the same goal, one may use text instead of images.[^1]

<!-- more -->

Usage
---

Suppose you want to record your TTY1.

{% img /images/posts/Screendump/tty1.png 'Screenshot of TTY 1 taken with fbgrab' ['tty1'] %}

The above screenshot is taken using `fbgrab -c 1 tty1.png`.  Even
though it's cropped, it still has thousands of bytes.  Nevertheless,
if I show it using text, there're only 337 bytes since the text only
consists of 337 characters.

    Ubuntu 14.04.1 LTS owner-Inspiron-560s tty1

    owner-Inspiron-560s login: owner
    Password:
    Last login: Sat Sep 13 13:04:04 HKT 2014 on tty2
    Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-35-generic i686)

     * Documentation:  https://help.ubuntu.com/

    owner@owner-Inspiron-560s:~$ cat > /dev/null
    This is tty1.
    owner@owner-Inspiron-560s:~$
{:.cliUB}

The above text is captured with `screendump`.  How to use
`screendump`?  There's a manual page about this tool. The following
examples save the time.

### Failed commands

    owner@owner-Inspiron-560s:~$ screendump 1 tty1.png
    usage: screendump [n]
    owner@owner-Inspiron-560s:~$ screendump 1
    couldn't read /dev/vcsa1
{:.cliUB}

1. Using `screendump` like `fbgrab` *doesn't* work.
2. Just copying the suggested command *doesn't* work either.

### Successful examples

Suppose that each of TTY1-6 has 64 rows and 160 columns.

After one issued the command `screendump 1` with *root* privilege in
*another* TTY, the *whole* TTY1 is printed on the TTY that invoked
`screendump`.  Since TTY1 has 64 rows, to view the first line of TTY1,
one needs to use `<C-Page Up>` to scroll up the screen.  The cursor
will be at the bottom.

~~~
Ubuntu 14.04.1 LTS owner-Inspiron-560s tty1
owner-Inspiron-560s login: owner
Password:
Last login: Sat Sep 13 13:04:04 HKT 2014 on tty2
Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-35-generic i686)

 * Documentation:  https://help.ubuntu.com/

owner@owner-Inspiron-560s:~$ cat > /dev/null
This is tty1.
owner@owner-Inspiron-560s:~$



















































owner@owner-Inspiron-560s:~$
~~~
{:.cliUB}

---
[^1]:
    [Eliminating the replacing images][ReplaceImg] in *Web
    Fundamentals* in Google Developers.

[ReplaceImg]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization#eliminating-and-replacing-images

*[TTY]: TeleTYpewriter
