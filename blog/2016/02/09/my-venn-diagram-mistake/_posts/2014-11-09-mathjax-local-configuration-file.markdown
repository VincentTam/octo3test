---
layout: post
title: "MathJax Local Configuration File"
date: 2014-11-09 01:06:46 +0800
comments: true
categories: MathJax
---

Motivation
---

Before I changed the HTML syntax for embedding MathJax with a local
configuration file, I often encountered error while viewing the math
rendered by MathJax.[^12d38c1]  The custom commands defined in the
local configuration file sometimes *wouldn't* be converted to
mathematical expressions in a post while browsing the page for the
first time.  Though refreshing the page can get the math shown, it's
quite troublesome.  Therefore, I searched for a better way in the
official manual.

Problem
---

I tried following the instructions in MathJax's official Wiki for
using a local configuration file.[^mathjax_doc]

{% codeblock lang:html %}
<script type="text/javascript"
	src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML,
	/javascripts/MathJaxLocal.js
">
</script>
{% endcodeblock %}

Things seems worked, but undesirably *slow*.

![loading time graph](/images/posts/MathJaxLocalConfigSlow/slow1.png){:.fancybox}

![loading time graph](/images/posts/MathJaxLocalConfigSlow/slow2.png){:.fancybox}

It took about *16 seconds* for loading the math.  **How can they load
quicker with a local configuration file**, like <http://drz.ac>?

<!-- more -->

Cause
---

I googled "mathjax local config long", and found a message from
[this page][src] extremely useful.

{% raw %}
{% quote author:"Davide P. Cervone" url:http://goo.gl/WzV2w3 title:"Re: Local configuration file processing is extremely slow (~15 sec)" %}
{% endraw %}
<p>You are missing the <code>loacComplete()</code> line in your configuration file, so MathJax waits 15 seconds before timing out and going on without it.  Add</p><pre><code>Mathjax.Ajax.loadComplete("[Mathjax]/config/local/font.js");</code></pre><p>at the bottom of your font configuration file and that should take care of it for you.</p>
{% raw %}
{% endquote %}
{% endraw %}

Failed attempts
---

I tried using relative paths in `source/_includes/custom/head.html`
, `{% raw %}{{ root_url }}{% endraw %}` in the `<script>` tag that
calls MathJax with a local configuration file and in the local
configuration file `source/javascripts/MathJaxLocal.js`.  Since this
blog has more than 200 pages, it took about a minute for regeneration
of contents after each slight modification in the code.

Conclusion
---

I typed full paths manually for the above `<script>` tag in the custom
head of a page and the local configuration file.  To avoid loading
"insecure contents", I used full URLs instead of
`{% raw %}{{ site.url }}{% endraw %}` since the URL of this site
*doesn't* start with "https" in `_config.yml`.[^https][^config_yml]
Then the equations should load quickly.

![loading time graph](/images/posts/MathJaxLocalConfigSlow/ok.png){:.fancybox}

Lessons learnt
---

If I could do the same job again, I'd first change the local
configuration file and upload it to GitHub, so that I could test it in
a local HTML file `file:///path/to/test-mathjax.html`

{% render_code test-mathjax.html A local testing page for using the MathJax macros %}

---
[^12d38c1]: Refer to commit [12d38c1].
[^mathjax_doc]:
    [Using a local configuration file with the CDN][mathjax_doc] in
    *MathJax Documentation*.

[^https]:
    Refer to [*MathJax in Octopress via HTTPS*][pp] in Blog 1 for
    details.

[^config_yml]: `_config.yml` at commit [71ff4fb].

[12d38c1]: https://github.com/VincentTam/vincenttam.github.io/commit/12d38c1#diff-0
[mathjax_doc]: http://docs.mathjax.org/en/latest/configuration.html#using-a-local-configuration-file-with-the-cdn
[src]: https://groups.google.com/forum/#!msg/mathjax-users/iIvf2RkNdF4/Bi_TFDR3AsUJ
[pp]: /blog/2014/06/05/mathjax-in-octopress-via-https/
[71ff4fb]: https://github.com/VincentTam/vincenttam.github.io/blob/71ff4fb/_config.yml
