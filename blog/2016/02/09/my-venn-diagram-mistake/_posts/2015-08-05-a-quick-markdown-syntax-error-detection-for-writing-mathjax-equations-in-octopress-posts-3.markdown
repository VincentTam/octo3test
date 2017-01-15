---
layout: post
title: "A Quick Markdown Syntax Error Detection for Writing MathJax Equations in Octopress Posts (3)"
date: 2015-08-05 00:18:45 +0800
comments: true
categories: [kramdown, MathJax, Octopress, Vim, web technologies]
---

Background
---

I often write math in this blog.  After typing lots of characters,
syntax errors are *inevitable*, but no one wants them to be published.
Unluckily, the `rake generate` command takes *too long* to run.  In
order to find them out more quickly, I quickly went over the
`Gemfile` of the repository for this blog, and saw that the Markdown
engine of Octopress is kramdown.  Therefore, I used the command line
version of this Markdown parser to convert my Markdown source file to
an HTML document by a Vim Ex command.

    :!kramdown % > %<.html

For this, I've written two posts describing the workflow of producing
HTML web pages consisting of math expressions from Markdown source
files using kramdown and MathJax.

Problem
---

In [the first post][seri1] in this series, I've made a list of steps
in Vim.  However, jumping to other files is laborious.  More
importantly, those steps involve browsing and copying of lines of
HTML code of the `<head>`, which loads MathJax, in other HTML files.
This can *seriously* slow down the editing process.  Unhappily, this
problem *isn't* solved in [the second post][seri2] in this series.

<!-- more -->

Solution
---

### Include the script in the content

There might be some option for the kramdown command line utility to
use accept an HTML template files during the code conversion.
However, I'm *too lazy* to search for them as I need to work on
math.[^pp1]

Remembering that I defered the loading of JavaScripts in order to
boost the PageSpeed score of this site, I adpated the script to load
MathJax instead of fancyBox in my draft markdown file.[^pp2]

{% codeblock Put this at the bottom lang:html %}
<script type="text/javascript">
(function() {
  function getScript(url,success){
    var script=document.createElement('script');
    script.src=url;
    var head=document.getElementsByTagName('head')[0],
    done=false;
    script.onload=script.onreadystatechange = function(){
      if ( !done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ) {
      done=true;
      success();
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
      }
    };
    head.appendChild(script);
  }

  getScript("https://cdn.mathjax.org/mathjax/latest/MathJax.js?" +
    "config=TeX-AMS-MML_HTMLorMML" +
    ",https://vincenttam.github.io/javascripts/MathJaxLocal.js",
    function(){});

})();
</script>
{% endcodeblock %}

### A problem with Vim's folding arised

---
(Added on DEC 12TH, 2016)

This subsection can be omitted since appending the above code can be
done with `cat`.  Please see [the next post][seri4] in this series for
the detailed description.

---

By default, with the plugin `vim-markdown` installed, the sections are
*folded*.  Before I can continue editing at the end of the file, I
have to open the last fold, which contained more than 25 lines due to
the script enabling MathJax at the bottom.  As a result, I have to
move back to the middle of the last fold by pressing `k` for a while.
That annoys me.  If the script is contained in a separate fold, it's
better.  Therefore, adding a blank line and then a line consisting of
three hyphens will fix this problem.

Inadequacies
---

---
(Added on SEP 3RD, 2015)

Now I realised that kramdown will leave the trailing two backslashes
at each line inside `<div>` tags in Markdown source files *untouched*.

---

In [the second post][seri2] in this series, we know that `<div>` tag
prevents kramdown from converting the code inside the tag to HTML,
while in [another old post about kramdown's Markdown attributes][pp3],
one can revert the above behaviour by simply adding an attribute
`markdown="1"` to the `<div>` tag.  These can be reflected in the
above test.

Usually, in math environments inside a $\rm \LaTeX$ document, double
backslashes `\\` start a new line, and it's the same in MathJax.
Typing *two* backslashes in the Markdown source down will suffice.
Unluckily, in the *real Markdown source* for Octopress posts, *four*
`\` are needed.

---
[^pp1]:
    For example, I have to think about
    [multi-variable real-valued functions][pp1].

[^pp2]:
    Refer to my old post
    [*Octopress, PageSpeed, jQuery and fancyBox*][pp2] in *Blog 1* for
    details.

[seri1]: /blog/2014/12/10/a-quick-markdown-syntax-error-detection-for-writing-mathjax-equations-in-octopress-posts-1/
[seri2]: /blog/2014/12/13/a-quick-markdown-syntax-error-detection-for-writing-mathjax-equations-in-octopress-posts-2/
[seri4]: /blog/2016/12/12/a-quick-markdown-syntax-error-detection-for-writing-mathjax-equations-in-octopress-posts-4/
[pp1]: /blog/2015/08/04/some-thoughts-on-a-real-valued-function/
[pp2]: /blog/2014/12/29/octopress-pagespeed-jquery-and-fancybox/
[pp3]: /blog/2014/09/14/kramdowns-markdown-attributes/
