---
layout: post
title: "Putting a Code Block inside a List in Octopress"
date: 2014-06-05 01:23:05 +0800
comments: true
categories: Octopress
---

After writing my [previous post][PrevPost], I found out that the
[standard Markdown syntax][StdMDSyntax] for nesting a code block
inside a list item *doesn't* work.  I knew a limitation of the
Markdown parser that Octopress uses.  This is well illustrated in
[Octopress issue #488][OctopressIssue488].

Brandon Mathis, the father of Octopress, suggested using HTML tags to
include a code block in a list item.

[PrevPost]: /blog/2014/06/04/resolving-jekylls-yaml-exception/ "Resolving Jekyll's YAML Exception"
[StdMDSyntax]: http://daringfireball.net/projects/markdown/syntax#precode "Standard Markdown syntax for code blocks"
[OctopressIssue488]: https://github.com/imathis/octopress/issues/488 "not support ordered lists(markdown) with code blocks"
