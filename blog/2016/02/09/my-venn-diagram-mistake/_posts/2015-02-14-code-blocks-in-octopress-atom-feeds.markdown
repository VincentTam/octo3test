---
layout: post
title: "Code Blocks in Octopress Atom Feeds"
date: 2015-02-14 19:20:37 +0800
comments: true
categories: Octopress
---

Problem
---

After I re-generated this site, it is *possible* that the code blocks
and the *pictures* in the RSS feeds are *gone*.

{% codeblock WRONG version of C/C++ category feed lang:html http://goo.gl/buBrps View Raw %}
{% raw %}
<p>{% codeblock first_graphics_prog.cpp lang:cpp %}
// Author: David Yevick
// Source: A Short Course in Computational Science and Engineering
#include <iostream>
#include <dislin.h></dislin.h></iostream></p>

<p>using namespace std;</p>

<p>int main(int argc, const char *argv[])
{
    // Some code for defining variables
    // Omitted to avoid copyright problems
    // An example of using DISLIN methods
    qplot(array1,array2,numOfPts);
}
{% endcodeblock %}</p>
{% endraw %}
{% endcodeblock %}

Remark: One can view the original file on GitHub by clicking "View
Raw".

Sometimes, I was *unaware* of this, especially after writing a
*simple* post that could surely be correctly parsed by [kramdown].
When I saw something like what's shown in the above code block in a
category feed page in this blog on the Internet, this error had
already *published*.

<!-- more -->

A "fix" to the above problem
---

Re-generate the site *again*, and wait for luck so that the above
*incorrect* HTML code will be finally transformed to
[a correct one](#right_code){:.cliwide}.

Then one can deploy it to the Internet.

Solution
---

As I am *not* an IT student nor staff, I *don't* know the reason.
Therefore, what I can do *doesn't* differ much from the above "fix":
check if the locally generated HTML source code for
`/blog/category/foo/atom.xml` is OK.

    $ diff -u public/blog/categories/latex/atom.xml _deploy/blog/categories/latex/at
    om.xml
    --- public/blog/categories/latex/atom.xml       2015-02-14 13:42:46.645744300 +0
    800
    +++ _deploy/blog/categories/latex/atom.xml      2015-01-18 16:33:33.341309330 +0
    800
    @@ -4,7 +4,7 @@
       <title><![CDATA[Category: Latex | Blog 1]]></title>
       <link href="http://vincenttam.github.io/blog/categories/latex/atom.xml" rel="
    self"/>
       <link href="http://vincenttam.github.io/"/>
    -  <updated>2015-02-14T13:41:37+08:00</updated>
    +  <updated>2015-01-18T16:32:04+08:00</updated>
       <id>http://vincenttam.github.io/</id>
       <author>
         <name><![CDATA[Vincent Tam]]></name>
{:.cliUB}

In the above situation, I *assume* that the previous version of the
RSS feed is *correct*.

[kramdown]: http://kramdown.gettalong.org/

*[RSS]: Rich Site Summary

<div id="right_code" class="noscr" markdown="1">
{% codeblock Correct version of C/C++ category feed lang:html http://goo.gl/YuA1Y9 View Raw %}
<p><figure class='code'><figcaption><span>Sample code </span></figcaption>
<div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
<span class='line-number'>2</span>
<span class='line-number'>3</span>
<span class='line-number'>4</span>
<span class='line-number'>5</span>
<span class='line-number'>6</span>
<span class='line-number'>7</span>
<span class='line-number'>8</span>
<span class='line-number'>9</span>
<span class='line-number'>10</span>
<span class='line-number'>11</span>
<span class='line-number'>12</span>
</pre></td><td class='code'><pre><code class='cpp'><span class='line'><span class="c1">// Author: Helmut Michels</span>
</span><span class='line'><span class="c1">// Source: DISLIN 10.4—A Data Plotting Library</span>
</span><span class='line'><span class="cp">#include &lt;iostream&gt;</span>
</span><span class='line'><span class="cp">#include &quot;discpp.h&quot;&lt;/iostream&gt;&lt;/p&gt;</span>
</span><span class='line'>
</span><span class='line'><span class="o">&lt;</span><span class="n">p</span><span class="o">&gt;</span><span class="n">main</span><span
class="p">()</span>
</span><span class='line'><span class="p">{</span>
</span><span class='line'> <span class="n">Dislin</span> <span class="n">g</span><span class="p">;</span>
</span><span class='line'> <span class="n">g</span><span class="p">.</span><span class="n">disini</span> <span class="p">();</span>
</span><span class='line'> <span class="n">g</span><span class="p">.</span><span class="n">messag</span> <span class="p">(</span><span
class="err">“</span><span class="n">This</span> <span class="n">is</span> <span class="n">a</span> <span class="n">test</span><span
class="err">”</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="mi">100</span><span class="p">);</span>
</span><span class='line'> <span class="n">g</span><span class="p">.</span><span class="n">disfin</span> <span class="p">();</span>
</span><span class='line'><span class="p">}</span>
</span></code></pre></td></tr></table></div></figure></p>
{% endcodeblock %}
</div>
