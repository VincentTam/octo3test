---
layout: post
title: "MathJax in Octopress via HTTPS"
date: 2014-06-05 20:25:30 +0800
comments: true
categories: [information security, MathJax, Octopress]
---

Problem
---

Some contents in [Octopress] blogs *couldn't* be viewed via HTTPS[^1],
for example, [a Japanese blog][JPBlog].

{% img fancybox /images/posts/OctopressHTTPS/JPBlog.png 800 'Screenshot of an Octopress blog in Japanese' ['fig1'] %}

This blog on last Saturday afternoon

+ The first category list item "$\rm \LaTeX$" on the right *couldn't*
be displayed

{% img fancybox /images/posts/OctopressHTTPS/blocked.png 800 'Screenshot of my blog on last Saturday afternoon' ['fig2'] %}

+ Using HTTP instead of HTTPS, I can see the blocked contents.

{% img fancybox /images/posts/OctopressHTTPS/disable-blocking.png 800 'Disable Protection on This Page' ['fig3'] %}

{% img fancybox /images/posts/OctopressHTTPS/blocking-disabled.png 800 'Blocked contents can be displayed.' ['fig4'] %}

**How can those blocked contents be displayed automatically?**

<!-- more -->

My initial attempt to view the contents
---

Half a month ago, I upgraded Firefox to 29.  Before the upgrade,
receiving the link of this blog, the browser would use the HTTP
version of the link; after the upgrade, it displayed the HTTP**S**
version of the blog instead.

I installed some Firefox plugins.[^2]  I thought
[HTTPS Everywhere][HTTPSEverywhere] was the cause for this problem.
After I disabled this plugin and restarted Firefox, *everything* in my
blog were displayed.  Therefore, I spent hours to find out how to
automatically change the communication protocol from "https://" to
"http://" in HTTPS Everywhere last week.  After reading the official
documentation, I tried manually creating a downgrade rule for browsing
this blog.

{% render_code gh-pages.xml My FAILED HTTPS Everywhere downgrade rule for this blog %}

It worked for *some* pages in my blog, and failed for *some* of them.
I *didn't*, *don't*, and *won't* know why.  I gave up and thought in
another way—change the contents of this blog so that MathJax *won't*
be blocked when HTTPS is used.

I attempted to observe other sites' HTML source code for embedded
MathJax, such as [*Carpe diem*][CarpeDiem].  I copied the code from
him.[^3]  I was puzzled by the fact that his code worked and mine
*didn't*.

Failed Google searches:

- octopress "https" blocked content
- firefox blocked octopress mathjax

Learning from Firefox's messages
---

On the left of the address bar, I clicked the shield icon, and **learn
more**.

![Firefox 29 blocked insecure contents][ff_shield]  
<small>Source: [Mozilla support][MozSuppImgSrc]</small>

Then, I was taken to [a page in Mozilla Support][MozSupp].  At the
bottom of the section *What is mixed content?*, there's a note that
contains a link to [a blog post][MozEnggBlog].  I *didn't* want to
spend much time to read something unrelated to my major.  I found the
author's reply to DaveP, a developer who ask for more information for
fixing issues caused by Firefox's security features.  He gave two
links to DaveP, and I clicked the first one.  At first glance, I
*didn't* understand what was
[active mixed content][MixedActiveContent], and I clicked that link.

It's said that some "active" contents were considered to be
"*secure*", such as

- some HTML tags like `<video>`, `<audio>`, `<object>`, etc
- some JavaScripts and CSS

As a result, I replaced the `<iframe>` element which embedded a PDF
document in
[one of my previous on $\rm \LaTeX$ template][LaTeXTemplateForEssays]
by a hyperlink.[^4]  Nevertheless, MathJax still *didn't* load in this
blog.  I clicked
["*How to fix a website with blocked mixed content*"][FixMixedContent],
and was taken back to the previous page.  Having *no* experience in
web designing, I could only understand two advices:

1. [Install Aurora][Aurora]: I *didn't* want to install it.
2. Invoke Firefox's web console by `<C-S-k>`.  (can be closed with
`<F12>`)

{% img fancybox /images/posts/OctopressHTTPS/WebConsoleGoogleFonts.png 800 'Firefox web console' ['fig5'] %}

In lines 3–4 of the web console, I could see that Google Fonts were
blocked.  I clicked "[**[Learn More]**][MixedContent]" and was brought
to a page on MDN that I had already visited.  I clicked the link for
fixing the website at the bottom *again*, learnt *nothing* new about
the problem.

Source code changes to fix things
---

### Fixing Google Fonts first

I searched "blocked loading mixed active content google fonts" on
Google and [Tanvi's blog post][MozEnggBlog] appeared at the top of the
page.  I skimmed through it *once more*, and searched for "google
fonts", but I could just find a reference to another comment (comment
40) which explained the reasons for blocking mixed content fonts.
I browsed another search result, which was
[a question on Stack Overflow][StackOverflow13833210].  Though the
question is about [Google Chrome][chrome], looking at the first
answer, I knew what to do next—I added an `s` after `http` in each URL
of the Google Fonts used.[^5]  After that, I generated and previewed
the site.  Although
![the orangle warning triangle][WarningTriangle]{:.nobd} still
appeared on the left of the address bar, the Google Fonts used in the
blog *weren't* blocked anymore.

### Fixing MathJax

The way to include MathJax equations in Octopress in now clear: refer
to an HTTPS version of MathJax library in the head of each page.

{% img fancybox /images/posts/OctopressHTTPS/WebConsoleMathJax.png 800 'Firefox web console' ['fig6'] %}

I tried to google 'blocked loading mixed active content
"http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"',
and found a few sites:

- [https-everywhere breaks MathJax due to https/http mixed-content rules - Cryptography Meta Stack Exchange][CryptoMetaStackExchange384]
- [MathJax not working - Mathematics Meta Stack Exchange][MathMetaStackExchange10776]

Reading these sites, I knew that I could either adjust the rules in
HTTPS Everywhere, or use an HTTPS version of MathJax.  For the former,
I *didn't* have the ability and time to study the documentation and
test the results.  Though most of the other Jekyll blogs *doesn't* use
the JavaScript library over HTTPS, in order to view the contents
rendered by MathJax, I read
[a question in the MathJax FAQ][MathJaxFAQ] in the second answer to
the above question posted on Cryptography Meta Stack Exchange.  I also
saw their documentation about secure access to the MathJax CDN.  I
copied the correct `<script>` tag from [there][MathJaxDoc].

```html Part of my working `source/_includes/custom/head.html` https://github.com/VincentTam/vincenttam.github.io/blob/70ba670/source/_includes/custom/head.html#L21 commit history
<!-- mathjax config similar to math.stackexchange -->
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [ ['$', '$'] ],
    displayMath: [ ['$$', '$$']],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
  messageStyle: "none",
  "HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"] }
});
</script>
<script type="text/javascript"
  src="https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
```

---
(Last edited on AUG 2ND, 2014)

Note: A new address of MathJax via HTTPS protocol is available.  View
my [new post] for details.

---

#### Eliminate the "right-click bug"

Lastly, we need to fix the "right-click bug" in MathJax Octopress
blogs.  To find a typical example, I searched "octopress mathjax" on
Google, and [a post on *DrZ.ac*][RightClickBugEg] came first in the
search results.  There's an equation, and once you right-click it, you
*can't* see anything except the popup menu.  The second comment to the
post included a link to an article in Brain Buccola's GitHub page,
which discussed the method of fixing the bug in
[the fifth point][FixRightClickBugBB].  In the beginning of Buccola's
post, he said that he had set it up with the help of some Octopress
users, particularly the author of [*Carpe diem*][CarpeDiem].  I guess
*Carpe diem* is the first Octopress site that manages to include
MathJax *without* the bug.

### Final result

![A gray padlock][GrayPadlock]{:.nobd} appeared on the left of the
address bar.  It indicates that the connection to this blog is
encrypted, and the contents, especially the active ones, are safe to
be shown.

{% img /images/posts/OctopressHTTPS/GrayPadlockMsg.png The gray padlock for this blog %}

Lessons learnt
---

1. Make use of official documentation

    Even though there's *so many mannuals* and it's *impossible* to
    *read them all*[^6]  I should try to *find the useful parts* and
    *understand the contents that are within my level*.

2. Consult Google

    If there's someone who has already come over the problem that I'm
    facing with, it can be more quickly solved.

3. Give up if too *much* time have been spent and the progress is
*little*

    In the future, it is possible that others will develop some better
    methods in doing things.  The exchange of ideas on the Internet
    will help.

4. Use HTTPS to browsing web for better information security

    - To avoid the notorious MITM attacks.
    - To prevent eavesdropping and surveillance.

---
[^1]: [HTTP vs HTTP**S**][wisegeek]
[wisegeek]: http://www.wisegeek.org/what-is-the-difference-between-http-and-https.htm "wiseGEEK's answer"
[^2]: [*Firefox Security Plugins*][ff_sec_plug]
[ff_sec_plug]: /blog/2014/06/05/firefox-security-plugins/
[^3]:
    [*Carpe diem*'s method (see code block in "item 2")][Carpediem];
    and my `source/_includes/custom/head.html` at [8f72ef7]

[^4]:
    `source/_posts/2014-03-16-latex-template-for-essays.markdown` at
    commit [70ba670]

[^5]: `source/_includes/custom/head.html` at commit [70ba670]
[70ba670]: https://github.com/VincentTam/vincenttam.github.io/commit/70ba670#diff-2
[^6]:
    ["Get used to skimming through documents" from Prof. C.K. Hung][f6]

[CarpeDiem]: http://www.idryman.org/blog/2012/03/10/writing-math-equations-on-octopress/#here-are-the-instructions
[8f72ef7]: https://github.com/VincentTam/vincenttam.github.io/blob/8f72ef7/source/_includes/custom/head.html#L6-L20 "My code for embedding MathJax in the past"
[70ba670]: https://github.com/VincentTam/vincenttam.github.io/commit/70ba670#diff-3
[f6]: http://user.frdm.info/ckhung/a/c013.php "Source: 習於略讀各種文件"
[Octopress]: http://octopress.org/ "Octopress"
[JPBlog]: https://yamanetoshi.github.io/ "A Japanese Octopress Blog browsed via HTTPS"
[HTTPSEverywhere]: https://www.eff.org/https-everywhere "HTTPS Everywhere"
[CarpeDiem]: http://www.idryman.org/blog/2012/03/10/writing-math-equations-on-octopress/ "Writing Math Equations on Octopress"
[ff_shield]: /images/posts/OctopressHTTPS/ff-shield.png "Firefox 29's message about insecure mixed contents"
[MozSuppImgSrc]: https://support.cdn.mozilla.net/media/uploads/gallery/images/2014-03-25-07-10-44-1aa0ef.png "Image source"
[MozSupp]: http://mzl.la/13jCUSU "How does content that isn't secure affect my safety?"
[MozEnggBlog]: https://blog.mozilla.org/tanvi/2013/04/10/mixed-content-blocking-enabled-in-firefox-23/ "Mixed Content Blocking Enabled in Firefox 23!"
[MixedActiveContent]: https://developer.mozilla.org/docs/Security/MixedContent#Mixed_active_content
[LaTeXTemplateForEssays]: /blog/2014/03/16/latex-template-for-essays/ "LaTeX Template for Essays"
[FixMixedContent]: https://developer.mozilla.org/docs/Security/MixedContent/fix_website_with_mixed_content
[Aurora]: http://www.mozilla.org/en-US/firefox/aurora/ "latest Aurora"
[MixedContent]: https://developer.mozilla.org/docs/Security/MixedContent
[StackOverflow13833210]: https://stackoverflow.com/questions/13833210/ "No Google Fonts Working in Google Chrome"
[chrome]: https://www.google.com/chrome/ "Google Chrome Browser"
[WarningTriangle]: /images/posts/OctopressHTTPS/WarningTriangle.png "Firefox's warning triangle for unsafe contents"
[MathMetaStackExchange10776]: http://meta.math.stackexchange.com/questions/10776/
[CryptoMetaStackExchange384]: http://meta.crypto.stackexchange.com/questions/384/
[MathJaxFAQ]: http://www.mathjax.org/resources/faqs/#problem-https "MathJax FAQ"
[MathJaxDoc]: http://docs.mathjax.org/en/latest/start.html#secure-access-to-the-cdn "MathJax Documentation on accessing their CDN over HTTPS"
[new post]: /blog/2014/08/02/a-change-of-encrypted-mathjax-cdn-access/
[RightClickBugEg]: http://drz.ac/2013/01/03/blogging-with-math/
[FixRightClickBugBB]: http://brianbuccola.github.io/blog/2012-11-28-latex-math-in-octopress.html#fix-right-click-bug
[GrayPadlock]: /images/posts/OctopressHTTPS/GrayPadlock.png "Firefox's gray padlock for encrypted connection"

*[HTTPS]: HTTP Secure
*[HTTP]: Hypertext Transfer Protocol
*[CDN]: Content Delivery Network
*[MDN]: Mozilla Developer Network 
*[MITM]: man-in-the-middle 
*[URL]: Uniform Resource Locator
*[PDF]: Portable Document Format
