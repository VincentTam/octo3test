---
layout: post
title: "NoScript ABE Rules for WLAN Web Portal Login"
date: 2014-06-16 18:51:50 +0800
comments: true
categories: 
- information security
---

Objective
---

To browse the web safely.

Background
---

To block malicious scripts from running inside the browser ⇒ I installed
[NoScript] plugin in Firefox.[^1]

Problem
---

Similar to the one described in [InformAction Forums][IAForum]:  I
*couldn't* log on to the web portal of a WLAN.

For ordinary netizens who *don't* have time to read the post on
InformAction Forums, I've prepared a screenshot to depict the problem.

{% img fancybox /images/posts/NoScriptABE/ABEAtom.png 'NoScript ABE blocks Atom Feed from reloading' ['fig1'] %}

<!-- more -->

When I preview the Atom Feed of this blog at
http://localhost:4000/atom.xml while fixing some layout problems on
those pages[^2], I *couldn't* refresh that page to preview my changes.
As a result, I needed to go back to the homepage and click "RSS"
again, which was quite *inconvenient*.

*Why* do I post it?
---

To share my working ABE settings, which improve the users' experience
of using NoScript and Firefox for secure web browsing.

Why do I post it *now*?  (TL;DR)
---

I've solved the above problem last year and I would like to write this
post.  However, I *hadn't* learnt how to set up Octopress on M$
Win\* 7 when I set up this blogging system on Ubuntu 12.04 LTS.  Thus,
I *didn't* knew the actual procedures until [my desktop crashed].  The
system failure has caused to seriously learn that.  I started from an
easier target: setting up a *new* Octopress blog on M\$ Win\* 7.[^3].
After that, I cloned the remote repository of this blog on GitHub to
M<span class="tex2jax_ignore">$</span> Win\* 7, and solved some
technical problems before really deploying the site from M <span
class="tex2jax_ignore">$</span> Win\* 7 to GitHub.[^4]

Solution
---

I googled "noscript abe wlan", and the above post on InformAction
Forums appeared on the top.  The second reply solved this problem.

### Sample Screenshot for WLAN web portal login

![NoScript ABE settings for web portal login page][img:ABEWebPortalSettings]

### Sample Screenshot for previewing Atom Feed

![NoScript ABE settings for previewing Octopress's Atom Feed][img:ABEAtomSettings]

---

[^1]: My older post: [*Firefox Security Plugins*][PrevPost1]
[^2]:
    My older posts: *My Settings for RSS [(1)][PrevPost2a],
    [(2)][PrevPost2b]*

[^3]: My older post: [*Using Octopress on Another Device*][PrevPost3]
[^4]:
    My older post: [*Liquid Exceptions During Generation of My Blog on Windows 7*][PrevPost4]

[NoScript]: http://noscript.net/ "Scripts and Flash blocker for a safer Firefox experience"
[PrevPost1]: /blog/2014/06/05/firefox-security-plugins/
[IAForum]: https://forums.informaction.com/viewtopic.php?f=23&t=8992 "ABE rule to allow display of WLAN provider login page"
[PrevPost2a]: /blog/2014/06/10/my-settings-for-rss-1/
[PrevPost2b]: /blog/2014/06/11/my-settings-for-rss-2/
[my desktop crashed]: /blog/2014/05/27/my-desktop-crashed/
[PrevPost3]: /blog/2014/05/26/using-octopress-on-another-device/
[PrevPost4]: /blog/2014/05/30/liquid-exceptions-during-generation-of-my-blog-on-windows-7/
[img:ABEWebPortalSettings]: /images/posts/NoScriptABE/ABEWebPortalSettings.png
[img:ABEAtomSettings]: /images/posts/NoScriptABE/ABEAtomSettings.png
