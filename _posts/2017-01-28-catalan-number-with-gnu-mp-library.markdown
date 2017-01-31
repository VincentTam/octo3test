---
layout: post
title: "Catalan Number With GNU MP Library"
date: 2017-01-28T00:58:30+01:00
categories: math
---

I have written some programs in C so that Catalan numbers and binomial
coefficients can be calculated.

<script
src="https://gist.github.com/VincentTam/985de63d527e04301da01d2b10c0b228.js"></script>

The program `catalan.c` does *not* work after $N = 17$ since too much
memory is consumed.  This has inspired me to write `catalan-mul.c`.

I have chosen C due to its speed.

Learnt
---

1. `scanf("%d", &i)` stores the input string to the *adress* of `i`.
2. Formatted string in `printf()`
    - `%d` or `%i`: integers
    - `%f`: float
    - Ref: [Tutorials Point `printf()` function][tut-pt]
3. GNU MP library
    - `#include <gmp.h>` at the top and compile with `-lgmp`
    - declare variable `mpz_t var[2017]` first
    - `mpz_init(myvar)` set it to zero
    - `mpz_init_set_str(myvar, mystr)` can save a step
    - `ui` in `mpz_set_ui(myvar, myint)` means "unsigned int"
    - use for loop to initialize an array of GMP bignum
    - methods for manipulating GMP bignums have `void` return type in
        general.

[tut-pt]: https://www.tutorialspoint.com/c_standard_library/c_function_printf.htm
