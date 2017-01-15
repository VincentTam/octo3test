---
layout: post
title: "Website Preview in Mobile Devices"
date: 2016-08-21 18:30:57 +0800
comments: true
categories: [blogging, Linux, Octopress, web technologies]
---

Goal
---

To know the page layout of a website, notably my blogs, on mobile
devices before publishing it.

![Preview this blog on a smartphone][fig_goal]

Problem
---

I used `ifconfig` to check the IP address of my desktop where the
preview site was hosted.  It's `192.168.1.5`.  When I typed in this
address followed by a colon and the port number `4000`, then the
browser said "connection timeout" after loading for a while.

![Connection timeout][fig_probl]

<!-- more -->

Solution
---

I spent a day to identify the cause of the problem.

### Host name incorrect

Actually, the website should be hosted at the internal IP address
shown by `ifconfig` instead of `localhost`.  Since I switch off the
router before going to bed every day, the internal IP address for my
desktop changes daily.  Therefore, one uses `0.0.0.0` to host the site
on *all* IP addresses that the machine possesses.

In [Jekyll-Bootstrap][jb], one may simply add `host : 0.0.0.0` in
`_config.yml`; in [Octopress], one may find the line containing
`server_port` in the middle of `Rakefile` and add `--host
#{listen_host}`.[^myeg]

``` ruby Changes in Rakefile http://www.jmlog.com/octopress-preview-config-in-vagrant/
server_port     = "4000"      # port for preview server eg. localhost:4000
listen_host     = "0.0.0.0"   # bind to all available IPs

# rackupPid = Process.spawn("rackup --port #{server_port}")
rackupPid = Process.spawn("rackup --port #{server_port} --host #{listen_host}")
```

### Port blocked by firewall

On Ubuntu, I used UFW to open the port `4000` to all devices at home.
(The netmask of my home router has 24 bits, which is the usual
setting.)

    sudo ufw allow from 192.168.1.0/24 to any port 4000:4001 proto tcp
{:.cliUB}

References
---

1. [UFW – Ubuntu Community Help][ufw]: the syntax for allowing and
   denying specific machines.
2. [*Vagrant 下的 Octopress 預覽設置*][op_host]: A sample `Rakefile`
   which allows the specification of the host address.
3. 鳥哥的 Linux 私房菜 – [基礎網路概念][vbird]: A detailed explanation
   for some fundamental concepts like IP address, netmask and subnet.
   I understand what `/24` in `192.168.1.0/24` means after reading
   this chapter of the guide.
4. An Ask Ubuntu question on specifying a
   [range of ports in UFW][ub7099]

---
[^myeg]:
    View my working examples:

    - [Blog 1][blog1]: at commit [bfa1e9e]
    - [Blog 2][blog2]: at commit [d4ec6a6]

[fig_goal]: /images/posts/SitePreviewMobile/Screenshot-2016-08-21-19-36-14.png
[fig_probl]: /images/posts/SitePreviewMobile/Screenshot-2016-08-21-19-35-00.png
[jb]: https://github.com/plusjade/jekyll-bootstrap
[blog1]: /
[bfa1e9e]: https://github.com/VincentTam/vincenttam.github.io/commit/bfa1e9e
[blog2]: /blog2
[d4ec6a6]: https://github.com/VincentTam/blog2/commit/d4ec6a6
[Octopress]: http://octopress.org/
[ufw]: https://help.ubuntu.com/community/UFW#Allow_and_Deny_.28specific_rules.29
[op_host]: http://www.jmlog.com/octopress-preview-config-in-vagrant/
[vbird]: http://linux.vbird.org/linux_server/0110network_basic.php
[ub7099]: http://askubuntu.com/q/7099

*[UFW]: Uncomplicated Firewall
