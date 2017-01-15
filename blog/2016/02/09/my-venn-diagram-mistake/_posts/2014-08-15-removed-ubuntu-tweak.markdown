---
layout: post
title: "Removed Ubuntu Tweak"
date: 2014-08-15 23:50:16 +0800
comments: true
categories: [Linux, information security]
---

Tonight, I uninstalled [Ubuntu Tweak] for security reasons.[^1]

    [owner@localhost ~]$ sudo apt-get remove ubuntu-tweak 
    [sudo] password for owner: 
    Reading package lists... Done
    Building dependency tree
    Reading state information... Done
    The following packages will be REMOVED:
    ubuntu-tweak
    0 upgraded, 0 newly installed, 1 to remove and 1 not upgraded.
    After this operation, 4,034 kB disk space will be freed.
    Do you want to continue? [Y/n] y
    (Reading database ... 354631 files and directories currently installed.)
    Removing ubuntu-tweak (0.8.7-1~precise1) ...
    Processing triggers for bamfdaemon (0.5.1+14.04.20140409-0ubuntu1) ...
    Rebuilding /usr/share/applications/bamf-2.index...
    Processing triggers for desktop-file-utils (0.22-1ubuntu1) ...
    Processing triggers for mime-support (3.54ubuntu1) ...
    Processing triggers for gnome-menus (3.10.1-0ubuntu2) ...
    Processing triggers for libglib2.0-0:i386 (2.40.0-2) ...
    Processing triggers for gconf2 (3.2.6-0ubuntu2) ...
    Processing triggers for hicolor-icon-theme (0.13-1) ...
{:.cliUB}

---
[^1]:
    See [*Avoid 10 fatal mistakes in Ubuntu and Linux Mint*][src] in
    Easy Linux tips project.

[Ubuntu Tweak]: http://ubuntu-tweak.com/
[src]: https://sites.google.com/site/easylinuxtipsproject/fatalmistakes#TOC-High-danger-level-orange-alert-:-Ubuntu-Tweak-and-Ubuntu-Sources-List-Generator
