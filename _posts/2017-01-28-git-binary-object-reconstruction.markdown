---
layout: post
title: "Git Binary Object Reconstruction"
date: 2017-01-28T20:34:37+01:00
categories: Git
---

Background
---

Last evening, I used a Linux Mint 17.5 desktop *without* sudo
privileges and [Git] installed.

Problem
---

On my USB key, the Git repos are *bare* ones.  I *couldn't* retrieve
the files stored inside because the [Git Portable][git-portb] on my
USB is for Windows.

Construction of Git binary objects
---

Try to run the commands on the [Git online book][git-book] on the
official Git site in order to understand how they are constructed.
The `deflate` method obviously has an inverse method `inflate`.  One
can make such a guess *without* knowing any [Ruby].

Solution
---

To understand how to reconstruct a file from a blob, I used
[this blog's Git repo][blog-repo] as an example.

{% codeblock lang:ruby title:"Reconstruction of .gitignore with Ruby" linenos:false mark:8-11,25-26 %}
$ cd .git
$ export myfp="objects/"`cat HEAD | awk '{print $NF}' | xargs cat | sed 's|..|&/|'`
$ echo $myfp
objects/49/1b3bd3458cc8045c6de109a96ccb870e07154a
$ irb
irb(main):001:0> require 'zlib'
=> true
irb(main):002:0> zc = File.open(ENV['myfp'],"rb").read
=> "x\x01\x95\xCE\xC1j\xC30\f\x00\xD0\x9D\xFD\x15\xBA\x17\x86\xA2\xD8\x8E\x02c\xF4\xDA\xFB\xE8]\xB6\xA55\xB4I\x8A\xED\x16\xF6\xF7e\xFB\x83}\xC0\x83\x97\xF7u]:\xD0\xC8o\xBD\xAA\x02j\x8A\x96F/SQ.D\x9E8\x86\x10p\x12\x9B=\xA3\xB7\x98uN\x8C\xEE.U\xB7\x0EE\x8BE\xA5P\x06\xCB\x84\x1A}\xA2\x99=\x8Ec\x9A2\x93\x98\xF9\xC0:\ar\xF2\xE8\x97\xBD\xC2y\xD9\xF2\xAF\xFB\x92\x15>\x9AV=\xDE\x96\xA7\xBE_\xAE\x9F0x\x0E\x91\xFC\x10\x10\x0E8 \xBA\xFCw\xEB\xFA?\xE5N\xDF\xDB^\x15\xDAO\xEB\xBAB\x92|}\xDC\xC1\x96\x9B6\x90\xAD@\xA9b\xBD\xB9\x17\x1F9K\x8D"
irb(main):003:0> c = Zlib::Inflate.inflate(zc)
=> "commit 238\x00tree 0eb6fb34a7de8d22428655507af94804f6ce9b80\nparent dedf6e25d1fc20e64b2984033b7c82aff458e952\nauthor Vincent Tam <sere@live.hk> 1485624150 +0100\ncommitter Vincent Tam <sere@live.hk> 1485624150 +0100\n\nIgnore system backup files and drafts\n"
irb(main):004:0> tp = "objects/" + c.match(/(?<=tree ).*(?=\n)/)[0].sub(/../,'\0/')
=> "objects/0e/b6fb34a7de8d22428655507af94804f6ce9b80"
irb(main):005:0> ztc = File.open(tp,"rb").read
=> "x\x01+)JMU06\xB5`040031Q\xD0K\xCF,\xC9L\xCF\xCB/Je\bt6Z\xEB\x12s\xB2\xC9\xAF\xA1z\x0E\xB7^\xEA\x84_\xE5\xAB\xF4\xA1\xAA\xDCSs\xD32sR\x19~\x16<\xE9a[X\xFE\xCCN\xFCok\x16\xD7\x84Y%S\xDB.A\x95\xC4'\xE7\xE7\xA5e\xA6\xEBU\xE6\xE600\xE8N\xEC\xE19\x9B[:Y6\xED?[\xB1\xC8\x9E@\xEExa\x13\x03 P\x88\xCF\xCCK\xCE)MI-fH]\xDC\xDC\xB5\x9A\xEF\x91|\xA6U\xE3\r\xEB\xC89\xF9\xD7\x96d\xBD\x85\xAA)\xC8)M\xCF\xCC+f(\xBBr\xD8\xF1\\\xFF\xB1\xE9\x82\xCC\xA19\xCF\xCE\x88\x1E;\x10\x12\xD3\x04S\x92_\\R\xCCp\xF3ND\x9B\xF7\x8A\x89\x9B\xB6\xAFvb\xD0\x8E\x7F1\xE7\xD1d&\x06\xA8\x82\x92\xD4\xDC\x82\x9C\xC4\x12\xA0E&\xF9\e\xE6\xDCN\xDA\xBD*Ub\xEA\xA4y\xD7E\xCA\xEE\xAE\xF9\xA4\x04usbR~i\x89^n\n\x83^\xF6\xA7\xF8\xF6\xB2\xB0\x873b\xCEO\x9F\xFD\xBB\xE6r:\xE3\xDC\xE3\x10\x83\x12\x8B\x8BS\x816\xCD\x15SS\x97\xEF\xBBf\xF2\xBD|\xDF\xC5\xB3\xCC\xAB\x03\x1D7\xDDY\x065$3/%\xB5\x02d\x88\xDC\xD6kE\xBE\xB6\xE9\x7F*2s\x9B\xAF$|\x95\xBC\x9E\xF9\xF3\x04\x00g\xAB\x948"
irb(main):006:0> tc = Zlib::Inflate.inflate(ztc)
=> "tree 358\x00100644 .gitignore\x00QC2\xADD\\\xC9\x82N\x80{\x9C\v.e\x90\xFAw\xAA/100644 Gemfile\x00\xF9p\xE4\x8C\x06\xA1w\xE6>\x17\xFD\x85j\n\x90\x9At\x95\x86\xD2100644 _config.yml\x00\x00-\x91\x8C\f\xCDmu\x93\x1Df\xFF\x06s\x14\xBCQ\v_\x1340000 _includes\x00e\xA3\x83\x8A\xAB\x0E\xE2\x1Fi:\x81\xD8;Y\x9Co\xD6\xA4j\xED40000 _plugins\x00v\xD4\xC3A\xCE\x8F\xC6\x97\x11\x03Ul\xE6\xCC\x15\xC6\xC0T\\\x8240000 _posts\x00\xD9\xDCX\x86K\xA8\x91\xB2\xB7\xABB\x00+_\xE8\x9C\xE2\x93\x02\x0040000 _templates\x004o\xB0\x9C\xDBb\xBB\xAAe\x18\x95\x92\x9E\xD7\x14v\xDD\xAC\xF2\"100644 about.md\x00.k\xF2_\x87vV\xE1\x98\\\xCF\x97\x9B\xFB|\xD3g\x01\x9D\xC740000 assets\x00\x9D\x16&'\x1F\x8E\xD64\xF7w\xBE\xD1\xCD\x03\xABQA\xB2\xDC\xA6100644 index.md\x00\x1E\xB5\xD6rM=g\xFCxim\x83\xD4`\xF5\x19\xD7i\xF9\xC8"
irb(main):007:0> system("ls objects/1e")
b5d6724d3d67fc78696d83d460f519d769f9c8
=> true
irb(main):008:0> bp = "objects/1e/b5d6724d3d67fc78696d83d460f519d769f9c8"
=> "objects/1e/b5d6724d3d67fc78696d83d460f519d769f9c8"
irb(main):011:0> bzc = File.open(bp,"rb").read
=> "x\x01%\x8F1n\xC30\x10\x04S\xEB\x15\v\xB8p\x13\x9AH\xD2\xB9\xCF\vR\xB9\xA4\xC4\x95\xC9\x98\xE4\t\xBAS\x02\xFD\xDE\xB4]\xDEbv\x167\x16\x19\xF1\xF9\xF1\xF5\xE6\x9C\e\x0E\xB8\xC8\x86(\xEDhhd\x84\t\x18\xB3\xC1RV\xCC\xB9\xF0\x1D\xD9\x8E\n\xD6\xC5vH\xC3\xB2\xAD\x8B(O\xBD\xFA\xFD\x02Y\xD9\x81$\x95(a\x97\xCD\x90\x9B\x1ACD\x9E\xD1o\xFC\x87\xD6\x02j\xB8\x11\xFA\xA0\xA6\x14\xDA\x95\xDA\r?\xE4\x19\xC9l\xD1\xB3\xF7\xBF\xBC\xED\xA5\xAC\xE3i\x92\xEA\xA3L\xEA-u\xB7\xFA\x83\xFCq]s\xCC\xED\xEA\x9E\x91\x8B\x9C\xC3VL\x87\xD7`wt\xEF\xF0x\xE8\x0E(\xEEK\xC4"
irb(main):009:0> bc = Zlib::Inflate.inflate(bzc)
=> "blob 213\x00---\n# You don't need to edit this file, it's empty on purpose.\n# Edit theme's home layout instead if you wanna make some changes\n# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults\nlayout: home\n---\n"
{% endcodeblock %}

Variables within irb:

- `c` stands for contents
- `z` stands for "zipped"
- `t` stands for "tree object"
- `b` stands for "blob object"

Explanation for commands

- `export` enables irb to access shell variables through `ENV['myfp']`
- `mystr.sub(/pat/,'rempl')` vs `mystr.gsub(/pat/,'rempl')` is like
    `:s/pat/rempl/` vs `:%s/pat/rempl/`.
- option `rb` in `File.open()` means "read binary".  *Without* `b`,
    the string read will be different, and it will cause error in
    `inflate(zc)`.
- I *don't* have time to find out how to read the hex values of
    unicode characters, and to remove the header of a blob.

[Git]: https://git-scm.com
[git-portb]: https://github.com/sheabunge/GitPortable
[git-book]: https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_object_storage
[Ruby]: https://www.ruby-lang.org
[blog-repo]: https://github.com/vincenttam/octo3test
