---
layout: post
title: "Shellshock: Better 'bash' patches now available"
date: 2014-10-05 15:42:11 +0800
comments: true
categories: [information security, Linux]
external-url: http://www.zdnet.com/shellshock-better-bash-patches-now-available-7000034115/
---

Luckily, the Ubuntu updater has already fetched the lastest patch of the vunerable bash.

    $ env 'x=() { :;}; echo vulnerable' 'BASH_FUNC_x()=()
     { :;}; echo vulnerable' bash -c "echo test"
    bash: warning: x: ignoring function definition attempt
    bash: error importing function definition for `BASH_FUNC_x'
    test

    $ cd /tmp; rm -f /tmp/echo; env 'x=() { (a)=>\' bash 
    -c "echo date"; cat /tmp/echo
    date
    cat: /tmp/echo: No such file or directory
    $ 
{:.cliUB}
