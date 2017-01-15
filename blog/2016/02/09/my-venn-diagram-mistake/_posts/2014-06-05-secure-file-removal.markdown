---
layout: post
title: "Secure File Removal"
date: 2014-06-05 13:11:44 +0800
comments: true
categories: [information security, Linux]
---

GNU's `shred` utility
---

### The command for files and folders

For a *single* file, the command should be simple.  For a *directory*,
the following command can shred the files recursively.[^1]

    $ find <dir> -type f -exec shred {} \;
{:.cliUB}

### Effectiveness of `shred` in Ext3 and NTFS file systems

The cited part of `shred`'s manpage in the second answer interested me
to read more about the utility.  In Vim, I pressed `K` when the cursor
is on the word `shred`, and opened the manpage, which claims that
*using it on an Ext3 partition is fine* if the partition is in either
the `data=ordered` (**default**) or `data=writeback` mode.  How about
*an NTFS partition*?  At the bottom, it says that the info page has
more information about the utility.  I found the following section in
the info page.

> **Please note** that `shred' relies on a very important assumption:
> that the file system overwrites data in place.  This is the
> traditional way to do things, but many modern file system designs do
> not satisfy this assumption.  Exceptions include:
> 
> * Log-structured or journaled file systems, such as those supplied
> with AIX and Solaris, and JFS, ReiserFS, XFS, Ext3 (in
> `data=journal' mode), BFS, **NTFS**, etc. when they are configured
> to journal _data_.

However, googling "shred ntfs effective", I saw another post about the
utility.[^2]  Due to my *limited* IT knowledge, searching for the word
"NTFS", all I could understand was that "using `shred` on NTFS is
fine".  I searched for the word "ext3", and found Shane's comment,
which questioned Wayne Richardson's advice.[^3]

### True solution: Encrypt the file system

I went back to the Unix Stack Exchange question and re-read the second
solution.  The feasible way is in the last line.  I think many new
GNU/Linux users who have read this answer won't think of encrypting
swap.

<!-- more -->

### Don't use `shred` on USB devices!

In the blog post cited in footnote 2, Richardson used the utility on a
USB drive.  Before writing something about encrypted swap, I'll quote
from a Google search result of "shred usb".

#### `shred`'s possible damage to USB devices

If one issues the `shred` command without changing the number of
iterations, which is three by default, USB devices will wear
out.[^4]

As a result, Leo Notenboom suggested using [SDelete][], which I, as a
supporter of GNU, *won't* use due to its proprietary software
license.[^5]

Thus, to overwrite the data *once only*, free software advocates use
GNU's `shred` command with the `-n` flag set to `1`, instead of
SDelete.

#### Overwriting the USB once only is ineffective

According to Computerworld, data recovery from SSD and flash drives
which have been overwritten is extremely easy.[^6]

#### Conclusion of this sub-section

Using `shred` to overwrite the data multiple times will destroy the
USB; while one pass of overwriting provides *not much* additional
security to IT experts.  As a result, stop running `shred` on USB and
SSD drives.

Encrypt swap
---

If you've chosen "Encrypt `/home` folder" during Ubuntu 11.04+'s
installation, you *don't* need this.  For users of older versions of
Ubuntu or other GNU/Linux distributions, I think that
[a post in Logilab][EnDisableCryptswap] is useful for them.  However,
in some Linux versions/distros, after setting up the encrypted swap,
users will find out that they *can't* hibernate.
[A community help page][CryptswapHibernate] will help them.  If
something strange happens, one may refer to
[this post][FixBrokenEncryptedSwap].

---
[^1]:
    [A question about recursively shred a folder on Unix Stack Exchange][f1]

[^2]: [A post that advises users to use `shred`][use_shred]
[use_shred]: http://fsckin.com/2008/01/09/using-shred-to-wipe-hard-drives-dod-uses-it-you-should-too/ "Using Shred to Wipe Hard Drives – DoD Uses It – You Should Too!"
[^3]: [Shane's comment to the post in item 2][shane]
[shane]: http://fsckin.com/2008/01/09/using-shred-to-wipe-hard-drives-dod-uses-it-you-should-too/#comment-960661402
[^4]: [A post on *Ask Leo!*][ask_leo]
[ask_leo]: http://ask-leo.com/do_i_need_a_file_shredder_for_my_usb_flash_drive.html "Do I need a file shredder for my USB Flash Drive?"
[^5]: [Software license of SDelete][sdel_license]
[sdel_license]: http://technet.microsoft.com/en-us/sysinternals/bb469936 "Sysinternals Software License Terms"
[^6]: [An article on Computerworld about SSD security issues][f6]
[f6]: http://www.computerworld.com/s/article/355159/SSD_Security_Issues_Surprise_Experts "SSD data-erasure challenges surprise experts"

[f1]: http://unix.stackexchange.com/questions/27027/how-do-i-recursively-shred-an-entire-directory-tree "How do I recursively shred an entire directory tree?"
[EnDisableCryptswap]: http://www.logilab.org/29155 "Enable and disable encrypted swap - Ubuntu"
[CryptswapHibernate]: https://help.ubuntu.com/community/EnableHibernateWithEncryptedSwap "EnableHibernateWithEncryptedSwap - Ubuntu Community Help Wiki"
[FixBrokenEncryptedSwap]: http://my-linux-installation-files.blogspot.hk/2012/09/fixing-broken-encrypted-swap-partition.html "Fixing Broken Encrypted Swap Partition"
[SDelete]: http://go.ask-leo.com/sdelete "SDelete v1.61"
