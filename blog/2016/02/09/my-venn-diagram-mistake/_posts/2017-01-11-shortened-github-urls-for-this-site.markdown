---
layout: post
title: "Shortened GitHub URLs for this Site"
date: 2017-01-11 17:00:14 +0800
comments: true
categories: [web technologies]
---

Background
---

I want to include a link to a [Gist] in an [Octopress] codeblock.

Problem
---

In the syntax for a codeblock, the link is too long.  This can cause
problems in a graphical frontend of [Git], such as gitk.

Solution
---

I found a [post about GitHub URL Shortener][gh-blog] by accident.

    $ curl -i https://git.io -F "url=https://github.com/vincenttam" -F "code=vtam"
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100   293  100    29  100   264     40    367 --:--:-- --:--:-- --:--:--   375HT
    TP/1.1 100 Continue

    HTTP/1.1 201 Created
    Server: Cowboy
    Connection: keep-alive
    Date: Tue, 10 Jan 2017 22:50:08 GMT
    Status: 201 Created
    Content-Type: text/html;charset=utf-8
    Location: https://git.io/vtam
    Content-Length: 29
    X-Xss-Protection: 1; mode=block
    X-Content-Type-Options: nosniff
    X-Frame-Options: SAMEORIGIN
    X-Runtime: 0.111560
    X-Node: 6a832541-d7fa-4b2b-9a4b-1e3355ad0eab
    X-Revision: 4fdc60de6311e6a3aa31e19bc7b3aad7e85d33a6
    Strict-Transport-Security: max-age=31536000; includeSubDomains
    Via: 1.1 vegur

    https://github.com/vincenttam
{:.cliUB}

In fact, [git.io](https://git.io) is much *simpler* for users who
*don't* type commands.

Summary
---

I created three short URLs with this tool.

1. <https://git.io/vtam> for my GitHub account
2. <https://git.io/vtblog> for this blog
3. <https://git.io/vb2> for *Blog 2*

[Gist]: https://gist.github.com
[Octopress]: http://octopress.org
[Git]: https://git-scm.com/
[gh-blog]: https://github.com/blog/985-git-io-github-url-shortener
