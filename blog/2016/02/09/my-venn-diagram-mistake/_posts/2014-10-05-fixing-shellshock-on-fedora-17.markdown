---
layout: post
title: "Fixing Shellshock on Fedora 17"
date: 2014-10-05 16:58:54 +0800
comments: true
categories: [information security, Linux]
---

Background
---

{% raw %}
{% quote author:"David Gilbert" url:http://goo.gl/K0eyxH title:"What is Shellshock? The OS X and Linux Bash Bug that Could be Bigger than Heartbleed" %}
{% endraw %}
A serious bug has been found affecting Linux and Mac OS X software, which security researchers claim could be bigger than Heartbleed.
...
Dubbed Shellshock, or the Bash Bug, the security vulnerability is officially known as CVE-2014-6271 and affects the Bash command processor which is used in most Linux distributions, in Apple's Mac OS X, and the Apache web server software, among others.
...
<strong>Which systems are affected?</strong>

Servers, <strong>home computers</strong>, and embedded devices are all vulnerable.

Users running Linux and Mac OS X on their PCs are at risk, but it is thought that the most likely target will be web servers running the Apache web server software.

And this is a big problem, especially when you consider that up to 60% of the web servers out there use this software.

Apache uses Bash to run background applications which process data from users, such as information inputted to online forms. If an attacker was able to exploit this vulnerability by making a web request which included exploit code, they would theoretically be able to launch widespread attacks on visitors to that website.

Ian Pratt, co-founder at Bromium told IBTimes UK: "It's going to impact large numbers of internet-facing linux/unix/OS X systems as bash has been around for many years and is frequently used as the 'glue' to connect software components used in building applications. Vulnerable network-facing applications can easily be remotely exploited to allow an attacker to gain access to the system."
{% raw %}
{% endquote %}
{% endraw %}

In response to this bug, I've just checked if the bash on my Ubuntu
desktop is safe.[^1]  Actually, the necessary updates have been
installed in the system.

Problem
---

I've also installed Fedora 17 two years ago.[^2]  Nowadays, it's *no*
longer maintained by the package managers, who look after packages for
newer versions of the GNU/Linux distribution.[^3]

**How can one fix the bash on Fedora 17?**

I searched "shellshock fedora" on Google, and have learnt more about
the security hole in *Fedora Megazine*.[^4]

<!-- more -->

Solution
---

I googled 'shellshock "fedora 17"', and found the solution in the
fourth search result.[^5]  The instructions are easy to understand and
follow.  I could manually update the bash in less than half an hour.

If one *can't* find the command `rpmbuild` in the Terminal, then one
can simply `yum install rpm-build`.[^6]

In step 1, there will be warnings about "mockbuild".  I *don't* know
what's that, and ignoring it *won't* cause any troubles.

Step 6 should be the most time-consuming step.  There will be a lot of
output, and much of it starts with "warning:".  At first, I was
frightened and stopped the task after the Terminal remained to show
"warning: SIGHUP" at the last line for more than a minute.  I tried
interrupting the task twice, and then type the same command again to
build the package.  For the third time, I opened the system monitor,
and saw that the CPU usage was fluctuating at the level of a few
percents.  I just did something else for a while, and came back to the
Terminal.  That's what I saw.

~~~
warning: there may be a message regarding a cat process dying due to a
warning: SIGHUP.  Please disregard.
run-lastpipe
run-mapfile
run-more-exp
run-new-exp
warning: two of these tests will fail if your OS does not support
warning: named pipes or the /dev/fd filesystem.  If the tests of the
warning: process substitution mechanism fail, please do not consider
warning: this a test failure
warning: if you have exported variables beginning with the string _Q,
warning: diff output may be generated.  If so, please do not consider
warning: this a test failure
run-nquote
run-nquote1
warning: several of these tests will fail if arrays have not
warning: been compiled into the shell.
run-nquote2
warning: several of these tests will fail if arrays have not
warning: been compiled into the shell.
run-nquote3
warning: several of these tests will fail if arrays have not
warning: been compiled into the shell.
run-nquote4
warning: some of these tests will fail if you do not have UTF-8
warning: locales installed on your system
run-nquote5
run-posix2
run-posixexp
run-posixexp2
run-posixpat
run-posixpipe
run-precedence
run-printf
run-quote
run-read
warning: please do not consider output differing only in the amount of
warning: white space to be an error.
run-redir
warning: the text of a system error message may vary between systems and
warning: produce diff output.
warning: if the text of an error message concerning `redir1.*' not being
warning: found or messages concerning bad file descriptors produce diff
warning: output, please do not consider it a test failure
run-rhs-exp
run-rsh
run-set-e
run-set-x
run-shopt
run-strip
run-test
1d0
< test-tests: the test suite should not be run as root
run-tilde
run-tilde2
run-trap
warning: UNIX versions number signals and schedule processes differently.
warning: If output differing only in line numbers is produced, please
warning: do not consider this a test failure.
71,72d70
< +[8] false
< +[8] cat
73a72,73
> +[8] cat
> +[8] false
84d83
< trap -- '' SIGUSR2
85a85
> trap -- '' SIGUSR2
run-type
run-varenv
run-vredir
+ exit 0
Processing files: bash-4.2.39-3.fc17.i386
Provides: /bin/bash /bin/sh config(bash) = 4.2.39-3.fc17
Requires(rpmlib): rpmlib(BuiltinLuaScripts) <= 4.2.2-1 rpmlib(CompressedFileName
s) <= 3.0.4-1 rpmlib(PayloadFilesHavePrefix) <= 4.0-1
Requires: /bin/sh libc.so.6 libc.so.6(GLIBC_2.0) libc.so.6(GLIBC_2.1) libc.so.6(
GLIBC_2.1.1) libc.so.6(GLIBC_2.2) libc.so.6(GLIBC_2.3) libc.so.6(GLIBC_2.3.4) li
bc.so.6(GLIBC_2.4) libdl.so.2 libdl.so.2(GLIBC_2.0) libdl.so.2(GLIBC_2.1) libtin
fo.so.5 rtld(GNU_HASH)
Conflicts: filesystem < 3
Processing files: bash-doc-4.2.39-3.fc17.i386
Requires(rpmlib): rpmlib(CompressedFileNames) <= 3.0.4-1 rpmlib(PayloadFilesHave
Prefix) <= 4.0-1
Requires: /bin/bash /bin/sh
Checking for unpackaged file(s): /usr/lib/rpm/check-files /root/rpmbuild/BUILDRO
OT/bash-4.2.39-3.fc17.i386
Wrote: /root/rpmbuild/RPMS/i386/bash-4.2.39-3.fc17.i386.rpm
Wrote: /root/rpmbuild/RPMS/i386/bash-doc-4.2.39-3.fc17.i386.rpm
Executing(%clean): /bin/sh -e /var/tmp/rpm-tmp.CKHZO7
+ umask 022
+ cd /root/rpmbuild/BUILD
+ cd bash-4.2
+ rm -rf /root/rpmbuild/BUILDROOT/bash-4.2.39-3.fc17.i386
+ exit 0
~~~
{:.cli}

From the bottom part of the output, it's clear that I could proceed to
step 7.

    [root@localhost SPECS]# rpm -Uhv /root/rpmbuild/RPMS/i386/bash-4.2.39-3.fc17.i38
    6.rpm --force
    Preparing...                ########################################### [100%]
       1:bash                   ########################################### [100%]
{:.cli}

Finally, I finished the job.

    [root@localhost SPECS]# foo='() { echo not patched; }' bash -c foo
    bash: foo: command not found
{:.cli}

That's a part of the compiler's output in step 6.

~~~
	  ***********************************************************
	  *                                                         *
	  * GNU bash, version 4.2.50(1)-release (i686-redhat-linux-gnu)
	  *                                                         *
	  ***********************************************************

Testing /root/rpmbuild/BUILD/bash-4.2/bash
version: 4.2.50(1)-release
versinfo: 4 2 50 1 release i686-redhat-linux-gnu
HOSTTYPE = i686
OSTYPE = linux-gnu
MACHTYPE = i686-redhat-linux-gnu
Any output from any test, unless otherwise noted, indicates a possible anomaly
~~~
{:.cli}

I would like to leave a comment to say thanks to Jan Slupski, but I
*failed* to do so.

![can't reply](/images/posts/ShellshockF17/RepFailed.png)

---
[^1]:
    See [*Shellshock: Better 'Bash' Patches Now Available*][PP1] in
    Blog 1 for details.

[^2]:
    See [*I/O Errors During Removal of Old Kernels*][PP2] in Blog 1
    for the screenshot which shows that I have Fedora 17 installed in
    my desktop.

[^3]:
    See [*Fedora 17 End of Life*][f17eol] in the Fedora announce
    mailing list for details.

[^4]:
    To learn more on the vulnerability of the old bash shell, one may
    refer to [*Shellshock: How does it actually work?*][wtbug]

[^5]:
    Slupski, J.  (September 29, 2014).  *Fedora 17 Shellshock fix
    (until official F17 bugfix RPM is released)* in Jan Slupski.
    Retrieved from
    <http://juljas.net/lpt/post/fedora-17-shellshock-fix>

[^6]:
    One can find related information on that using a search engine,
    and view the results, say
    [Set Up an RPM Build Environment under CentOS][rpmbuild] in *Cent
    OS Wiki*.

[PP1]: /blog/2014/10/05/shellshock-better-bash-patches-now-available/
[PP2]: /blog/2014/09/13/i-slash-o-errors-during-removal-of-old-kernels/
[f17eol]: https://lists.fedoraproject.org/pipermail/announce/2013-July/003177.html
[wtbug]: http://fedoramagazine.org/shellshock-how-does-it-actually-work/
[rpmbuild]: http://wiki.centos.org/HowTos/SetupRpmBuildEnvironment
