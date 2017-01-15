---
layout: post
title: "Guidelines for Setting a Strong Password"
date: 2014-01-05 00:31:00 +08:00
categories: [information security]
published: true
comments: true
external-url: http://www.cuhk.edu.hk/itsc/security/gpis/guidestrongpw.html
---

I usually suggest users who refuse to use long passwords (> 10
characters) for their online accounts to look at news on GPU password
cracking.[^1]  Setting a sufficiently long password is just the first
step.  The variety of characters to be chosen is also crucial to
increasing the time taken for a brute force attack on the password.
This idea is supported by the external URL of this post, which is the
main concern here.

The problem is *not* large if the user has some common sense on how
the Internet works.  However, as a guide for common end users of
online services, the last section "Useful tools" is a little bit
misleading.  If you know some engineering students, he/she will tell
you that making things work is their main goal.  They can come up with
fancy ways to hide standard errors from users.  According to our naked
eyes, the so called "random password generator" *seems* to be able to
generate random passwords.  However, you *don't* actually know the
algorithm used.[^2] Are they random enough?  Are there any ways of
predicting the output of the online password generators?  The
Community Ubuntu Documentation provides us a three-pronged reason for
*not* actually using the "secure password generators" listed in the
last section of CUHK's guide.

By saying that those tools "*may assist* you to set a strong
password", the guide is far from wrong, but also *far* from good. For
a *proper* introduction to a decent password policy for common users,
go to the section titled "Write Your Passwords Down" on the same page
on Ubuntu's community guide.[^3]

P.S. The CUHK's guide have been writen for a long time. As I've
mentioned above, a GPU cracks passwords much faster than before, so
the figures need to be either updated or simply replaced with a link
to a web page introducing recent technology on brute force password
attacks.

---
[^1]:
    [Hack and / - Password Cracking with GPUs, Part I: the Setup][gpu]
    in *Linux Journal* by Kyle Rankin 

[^2]:
    [Don't use online password generators][NoOnlinePWGen] in Ubuntu's
    *Community Help Wiki*

[^3]:
    [Write Your Passwords Down][WritePW] in the same page in footnote
    2.

[gpu]: http://www.linuxjournal.com/content/hack-and-password-cracking-gpus-part-i-setup
[NoOnlinePWGen]: https://help.ubuntu.com/community/StrongPasswords#Don.27t_use_online_password_generators
[WritePW]: https://help.ubuntu.com/community/StrongPasswords#Write_Your_Passwords_Down

*[GPU]: Graphics Processing Unit
*[URL]: Uniform Resource Locator
