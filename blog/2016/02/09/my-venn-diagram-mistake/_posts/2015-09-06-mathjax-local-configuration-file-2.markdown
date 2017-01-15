---
layout: post
title: "MathJax Local Configuration File (2)"
date: 2015-09-06 19:29:42 +0800
comments: true
categories: MathJax
---

Background
---

In my opinion, the default display of the $\rm \LaTeX$ command for
$\Re z$ and $\Im z$ *don't* look good.

![default Im(z) display][default]

Problem
---

I want to reset the `\Im` command in my local MathJax configuration
file `source/javascripts/MathJaxLocal.js`.  I used a script inside the
`<body>` tag to load my local MathJax configurations from GitHub.[^pp]
If I want to *test* the configurations, then I'll have to push my
changes to GitHub *before* I can see the effect and figure out the
errors --- this is incredibly *slow* and *inefficient*.

**How can I locally debug my MathJax configurations?**

<!-- more -->

Solution
---

To *locally test* my MathJax configurations, I put *another* `<script>`
tag containing the local configurations *before* the `<script>` that
loads `MathJax.js`.

{% codeblock Put this at the bottom lang:html %}
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$'],['\\[','\\]']],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
  messageStyle: "none",
  "HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"] },
  TeX: {
    equationNumbers: { autoNumber: "AMS" },
    extensions: ["AMSmath.js", "AMSsymbols.js","AMScd.js"],
    TagSide: "left",
    Macros: {
      field: ['\\mathbb{#1}', 1],
      C: ['\\field{C}'],
      F: ['\\field{F}'],
      N: ['\\field{N}'],
      Q: ['\\field{Q}'],
      R: ['\\field{R}'],
      Z: ['\\field{Z}'],

      zeros: ['\\mathbf{0}'],
      ud: ['\\,\\mathrm{d}'],

      vect:['\\boldsymbol{\\mathbf{#1}}',1],
      abs: ['\\lvert#1\\rvert', 1],
      abslr:['\\left\\lvert#1\\right\\rvert', 1],
      norm: ['\\lVert#1\\rVert', 1],
      normlr: ['\\left\\lVert#1\\right\\rVert', 1],

      lcm: ['\\mathop{\\mathrm{lcm}}'],
      interior: ['\\mathop{\\mathrm{int}}'],
      exterior: ['\\mathop{\\mathrm{ext}}'],
      volume: ['\\mathop{\\mathrm{vol}}'],

      E: ['{\\rm I\\kern-.3em E}'],
      Var: ['\\mathop{\\mathrm{Var}}'],
      Cov: ['\\mathop{\\mathrm{Cov}}'],
      Binom: ['\\mathop{\\mathrm{Binom}}'],
      Exp: ['\\mathop{\\mathrm{Exp}}'],
      Poi: ['\\mathop{\\mathrm{Poi}}'],

      GL: ['\\mathrm{GL}'],
      SL: ['\\mathrm{SL}'],
      Aut: ['\\mathrm{Aut}'],
      id: ['\\mathrm{id}'],

      // Test your code here
      Re: ['\\mathop{\\mathrm{Re}}'],
      Im: ['\\mathop{\\mathrm{Im}}'],
    }
  }
});
</script>

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
    "config=TeX-AMS-MML_HTMLorMML", function(){});

})();
</script>
{% endcodeblock %}

I think that rendering $\Re z$ and $\Im z$ with roman font is better.

![improved Im(z) display][improved]

---
[^pp]:
    Refer to [my old post][pp] titled *A Quick Markdown Syntax Error
    Detection for Writing MathJax Equations in Octopress Posts (3)*
    for details.

[default]: /images/posts/MathJaxReIm/im110.png
[pp]: /blog/2015/08/05/a-quick-markdown-syntax-error-detection-for-writing-mathjax-equations-in-octopress-posts-3/
[improved]: /images/posts/MathJaxReIm/im-new120.png
