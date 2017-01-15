---
layout: post
title: "Octoshape on Ubuntu 14.04"
date: 2015-06-13 22:26:34 +0800
comments: true
categories: [Linux, web technologies]
---

Background
---

I installed [Octoshape player][octoshape] 2 years ago on Ubuntu 12.04.
A year ago, I [upgraded the OS to Ubuntu 14.04][ubuntu_upgrade].

Problem
---

I tried running Octoshape streaming service on
[a sample test page][test_page] tonight.  Unluckily, it *failed* to
work.  On the test page, the output on the right-hand side was similar
to the one listed below.

    20:35:57.368: OctoProgressEvent: 0 - Connecting to Octoshape client
    20:35:57.382: Player is waiting for a link input (this does not mean
    that Octoshape is ready).
    20:35:57.509: OctoProgressEvent: 83 - Connecting to Octoshape client
    20:35:57.623: OctoProgressEvent: 166 - Connecting to Octoshape client
    20:35:57.748: OctoProgressEvent: 249 - Connecting to Octoshape client
    20:35:57.880: OctoProgressEvent: 332 - Connecting to Octoshape client
    20:35:58.011: OctoProgressEvent: 415 - Connecting to Octoshape client
    20:35:58.138: OctoProgressEvent: 498 - Connecting to Octoshape client
    20:35:58.271: OctoProgressEvent: 581 - Connecting to Octoshape client
    20:35:58.370: OctoProgressEvent: 664 - Connecting to Octoshape client
    20:35:58.470: OctoProgressEvent: 747 - Connecting to Octoshape client
    20:35:58.574: OctoProgressEvent: 830 - Connecting to Octoshape client
    20:35:58.704: OctoProgressEvent: 913 - Connecting to Octoshape client
    20:35:58.804: OctoProgressEvent: 996 - Connecting to Octoshape client
    20:35:58.808: OctoProgressEvent: 1000 - Connecting to Octoshape client

<!-- more -->

Cause
---

I ran `ls` in `/opt/octoshape`, which is the folder in which Octoshape
player had been installed.

    $ pwd
    /opt/octoshape
    $ ls
    eula.rtf                     sua-1011082-0-marker.txt
    eula.txt                     sua-1011082-0-module.xml
    OctoshapeClient              sua-1011082-0-OctoshapeClientSUA
    setup.xml                    sua-1011082-0-OctoshapeClientSUA.sig
    sua-1011082-0-confirmed.txt  sua-1011082-0-suapack-versions.txt
    sua-1011082-0-dynfiles.zip
{:.cliUB}

I suspected that the version of Octoshape was too *old*.

Solution
---

I *removed the folder* where Octoshape was installed, and
*re-installed* the player again, then it *worked*.

---
(Added on AUG 3RD, 2015)

This only worked for a while.  **After reboot, it *won't* start
again**.

[octoshape]: http://www.octoshape.com/support/infinite-hd-octoshape-app/
[ubuntu_upgrade]: /blog/2014/08/12/ubuntu-distribution-upgrade-to-14-dot-04/
[test_page]: http://demo.octoshape.com/arplayer3/?link=octoshape://streams.octoshape.net/Demo.Trailers_500
