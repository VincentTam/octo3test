---
layout: post
title: "The Title of a New Octopress Post"
date: 2014-05-31 22:55:09 +0800
comments: true
categories: Octopress
---

According to Octopress's official documentation, the command for
generating a new post is like this.[^1]

    $ rake new_post["title"]
{:.cliUB}

How about including some symbols inside `title`?

<!-- more -->

Single quotation marks
---

As you can see from the documentation, simply enclosing it with a pair
of double quotes will do.

Double quotation marks
---

The following shell command works.

    $ rake new_post['testing "double" quotes']
    # Creates source/_posts/2014-05-31-testing-double-quotes.markdown
{:.cliUB}

However, as I ran `rake generate`, I encountered an error.

<pre class="cli"><code class="UBMono">$ rake generate
(in /home/owner/octopress)
## Generating Site with Jekyll
<span class="rake_gen_unchanged">unchanged</span> sass/print.scss
<span class="rake_gen_identical">identical</span> source/stylesheets/screen.css 
Configuration from /home/owner/octopress/_config.yml
Building site: source -&gt; public

ERROR: YOUR SITE COULD NOT BE BUILT:
------------------------------------
(&lt;unknown&gt;): did not find expected key while parsing a block mapping at line 2
column 1 in /home/owner/octopress/source/_posts/2014-05-31-testing-double-
quotes.markdown
</code></pre>

I opened `source/_posts/2014-05-31-testing-double-quotes.markdown` to
view its contents.

```yaml Sample source file of the new post (source/_posts/2014-05-31-testing-double-quotes.markdown)
---
layout: post
title: "testing "double" quotes"
date: 2014-05-31 22:53:24 +0800
comments: true
categories: Octopress
---

Hello world!
```

At line 3 of the faulty markdown file, escaping the `"` inside the
*outer* pair of double quotes with `\` can resolve the problem.

<pre><code>title: "testing <span class="HLCode">\"</span>double<span class="HLCode">\"</span> quotes"</code></pre>

Exclamation marks
---

When I started writing the post
[*My Desktop Crashed!*][my_desktop_crashed], I attempted typing the
following command.

<pre class="cli"><code class="UBMono">$ rake new_post["My Desktop Crashed<span class="UBHLCode">!</span>"]
bash: !"]: event not found
</code></pre>

The solution is again simple: changing `"` to `'`.

Exclamation marks *and* quotes
---

Before writing
[*Internet Explorer a Security Risk: Use Firefox or Chrome*][DontIE],
I tried issuing the following command.

<pre class="cli"><code class="UBMono">$ rake new_post["Don't use Internet Explorer<span class="UBHLCode">\</span>!"]
(in /home/owner/octopress)
mkdir -p source/_posts
Creating new post: source/_posts/2014-05-31-dont-use-internet-explorer-slash.markdown
</code></pre>

Although the above command works, the link of the new post *doesn't*
look great.  Therefore, we have to *avoid using backslashes inside the
square brackets*  This time, there's an apostrophe inside the title,
so we *can't* use `'` to surround `!`.  To create such kind of posts,
some simple tricks will do.

- Pass a title with `'`, but *without* `"` and `!`.

~~~~~
$ rake new_post["Don't use Internet Explorer"]
# Creates source/_posts/2014-05-31-dont-use-internet-explorer.markdown
~~~~~
{:.cliUB}

- Add the things back to `title` in the header of the generated
markdown file.
    - For example, change `title: "Don't use Internet Explorer"` into
	`title: "Don't use Internet Explorer!"`

---

[^1]:
    Mathis, B.  (Jul 19, 2014).  *Blogging Basics*.  Retrieved from
    <http://octopress.org/docs/blogging/>

[^2]: Ibid.

[my_desktop_crashed]: /blog/2014/05/27/my-desktop-crashed/
[DontIE]: /blog/2014/05/31/internet-explorer-a-security-risk-use-firefox-or-chrome/
