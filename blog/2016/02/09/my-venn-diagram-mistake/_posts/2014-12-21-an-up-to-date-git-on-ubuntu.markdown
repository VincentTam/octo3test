---
layout: post
title: "An Up-to-date Git on Ubuntu"
date: 2014-12-21 01:03:49 +0800
comments: true
categories: [Git, Linux]
---

Background
---

Tonight, I read the most recent blog article on
[GitHub's blog][gh_blog].[^post]  It says that the version of Git Bash
on my M\$ Win\* 7 is *unsafe*.  Moreover, it is claimed that
[GNU/Linux][nix] computers *aren't* affected since they're case
sensitive.  At first, I believed that I *didn't* need to upgrade my
[Git].  However, after I clicked the link for the announcement of Git
v2.2.1, I checked the version of the [Git] on [Ubuntu], and found out
that it *wasn't* the newest one.  The following paragraph convinced me
to get this update on my Ubuntu desktop.

{% raw %}
{% quote author:"Junio C Hamano" url:http://article.gmane.org/gmane.linux.kernel/1853266 title:"[ANNOUNCE] Git v2.2.1 (and updates to older maintenance tracks)" %}
{% endraw %}
Even though the issue may not affect Linux users, if you are a hosting service whose users may fetch from your service to Windows or Mac OS X machines, you are strongly encouraged to update to protect such users who use existing versions of Git.
{% raw %}
{% endquote %}
{% endraw %}

<!-- more -->

Solution
---

Add the PPA for [Git].

    $ sudo add-apt-repository ppa:git-core/ppa
    [sudo] password for owner:
     The most current stable version of Git for Ubuntu.

    For release candidates, go to https://launchpad.net/~git-core/+archive/candidate .
      More info: https://launchpad.net/~git-core/+archive/ubuntu/ppa
    Press [ENTER] to continue or Ctrl-C to cancel adding it

    gpg: keyring `/tmp/tmplo3t2ozz/secring.gpg' created
    gpg: keyring `/tmp/tmplo3t2ozz/pubring.gpg' created
    gpg: requesting key E1DF1F24 from hkp server keyserver.ubuntu.com
    gpg: /tmp/tmplo3t2ozz/trustdb.gpg: trustdb created
    gpg: key E1DF1F24: public key "Launchpad PPA for Ubuntu Git Maintainers" imported
    gpg: Total number processed: 1
    gpg:               imported: 1  (RSA: 1)
    OK
{:.cliUB}

Update the package information and upgrade the file.

    $ sudo apt-get upgrade
    Reading package lists... Done
    Building dependency tree
    Reading state information... Done
    Calculating upgrade... Done
    The following packages will be upgraded:
      git git-core git-man gitk
    4 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
    Need to get 5,604 kB of archives.
    After this operation, 1,528 kB of additional disk space will be used.
    Do you want to continue? [Y/n] Y
    Get:1 http://ppa.launchpad.net/git-core/ppa/ubuntu/ trusty/main gitk all 1:2.2.1-0ppa2~ubuntu14.04.1 [704 kB]
    Get:2 http://ppa.launchpad.net/git-core/ppa/ubuntu/ trusty/main git i386 1:2.2.1-0ppa2~ubuntu14.04.1 [3,601 kB]
    Get:3 http://ppa.launchpad.net/git-core/ppa/ubuntu/ trusty/main git-man all 1:2.2.1-0ppa2~ubuntu14.04.1 [1,298 kB]
    Get:4 http://ppa.launchpad.net/git-core/ppa/ubuntu/ trusty/main git-core all 1:2.2.1-0ppa2~ubuntu14.04.1 [1,412 B]
    Fetched 5,604 kB in 23s (240 kB/s)
    (Reading database ... 380182 files and directories currently installed.)
    Preparing to unpack .../gitk_1%3a2.2.1-0ppa2~ubuntu14.04.1_all.deb ...
    Unpacking gitk (1:2.2.1-0ppa2~ubuntu14.04.1) over (1:2.0.4-0ppa1~ubuntu12.04.1) ...
    Preparing to unpack .../git_1%3a2.2.1-0ppa2~ubuntu14.04.1_i386.deb ...
    Unpacking git (1:2.2.1-0ppa2~ubuntu14.04.1) over (1:2.0.4-0ppa1~ubuntu12.04.1) ...
    Preparing to unpack .../git-man_1%3a2.2.1-0ppa2~ubuntu14.04.1_all.deb ...
    Unpacking git-man (1:2.2.1-0ppa2~ubuntu14.04.1) over (1:2.0.4-0ppa1~ubuntu12.04.1) ...
    Preparing to unpack .../git-core_1%3a2.2.1-0ppa2~ubuntu14.04.1_all.deb ...
    Unpacking git-core (1:2.2.1-0ppa2~ubuntu14.04.1) over (1:2.0.4-0ppa1~ubuntu12.04.1) ...
    Processing triggers for man-db (2.6.7.1-1ubuntu1) ...
    Setting up git-man (1:2.2.1-0ppa2~ubuntu14.04.1) ...
    Setting up git (1:2.2.1-0ppa2~ubuntu14.04.1) ...
    Setting up gitk (1:2.2.1-0ppa2~ubuntu14.04.1) ...
    Setting up git-core (1:2.2.1-0ppa2~ubuntu14.04.1) ...
{:.cliUB}

Now, I've the newest stable release of [Git].

    $ git --version
    git version 2.2.1
{:.cliUB}

---
[^post]:
    [*Vulnerability announced: update your Git clients*][post] by
    Vicent Marti.

[gh_blog]: https://github.com/blog
[post]: http://article.gmane.org/gmane.linux.kernel/1853266
[Git]: http://git-scm.com/
[nix]: https://www.gnu.org/gnu/linux-and-gnu.en.html
[Ubuntu]: http://www.ubuntu.com

*[PPA]: Personal Package Archive
