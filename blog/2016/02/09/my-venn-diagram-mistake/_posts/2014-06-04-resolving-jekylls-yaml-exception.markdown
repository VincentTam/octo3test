---
layout: post
title: "Resolving Jekyll's YAML Exception"
date: 2014-06-04 21:06:23 +0800
comments: true
categories: Octopress
---

Problem
---

1. Created a new Octopress post with `rake` in Windows 7's Git Bash.
2. Wrote the post using gVim.
3. Ran `rake generate`, and got an YAML exception:

    <pre class="cli">YAML Exception reading [filename].markdown: invalid byte sequence in UTF-8</pre>

{% img center /images/posts/YAMLException/yaml-exception.png %}

<!-- more -->

Solution
---

+ Searched "yaml exception in reading invalid byte sequence in utf-8"
  on Google.  Sites found:
  1. [A related Stack Overflow question][StackOverflow6374756]
  2. [A reported Jekyll issue on GitHub][JekyllIssue836]

Finally, after glimpsing the above web pages, I realized that the file
enconding should be UTF-8.

{% img center /images/posts/YAMLException/fenc-cp950.png %}

Thus, the editor command `:se fenc=utf8 | wq` will do.

[StackOverflow6374756]: http://stackoverflow.com/questions/6374756/why-do-i-get-an-invalid-byte-sequence-in-utf-8-error-reading-a-text-file "Why do I get an “Invalid Byte Sequence in UTF-8” error reading a text file?"
[JekyllIssue836]: https://github.com/jekyll/jekyll/issues/836 "Error after upgrading to Ruby 1.9.3"
