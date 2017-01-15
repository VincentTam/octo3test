---
layout: post
title: GnuPG Encryption
date: 2014-02-03 21:03:59 +0800
categories: [information security]
comments: true
---

I've found [a page][gpgcmdsum] which provides a brief summary of gpg
commands.  I think some mainland users will find it useful.  I hope
that I can use these commands soon.

    $ gpg -k
    $ gpg -K
{: .cli}

<!-- more -->

However, there are some people who find reading simplified Chinese
characters hard.  I think finding another guide written in Traditional
Chinese is *much* harder than using whatever tool to convert the
simplified Chinese characters to the Traditional ones. (e.g.  Google
Translate)

I've read [Prof.  Hung's recent article on data encryption][ckhung1].
This article contains many links to other web pages.  One of them is
[his article on GnuPG][ckhung2].  In the first item of the reference
list in the sixth section of his article, there's a hyperlink of
[a GnuPG Gentoo user guide][gpggentoo] written in Traditional Chinese.
This guide requires reader to read chapter 6 first, or to read
chapter 2 of the GnuPG Handbook.  Unluckily, the link is *broken*.
Here's the correct URL: <http://www.gnupg.org/gph/en/manual.html>

I think [this guide][thunderbird] is more useful to users of Mozilla
Thunderbird, and maybe TrueCrypt can get file encryption done much
faster.

- As an Engineering student, he/she needs to get things work.
- As NOT being an IT student, he/she needs to get "computer stuff"
    works much simpler.

Posted via [UltraBlog.vim][end].

[gpgcmdsum]: http://blog.aboutc.net/linux/55/pgp-file-encryption-and-decryption "PGP Document Encryption"
[ckhung1]: http://ckhung0.blogspot.hk/2013/12/safe-encryption.html
[ckhung2]: http://newtoypia.blogspot.tw/2013/12/gnupg-pgp.html
[gpggentoo]: http://www.gentoo.org/doc/zh_tw/gnupg-user.xml
[thunderbird]: https://securityinabox.org/en/thuderbird_encryption "How to Use Enigmail with GnuPG in Thunderbird"
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
