---
layout: post
title: "Testing Online Code Syntax Highlighters for Blogs (4): Giving up Using Blogger's Dynamic View"
date: 2014-01-08 10:23:00 +0800
categories: [online code highlighter]
comments: true
---

There are several reasons for the shift of the template of
[my old blog on Blogger][old_blog] from a dynamic view to a static
one.

Speed
---

Dynamic view takes too much time to load. This greatly slowed down my
editing process on Blogger.

Integration with other scripts
---

It is often quite troublesome to load other scripts using the dynamic
view.

<!-- more -->

For example, due to my poor knowledge in HTML, JavaScript and CSS, I
can't understand what's written on those blogs that use the dynamic
view and manage to integrate with [google-code-prettify] and/or
[highlight.js] work(s), such as
[Conrad's syntax highlight demo page][conrad_samp] and
[Wood's tutorial on usinghighlight.js][wood_tut]. For details of my
integration failure, you may see the last paragraph of
[my previous post][pp]. 

As I'm *not* a web developer or a web designer, it's *not* worth
spending so much time to goggle the solution. In contrast to the
difficulty of installing external scripts in the dynamic view, the
static view enables users to click "Layout" → "Add a Gadget" to do the
job.

{% img /images/posts/CodeDisplay4/465ff-add-gadget.png "Blogger's pop-up windown for adding a gadget" ['fig1'] %}

By doing so, the user doesn't need to edit HTML template every time.

{% img fancybox /images/posts/CodeDisplay4/2e8d5-template.png "Blogger's online template editor" ['fig2'] %}

Further reasons
---

More reasons can be found on
[*10 Reasons To Avoid Blogger Dynamic Views*][more_reasons].

Conclusion
---

With a simpler static view, I've been able to make [highlight.js] and
[google-code-prettify] work. 

[old_blog]: http://blogue-un.blogspot.hk/
[highlight.js]: http://highlightjs.org/
[google-code-prettify]: http://code.google.com/p/google-code-prettify/wiki/GettingStarted
[conrad_samp]: http://www.alexconrad.org/2011/12/highlight-code-with-bloggers-dynamic.html
[wood_tut]: http://www.chrispwood.net/2013/03/integrating-highlightjs-with-blogger.html
[pp]: /blog/2014/01/07/testing-online-code-syntax-highlighters-for-blogs-2-highlight-js/
[more_reasons]: http://www.mybloggertricks.com/2011/12/10-reasons-to-avoid-blogger-dynamic.html
