---
layout: post
title: "Added W3C Validated Logos to Some Pages"
date: 2015-05-23 22:42:17 +0800
comments: true
categories: [web technologies]
---

Background
---

The web pages under `/downloads/code/` *don't* conform to the W3C's
standards.  This afternoon, after I had rewritten the code and passed
the HTML 4.01 Strict Test and CSS3 Test, I was given the code to embed
the [validation icons][valid_icons].[^samp_pic]

``` html HTML code for embedding the validation icon for HTML 4.01 Strict
<p>
  <a href="http://validator.w3.org/check?uri=referer"><img
    src="http://www.w3.org/Icons/valid-html401" alt="Valid HTML 4.01 Strict"
    height="31" width="88"></a>
</p>
```

Problem
---

Unluckily, when I clicked on the icon for re-validation of the site, I
*got* a 404 error.

<picture class="fancybox" title="404 Not Found">
  <source srcset="/images/posts/W3C/err497.png"
    media="(min-width: 497px)"></source>
  <img alt="404 not found" src="/images/posts/W3C/err300.png" />
</picture>

<!-- more -->

Cause
---

I *wasn't* so patient to read the [FAQ] of the W3C.  I googled "w3c
validator referer".  Realising that the web pages hosted on the
official website were similar to the FAQ, I clicked on the first blog
article that I saw.[^1st_blog]  I still *didn't* know what's wrong
with my hyperlink on the validation icon.

Solution
---

I refined my search by added the phrase "requested URL /check"
*surrounded by double quotes* to the query string.  Then, only four
web pages were displayed.  I glimpsed a mailing list and I *didn't*
found it useful.  Although I believed that the hyperlink for a forum
thread *wouldn't* help me, I clicked it.[^forum]  It was in 2007, and
the situtation *differed* much from this one.  I clicked on an
old-versioned hyperlink to the W3C's HTML validator, and *it worked*.
After that, I "inspected this element" and changed the destination to
the current URL of the validator.  It worked again.

I compared the code found on the forum post with mine, and I
discovered that the only difference is the `s` in front of the domain
name `validator.w3.org`.  Knowing that some users may view the site
using the HTTP protocol, I finally removed the beginning `https:` in
the `href` attribute in that hyperlink.  Now users may re-validate the
page with a simple click on the validation icons.

Lessons learnt
---

Through the validation process, I've learnt some HTML.

1. Always begin an HTML file with `<!DOCTYPE HTML ...>`.
2. Add a `lang` attribute in `<html>` for internationalization.
3. Add a `<meta charset="UTF-8">` tag to tell the validator the
character encoding of the page.
4. A `<title>` inside the `<head>` is *necessary*: without this, the
vaildator *won't* regard the `<head>` as closed.
5. In HTML 4.01 or earlier, avoid using a slash `/` before `>`.

    i.e. Use `<img ... foo="bar">` instead of `<img ... foo="bar" />`,
    `<br>` instead of `<br/>`, etc.

6. Images in HTML 4.01 Strict:

    - an alternate text is needed
    - specify the dimenstions of the picture (i.e. `height="XX"
        witdth="YY"`)

7. Inline elements in HTML 4.01 Strict need to be wrapped by
block-level elements like `<p>`, `<div>`, etc.
8. Forms in HTML 4.01 Strict need an `action`.
9. Use the `charset` attribute in `<script>` tags only for external
scripts.
10. Using a hyperlink to `http://validator.w3.org/check?uri=referer` is
more convenient than the manual way.

---
[^samp_pic]: [Here]'s a sample screenshot.
[^1st_blog]:
    [*How to Link to the W3C CSS3 Validation Page*][blog] on *Bryan
    Hadaway's Web + Tech Blog*.

[^forum]:
    [*What happend to http://validator.w3.org/check/referer ?*][forum]
    on *W3c Discussion Forums*.

[valid_icons]: http://www.w3.org/QA/Tools/Icons
[Here]: /images/posts/W3C/valid-code.png
[FAQ]: http://validator.w3.org/docs/help.html#faq-referer
[blog]: http://bryanhadaway.com/how-to-link-to-the-w3c-css3-validation-page/
[forum]: http://t29233.org-w3c-validator.w3ctalk.info/what-happend-to-http-validator-w3-org-check-referer-t29233.html#91166

*[W3C]: World Wide Web Consortium
*[FAQ]: Frequently Asked Questions
