---
layout: post
title: Compilation of C++ Programs that Depends on DISLIN on CLI
date: 2014-01-19 06:59:15 +0000
categories: C/C++
published: true
comments: true
---

As a supporter of the [GNU] Project, I am not so happy to use
[DISLIN], which comes with an *EULA*, but I don't have time to find
out another alternative to the plotting library suggested by Prof.
Yevick in a book.[^book]

<!-- more -->

A DISLIN installation guide on Ubuntu was written more than six years
ago, so I am a bit dubious that if steps 2 and 3 are still needed for
the installation using a DEB file.[^blog1]  Therefore, I overlooked an
important command and I regret this after wasting about two hours on
[Google].

As a result, I just downloaded the DEB file from the DISLIN official
website and use the GUI tool "Ubuntu Software Centre" to install the
library.  Then I directly copied the code from the book and tried to
compile the program .

{% codeblock first_graphics_prog.cpp lang:cpp %}
// Author: David Yevick
// Source: A Short Course in Computational Science and Engineering
#include <iostream>
#include <dislin.h>

using namespace std;

int main(int argc, const char *argv[])
{
    // Some code for defining variables
    // Omitted to avoid copyright problems
    // An example of using DISLIN methods
    qplot(array1,array2,numOfPts);
}
{% endcodeblock %}

However, the compiler gave me the message that I had used an
"undefined reference to qplot".

I googled for two hours and found nothing that I can understand.  I
even tried compiling the following sample code found in section 2.7 of
[the official DISLIN online manual][dislin_man].

{% codeblock Sample code lang:cpp %}
// Author: Helmut Michels
// Source: DISLIN 10.4—A Data Plotting Library
#include <iostream>
#include "discpp.h"

main()
{
    Dislin g;
    g.disini ();
    g.messag ("This is a test", 100, 100);
    g.disfin ();
}
{% endcodeblock %}

I have *no* hope on published books because their authors would expect
their students to do something easy—Use [Dev-C++] on M\$ Win\*, or
\*nix GUI IDE like [Eclipse].  However, some geeks *won't* be
satisfied because GUI buttons/objects hide the commands away from
users.  As a result, they *don't* know what tasks are invoked by
clicking the button/object.  In other words, they *don't* know what
they are *actually* doing.  Therefore, they have the motivation to
find out the *real* command for the compilation of C++ programs that
`#include "dislin.h"`.

Stack Overflow has *a few or no* questions on the compilation of C++
programs that use DISLIN.  The most relevant one that I managed to
find is [question 19118465][so19118465].  I glanced at the answers
quickly.  They have some commands like

<pre class="cli"><code class="UBMono">$ gfortran EX11_1.f90 -o progrname <span class="UBHLCode">-ldislin</span> -I/path/to/DISLIN/modules
</code></pre>

Then I guessed that I need the `-ldislin` flag as well.  I *can't*
truly figure out the usage of `-l`, `-L` and `-I` flags by just
looking at the man page of `g++`, so I just tried everything.  I
searched for some new pages, and returned to some web pages that I've
*already visited*, and continued this *unproductive* process...

I googled the websites and I saw the post on Linux for Research
mentioned before.  I looked at the command that begins with `g++` and
tried to adapt it to my needs, but it simply *failed*.

I thought that the official README maybe useful, so I browsed the
contents in `/usr/local/dislin/README`.  Some websites that teach
users to install DISLIN from a gzip tarball contain code that
manipulate the environment variables like `DISLIN`, `PATH` and
`LD_LIBRARY_PATH`.  But in the `README`, it's clearly stated that I
don't need to do so.

<pre class="cli"><code class="UBMono">f) To make DISLIN available for general use, write the following com-
mands to your .profile or to /etc/profile

DISLIN=directory
export DISLIN
PATH=${PATH}:${DISLIN}/bin

LD_LIBRARY_PATH=$DISLIN:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH

<span class="UBHLCode">Note: The environment variable DISLIN is not necessary if DISLIN
is installed in the default directory '/usr/local/dislin'.</span>
</code></pre>

I think that I *don't* need to do the above settings, but I am *not*
sure about that.  Luckily, the following part that immediately follows
the above section gave me some hint on what I, as a newcomer to
DISLIN, can do.

<pre class="cli"><code class="UBMono">4.) Compiling, Linking and Running the Example Programs

    Now you can compile, link and run the example programs in the
    directory $DISLIN/examples with the commands:

		    clink     -a exa_c      (for gcc)
		    <span class="UBHLCode">cpplink   -a exa_cpp    (for g++)</span>
		    iclink    -a exa_c      (for Intel icc)
		    sclink    -a exa_c      (Sun Studio cc)
...
</code></pre>

Thus, I *really* went to `/usr/local/dislin/example` and compiled
`exa_cpp.cpp` using `cpplink` with the `-a` flag.  *It works! No
complaints from `g++`!* It seemed that I could give `cpplink` a try,
but it quickly turned out that my idea failed to work.  `g++` either
complained that `dislin.h` was *not* found, or there's "undefined
reference" to a DISLIN function.

After that, I returned to Google again, and was redirected to the
*same* post on Linux for Research again.  I glanced through the *same*
command that started with `g++`.

    $ g++ test.cpp -lXt -ldislin -lm
{:.cliUB}

This time, I could read the sentence below the above command.

<quote>
    Don't forget the `-lXt`
</quote>

I finally realised that I had forgotten an important principle in
programming: *Don't* do too much at one time.  At the very first
stage, I need to get things done, though the approach is *not*
elegant.

With the above principle in my mind, I could merely compile a C++
program that made use of DISLIN by making the following changes in
both the source file and the command that I issued.

{% codeblock Sample code lang:cpp %}
// Author: David Yevick
// Source: A Short Course in Computational Science and Engineering
#include <iostream>
#include "/usr/local/dislin/dislin.h"

using namespace std;

int main(int argc, const char *argv[])
{
// Some code for defining variables
// Omitted to avoid copyright problems
// An example of using DISLIN methods
qplot(array1,array2,numOfPts);
}
{% endcodeblock %}

In the terminal, I typed the following command.

    $ g++ foo.cpp -lXt -ldislin -lm
{:.cliUB}

*It works!* Critical readers will complain about the way that I
include `dislin.h`.  I'm not satisfied with this either.  Another
obvious missing part for those who want to customise the name of the
output executable file is the `-o` flag.  I *delibrately* did this so
as to keep things *simple and clear*.

After trying the `-l`, `-L` and `-I` flags of the command `g++`, I
realised that the `-I` flag will do.

However, when I tried to do the *same* task for another time, it
surprisingly *failed*.  Looking closely at the two versions, we can
draw the following conclusion.

<pre class="cli"><code class="UBMono"># `DISLIN' is a variable that represents the path of DISLIN.
# In the default case, it is `/usr/local/dislin'.
$ g++ <span class="err">-lXt -ldislin -lm</span> -I$(DISLIN) foo.cpp -o foo.out # Wrong!
$ g++ foo.cpp -o foo.out <span class="UBHLCode">-lXt -ldislin -lm</span> -I$(DISLIN) # Correct!
</code></pre>

![message_from_g++](/images/posts/DISLIN/dislin-compile-140119.png)

I conclude this post with the fact that the flags `-g -Wall` can be
put either before or after `foo.cpp`.

Posted via [UltraBlog.vim].

---
[^book]:
    Yevick, D.  (2012).  *A Short Course in Computational Science and
    Engineering: C++, Java and Octave Numerical Programming with Free
    Software Tools*.  Cambridge University Press.

[^blog1]: See [*Linux for Research*][blog1] for the post.

[GNU]: https://www.gnu.org/
[DISLIN]: http://www.dislin.de/
[blog1]: http://linux4research.blogspot.hk/2007/05/install-and-use-dislin-under-linuxe.html
[Google]: https://www.google.com/
[dislin_man]: http://www2.mps.mpg.de/dislin/contents.html
[Dev-C++]: http://www.bloodshed.net/devcpp.html
[Eclipse]: http://www.eclipse.org
[so19118465]: http://stackoverflow.com/q/19118465 "Compiling dislin gfortran"
[UltraBlog.vim]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
