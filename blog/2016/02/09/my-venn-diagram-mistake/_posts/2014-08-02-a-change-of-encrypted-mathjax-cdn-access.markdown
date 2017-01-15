---
layout: post
title: "A Change of Encrypted MathJax CDN Access"
date: 2014-08-02 16:21:47 +0800
comments: true
categories: [MathJax, information security]
---

I've explained the reasons for accessing MathJax via HTTPS in one of
my posts.[^1]  About two hours ago, while writing and previewing a
post about bitmapped Computer Modern fonts[^2], MathJax failed to
load.  I found out what's wrong in a minute—at line 21 of in
`source/_includes/custom/head.html` at my latest commit (i.e. commit
96938d3)[^3], there's a `,` between two referenced scripts: the
official MathJax script via HTTPS, and my local settings and macros in
`source/javascripts/MathJaxLocal.js`.  Googling "mathjax cdn https", I
discovered that in the official documentation of MathJax, the address
for accessing the MathJax CDN had already been simplified.[^4]  In my
opinion, the new URL is better because it's more easy to remember.

---
[^1]: Tam, V. 2014, Jun 5. *MathJax in Octopress via HTTPS*. Retrieved from <https://vincenttam.github.io/blog/2014/06/05/mathjax-in-octopress-via-https/>
[^2]: Tam, V. 2014, Aug 2. *Avoid Using Ugly Bitmapped Computer Modern Fonts*. Retrieved from <https://vincenttam.github.io/blog/2014/08/02/avoid-using-ugly-bitmapped-computer-modern-fonts/>
[^3]: My previous version of `source/_includes/custom/head.html` at commit [96938d3]
[96938d3]: https://github.com/VincentTam/vincenttam.github.io/blob/96938d3/source/_includes/custom/head.html#L21
[^4]: The MathJax Consortium. n.d. *MathJax's official documentation*. Retrieved from <http://docs.mathjax.org/en/latest/start.html#secure-access-to-the-cdn>
