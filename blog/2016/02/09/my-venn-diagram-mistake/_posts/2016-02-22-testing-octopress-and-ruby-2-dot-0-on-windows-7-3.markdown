---
layout: post
title: "Testing Octopress and Ruby 2.0 on Windows 7 (3)"
date: 2016-02-22 01:05:04 +0800
comments: true
categories: [M$ Win*, Octopress]
---

Background
---

I was writing [my previous post][pp1], which was about my recent
Mik$\rm \TeX$ update.

Problem
---

After having finished it, I tried `rake generate`, and got results
similar to the first picture of [the first post in this series][pp2].

Last time, I solved this problem by creating the batch file
`python2.bat` in the folder where Python had been installed (i.e.
`C:\Python27`).  This time, the BAT file is already there.  In (Git)
CMD, both `which python` and `which python2` are fine.  However, in
Git bash, I run into trouble.

    Owner@Owner-PC MINGW64 /c/github/vincenttam.github.io (source)
    $ which python
    /c/Python27/python
    
    Owner@Owner-PC MINGW64 /c/github/vincenttam.github.io (source)
    $ which python2
    which: no python2 in (/c/Users/Owner/bin:/mingw64/bin:/usr/local/bin:/usr/bin:/b
    in:/mingw64/bin:/usr/bin:/c/Users/Owner/bin:/c/ProgramData/Oracle/Java/javapath:
    /c/Perl/site/bin:/c/Perl/bin:/c/Program Files (x86)/Intel/iCLS Client:/c/Program
     Files/Intel/iCLS Client:/c/Windows/system32:/c/Windows:/c/Windows/System32/Wbem
    :/c/Windows/System32/WindowsPowerShell/v1.0:/c/Program Files (x86)/Intel/OpenCL 
    SDK/2.0/bin/x86:/c/Program Files (x86)/Intel/OpenCL SDK/2.0/bin/x64:/c/Program F
    iles (x86)/Common Files/Roxio Shared/DLLShared:/c/Program Files (x86)/Common Fil
    es/Roxio Shared/OEM/DLLShared:/c/Program Files (x86)/Common Files/Roxio Shared/O
    EM/DLLShared:/c/Program Files (x86)/Common Files/Roxio Shared/OEM/12.0/DLLShared
    :/c/Program Files (x86)/Roxio 2010/OEM/AudioCore:/c/Program Files/Intel/Intel(R)
     Management Engine Components/DAL:/c/Program Files/Intel/Intel(R) Management Eng
    ine Components/IPT:/c/Program Files (x86)/Intel/Intel(R) Management Engine Compo
    nents/DAL:/c/Program Files (x86)/Intel/Intel(R) Management Engine Components/IPT
    :/c/Temp/MikTeXPortable/miktex/bin:/c/MinGW/bin:/c/Temp/gnuwin32/bin:/c/ctags58:
    /c/Temp/PortableApps/gVimPortable:/c/cscope-15.8a-win32rev1-static:/c/Python27:/
    c/Ruby200-x64/bin:/c/Temp/pdf2svg-0.2.2:/c/Program Files (x86)/Skype/Phone:/cmd:
    /usr/bin/vendor_perl:/usr/bin/core_perl)
    
    Owner@Owner-PC MINGW64 /c/github/vincenttam.github.io (source)
    $ cd /c/Python27/
    
    Owner@Owner-PC MINGW64 /c/Python27
    $ ls
    DLLs/     Lib/         NEWS.txt     pythonw.exe*  Tools/
    Doc/      libs/        python.exe*  README.txt    w9xpopen.exe*
    include/  LICENSE.txt  python2.bat  tcl/
{:.cli}

Even though the generated contents can still be locally previewed,
**how can I get rid of this error message?**

<!-- more -->

Solution
---

I googled "which no python2 in" (*with surrounding double quotes*),
and found one line in the post [*Jekyll on Windows With Cygwin*][src]
written by Nathan Story very useful.  While reading his post, I
*didn't* read it from the start.  Instead, I just searched for
"python2", and quickly saw the `ln` command.

The file type of `python2` created by `ln` was *different* from what I
expected: `ls -l` *didn't* show that `python2` was a symbolic link,
and `file` even said that it was an executable file.

    Owner@Owner-PC MINGW64 /c/Python27
    $ ln -s python.exe python2
    
    Owner@Owner-PC MINGW64 /c/Python27
    $ ls -l
    total 677
    drwxr-xr-x 1 Owner 197121      0 May 25  2014 DLLs/
    drwxr-xr-x 1 Owner 197121      0 May 25  2014 Doc/
    drwxr-xr-x 1 Owner 197121      0 May 25  2014 include/
    drwxr-xr-x 1 Owner 197121      0 Oct  9  2014 Lib/
    drwxr-xr-x 1 Owner 197121      0 May 25  2014 libs/
    -rw-r--r-- 1 Owner 197121  38573 Nov 10  2013 LICENSE.txt
    -rw-r--r-- 1 Owner 197121 375685 Nov 10  2013 NEWS.txt
    -rwxr-xr-x 1 Owner 197121  26624 Nov 10  2013 python.exe*
    -rwxr-xr-x 1 Owner 197121  26624 Nov 10  2013 python2*
    -rw-r--r-- 1 Owner 197121     22 Aug 31  2014 python2.bat
    -rwxr-xr-x 1 Owner 197121  27136 Nov 10  2013 pythonw.exe*
    -rw-r--r-- 1 Owner 197121  55208 Oct 27  2013 README.txt
    drwxr-xr-x 1 Owner 197121      0 May 25  2014 tcl/
    drwxr-xr-x 1 Owner 197121      0 May 25  2014 Tools/
    -rwxr-xr-x 1 Owner 197121  49664 Nov 10  2013 w9xpopen.exe*
    
    Owner@Owner-PC MINGW64 /c/Python27
    $ file python2
    python2: PE32 executable (console) Intel 80386, for MS Windows
{:.cli}

Finally, `rake` *doesn't* give me strange output.

[pp1]: /blog/2016/02/21/miktex-update-2/
[pp2]: /blog/2014/09/02/testing-octopress-and-ruby-2-dot-0-on-windows-7-1/
[src]: http://nathanielstory.com/2013/12/28/jekyll-on-windows-with-cygwin.html
