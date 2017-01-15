---
layout: post
title: "Completely Remove Linux Kernels"
date: 2014-09-13 23:24:51 +0800
comments: true
categories: Linux
---

Background
---

I issued the following command and then rebooted the machine.

    $ sudo aptitude remove linux-headers-3.2.0-67-generic-pae \
    > linux-image-3.2.0-67-generic-pae linux-headers-3.13.0-33-generic \
    > linux-image-3.13.0-33-generic linux-image-extra-3.13.0-33-generic
{:.cliUB}

Problem
---

I checked the list of installed packages, and the above removed package was still there, though in the status of `rc`.[^1]

**How can that package disappear from the list?**

<!-- more -->

Solution
---

Use `purge` instead of `remove` in the above command.

<pre class="cli"><code class="UBMono">$ <span class="UBHLCode">sudo aptitude purge linux-image-3.2.0-67-generic-pae</span>
[sudo] password for owner:
The following packages will be REMOVED:
  linux-image-3.2.0-67-generic-pae{p}
0 packages upgraded, 0 newly installed, 1 to remove and 0 not upgraded.
Need to get 0 B of archives. After unpacking 0 B will be used.
Do you want to continue? [Y/n/?] Y
(Reading database ... 349931 files and directories currently installed.)
Removing linux-image-3.2.0-67-generic-pae (3.2.0-67.101) ...
Purging configuration files for linux-image-3.2.0-67-generic-pae (3.2.0-67.101) 
...
Examining /etc/kernel/postrm.d .
run-parts: executing /etc/kernel/postrm.d/initramfs-tools 3.2.0-67-generic-pae /
boot/vmlinuz-3.2.0-67-generic-pae
run-parts: executing /etc/kernel/postrm.d/zz-update-grub 3.2.0-67-generic-pae /
boot/vmlinuz-3.2.0-67-generic-pae
$ <span class="UBHLCode">sudo aptitude purge linux-image-3.13.0-33-generic linux-image-extra-3.13.0-33-
generic</span>
The following packages will be REMOVED:
  linux-image-3.13.0-33-generic{p} linux-image-extra-3.13.0-33-generic{p}
0 packages upgraded, 0 newly installed, 2 to remove and 0 not upgraded.
Need to get 0 B of archives. After unpacking 0 B will be used.
Do you want to continue? [Y/n/?] Y
(Reading database ... 349931 files and directories currently installed.)
Removing linux-image-3.13.0-33-generic (3.13.0-33.58) ...
Purging configuration files for linux-image-3.13.0-33-generic (3.13.0-33.58) ...
Examining /etc/kernel/postrm.d .
run-parts: executing /etc/kernel/postrm.d/initramfs-tools 3.13.0-33-generic /boo
t/vmlinuz-3.13.0-33-generic
run-parts: executing /etc/kernel/postrm.d/zz-update-grub 3.13.0-33-generic /boot
/vmlinuz-3.13.0-33-generic
Removing linux-image-extra-3.13.0-33-generic (3.13.0-33.58) ...
Purging configuration files for linux-image-extra-3.13.0-33-generic (3.13.0-33.5
8) ...
Examining /etc/kernel/postrm.d .
run-parts: executing /etc/kernel/postrm.d/initramfs-tools 3.13.0-33-generic /boo
t/vmlinuz-3.13.0-33-generic
run-parts: executing /etc/kernel/postrm.d/zz-update-grub 3.13.0-33-generic /boot
/vmlinuz-3.13.0-33-generic
</code></pre>

After running the above two commands, the above three removed Linux
kernel images with status `rc` *shouldn't* be seen in the list of
packages anymore.[^2]

---
[^1]: [View the terminal commands and output](#list1){:.cliwide}.

<div id="list1" class="noscr" markdown="1">
The **bold** lines represent the packages that are going to be
completely removed.

<pre class="cli"><code class="UBMono">$ dpkg -l | grep linux
ii  fonts-<span class="grep">linux</span>libertine                                  5.3.0-2                                             all          Linux Libertine family of fonts
ii  libse<span class="grep">linux</span>1:i386                                      2.2.2-1ubuntu0.1                                    i386         SELinux runtime shared libraries
ii  libv4l-0:i386                                         1.0.1-1                                             i386         Collection of video4<span class="grep">linux</span> support lib
raries
ii  libv4lconvert0:i386                                   1.0.1-1                                             i386         Video4<span class="grep">linux</span> frame format conversion l
ibrary
ii  <span class="grep">linux</span>-firmware                                        1.127.5                                             all          Firmware for Linux kernel drivers
ii  <span class="grep">linux</span>-generic                                         3.13.0.35.42                                        i386         Complete Generic Linux kernel and hea
ders
ii  <span class="grep">linux</span>-generic-pae                                     3.13.0.35.42                                        i386         Transitional package.
ii  <span class="grep">linux</span>-headers-3.13.0-34                               3.13.0-34.60                                        all          Header files related to Linux kernel
version 3.13.0
ii  <span class="grep">linux</span>-headers-3.13.0-34-generic                       3.13.0-34.60                                        i386         Linux kernel headers for version 3.13
.0 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-headers-3.13.0-35                               3.13.0-35.62                                        all          Header files related to Linux kernel
version 3.13.0
ii  <span class="grep">linux</span>-headers-3.13.0-35-generic                       3.13.0-35.62                                        i386         Linux kernel headers for version 3.13
.0 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-headers-generic                                 3.13.0.35.42                                        i386         Generic Linux kernel headers
ii  <span class="grep">linux</span>-headers-generic-pae                             3.13.0.35.42                                        i386         Transitional package
<span class="UBHLCode">rc  <span class="grep">linux</span>-image-3.13.0-33-generic                         3.13.0-33.58                                        i386         Linux kernel image for version 3.13.0
on 32 bit x86 SMP</span>
ii  <span class="grep">linux</span>-image-3.13.0-34-generic                         3.13.0-34.60                                        i386         Linux kernel image for version 3.13.0
on 32 bit x86 SMP
ii  <span class="grep">linux</span>-image-3.13.0-35-generic                         3.13.0-35.62                                        i386         Linux kernel image for version 3.13.0
on 32 bit x86 SMP
<span class="UBHLCode">rc  <span class="grep">linux</span>-image-3.2.0-67-generic-pae                      3.2.0-67.101                                        i386         Linux kernel image for version 3.2.0
on 32 bit x86 SMP</span>
<span class="UBHLCode">rc  <span class="grep">linux</span>-image-extra-3.13.0-33-generic                   3.13.0-33.58                                        i386         Linux kernel extra modules for versio
n 3.13.0 on 32 bit x86 SMP</span>
ii  <span class="grep">linux</span>-image-extra-3.13.0-34-generic                   3.13.0-34.60                                        i386         Linux kernel extra modules for versio
n 3.13.0 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-image-extra-3.13.0-35-generic                   3.13.0-35.62                                        i386         Linux kernel extra modules for versio
n 3.13.0 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-image-generic                                   3.13.0.35.42                                        i386         Generic Linux kernel image
ii  <span class="grep">linux</span>-image-generic-pae                               3.13.0.35.42                                        i386         Transitional package
ii  <span class="grep">linux</span>-libc-dev:i386                                   3.13.0-35.62                                        i386         Linux Kernel Headers for development
ii  <span class="grep">linux</span>-sound-base                                      1.0.25+dfsg-0ubuntu4                                all          base package for ALSA and OSS sound s
ystems
ii  pptp-<span class="grep">linux</span>                                            1.7.2-7                                             i386         Point-to-Point Tunneling Protocol (PP
TP) Client
ii  sys<span class="grep">linux</span>                                              3:4.05+dfsg-6+deb8u1                                i386         collection of boot loaders
ii  sys<span class="grep">linux</span>-common                                       3:4.05+dfsg-6+deb8u1                                all          collection of boot loaders (common fi
les)
ii  sys<span class="grep">linux</span>-legacy                                       2:3.63+dfsg-2ubuntu5                                i386         Bootloader for Linux/i386 using MS-DO
S floppies
ii  util-<span class="grep">linux</span>                                            2.20.1-5.1ubuntu20.1                                i386         Miscellaneous system utilities
</code></pre>
</div>

[^2]: [View the terminal commands and output](#list2){:.cliwide}.

<div id="list2" class="noscr" markdown="1">
There's *no* lines beginning with `rc`.

<pre class="cli"><code class="UBMono">$ dpkg -l | grep linux
ii  fonts-<span class="grep">linux</span>libertine                                  5.3.0-2                                             all          Linux Libertine family of fonts
ii  libse<span class="grep">linux</span>1:i386                                      2.2.2-1ubuntu0.1                                    i386         SELinux runtime shared libraries
ii  libv4l-0:i386                                         1.0.1-1                                             i386         Collection of video4<span class="grep">linux</span> support lib
raries
ii  libv4lconvert0:i386                                   1.0.1-1                                             i386         Video4<span class="grep">linux</span> frame format conversion l
ibrary
ii  <span class="grep">linux</span>-firmware                                        1.127.5                                             all          Firmware for Linux kernel drivers
ii  <span class="grep">linux</span>-generic                                         3.13.0.35.42                                        i386         Complete Generic Linux kernel and hea
ders
ii  <span class="grep">linux</span>-generic-pae                                     3.13.0.35.42                                        i386         Transitional package.
ii  <span class="grep">linux</span>-headers-3.13.0-34                               3.13.0-34.60                                        all          Header files related to Linux kernel
version 3.13.0
ii  <span class="grep">linux</span>-headers-3.13.0-34-generic                       3.13.0-34.60                                        i386         Linux kernel headers for version 3.13
.0 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-headers-3.13.0-35                               3.13.0-35.62                                        all          Header files related to Linux kernel
version 3.13.0
ii  <span class="grep">linux</span>-headers-3.13.0-35-generic                       3.13.0-35.62                                        i386         Linux kernel headers for version 3.13
.0 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-headers-generic                                 3.13.0.35.42                                        i386         Generic Linux kernel headers
ii  <span class="grep">linux</span>-headers-generic-pae                             3.13.0.35.42                                        i386         Transitional package
ii  <span class="grep">linux</span>-image-3.13.0-34-generic                         3.13.0-34.60                                        i386         Linux kernel image for version 3.13.0
 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-image-3.13.0-35-generic                         3.13.0-35.62                                        i386         Linux kernel image for version 3.13.0
 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-image-extra-3.13.0-34-generic                   3.13.0-34.60                                        i386         Linux kernel extra modules for versio
n 3.13.0 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-image-extra-3.13.0-35-generic                   3.13.0-35.62                                        i386         Linux kernel extra modules for versio
n 3.13.0 on 32 bit x86 SMP
ii  <span class="grep">linux</span>-image-generic                                   3.13.0.35.42                                        i386         Generic Linux kernel image
ii  <span class="grep">linux</span>-image-generic-pae                               3.13.0.35.42                                        i386         Transitional package
ii  <span class="grep">linux</span>-libc-dev:i386                                   3.13.0-35.62                                        i386         Linux Kernel Headers for development
ii  <span class="grep">linux</span>-sound-base                                      1.0.25+dfsg-0ubuntu4                                all          base package for ALSA and OSS sound s
ystems
ii  pptp-<span class="grep">linux</span>                                            1.7.2-7                                             i386         Point-to-Point Tunneling Protocol (PP
TP) Client
ii  sys<span class="grep">linux</span>                                              3:4.05+dfsg-6+deb8u1                                i386         collection of boot loaders
ii  sys<span class="grep">linux</span>-common                                       3:4.05+dfsg-6+deb8u1                                all          collection of boot loaders (common fi
les)
ii  sys<span class="grep">linux</span>-legacy                                       2:3.63+dfsg-2ubuntu5                                i386         Bootloader for Linux/i386 using MS-DO
S floppies
ii  util-<span class="grep">linux</span>                                            2.20.1-5.1ubuntu20.1                                i386         Miscellaneous system utilities
</code></pre>
</div>
