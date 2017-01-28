---
layout: post
title: C Stdlib Location Failure
date: 2017-01-28T02:26:18+01:00
categories: Linux
---

I expect that the following command return the absolute path of
`stdio.h`.

``` sh
user@OWNER-PC:~$ locate stdio.h
locate: can not stat () `/var/lib/mlocate/mlocate.db': No such file or directory
```

I will try a [database update][26191].

[26191]: http://unix.stackexchange.com/a/26191/165042
