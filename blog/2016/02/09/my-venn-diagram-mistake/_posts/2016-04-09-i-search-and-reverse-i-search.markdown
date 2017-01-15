---
layout: post
title: "I-Search and Reverse I-Search"
date: 2016-04-09 20:42:54 +0800
comments: true
categories: Linux 
---

One knows that long commands can be retrieved by `<C-r>`.  If the
search *fails*, one may cancel it by `<C-g>`.  However, how can one
search forward through the command history instead of backword?

The answer is simple: add `stty -ixon` to your BASHRC.
