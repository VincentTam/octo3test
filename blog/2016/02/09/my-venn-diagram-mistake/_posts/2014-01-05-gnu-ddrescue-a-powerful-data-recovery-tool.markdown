---
layout: post
title: GNU ddrescue—A Powerful Data Recovery Tool
date: 2014-01-05 01:45:00 +08:00
categories: Linux
comments: true
---

3 days ago, I encountered an error while moving a folder of about 3 GB
from my USB stick to my hard disk using GUI.  After 1.2 GB of the
files are moved, the progress bar of the program just remained
unchanged.  I left the seat in front of my computer and did something
else.  Returning to the seat after half an hour, the situation had NOT
been better.  The displayed remaining time was still "unknown".

The I clicked the cancel button to stop the process, but it simply
hangs.  After terminating the process from the "System Monitor"
(another GUI program), the read/write speed of the USB stick became
extremely low.  Instead of blinking frequently, the light bulb inside
the USB stick went on and off slowing during a read/write operation.

In `/var/log/syslog.1`, it says

<pre class="cli"><code class="UBMono">[  627.152020] usb 2-1: reset high-speed USB device number 4 using ehci_hcd
[  658.128020] usb 2-1: reset high-speed USB device number 4 using ehci_hcd
<span class="err">[  658.493165] sd 3:0:0:0: [sdf] Unhandled error code</span>
[  658.493169] sd 3:0:0:0: [sdf]  Result: hostbyte=DID_ABORT driverbyte=DRIVER_OK
[  658.493174] sd 3:0:0:0: [sdf] CDB: Write(10): 2a 00 00 54 e9 30 00 00 01 00
<span class="err">[  658.493188] end_request: I/O error, dev sdf, sector 5564720</span>
[  658.494531] quiet_error: 39 callbacks suppressed
<span class="err">[  658.494533] Buffer I/O error on device sdf1, logical block 5564658</span>
[  658.495808] lost page write due to I/O error on sdf1</code>
</pre>

<!-- more -->

Oh! I need to recover the data! And I've found GNU ddrescue an
excellent tool for the task.  No expensive recovery plans are needed.
Just ddrescue on a bootable media and some free space in a storage
device will do.

It's important to note that the data recovery program should *never*
be run on the *damaged* device.  Otherwise, further damage will be
done to the damaged device.[^note]  In addition, I *don't* recommend
running the data rescue tool on the operating system(s) installed on
your hard disk.  The process takes a long time, so "patience is
key".[^key]

Booted into the CLI of Ubuntu Rescue Remix
12.04, I first formatted the `D` drive into an empty NTFS partition
after backing up the data on that device. (i.e. `/dev/sda5`)

After that , I ran the following command:[^cmd]

<pre class="cli"><code class="UBMono">$ ddrescue -r1 -n -S -v /dev/sdxm /dev/sdyn [logfile]
# Substitute x with the appropriate partition letter of the source partition
# Substitute y with the appropriate partition letter of the destination partition
# Substitute m with the appropriate partition number of the source partition
# Substitute n with the appropriate partition number of the destination partition</code>
</pre>

Note: *This process is irreverisible so do it carefully.*

In the screenshot below, `x=f`, `y=a`, `m=1`, `n=5`, and
`logfile='backup1.log'`.

But the program refused to work, so I have to `--force` it to work.

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

Captured using `screendump`.

The program read the blocks fast initially but it gradually slowed
down.  After running the command for over 20 hours, over 3700 MB of
the data had been read.  Although there's just about 400 MB to go,
according to the average speed at that moment, it was an hour to
recover 10 MB of the data.  What's worse, the average speed was
getting slower and slower!  (Later, from GeekyProjects, I realised
that the heat of the devices inhibits the process, and the logfile
file feature enables users to pause the job.[^geek_proj][^doc])
Therefore, *always use a logfile*.[^doc_ub]

Without adequate knowledge on GNU ddrescue, I stopped the task with
`<C-c>`, but it took the computer several minutes to receive this
input.  But what's next for an *incomplete* task? The files *don't*
occupy the whole USB stick.  It might took me another day if I waited
for some while and then resumed the task.  At that moment, I decided
to try mounting the destination partition `/dev/sdyn`.  Thinking that
the destination was a NTFS partition from the partition table rendered
by `fdisk -l`, I tried `mount -t ntfs /dev/sdyn`, but the computer
wouldn't let me go.  I was fortunate to be stopped by this error.
Otherwise, I think I would do another harm to the file system.  This
time, I let `mount` to automatically decide the partition type by
removing the `-t` flag.  It worked! I could browse and open the file
there.  After that, I copied the files to a safe place (i.e. a
*normal* data storage device) Finally, I've found that *most* of the
files were salvaged, despite some corruption of the multimedia files.

Since then, I've *really* learnt a lesson: *don't* to use GUI for
copying big files, *always* use commands.  Secondly, *never* use `mv`
for big files, use `cp` instead.

---
[^note]:
    [*Disk Cloning (for Data Recovery) with GNU ddrescue*][muck] by
    Alan Berman.

[^key]: Ibid.
[^cmd]: Ibid.
[^geek_proj]:
    [*How to Recover Data Even When Hard Drive is Damaged*][geek_proj]
    by Pablo Garcia.

[^doc]: [GNU ddrescue's manual][doc].
[^doc_ub]: [ddrescue's manual in Ubuntu manuals][doc_ub].

[muck]: http://techmuck.blogspot.hk/2012/03/data-recovery-with-gnu-ddrescue.html
[geek_proj]: http://www.geekyprojects.com/storage/how-to-recover-data-even-when-hard-drive-is-damaged/
[doc]: https://www.gnu.org/software/ddrescue/ddrescue.html
[doc_ub]: http://manpages.ubuntu.com/manpages/raring/man1/ddrescue.1.html

*[CLI]: command line interface
*[GUI]: graphical user interface
