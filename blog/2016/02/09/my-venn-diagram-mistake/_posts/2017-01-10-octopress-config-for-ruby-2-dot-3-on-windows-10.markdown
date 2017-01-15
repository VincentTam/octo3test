---
layout: post
title: "Octopress Config for Ruby 2.3 on Windows 10"
date: 2017-01-10 16:38:32 +0100
comments: true
categories: [M$ Win*, Octopress, Ruby]
---

Motivation
---

Same as the background in [my previous article][pp1].

Background
---

I uninstalled Ruby 2.0 in the Control Panel, and then installed
version 2.3.3 from [RubyInstaller for Windows][rb4win]

Problem 1: RedCloth installation failure
---

### Error message

    Gem::InstallError: The 'RedCloth' native gem requires installed build tools.

    Please update your PATH to include build tools or download the DevKit
    from 'http://rubyinstaller.org/downloads' and follow the instructions
    at 'http://github.com/oneclick/rubyinstaller/wiki/Development-Kit'

    An error occurred while installing RedCloth (4.2.9), and Bundler cannot
    continue.
    Make sure that `gem install RedCloth -v '4.2.9'` succeeds before bundling.
{:.cli}

The error message is similar to [Joe's gem install error][so36274233].
The only difference is that I was installing [RedCloth] 4.9.

### Solution

This failure is due to the absence of a valid path to
[RubyInstaller Development Kit][rbdevkt].  I tried manually adding the
path to the folder for binary executables (default to
`C:\RubyDevKit\bin`) to `PATH`, but it's *unsuccessful*.  I googled
"Please update your PATH to include build tools" and found
[his question][so36274233], whose third answer explained the function
of `devkitvar.bat`.  This batch script actually prepended the path of
*two* folders into `PATH`.  One is stated above; one is
`C:\RubyDevKit\mingw\bin`.  Running this batch file changes `PATH`
*temporarily*.  A manual configuration in the Control Panel allowed
the system to detect [DevKit][rbdevkt], and this problem was thus
solved.

### Related gems

#### Already installed

Name    | Version Number
---     | ---:
rake    | 10.4.2
bundler | 1.13.7

#### Being installed

Name                 | Version Number | With native extensions?
---                  | ---:           | :---:
**RedCloth**         | 4.2.9          | ✓
**wdm**              | 0.1.0          | ✓
blankslate           | 2.1.2.4        | ✗
chunky_png           | 1.3.4          | ✗
coffee-script-source | 1.9.1          | ✗
colorator            | 0.1            | ✗
execjs               | 2.4.0          | ✗
fast-stemmer         | 1.0.2          | ✓
ffi                  | 1.9.6          | ✗
hitimes              | 1.2.2          | ✓
jekyll-gist          | 1.1.0          | ✗
jekyll-paginate      | 1.1.0          | ✗
jekyll-sitemap       | 0.8.0          | ✗
kramdown             | 1.6.0          | ✗
liquid               | 2.6.2          | ✗
mercenary            | 0.3.5          | ✗
multi_json           | 1.11.0         | ✗
posix-spawn          | 0.3.10         | ✓
rack                 | 1.6.0          | ✗
rb-fsevent           | 0.9.4          | ✗
redcarpet            | 3.2.2          | ✓
safe_yaml            | 1.0.4          | ✗
sass                 | 3.4.13         | ✗
stringex             | 1.4.0          | ✗
tilt                 | 1.4.1          | ✗
yajl-ruby            | 1.2.1          | ✓

Problem 2: wdm installation failure
---

I put the [error message from wdm](#wdm){:.cliwide} in a popup dialog.

<div id="wdm" class="noscr">
<pre class="cli"><code>Owner@Owner-PC MINGW64 /c/github/vincenttam.github.io (source)
$ bundle install
Fetching gem metadata from https://rubygems.org/.........
Fetching version metadata from https://rubygems.org/..
Fetching dependency metadata from https://rubygems.org/.
Using rake 10.4.2
Using RedCloth 4.2.9
Using blankslate 2.1.2.4
Installing hitimes 1.2.2 with native extensions
Using chunky_png 1.3.4
Installing fast-stemmer 1.0.2 with native extensions
Using coffee-script-source 1.9.1
Using execjs 2.4.0
Using colorator 0.1
Using multi_json 1.11.0
Using sass 3.4.13
Using rb-fsevent 0.9.4
Using ffi 1.9.6
Using tilt 1.4.1
Using jekyll-gist 1.1.0
Using jekyll-paginate 1.1.0
Using kramdown 1.6.0
Using liquid 2.6.2
Using mercenary 0.3.5
Installing posix-spawn 0.3.10 with native extensions
Installing yajl-ruby 1.2.1 with native extensions
Installing redcarpet 3.2.2 with native extensions
Using safe_yaml 1.0.4
Using jekyll-sitemap 0.8.0
Using rack 1.6.0
Using stringex 1.4.0
Installing wdm 0.1.0 with native extensions
Using bundler 1.13.7
Installing parslet 1.5.0
Installing timers 4.0.1
Installing classifier-reborn 2.0.3
Installing coffee-script 2.3.0
Installing compass-core 1.0.3
Installing compass-import-once 1.0.5
Installing jekyll-sass-converter 1.3.0
Installing sass-globbing 1.0.0
Installing rb-inotify 0.9.5
Installing haml 4.0.6
Installing pygments.rb 0.6.2
Installing rack-protection 1.5.3
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

    current directory: C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/wdm-0.1.0/ext/wdm
C:/Ruby23-x64/bin/ruby.exe -r ./siteconf20170109-8020-1n4s35m.rb extconf.rb
checking for main() in -lkernel32... yes
checking for windows.h... yes
checking for ruby.h... yes
checking for HAVE_RUBY_ENCODING_H... yes
creating Makefile

To see why this extension failed to compile, please check the mkmf.log which can
be found here:



current directory: C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/wdm-0.1.0/ext/wdm
make "DESTDIR=" clean

current directory: C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/wdm-0.1.0/ext/wdm
make "DESTDIR="
generating wdm_ext-x64-mingw32.def
compiling entry.c
In file included from entry.c:1:0:
wdm.h:3:0: warning: "WINVER" redefined [enabled by default]
In file included from
4-mingw32/include/crtdefs.h:10:0,
from
4-mingw32/include/stdio.h:9,
                 from wdm.h:1,
                 from entry.c:1:
4-mingw32/include/_mingw.h:248:0:
note: this is the location of the previous definition
In file included from entry.c:1:0:
wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
&lt;command-line&gt;:0:0: note: this is the location of the previous definition
In file included from c:/Ruby23-x64/include/ruby-2.3.0/ruby/win32.h:41:0,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/defines.h:168,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/ruby.h:36,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby.h:33,
                 from wdm.h:12,
                 from entry.c:1:
4-mingw32/include/winsock2.h:15:2:
warning: #warning Please include winsock2.h before windows.h [-Wcpp]
compiling memory.c
In file included from memory.c:1:0:
wdm.h:3:0: warning: "WINVER" redefined [enabled by default]
In file included from
4-mingw32/include/crtdefs.h:10:0,
from
4-mingw32/include/stdio.h:9,
                 from wdm.h:1,
                 from memory.c:1:
4-mingw32/include/_mingw.h:248:0:
note: this is the location of the previous definition
In file included from memory.c:1:0:
wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
&lt;command-line&gt;:0:0: note: this is the location of the previous definition
In file included from c:/Ruby23-x64/include/ruby-2.3.0/ruby/win32.h:41:0,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/defines.h:168,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/ruby.h:36,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby.h:33,
                 from wdm.h:12,
                 from memory.c:1:
4-mingw32/include/winsock2.h:15:2:
warning: #warning Please include winsock2.h before windows.h [-Wcpp]
compiling monitor.c
In file included from monitor.c:1:0:
wdm.h:3:0: warning: "WINVER" redefined [enabled by default]
In file included from
4-mingw32/include/crtdefs.h:10:0,
from
4-mingw32/include/stdio.h:9,
                 from wdm.h:1,
                 from monitor.c:1:
4-mingw32/include/_mingw.h:248:0:
note: this is the location of the previous definition
In file included from monitor.c:1:0:
wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
&lt;command-line&gt;:0:0: note: this is the location of the previous definition
In file included from c:/Ruby23-x64/include/ruby-2.3.0/ruby/win32.h:41:0,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/defines.h:168,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/ruby.h:36,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby.h:33,
                 from wdm.h:12,
                 from monitor.c:1:
4-mingw32/include/winsock2.h:15:2:
warning: #warning Please include winsock2.h before windows.h [-Wcpp]
compiling queue.c
In file included from queue.c:3:0:
wdm.h:3:0: warning: "WINVER" redefined [enabled by default]
In file included from
4-mingw32/include/vadefs.h:13:0,
from
4-mingw32/include/_mingw_stdarg.h:14,
from
4-mingw32/include/stdarg.h:140,
from
c:\rubydevkit\mingw\bin\../lib/gcc/x86_64-w64-mingw32/4.7.2/include/stdarg.h:1,
                 from queue.c:1:
4-mingw32/include/_mingw.h:248:0:
note: this is the location of the previous definition
In file included from queue.c:3:0:
wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
&lt;command-line&gt;:0:0: note: this is the location of the previous definition
In file included from c:/Ruby23-x64/include/ruby-2.3.0/ruby/win32.h:41:0,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/defines.h:168,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/ruby.h:36,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby.h:33,
                 from wdm.h:12,
                 from queue.c:3:
4-mingw32/include/winsock2.h:15:2:
warning: #warning Please include winsock2.h before windows.h [-Wcpp]
compiling rb_change.c
In file included from rb_change.c:4:0:
wdm.h:3:0: warning: "WINVER" redefined [enabled by default]
In file included from
4-mingw32/include/crtdefs.h:10:0,
from
4-mingw32/include/stdlib.h:9,
                 from rb_change.c:1:
4-mingw32/include/_mingw.h:248:0:
note: this is the location of the previous definition
In file included from rb_change.c:4:0:
wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
&lt;command-line&gt;:0:0: note: this is the location of the previous definition
In file included from c:/Ruby23-x64/include/ruby-2.3.0/ruby/win32.h:41:0,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/defines.h:168,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/ruby.h:36,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby.h:33,
                 from wdm.h:12,
                 from rb_change.c:4:
4-mingw32/include/winsock2.h:15:2:
warning: #warning Please include winsock2.h before windows.h [-Wcpp]
compiling rb_monitor.c
In file included from rb_monitor.c:1:0:
wdm.h:3:0: warning: "WINVER" redefined [enabled by default]
In file included from
4-mingw32/include/crtdefs.h:10:0,
from
4-mingw32/include/stdio.h:9,
                 from wdm.h:1,
                 from rb_monitor.c:1:
4-mingw32/include/_mingw.h:248:0:
note: this is the location of the previous definition
In file included from rb_monitor.c:1:0:
wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
&lt;command-line&gt;:0:0: note: this is the location of the previous definition
In file included from c:/Ruby23-x64/include/ruby-2.3.0/ruby/win32.h:41:0,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/defines.h:168,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/ruby.h:36,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby.h:33,
                 from wdm.h:12,
                 from rb_monitor.c:1:
4-mingw32/include/winsock2.h:15:2:
warning: #warning Please include winsock2.h before windows.h [-Wcpp]
rb_monitor.c: In function 'rb_monitor_run_bang':
rb_monitor.c:508:9: warning: implicit declaration of function
'rb_thread_blocking_region' [-Wimplicit-function-declaration]
compiling utils.c
In file included from utils.c:1:0:
wdm.h:3:0: warning: "WINVER" redefined [enabled by default]
In file included from
4-mingw32/include/crtdefs.h:10:0,
from
4-mingw32/include/stdio.h:9,
                 from wdm.h:1,
                 from utils.c:1:
4-mingw32/include/_mingw.h:248:0:
note: this is the location of the previous definition
In file included from utils.c:1:0:
wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
&lt;command-line&gt;:0:0: note: this is the location of the previous definition
In file included from c:/Ruby23-x64/include/ruby-2.3.0/ruby/win32.h:41:0,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/defines.h:168,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/ruby.h:36,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby.h:33,
                 from wdm.h:12,
                 from utils.c:1:
4-mingw32/include/winsock2.h:15:2:
warning: #warning Please include winsock2.h before windows.h [-Wcpp]
compiling wdm.c
In file included from wdm.c:1:0:
wdm.h:3:0: warning: "WINVER" redefined [enabled by default]
In file included from
4-mingw32/include/crtdefs.h:10:0,
from
4-mingw32/include/stdio.h:9,
                 from wdm.h:1,
                 from wdm.c:1:
4-mingw32/include/_mingw.h:248:0:
note: this is the location of the previous definition
In file included from wdm.c:1:0:
wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
&lt;command-line&gt;:0:0: note: this is the location of the previous definition
In file included from c:/Ruby23-x64/include/ruby-2.3.0/ruby/win32.h:41:0,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/defines.h:168,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby/ruby.h:36,
                 from c:/Ruby23-x64/include/ruby-2.3.0/ruby.h:33,
                 from wdm.h:12,
                 from wdm.c:1:
4-mingw32/include/winsock2.h:15:2:
warning: #warning Please include winsock2.h before windows.h [-Wcpp]
linking shared-object wdm_ext.so
rb_monitor.o: In function `rb_monitor_run_bang':
C:\Ruby23-x64\lib\ruby\gems\2.3.0\gems\wdm-0.1.0\ext\wdm/rb_monitor.c:508:
undefined reference to `rb_thread_blocking_region'
collect2.exe: error: ld returned 1 exit status
make: *** [wdm_ext.so] Error 1

make failed, exit code 2

Gem files will remain installed in
C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/wdm-0.1.0 for inspection.
Results logged to
.out

An error occurred while installing wdm (0.1.0), and Bundler cannot continue.
Make sure that `gem install wdm -v '0.1.0'` succeeds before bundling.
</code></pre></div>

From the line

    wdm.h:4:0: warning: "_WIN32_WINNT" redefined [enabled by default]
{:.cli}

I found [wdm issue #18][wdmi18], but I *failed* to notice that the
problem had been resolved.  I later knew that from
[Jekyll issue #3721][jekylli3721].

After changing the version number of [wdm] to 0.1.1, I could proceed
further.  [The system output](#wdmfixed){:.cliwide} was fine.

<div id="wdmfixed" class="noscr" markdown="0">
<pre class="cli"><code>Owner@Owner-PC MINGW64 /c/github/vincenttam.github.io (source)
$ gem install wdm -v '0.1.1'
Building native extensions.  This could take a while...
Successfully installed wdm-0.1.1
Parsing documentation for wdm-0.1.1
Installing ri documentation for wdm-0.1.1
Done installing documentation for wdm after 0 seconds
1 gem installed
Owner@Owner-PC MINGW64 /c/github/vincenttam.github.io (source)
$ bundle install
Fetching gem metadata from https://rubygems.org/..........
Fetching version metadata from https://rubygems.org/..
Fetching dependency metadata from https://rubygems.org/.
Resolving dependencies...
Using rake 10.4.2
Using RedCloth 4.2.9
Using blankslate 2.1.2.4
Using hitimes 1.2.2
Using chunky_png 1.3.4
Using fast-stemmer 1.0.2
Using coffee-script-source 1.9.1
Using execjs 2.4.0
Using colorator 0.1
Using multi_json 1.11.0
Using sass 3.4.13
Using rb-fsevent 0.9.4
Using ffi 1.9.6
Using tilt 1.4.1
Using jekyll-gist 1.1.0
Using jekyll-paginate 1.1.0
Using kramdown 1.6.0
Using liquid 2.6.2
Using mercenary 0.3.5
Using posix-spawn 0.3.10
Using yajl-ruby 1.2.1
Using redcarpet 3.2.2
Using safe_yaml 1.0.4
Using jekyll-sitemap 0.8.0
Using rack 1.6.0
Using stringex 1.4.0
Using wdm 0.1.1 (was 0.1.0)
Using bundler 1.13.7
Using parslet 1.5.0
Using timers 4.0.1
Using classifier-reborn 2.0.3
Using coffee-script 2.3.0
Using compass-core 1.0.3
Using compass-import-once 1.0.5
Using jekyll-sass-converter 1.3.0
Using sass-globbing 1.0.0
Using rb-inotify 0.9.5
Using haml 4.0.6
Using pygments.rb 0.6.2
Using rack-protection 1.5.3
Installing toml 0.1.2
Installing celluloid 0.16.0
Installing jekyll-coffeescript 1.0.1
Installing compass 1.0.3
Installing sinatra 1.4.5
Installing listen 2.8.5
Installing jekyll-watch 1.2.1
Installing jekyll 2.5.3
Installing octopress-hooks 2.6.0
Installing octopress-date-format 2.0.2
Bundle complete! 14 Gemfile dependencies, 50 gems now installed.
Use `bundle show [gemname]` to see where a bundled gem is installed.
Post-install message from compass:
    Compass is charityware. If you love it, please donate on our behalf at http:
//umdf.org/compass Thanks!
</code></pre></div>

Problem 3: I have a row with Justin.
---

When I ran `rake preview`, the follow line appeared.

    bash: /c/Ruby23-x64/bin/rake: C:/Users/Justin/Projects/rubyinstaller/sandbox/rub
    y23_mingw/bin/ruby.exe: bad interpreter: No such file or directory
{:.cli}

I searched "rake install justin projects" on [Google].
You may follow [griest's advice][so36925869] to have this problem
fixed.  If this link were unluckily dead in the future, you might
leave a comment below after getting rid of Justin at the first line of
`/c/Ruby23-x64/bin/rake`.

Result
---

[Octopress] did work on my machine.  Then I re-ran `bundle install`
under the local repository for [my another blog](/blog2), but the
[*same* Celluloid error][pp2] *re-appeared*.  I *don't* know how to
perform a [celluloid downgrade][celldown] to version 16.0 under that
repository.  The version number for [Celluloid] was *generated* by the
system---I *didn't* type it in `Gemfile.lock`.  As a result, I
switched to [Ubuntu on Windows 10][wls].

[pp1]: /blog/2017/01/10/upgraded-to-git-for-windows-2-dot-11/
[rb4win]: https://rubyinstaller.org/
[so36274233]: http://stackoverflow.com/a/36274233/280189
[RedCloth]: http://redcloth.org/
[rbdevkt]: https://rubyinstaller.org/add-ons/devkit/
[wdmi18]: https://github.com/Maher4Ever/wdm/issues/18
[jekylli3721]: https://github.com/jekyll/jekyll/issues/3721
[wdm]: https://rubygems.org/gems/wdm
[Google]: google.com
[so36925869]: http://stackoverflow.com/a/36925869/280189
[Octopress]: http://octopress.org
[pp2]: /blog/2016/08/20/jekyll-serve-error/
[celldown]: https://talk.jekyllrb.com/t/error-while-trying-to-run-jekyll-serve/933/10
[Celluloid]: https://rubygems.org/gems/celluloid/versions/0.17.3
[wls]: https://msdn.microsoft.com/en-us/commandline/wsl/about
