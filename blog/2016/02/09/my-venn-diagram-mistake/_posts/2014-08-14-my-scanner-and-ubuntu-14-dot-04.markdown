---
layout: post
title: "My Scanner and Ubuntu 14.04"
date: 2014-08-14 11:57:26 +0800
comments: true
categories: [Linux, hardware]
---

Background
---

- Scanning and printing works fine in my Ubuntu 12.04 desktop.
- I've upgraded to Ubuntu 14.04 LTS yesterday.[^1]

Problem
---

When I used Simple Scan, Ubuntu's GUI tool for scanning documents, I
encountered an error---the program *couldn't* detect my scanner.

![Simple Scan didn't detect my scanner][ecscan]

**How can I scan images from my scanner in Ubuntu?**

<!-- more -->

Discussion
---

The working principle GUI tools are *much* more complicated than its
command line counterpart.

I'll illustrate the idea by a typical component in GUI by borrowing
other's depication of the *delegation model* in Java GUI programming.

![Java GUI button and listener][DelMod1]  
![Java GUI delegation model][DelMod2]  
<small>Source: *yet another insignificant programming
notes*[^img_src]</small>

In my opinion, the working principle of a button in GUI is much more
abstract than that of the nervous system in a human body.  One can
learn about the bilogical principles through observations of concrete
objects.

![Human nervous system][bio]  
<small>Source: *Passnownow*[^img_src2]</small>

Solution
---

### Temporary method

Therefore, I immediately googled the \*nix command for scanning
documents, and came up with `brscan-skey`.  I ran it with the `-l`
flag, the it said that my scanner *wasn't* registered.

<pre class="cli"><code class="UBMono"># brscan-skey
# brscan-skey -l
 XXX-XXXX          : brotherX:busX;devX  : USB                  <span class="err">Not registered</span>
</code></pre>

A [comment][forum_post] for *Brother MFC-465CN* took me to Brother's
documentation for Linux drivers, but finding the right page by viewing
the right hyperlink was too slow, so I searched the command and
restricted the results to those in Brother's website.  The page in the
official documentation inspired me to add the following lines just
before the last line of `/lib/udev/rules.d/40-libsane.rules`.[^doc]

    # Brother scanners
    ATTRS{idVendor}=="04f9", ENV{libsane_matched}="yes"

I rebooted my computer and my scanner became "active".  However,
Simple Scan still *couldn't* detect it.  I followed the official
documentation and pressed "Scan" button on the device.  It worked and
the scanned files with the TIFF format could be found under
`~/brscan/`.


After an hour, when I ran the *same* command to list out the devices
that `brscan-skey` could detect, I got *no* output.

However, I could still use the button on my scanner to produce scanned
images.

---
[^1]:
    Refer to [*Ubuntu Distribution Upgrade to 14.04*][pp1] and
    [*Upgraded Ubuntu*][pp2] for details.

[pp1]: /blog/2014/08/12/ubuntu-distribution-upgrade-to-14-dot-04/
[pp2]: /blog/2014/08/13/upgraded-ubuntu/
[ecscan]: /images/posts/Ubuntu1404Scan/ecscan.png
[DelMod1]: /images/posts/Ubuntu1404Scan/AWT-ActionListener.png
[DelMod2]: /images/posts/Ubuntu1404Scan/AWT-WindowEventSeqDiagram.png
[^img_src]:
    Chua Hock-Chuan.  (2014, March).  *Java Programming Tutorial*.
    Retrieved 12:25, August 14, 2014, from
    <http://www.ntu.edu.sg/home/ehchua/programming/java/j4a_gui.html#zz-3.1>

[bio]: /images/posts/Ubuntu1404Scan/VoluntaryAction.jpg
[^img_src2]:
    Reflex and Voluntary Actions.  (n.d.).  In *Passnownow*.
    Retrieved 12:52, August 14, 2014, from
    <http://passnownow.com/classwork-series-and-exercises-biology-ss3-reflex-and-voluntary-actions/>

[forum_post]: http://ubuntuforums.org/showthread.php?t=937898&p=11707315#post11707315 "Re: Brother MFC-465CN"
[^doc]:
    Scanner setting for normal user. (2013). In *Linux Informations*.
    Retrieved 13:53, August 14, 2014, from
    <http://support.brother.com/g/s/id/linux/en/instruction_scn1c.html?c=us_ot&lang=en&redirect=on#u9.10>
