---
layout: post
title: C Stdlib Location Failure
date: 2017-01-28T02:26:18+01:00
categories: Linux
---

I expect that the following command return the absolute path of
`stdio.h`.

{% terminal %}
$ locate stdio.h
locate: can not stat () `/var/lib/mlocate/mlocate.db': No such file or directory
{% endterminal %}

A [database update][26191] worked, though it took several minutes.

{% terminal %}
$ sudo updatedb
[sudo] password for user:

^Z
[1]+  Stopped                 sudo updatedb
user@OWNER-PC:~$ fg
sudo updatedb
$ locate stdio.h
/mnt/c/Perl/lib/CORE/nostdio.h
/mnt/c/RubyDevKit/lib/perl5/5.8/msys/CORE/nostdio.h
/mnt/c/RubyDevKit/mingw/include/c++/4.7.2/tr1/stdio.h
/mnt/c/RubyDevKit/mingw/lib/gcc/x86_64-w64-mingw32/4.7.2/include/ssp/stdio.h
/mnt/c/RubyDevKit/mingw/x86_64-w64-mingw32/include/stdio.h
/usr/include/stdio.h
/usr/include/c++/4.8/tr1/stdio.h
/usr/include/x86_64-linux-gnu/bits/stdio.h
/usr/lib/perl/5.18.2/CORE/nostdio.h
{% endterminal %}

[26191]: http://unix.stackexchange.com/a/26191/165042
