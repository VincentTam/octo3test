---
layout: post
title: "Tried Range-based For Loop"
date: 2015-02-14 12:42:21 +0800
comments: true
categories: C/C++
---

Problem
---

I saw an example for range-based for loop in a Stack Overflow question
and I compiled it in my own computer.[^eg]  Then I got an error.

    $ g++ temp1.cpp
    temp1.cpp: In function ‘int main()’:
    temp1.cpp:9:18: error: range-based ‘for’ loops are not allowed in C++98 mode
        for (int i : bar) {
                      ^
    temp1.cpp: In function ‘void foo(int (&)[3])’:
    temp1.cpp:16:18: error: range-based ‘for’ loops are not allowed in C++98 mode
        for (int i : bar) {
                      ^
{:.cliUB}

<!-- more -->

I also received similar message after I typed the command for
compiling the program with [clang++].

Solution
---

I searched "gcc range based for loop are not allowed in" on Google,
and realised that I forgot to add the flag `-std=c++11`.[^sol]  After
doing so, I could successfully compile the program using either [GCC]
or clang++.

clang++'s error message
---

I think that clang++ is better than gcc in this case because the error
message is *brighter* than the code.  The word "warning" is in purple,
while the '^' is in yellow.  This helps users to see what's wrong.

    temp1.cpp:9:16: warning: range-based for loop is a C++11 extension
          [-Wc++11-extensions]
        for (int i : bar) {
                   ^
    temp1.cpp:16:16: warning: range-based for loop is a C++11 extension
          [-Wc++11-extensions]
        for (int i : bar) {
                   ^
    2 warnings generated.
{:.cliUB}

---
[^eg]:
    [c++ Range based for-loop on array passed to non-main function][p]
    on Stack Overflow.

[^sol]:
    [Error: Range-based 'for' loops are not allowed in C++98 mode][s]
    on Stack Overflow.

[p]: http://stackoverflow.com/a/26182985
[clang++]: http://clang.llvm.org/ "Another C++ compiler"
[GCC]: https://gcc.gnu.org/ "GNU Compiler Collection"
[s]: http://stackoverflow.com/a/22859334
