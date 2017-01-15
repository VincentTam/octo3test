---
layout: post
title: "Use Lynx Browser"
date: 2014-06-07 13:01:57 +0800
comments: true
categories: [web technologies]
---

Why?
---

This morning, I saw [a post on Search Engine People Blog][CitedPost],
and decided to make a summary of it, so that I *don't* have to think
of the reasons for using [Lynx] when I'm asked for that next time.

### Past usage

- Lack of GUI web browsers like [Firefox] and [Internet Explorer]
- Text browsers were capable of loading contents quickly, if there's
    *no* connection problem.
- The Internet wasn't fast enought for extensive transmission of
    images and flash animations.

### Present usage

- "You really love text and hate images" :)
- "**For marketing to search engines**"
    - "*See what SEOs see*": they use browsers similar to Lynx.

<small>Remarks: Due to my laziness, reasons for search engines to use
text browsers, instead of "a modern browser", are omitted.</small>

<!-- more -->

How?
---

For GNU/Linux, type the command for installing Lynx.  For

### Ubuntu/Debian-based Distros

    $ sudo apt-get install lynx
{:.cliUB}

### Fedora

    $ su
    # yum install lynx
{:.cli}

### Microsoft Windows

Refer to the section *Lynx Links* in the post on Search Engine People
Blog.

What can I see?
---

This is a screenshot taken in Linux text mode.

{% img fancybox /images/posts/Lynx/Screenshot.png 800 'Lynx browser in Linux text mode' ['fig1'] %}

Some useful keys
---

### Help

- Use `k` for keymap
- Use `h` or `?` for help

### Browsing

- Use `g` for inputting URL
- Use `G` for inputting URL similar to the one of the current page.
- Use `l` for displaying URLs of hyperlinks.
- Use `<Backspace>` for displaying browsing history.
- Use `\` to view the source code

### Searches

- Use `/` for forward search
- Use `n` for repeating search forwardly
- Use `N` for repeating search backwardly

How to save the pages?
---

- Source code
    - Inside Lynx
	1. Highlight the link using the cursor
	2. Press `d` to download the source code
    - Outside Lynx  
	Use the following command

	<pre class="cli">$ lynx -source [URL]</pre>

- Formatted output

    <pre class="cli">$ lynx -dump [URL]</pre>

{% render_code LynxDumpGoogle.txt Google's Homepage Downloaded with `lynx -dump` lang:text %}

[CitedPost]: http://www.searchenginepeople.com/blog/see-what-google-sees.html "Use This Browser To See What Google Does"
[Lynx]: http://lynx.isc.org/ "Lynx Browser"
[Firefox]: https://www.mozilla.org/en-US/firefox/new/ "Mozilla Firefox"
[Internet Explorer]: http://www.microsoft.com/en-us/download/internet-explorer.aspx "Microsoft Internet Explorer"

*[GUI]: Graphical User Interface
*[SEOs]: Search Engine Optimizers
