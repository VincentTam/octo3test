---
layout: post
title: "Debug Apps on Real Devices in Android Studio"
date: 2015-08-12 10:46:44 +0800
comments: true
categories: [Android]
---

After spending hours to find out that I need to tap on "Settings" →
"About" → ... → "Build number" for enabling USB debugging in the
"Developers options" on an Android phone, I plugged the phone into a
Mac desktop, but it *didn't* show up in the "Devices" in Finder.  I
thought that Mac *couldn't* detect the phone, and I searched Google
for a long time.  After having seen the name of an application for
synchronising data between and phone and the computer for a few times,
I finally decided to download it since I *didn't* know what else to
do.  Luckily, my app could be run on the phone with the help of
Android Studio installed on the Mac desktop.

<span class="tex2jax_ignore">
An hour later, I tried to setup the development environment on an M\$
Win\* computer.  Its installed size is over 20GB!  After hours of
installation work, I was *stuck* again on M\$ Win\*:  unlike the Mac
computer, that M\$ Win\* machine could detect the Android mobile
device and show it in "Computer" within a minute.  I added the
following lines into `/{AppName}/app/build.gradle` according to
[a page of the official website][doc].
</span>

{% codeblock To enable debugging on a real Android device lang:groovy %}
android {
    buildTypes {
        debug {
            debuggable true
        }
{% endcodeblock %}

However, the IDE said that *no debuggable device* could be found.  I
guessed that the synchronising application made by the manufacturer of
the phone was the cause of that undesirable result.  After fetching
the application from the website of the phone manufacturer and
restarting Android Studio, I could finally run the same application on
a real Android device by clicking the little triangle on the top.

[doc]: https://developer.android.com/tools/device.html#setting-up
