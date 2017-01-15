---
layout: post
title: "I/O Errors during Removal of Old Kernels"
date: 2014-09-13 23:14:25 +0800
comments: true
categories: Linux
---

Problem
---

I encountered some block I/O errors while deleting old Linux kernels.

{% img fancybox /images/posts/RmOldKer/err.png 900 'Received errors in tty1' ['error messages'] %}

<!-- more -->

As the error messages were just after the line `Found Fedora ...`, I
booted into Fedora 17 out of curiousity.

Cause
---

In Fedora's file manager, I found the reason for the above error
messages.

{% img fancybox /images/posts/RmOldKer/cause.png 900 'Cause of the above error' ['Fedora file manager'] %}
