---
layout: post
title: "Test Embedded Fancybox Inline Element"
date: 2014-09-13 13:48:47 +0800
comments: true
categories: [web technologies]
---

Why?
---

It's because I've some code block/console input/output which have more
than 80 characters and their width *can't* be reduced.  For example,
in [*GNU ddrescue—A Powerful Data Recovery Tool*][pp], there's a
`<pre>` tag which is very wide.  There's a scrollbar at the bottom,
but it's *hard* to see.

{% img fancybox /images/posts/FancyboxInline/scroll1.png 900 'Move the mouse to the right and click for the next image' ['fig1'] %}

{% img fancybox noscr nopr /images/posts/FancyboxInline/scroll2.png 900 'Move the mouse to the right and click for the next image' ['fig2'] %}

{% img fancybox noscr nopr /images/posts/FancyboxInline/scroll3.png 900 'Move the mouse to the right and click for the next image' ['fig3'] %}

{% img fancybox noscr nopr /images/posts/FancyboxInline/scroll4.png 900 'Move the mouse to the right and click for the next image' ['fig4'] %}

{% img fancybox noscr nopr /images/posts/FancyboxInline/scroll5.png 900 'Move the mouse to the right and click for the next image' ['fig5'] %}

{% img fancybox noscr nopr /images/posts/FancyboxInline/scroll6.png 900 'Move the mouse to the right and click for the next image' ['fig6'] %}

{% img fancybox noscr nopr /images/posts/FancyboxInline/scroll7.png 900 'Move the mouse to the right and click to replay the slideshow' ['fig7'] %}

Result
---

You may [view the console message](#eg1){:.cliwide}, which has 160
columns.  It's so wide that putting it into a popup dialog can help.

<div id="eg1" class="noscr">
<pre class="cli"><code class="UBMono">   o   create a new empty DOS partition table
   p   print the partition table
   q   quit without saving changes
   s   create a new empty Sun disklabel
   t   change a partition's system id
   u   change display/entry units
   v   verify the partition table
   w   write table to disk and exit
   x   extra functionality (experts only)
Command (m for help): l
 0  Empty            c  FAT32 LBA       1e  Hidd FAT16 LBA  52  CP/M            80  Minix &lt;1.4a     9f  BSD/OS          bf  Solaris         eb  BeOS fs
 1  FAT12            e  FAT16 LBA       24  NEC DOS         53  OnTrackDM6 Aux3 81  Minix &gt;1.4b     a0  Thinkpad hib    c1  DRDOS/2 FAT12   ee  GPT
 2  XENIX root       f  Extended LBA    39  Plan 9          54  OnTrack DM6     82  Linux swap      a5  FreeBSD         c4  DRDOS/2 smFAT16 ef  EFI FAT
 3  XENIX usr       10  OPUS            3c  PMagic recovery 55  EZ Drive        83  Linux           a6  OpenBSD         c6  DRDOS/2 FAT16   f0  Lnx/PA-RISC bt
 4  Small FAT16     11  Hidden FAT12    40  Venix 80286     56  Golden Bow      84  OS/2 hidden C:  a7  NeXTSTEP        c7  Syrinx          f1  SpeedStor
 5  Extended        12  Compaq diag     41  PPC PReP Boot   5c  Priam Edisk     85  Linux extended  a8  Darwin UFS      da  Non-FS data     f2  DOS secondary
 6  FAT16           14  Hidd Sm FAT16   42  SFS             61  SpeedStor       86  NTFS volume set a9  NetBSD          db  CP/M / CTOS     f4  SpeedStor
 7  HPFS/NTFS       16  Hidd FAT16      4d  QNX4.x          63  GNU HURD/SysV   87  NTFS volume set ab  Darwin boot     de  Dell Utility    fd  Lnx RAID auto
 8  AIX             17  Hidd HPFS/NTFS  4e  QNX4.x 2nd part 64  Netware 286     88  Linux plaintext b7  BSDI fs         df  BootIt          fe  LANstep
 9  AIX bootable    18  AST SmartSleep  4f  QNX4.x 3rd part 65  Netware 386     8e  Linux LVM       b8  BSDI swap       e1  DOS access      ff  XENIX BBT
 a  OS/2 boot mgr   1b  Hidd FAT32      50  OnTrack DM      70  DiskSec MltBoot 93  Amoeba          bb  Boot Wizard Hid e3  DOS R/O
 b  FAT32           1c  Hidd FAT32 LBA  51  OnTrackDM6 Aux1 75  PC/IX           94  Amoeba BBT      be  Solaris boot    e4  SpeedStor
Command (m for help): x
Expert command (m for help): m
Command action
   b   move beginning of data in a partition
   c   change number of cylinders
   e   list extended partitions
   f   fix partition order
   g   create an IRIX (SGI) partition table
   h   change number of heads
   m   print this menu
   p   print the partition table
   q   quit without saving changes
   r   return to the main menu
   s   change number of sectors/track
   v   verify the partition table
   w   write table to disk and exit
Expert command (m for help): q
root@ubuntu:~# <span class="err">ddrescue -r1 -n -S -v /dev/sdf1 /dev/sda5 backup1.log</span>
ddrescue: Output file exists and is not a regular file.
ddrescue: Use <span class="UBHLCode">`--force'</span> if you really want to overwrite it, but be
ddrescue: aware that all existing data in output file will be lost.
Try `ddrescue --help' for more information.
root@ubuntu:~# ls
root@ubuntu:~# ddrescue -r1 -n -S <span class="UBHLCode">-f</span> -v /dev/sdf1 /dev/sda5 backup1.log


About to copy 3999 MBytes from /dev/sdf1 to /dev/sda5
    Starting positions: infile = 0 B,  outfile = 0 B
    Copy block size: 128 sectors
Sector size: 512  bytes
Max retries: 1
Direct: no    Sparse: yes    Split: no    Truncate: no

Press Ctrl-C to interrupt
Initial status (read from logfile)
rescued:         0 B,  errsize:       0 B,  errors:       0
Current status
rescued:   377286 kB,  errsize:    4096 B,  current rate:    2686 kB/s
rescued:   594792 kB,  errsize:   12288 B,  current rate:    1179 kB/s
   ipos:   594804 kB,   errors:       2,    average rate:     389 kB/s
   opos:   594804 kB,     time from last successful read:       0 s
Copying non-tried blocks...
</code></pre>
</div>

Unluckily, I *can't* do anything about the horizontal scrollbar at the
bottom.

[pp]: /blog/2014/01/05/gnu-ddrescue-a-powerful-data-recovery-tool/
