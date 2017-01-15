---
layout: post
title: Something about Win* batch files
date: 2013-12-11 11:10:00 +08:00
categories: [M$ Win*]
published: true
comments: true
---

Get drive letter
---

If you run portable devices from a USB stick, sometimes you need to
refer to other files that is in the same USB drive. Their relative
position is stable, but the drive letter is not. Thus, referring to
those files by absolute path doesn\'t work, unless you do the tedious
modifications every time.

- Method 1: `set var=%cd:~0,3%`
- Method 2: `set var=%~d0` (preferred) Use variable: `%var%`

Alias on M\$ Win*
---

If you're familiar with \*nix and use M\$-DOS, you may unconsciously
type the `ls` command in DOS; or if you have a portable version of a
software and you need to launch it by command, you will discover the
difference between the name of the programs—one has `portable` at the
end while the other one doesn't.

Copy and paste the following lines of code into any text editor.

{% codeblock lang:bat %}
@ECHO OFF
[command] %*
{% endcodeblock %}

Save the whole file as `[alias].bat` and put the file under any folder
found on `PATH` environment variable.

Run `[alias]` in the command prompt to see the effect.

Note: `%` in M\$ Win\* is the *same* as `$*` in \*nix.[^ms_all_arg]

---
[^ms_all_arg]:
    [*How can I output all of a batch file's arguments?*][src] by John
    Savill in Windows IT Pro.

[src]: http://windowsitpro.com/windows-server/how-can-i-output-all-batch-files-arguments
