---
layout: post
title: A More User-Friendly and Dynamic View in Blogger
date: 2014-01-07 01:03:00 +0800
categories: blogging
comments: true
---

---
(Last edited on JAN 8, 2014)

As you can see now, I no longer use the dynamic view in Blogger.  For
a more detailed reason, refer to [my newer post][np].

---

The dynamic view template in Blogger can already switch its modes
according to the users' needs.  The containers in "flipcard" and
"mosaic" views can be enlarged by a click on them.  However, the
default "sidebar" view still has its supporters, despite its
inadequacies.[^supp_sidebar]

Last Saturday, I changed the template from a dark one to a dynamic one
withe sidebar.  However, when I'd like to scroll down to my earlier
essays, I found out that I need to go through some passages in between
my current position and my target in the scrollbar.  This is quite
troublesome since a considerable amount of time is needed to load the
contents of a blog entry.

Luckily, I could find out how Yoga changed his code in "Add CSS" in
his template so as to get the sidebar on the left scrollable.  I just
copy the code from him for your reference.

{% codeblock lang:css %}
.sidebar #sidebar, .ss{
  margin-top: 12px !important;
  overflow-y: scroll !important;
}
{% endcodeblock %}

Note: Later, I found out that *without* the scrollbar, the sidebar is
still scrollable.

---
[^supp_sidebar]:
    [*Scrollbar for Sidebar Posts in Blogger Dynamic Views*][src] by
    Yoga.

[np]: /blog/2014/01/08/testing-online-code-syntax-highlighters-for-blogs-4-giving-up-using-bloggers-dynamic-view/
[src]: http://www.southernspeakers.net/2012/09/scrollbar-for-sidebar-posts-in-blogger.html
