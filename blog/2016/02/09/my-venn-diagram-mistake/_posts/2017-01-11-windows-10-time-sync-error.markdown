---
layout: post
title: "Windows 10 Time Sync Error"
date: 2017-01-11 11:28:39 +0100
comments: true
categories: [M$ Win*]
---

I've tried adding a custom inbound rule in my firewall so as to allow
NTP access via UDP port 123 after reading a post about
[firewall settings for NTP][src1], with the aid of another post about
[detailed steps for opening ports][src2] on Windows 10.  Before that,
I had already done all [steps in services.msc][src3] to allow
automatic startup of the Windows Time service.  Finally, I *manually*
adjusted the time.

[src1]: http://www.ehow.com/how_7241410_unblock-network-time-protocol.html
[src2]: http://www.tomshardware.co.uk/faq/id-3114787/open-firewall-ports-windows.html
[src3]: https://www.organicweb.com.au/20209/general-technology/windows10-time/

*[NTP]: Network Time Protocol
