---
layout: post
title: "Upgrade to Java 8 on Ubuntu 14.04"
date: 2015-08-13 00:14:01 +0800
comments: true
categories: Linux
---

Background
---

Before writing [the previous post][pp], I had noticed that the version
number of the current stable release of Java is 1.8 update 51.

Method
---

1. Google "ubuntu 14.04 java 8".
2. Click on [the first search result][ref].
3. Follow the instructions there.

    Note that the command in the section "Configuring Java
    Environment" should be run *before* the one in "Verify Installed
    Java Version".[^result]

Lessons learnt
---

[The encoding of files can be converted][convert] using `iconv`.

---
[^result]: You may see [the results from the terminal][term].

[pp]: /blog/2015/08/12/debug-apps-on-real-devices-in-android-studio/
[ref]: http://tecadmin.net/install-oracle-java-8-jdk-8-ubuntu-via-ppa/
[convert]: https://www.linuxquestions.org/questions/programming-9/convert-file-from-utf8-to-ascii-encoding-458839/
[term]: /downloads/code/term.html
