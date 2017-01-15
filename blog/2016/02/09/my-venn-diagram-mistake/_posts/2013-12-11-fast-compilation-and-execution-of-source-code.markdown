---
layout: post
title: "Fast Compilation and Execution of Source Code"
date: 2013-12-11 03:23:00 +08:00
categories: Vim
comments: true
---

Possible software: [Vim]

Why?
---

In a heavy IDE, you need to click a button or some keyboard shortcuts.
Unless you frequently use the keystrokes, you'll likely forget them
since they are usually non-transferable IT skills.

It's different in [Vim].  Since it's an [FLOSS] programmable editor,
you can add whatever plugins and extra functions you like.[^gnu_floss]
You can adjust you VIMRC file so that the editing environment *won't*
have too many *undesirable* changes.

[Vim] is lightweight.  If your computer collapses (or even gives you
the notorious BoD before RiP) due to loading IDE, [Vim] is your choice
since it may still work with some good design and functions.

What are the good things?

1. Diminished role of mouse and more use of keyboard due to modes.
2. Syntax highlighting and file type detection.

<!-- more -->

How? (Doesn't need c.vim)
---

1. Set up `makefile` ([simple tutorial about makefile][makefile_tut]).
2. Run `:make`.
3. Run `:!./%<` on \*nix (or simply `:!%<` on M\$ Win\*).

Notes:

1. `set makeprg=mingw32-make` in VIMRC for [MinGW] make
   ([more details about `makeprg`][makeprg])
2. `%` stands for the current file, and `<` stands for the file name
   *without* extension.

Advantages:

- In the whole process, you *don't* have to leave [Vim] and keyboard.
- *The commands are the same whatever your files are* (already
  determined by `makefile`), so you *don't waste time to think and
  type* in the correct name.

2 quotes from Sharpe (I don't remember the exact wordings):

> "The battle is not in the hands of who give the most shots.  It
> should be those who shot the best."  
> "A good soldier can fire 3--4 rounds a minute."

My sample makefile\:
---

{% codeblock lang:make %}
hello : hello.c
	gcc -o hello hello.c
clean:
	rm -f hello
{% endcodeblock %}

Note: Insert *tabs* for indentation, *not* whitespaces.  If the
compiled program is `hello.exe`, perhaps the extension name is also
needed for `rm`.  (I have *never* tested it.)

With c.vim
---

Follow the menu and you'll be also good.[^c_vim]

---
[^gnu_floss]:
    After I read [*FLOSS and FOSS*][gnu_floss] by Richard Stallman, I
    use FLOSS instead of FOSS.  (Added on 19TH Dec, 2014)

[^c_vim]:
    [*How do I run a C program from Vim?*][so2627886] in Stack
    Overflow.

[Vim]: http://www.vim.org
[FLOSS]: http://freeopensourcesoftware.org/index.php?title=Main_Page
[gnu_floss]: https://www.gnu.org/philosophy/floss-and-foss.html
[makefile_tut]: http://kevincrazy.pixnet.net/blog/post/29780477-makefile%E7%B0%A1%E6%98%93%E6%95%99%E5%AD%B8...
[MinGW]: http://www.mingw.org/
[makeprg]: https://sites.google.com/site/jamespandavan/Home/c-c/getting-started-with-c-c-programming-with-vim
[so2627886]: http://stackoverflow.com/q/2627886

*[IDE]: Integrated Development Environment
*[FLOSS]: Free/Libre and Open Source Software
*[FOSS]: Free and Open Source Software
*[BoD]: Bluescreen of Death
*[RiP]: Rest in Peace
