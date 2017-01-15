---
layout: post
title: "Export PDF to SVG"
date: 2014-06-21 14:23:50 +0800
comments: true
categories: [LaTeX, Linux, SVG]
---

I've drawn a figure in $\rm \LaTeX$ using the [TikZ].  However,
[MathJax] has *no* support for TikZ commands.  Therefore, I have to
generate an SVG figure from $\rm \LaTeX$ if I need to post it on
Octopress.

I had followed the example
[on $\rm \TeX$--$\rm \LaTeX$ StackExchange][texse51766].  It worked
for PNG and JPG files, *but* not SVG files.  Since the quality of SVG
files is the *best*, I would like to include use SVG.

<!-- more -->

I googled "latex export svg", and saw [`pdf2svg`] in some websites,
such as [$\rm \LaTeX$][LaTeXWikibooks] on Wikibooks.  I then decided
to install it.  I followed the installation commands on its official
page.

<pre class="cli"><code class="UBMono">[owner@localhost ~]$ wget http://www.cityinthesky.co.uk/wp-content/uploads/2013/
10/pdf2svg-0.2.2.tar.gz
[owner@localhost ~]$ tar -xzvf pdf2svg-0.2.2.tar.gz
[owner@localhost ~]$ cd pdf2svg-0.2.2
[owner@localhost ~/pdf2svg-0.2.2]$ ./configure
checking for a BSD-compatible install... /usr/bin/install -c
checking whether build environment is sane... yes
checking for a thread-safe mkdir -p... /bin/mkdir -p

... (output omitted)

checking for CAIRO... yes
<span class="err">checking for POPPLERGLIB... configure: error: Package requirements (poppler-glib
 >= 0.5.4) were not met:</span>

<span class="UBHLCode">No package 'poppler-glib' found</span>

Consider adjusting the PKG_CONFIG_PATH environment variable if you
installed software in a non-standard prefix.

Alternatively, you may set the environment variables POPPLERGLIB_CFLAGS
and POPPLERGLIB_LIBS to avoid the need to call pkg-config.
See the pkg-config man page for more details.
</code></pre>

Googling "no package 'poppler-glib' found", I found the
[second result][poppler-glib-dev] useful.  I installed the missing
package and ran `./configure` again, before proceeding to `make`.

<pre class="cli"><code class="UBMono">[owner@localhost ~/pdf2svg-0.2.2]$ make
gcc -DPACKAGE_NAME=\"pdf2svg\" -DPACKAGE_TARNAME=\"pdf2svg\" -DPACKAGE_VERSION=\
"0.2.1\" -DPACKAGE_STRING=\"pdf2svg\ 0.2.1\" -DPACKAGE_BUGREPORT=\"David\ Barton
\ \<davebarton@cityinthesky.co.uk\>\" -DPACKAGE=\"pdf2svg\" -DVERSION=\"0.2.1\" 
-I.    -I/usr/include/cairo -I/usr/include/glib-2.0 -I/usr/lib/i386-linux-gnu/gl
ib-2.0/include -I/usr/include/pixman-1 -I/usr/include/freetype2 -I/usr/include/l
ibpng12   -pthread -I/usr/include/gtk-2.0 -I/usr/lib/i386-linux-gnu/gtk-2.0/incl
ude -I/usr/include/atk-1.0 -I/usr/include/cairo -I/usr/include/gdk-pixbuf-2.0 -I
/usr/include/pango-1.0 -I/usr/include/gio-unix-2.0/ -I/usr/include/glib-2.0 -I/u
sr/lib/i386-linux-gnu/glib-2.0/include -I/usr/include/pixman-1 -I/usr/include/fr
eetype2 -I/usr/include/libpng12   -I/usr/include/poppler/glib -I/usr/include/pop
pler -I/usr/include/glib-2.0 -I/usr/lib/i386-linux-gnu/glib-2.0/include -I/usr/i
nclude/cairo -I/usr/include/pixman-1 -I/usr/include/freetype2 -I/usr/include/lib
png12    -g -O2 -MT pdf2svg-pdf2svg.o -MD -MP -MF .deps/pdf2svg-pdf2svg.Tpo -c -
o pdf2svg-pdf2svg.o `test -f 'pdf2svg.c' || echo './'`pdf2svg.c
pdf2svg.c: In function ‘main’:
<span class="err">pdf2svg.c:152:8: warning: incompatible implicit declaration of built-in function
 ‘free’ [enabled by default]</span>
mv -f .deps/pdf2svg-pdf2svg.Tpo .deps/pdf2svg-pdf2svg.Po
gcc -I/usr/include/cairo -I/usr/include/glib-2.0 -I/usr/lib/i386-linux-gnu/glib-
2.0/include -I/usr/include/pixman-1 -I/usr/include/freetype2 -I/usr/include/libp
ng12   -pthread -I/usr/include/gtk-2.0 -I/usr/lib/i386-linux-gnu/gtk-2.0/include
 -I/usr/include/atk-1.0 -I/usr/include/cairo -I/usr/include/gdk-pixbuf-2.0 -I/us
r/include/pango-1.0 -I/usr/include/gio-unix-2.0/ -I/usr/include/glib-2.0 -I/usr/
lib/i386-linux-gnu/glib-2.0/include -I/usr/include/pixman-1 -I/usr/include/freet
ype2 -I/usr/include/libpng12   -I/usr/include/poppler/glib -I/usr/include/popple
r -I/usr/include/glib-2.0 -I/usr/lib/i386-linux-gnu/glib-2.0/include -I/usr/incl
ude/cairo -I/usr/include/pixman-1 -I/usr/include/freetype2 -I/usr/include/libpng
12    -g -O2   -o pdf2svg pdf2svg-pdf2svg.o -lcairo   -lgtk-x11-2.0 -lgdk-x11-2.
0 -latk-1.0 -lgio-2.0 -lpangoft2-1.0 -lpangocairo-1.0 -lgdk_pixbuf-2.0 -lcairo -
lpango-1.0 -lfreetype -lfontconfig -lgobject-2.0 -lglib-2.0   -lpoppler-glib -lg
object-2.0 -lcairo -lglib-2.0
</code></pre>

I guess the reason for GCC to give me such a warning can be found in
some questions posted on Stack Overflow.

1. [The first one][StackOverflow6639572].
2. [The second one][StackOverflow977233].

I *haven't* learnt C/C++, so I *wouldn't* try `#include <string.h>` in
`pdf2svg.c`.

I ignored the warning and continued the installation.

<pre class="cli"><code class="UBMono">[owner@localhost ~]$ make install
make[1]: Entering directory `/home/owner/pdf2svg-0.2.2'
test -z "/usr/local/bin" || /bin/mkdir -p "/usr/local/bin"
  /usr/bin/install -c 'pdf2svg' '/usr/local/bin/pdf2svg'
<span class="err">/usr/bin/install: cannot create regular file `/usr/local/bin/pdf2svg': Permissio
n denied</span>
make[1]: *** [install-binPROGRAMS] Error 1
make[1]: Leaving directory `/home/owner/pdf2svg-0.2.2'
make: *** [install-am] Error 2
</code></pre>

I remembered that the `--prefix=` option used while running
`./configure` is `/usr/local`.  Viewing the file permissions in that
folder, I realized that I should follow the advice of
[an answer to an Ask Ubuntu question][AskUbuntu]

    [owner@localhost ~/pdf2svg-0.2.2]$ sudo make install
    [sudo] password for owner: 
    make[1]: Entering directory `/home/owner/pdf2svg-0.2.2'
    test -z "/usr/local/bin" || /bin/mkdir -p "/usr/local/bin"
    /usr/bin/install -c 'pdf2svg' '/usr/local/bin/pdf2svg'
    make[1]: Nothing to be done for `install-data-am'.
    make[1]: Leaving directory `/home/owner/pdf2svg-0.2.2'
{:.cliUB}

After installing `pdf2svg` from its source code, I can finally start
using the tool.

    pdf2svg input.pdf output.svg
{:.cliUB}

[TikZ]: http://www.texample.net/tikz/ 
[MathJax]: http://www.mathjax.org/
[texse51766]: http://tex.stackexchange.com/a/51766 "How can I use TikZ to make standalone (SVG) graphics?"
[`pdf2svg`]: http://www.cityinthesky.co.uk/opensource/pdf2svg/
[LaTeXWikibooks]: https://en.wikibooks.org/wiki/LaTeX
[poppler-glib-dev]: https://github.com/politza/pdf-tools/issues/3 "No poppler-glib package in Ubuntu 12.04 #3"
[StackOverflow6639572]: http://stackoverflow.com/questions/6639572/
[StackOverflow977233]: http://stackoverflow.com/questions/977233/
[AskUbuntu]: http://askubuntu.com/a/424787  "Permission denied while running make install"
