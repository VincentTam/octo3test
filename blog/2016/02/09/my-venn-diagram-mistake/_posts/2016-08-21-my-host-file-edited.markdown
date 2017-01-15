---
layout: post
title: "My Host File Edited"
date: 2016-08-21 00:50:34 +0800
comments: true
categories: [blogging, octopress, web technologies]
---

Background
---

A preview of a blog is often needed before it's published.

Problem
---

However, it is possible that one *doesn't* like to type `localhost` in
the address bar, and would like to have other names.

Solution
---

The idea is in *Local Setup – edit your hosts file* in *How to test
localhost from any device on your network*
[written by Wes Bos][guide].  On \*nix, the file path is still the
*same* as on OSX, but many users would rather use [Vim] for editing
`/etc/hosts`.  One may even use [`sed`][sed] with the `-i` flag and
the `sudo` privilege in order to directly manipulate this file.

- `sudo sed -i "3i127.0.0.1\tblogtest.com" /etc/hosts` for insertion
    of "127.0.0.1        blogtest.com" *before* the third line.
- `sudo sed -i "3c127.0.0.1\tblogtest.com" /etc/hosts` for changing
    the third line to "127.0.0.1        blogtest.com".

Note that the tab is escaped as `\t` in these two commands.

[Vim]: http://www.vim.org/
[guide]: http://wesbos.com/localhost-mobile-device-testing/
[sed]: https://www.gnu.org/software/sed/manual/sed.html
