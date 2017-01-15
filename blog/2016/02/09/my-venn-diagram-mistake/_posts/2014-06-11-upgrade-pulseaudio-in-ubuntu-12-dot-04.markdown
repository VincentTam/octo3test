---
layout: post
title: "Upgrade PulseAudio in Ubuntu 12.04"
date: 2014-06-11 20:22:51 +0800
comments: true
categories: Linux
---

Reason for the upgrade
---

This Sunday, I opened [VLC] to watch video, and ran into a "potential PulseAudio version problem".

![VLC error dialog showing a PulseAudio version problem][VLCErrDialog]

My clumsy way to fix the issue
---

Among the sites found with Google, I can only understand the instructions from [a question on Ask Ubuntu][AskUbuntu258892].

I typed in the command word-by-word like this.

    $ sudo add-apt-repository ppa:ubuntu:audio-dev/ppa
{:.cliUB}

Then I got an error.  I read [Ubuntu Audio Development Team's PPA][ubuntu-audio-dev] on Launchpad to remind myself the command for adding PPAs.  I saw that I *didn't* include `/ppa` at the end, so I added it back and ran the command again.  However, it *failed* again.

Finally, I discovered that I had made a silly mistake in the command in the command: the `:` between `ubuntu` and `audio` should be `-`.

[VLC]: https://www.videolan.org/vlc/ "VLC media player"
[AskUbuntu258892]: http://askubuntu.com/a/289380 "How to upgrade pulseaudio"
[ubuntu-audio-dev]: https://launchpad.net/~ubuntu-audio-dev/+archive/ppa

[VLCErrDialog]: /images/posts/PulseAudioUpgrade/errors.png
