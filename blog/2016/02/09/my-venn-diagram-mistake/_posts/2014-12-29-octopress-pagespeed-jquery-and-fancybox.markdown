---
layout: post
title: "Octopress, PageSpeed, jQuery and fancyBox"
date: 2014-12-29 16:17:52 +0800
comments: true
categories: [Octopress, web technologies]
---

Goal
---

To improve the [Google PageSpeed][PageSpeed] scores of this site.

Background
---

I use [MathJax] and [fancyBox] for displaying math equations and
images respectively.

Problem
---

As shown in the following two pictures, the [PageSpeed] scores of the
homepage of this blog for "Mobile" and "Desktop" were very *low*.

<picture class="fancybox center" title='PageSpeed score for "Mobile"'>
  <source srcset="/images/posts/PageSpeed/m-score1.png" media="(min-width: 980px)"></source>
  <img alt="pagespeed score mobile" src="/images/posts/PageSpeed/m-score1-s.png" />
</picture>

<picture class="fancybox center" title='PageSpeed score for "Desktop"'>
  <source srcset="/images/posts/PageSpeed/d-score1.png" media="(min-width: 650px)"></source>
  <img alt="pagespeed score desktop" src="/images/posts/PageSpeed/d-score1-s.png" />
</picture>

Solution
---

I followed the advice of Google Developers, and deferred loading of
JavaScripts.

### Results

After a week's work, the PageSpeed has risen.

{% img fancybox center /images/posts/PageSpeed/m-score3.png 'PageSpeed score for Mobile' ['mobile pagespeed score'] %}

<picture class="fancybox center" title='PageSpeed score for "Desktop"'>
  <source srcset="/images/posts/PageSpeed/d-score3.png" media="(min-width: 360px)"></source>
  <img alt="pagespeed score desktop" src="/images/posts/PageSpeed/d-score3-s.png" />
</picture>

<!-- more -->

### HTML Headers

I removed render-blocking JavaScripts and stylesheets in the HTML
Headers.

1. Deleted all `<script>` and `<link rel="stylesheet" ... />` tags in
`source/_includes/custom/head.html`, *except* `<link
src="/stylesheets/print.css" ... />`.
2. Deleted the lines which loads [jQuery], [Modernizr],
`/javascripts/octopress.js` and `/stylesheets/screen.css`.

{% codeblock Lines to be removed from the default HTML head lang:html %}
<link href="{{ root_url }}/stylesheets/screen.css" media="screen,
projection" rel="stylesheet" type="text/css">
<script src="{{ root_url }}/javascripts/modernizr-2.0.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">
</script>
<script>!window.jQuery && document.write(unescape('%3Cscript
src="/javascripts/libs/jquery.min.js"%3E%3C/script%3E'))</script>
<script src="{{ root_url }}/javascripts/octopress.js" type="text/javascript">
</script>
{% endcodeblock %}

### Combine and compress fancyBox JavaScripts

I used the online JavaScript compressor at <http://jscompress.com>.
First, I clicked the "Upload Javascript Files" tabbed pane.  After
that, uploaded the three JavaScripts for fancyBox helpers:[^nowheel]

1. `/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5`
2. `/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6`
3. `/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7`

I then downloaded the compressed output.

### After the HTML footer

To load the scripts, especially Google hosted jQuery (or a local copy
of it in case that the remote library *can't* load) and [fancyBox],
and the stylesheets after the contents in the `<body>` tag has been
loaded, I added the following lines to
`source/_includes/custom/after_footer.html`.

{% codeblock Defer loading of JavaScripts and stylesheets lang:html %}
<script type="text/javascript" charset="utf-8">
// For loading JavaScripts
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

    // Any scripts independent of jQuery
    getScript("{{ root_url }}/javascripts/modernizr-2.0.js",function() {});
    getScript("https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"+
    ",https://vincenttam.github.io/javascripts/MathJaxLocal.js",function() {});

    // Google hosted jquery and fancyBox JavaScripts
    getScript("//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",function(){
      getScript("{{ root_url }}/javascripts/octopress.js",function() {});
      getScript("/fancybox/source/jquery.fancybox.pack.js?v=2.1.5", function() {
	getScript("/fancybox/source/helpers/all.js", function() {
	  getScript("/javascripts/FancyBoxLocal.js", function() {});
	  });
	});
      });

    // jquery fallback local copy and fancyBox JavaScripts
    window.onload = function() {
      if (typeof jQuery == "undefined") {
	var jqri = document.createElement("script");
	jqri.src = "/javascripts/libs/jquery.min.js";
	jqri.type = "text/javascript";
	document.body.appendChild(jqri);
	jqri. onload = function () {
	  var fbjs = document.createElement("script");
	  fbjs.src = "/fancybox/source/jquery.fancybox.pack.js?v=2.1.5";
	  fbjs.type = "text/javascript";
	  document.body.appendChild(fbjs);
	  var fball = document.createElement("script");
	  fball.src = "./octopress/source/fancybox/source/helpers/all.js";
	  fball.type = "text/javascript";
	  document.body.appendChild(fball);
	  fbjs.onload = function () {
	    fball.onload = function () {
	      var fblocjs = document.createElement("script");
	      fblocjs.src = "/javascripts/FancyBoxLocal.js";
	      fblocjs.type = "text/javascript";
	      document.body.appendChild(fblocjs);
	    }
	  }
	}
      }
    }
})();

// For loading CSS files
var cb = function() {
  var h = document.getElementsByTagName('head')[0];

  // Fonts from Google's Web font directory
  var font1 = document.createElement("link");
  font1.href = "//fonts.googleapis.com/css?family=PT+Serif:regular,italic,bold,bolditalic";
  font1.rel = "stylesheet";
  font1.type = "text/css";
  h.parentNode.insertBefore(font1, h);

  var font2 = document.createElement("link");
  font2.href = "//fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold,bolditalic";
  font2.rel = "stylesheet";
  font2.type = "text/css";
  h.parentNode.insertBefore(font2, h);

  // any other external CSS

  // CSS files for FancyBox
  var fbcss = document.createElement("link");
  fbcss.href = "/fancybox/source/jquery.fancybox.css?v=2.1.5";
  fbcss.rel = "stylesheet";
  fbcss.type = "text/css";
  fbcss.media = "screen, projection";
  document.body.appendChild(fbcss);
  var fbbtncss = document.createElement("link");
  fbbtncss.href = "/fancybox/source/helpers/jquery.fancybox-buttons.css?v=1.0.5";
  fbbtncss.rel = "stylesheet";
  fbbtncss.type = "text/css";
  fbbtncss.media = "screen, projection";
  document.body.appendChild(fbbtncss);
  var fbthmcss = document.createElement("link");
  fbthmcss.href = "/fancybox/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7";
  fbthmcss.rel = "stylesheet";
  fbthmcss.type = "text/css";
  fbthmcss.media = "screen, projection";
  document.body.appendChild(fbthmcss);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(cb);
else window.addEventListener('load', cb);
</script>
{% endcodeblock %}

### Improve user experience

Google PageSpeed Insights said that my homepage was too *wide* for
mobile devices whose width were 320 px.  Therefore, I've tried
preparing different pictures for windows of different width by
`<picutre>` tags with `<source srcset=...>` inside.  Although this
pure HTML 5 approach is now supported in Google Chrome *only*, I find
this method simple and beautiful.[^pic_elt]  Due to its elegance, I
believe that this feature will soon be implemented in all major
browsers, such as Mozilla Firefox.

{% codeblock Part of pages/posts contents lang:html %}
<picture class="fancybox center" title="Custom search failed">
  <source srcset="/images/big.png" media="(min-width: 880px)" /> 
  <!-- a fallback for browsers that don't support the source tag -->
  <img alt="alt text" src="/images/small.png" />
</picture>
{% endcodeblock %}

The simplest way to avoid getting the message "Optimize images" in a
PageSpeed test is to optimize the images.  [OptiPNG] can be used for
this.  Before compressing the images, I issued the following command
to create a diminished image of width 300 px of the original image.

    $ optipng big.png
    $ convert big.png -resize 300 small.png
    $ optipng small.png
{:.cliUB}

How to enable fancyBox for `<picture>` elements?  I did a bit of
"guided coding" --- I copied Erv Walter's function and changed a few
lines.[^erv]

{% codeblock Part of my "/javascripts/FancyBoxLocal.js" lang:js %}
$(document).ready(function() {
  $('.entry-content').each(function(i){
    var _i = i;
    $(this).find('img.fancybox').each(function(){
      // Erv Walter's function ...
    }

    $(this).find('picture.fancybox').each(function(){
      var picture = $(this);
      var title = picture.attr("title");
      picture.removeClass("fancybox");
      var url = picture.children("source").eq(0).attr("srcset");
      picture.wrap('<a href="'+url+'" class="fancybox" rel="galleryp'+_i+'" />');
      if (title != "") {
	picture.parent().attr("title", title);
      }
    });
  });

  // settings found on fancyBox's homepage ...
});
{% endcodeblock %}

View the file at commit [29d86dd] for a working example.

Lastly, to ensure that the contents *wouldn't* fall outside the
viewport on the screen of mobile devices, I embedded an inline CSS.

{% codeblock lang:html %}
<style>article img {max-width:100%;}</style>
{% endcodeblock %}

Though this *wasn't* good, it enabled me to get rid of the above
message about image optimization in a PageSpeed test.

Lessons learnt
---

### My first way to load JavaScripts from a script

Due to my homework and exams in early December and my *limited
knowledge* on JavaScripts, I *didn't* have time to understand the
section "Defer loading of JavaScript" in
[a suggestion page on Google Developers][goo_dev_js].  On Dec 20,
2014, I found an article on feedthebot useful.[^feedthebot]  I copied
the codeblock and changed `defer.js` to other files.

{% codeblock lang:html %}
<script type="text/javascript">
function downloadJSAtOnload() {
  var element = document.createElement("script");
  element.src = "defer.js";
  document.body.appendChild(element);
}
if (window.addEventListener)
  window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
  window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>
{% endcodeblock %}

In M\$ I.E., one has to use `window.attachEvent` instead of
`window.addEventListener`.  The last line acts as a fallback for old
browsers.

This works for MathJax.  However, for fancyBox, which depends on
jQuery, strange things happened, and I got trapped for two days.  I
had wrote a function which worked in Google Chrome, but when I opened
Mozilla Firefox to test the results, *no* box popped out and I was
taken to a page containing merely the picture.  I was puzzled and made
a Git commit.[^e7e6743]

### My second way to load JavaScripts from a script

I googled "defer jquery fancybox", and found a question on Stack
Overflow.[^so16647050]  I made use of Jamed Donnelly's functions, and
had successfully made a popped up image, which meant that the loading
of JavaScripts for fancyBox had been deferred.

{% codeblock Just before the closing body tag lang:html %}
<script>
(function() {
    function getScript(url,success){
	var script=document.createElement('script');
	script.src=url;
	var head=document.getElementsByTagName('head')[0],
	done=false;
	script.onload=script.onreadystatechange = function(){
	if ( !done && (!this.readyState || this.readyState == 'loaded'
	  || this.readyState == 'complete') ) {
	    done=true;
	    success();
	    script.onload = script.onreadystatechange = null;
	    head.removeChild(script);
	}
	};
	head.appendChild(script);
    }

getScript("jquery-1.8.3.min.js",function(){
    getScript("jquery.fancybox-1.3.4/fancybox/jquery.fancybox-1.3.4.pack.js", function() {});
    getScript("myCustomScript.js", function() {});
});

})();
</script>
{% endcodeblock %}

{% codeblock A separate file "myCustomScript.js" %}
$(document).ready(function(){ 
    $(".example3").fancybox({
	'transitionIn'  : 'none',
	'transitionOut' : 'none'
    });
});
{% endcodeblock %}

Nonetheless, the image title and the close icon were *missing*.

### View loaded resources and the timeline

I had tried using "Network" in the developer toolbar in both Google
Chromium and Mozilla Firefox to view the time taken for loading the
scripts and CSS files.  I contrasted the timelines of working sites
and my failed trials, and then made changes to the above script before
the `</body>` tag.

### Test Javascript functions using the web console

While testing the script in
`source/_includes/custom/after_footer.html`, the scripts often
*failed* to work.  The error console in web browsers spotted out the
missing brackets and other syntax errors.  Moreover, it told me
whether jQuery had been loaded if I typed `typeof jQuery`.

### Access the children of an HTML element with jQuery

While writing the anonymous function in
`/javascripts/FancyBoxLocal.js`, I tried to extract the URL of the
`<source>` element inside a `<picture>` element.  In the web console,
if `typeof jQuery` returns `"function"`,
`$('picture').children('source').length` returns a non-negative
integer.  If the integer returned is positive,
`$('picture').children('source')[0].srcset` returns
`"/images/foo.png"` and `"undefined"` in Google Chromium and Mozilla
Firefox respectively.

I played with the example on W3Schools about the `children()` method
in jQuery.[^w3sch]  After re-writing the code and seeing the result
repeatedly, I've learnt to use the `eq(n)` and `attr(source)` methods
to access the `n`-th element and the `source` attribute.

### Load CSS files from a script

Google Developers has already provided a script for doing
so.[^goo_dev_css]  At first, I *didn't* understand it and I tried
injecting a `<link>` element inside the `downloadJSAtOnload()` method.
Unluckily, this method *failed*.  *Without* `/stylesheets/screen.css`,
the Solarized theme *disappeared*, and was "replaced by a
black-and-white theme".  After that, I re-read Google's page on CSS
delivery optimization, and extracted the script which grabbed external
stylesheets.

{% codeblock lang:html %}
<script>
  var cb = function() {
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = 'small.css';
    var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
  };
  var raf = requestAnimationFrame || mozRequestAnimationFrame ||
      webkitRequestAnimationFrame || msRequestAnimationFrame;
  if (raf) raf(cb);
  else window.addEventListener('load', cb);
</script>
{% endcodeblock %}

From "Network" in the web developer toolbar, in an up-to-date version
of modern browsers, this anonymous function which loads external CSS
files should be executed *before* `script.onload` and `window.onload`.

In addition, unlike Javascripts, I *don't* use something like
`stylesheet.onload`.  Simply put the relative path or URL of the
external CSS files inside the anonymous function will do.

After I grabbed the stylesheets before the external Javascripts
loaded, the missing components of the pop up window were *still*
missing.  It took me half an hour to figure out that `l.rel =
'stylesheet'` *couldn't* be omitted.  I then pushed commit [1d40cea]
to GitHub and claimed that I'd found a way for both Google Chrome and
Mozilla Firefox.

The next day, I tested it with M\$ I.E., and older versions of Google
Chrome and Mozilla Firefox.  In older versions, my configurations had
*failed*, but they worked fine in the recent ones.  For example, the
method of loading external Javascripts in a non-render-blocking manner
as suggested by Google Developers *didn't* work in Mozilla Firefox 14,
which *didn't* support `requestAnimationFrame`.  Though
`mozRequestAnimationFrame` was supported, if they're put together, the
whole thing would collapse.  Since I'm *not* a web
designer/programmer, I *won't* consider fixing this problem since

- the old versions of browsers will be eventually upgraded, and more
    importantly,
- I've other (non-technical) problems to solve.

### Onload and createElement()

I've read a question on Stack Overflow, and understood that even
though a `<script>` element with the `src='/javascripts/foo.js'`
attribute had been created by the `createElement()` function, the
functions defined in the external script `/javascripts/foo.js` could
be *unusable* if one *doesn't* make proper use of `script.onload`.

### A fallback for Google hosted jQuery

---
(Added on AUG 3RD, 2015)

**Unluckily, this failed on mobile devices.**  I was told that I
should have this problem fixed.  Due to the difficulty described
below and the enormous number of mobile device users, *I decided to
remove the part of JavaScript source code which was responsible for
loading a local copy of jQuery.*  This would reduce over 9,600 lines
of code in the `master` branch.

---

In my opinion, this is the *most* difficult part, which has taken me a
*whole* day.

I observed that loading *both* the local and remote copy of jQuery was
*incorrect*.  Since jQuery is relatively *large*, leaving this problem
unsolved is like leaving a black dot on a whiteboard.

One *can't* simply remove the local copy of jQuery since Google is
*blocked* in some regions.[^news]  There're some political reasons
behind.  Unlike Zigang Xiao's blog, I'm *not* going to write any
articles on politics.[^po]  I'll just seek a *technical* solution to
this *political* problem.

This problem is *extremely difficult* for me since I'm *not* a student
of IT, and there's *no* direct solution from the Internet.  Inside and
outside the function triggered by an `onload` event, code *aren't*
executed sequencially, but *in parallel*.  Therefore, if I put `if
(typeof jQuery == 'undefined')` after `getScript(...)`, then even
though the Google hosted jQuery library can be downloaded, the if
statement returns *true*.  Google Chromium and Mozilla Firefox showed
*different* results for the *same* JavaScript.  This increased the
difficulty of the task.

While coming up with a solution, I looked at
`source/_includes/head.html`, and found the following line.

{% codeblock lang:html %}
<script>!window.jQuery && document.write(unescape('%3Cscript
src="./javascripts/libs/jquery.min.js"%3E%3C/script%3E'))</script>
{% endcodeblock %}

*Not* being familiar with JavaScript syntax, I searched for the
meaning of the `unescape()` function and that of the '.' in front of
`/javascripts/...`.  After viewing a question on Stack Overflow, I
decided to create the [pull request #1699][1699] of Octopress.
Luckily, it was accepted and merged into the `master` branch of
Octopress.

After doing some off-topic stuff, I curiously reproduced the error
described in the first subsection of this section, and figured out a
way to fix this error.  During the process, I've learnt the dependence
of difference scripts  Therefore, the correct sequence should be

1. Load `jquery.min.js`.
2. Load `octopress.js` and `/fancybox/source/jquery.fancybox.js`.
3. Load `/fancybox/source/helpers/jquery.fancybox-*.js`.
4. Load `FancyBoxLocal.js`.

For example, `appendChild(octopress)` should be *inside*
`jquery.onload = function() {...}`.

Finally, using "Network" in the web developer toolbar in Google
Chromium, I observed that *before* the `window.onload` event, the
`getScript(...)` method had already got the scripts.  I combined the
two ways, and solved the problem.

---
[^nowheel]:
    I *didn't* use the mousewheel plugin.  If one uses a mouse click
    to get the popped up window, then he/she can also view the
    next/previous picture with a click.

[^pic_elt]:
    See, for example,
    [*Built-in Browser Support for Responsive Images*][pic] by Pearl
    Chen on HTML 5 Rocks, for an introduction to the `<picture>`
    element.

[^erv]:
    See [*Octopress Customizations*][erv] by Erv Walter on ewal.net.

[^feedthebot]:
    [*Defer Loading Javascript*][feedthebot] by Patrick Sexton on
    feedthebot.

[^e7e6743]: See commit [e7e6743] for details.
[^so16647050]:
    See [*How to defer javascript*][so16647050] on Stack Overflow for
    the function.

[^w3sch]:
    The online example is available at
    <http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_children2>

[^goo_dev_css]:
    See [*Optimize CSS delivery*][goo_dev_css] on Google Developers
    for details.

[^news]:
    [*Google Is Blocked In 25 Of The 100 Countries They Offer Products In*][news]
    by MG Siegler on TechCrunch.

[^po]: [*精英主義與投票考試*][po] by Zigang Xiao.

[PageSpeed]: https://developers.google.com/speed/pagespeed/
[MathJax]: http://www.mathjax.org
[fancyBox]: http://fancyapps.com/fancybox/
[jQuery]: http://jquery.com
[Modernizr]: http://modernizr.com
[pic]: http://www.html5rocks.com/en/tutorials/responsive/picture-element/
[OptiPNG]: http://optipng.sourceforge.net/
[erv]: http://www.ewal.net/2012/09/08/octopress-customizations/
[29d86dd]: https://github.com/VincentTam/vincenttam.github.io/commit/29d86dd
[goo_dev_js]: https://developers.google.com/speed/docs/insights/BlockingJS
[feedthebot]: http://www.feedthebot.com/pagespeed/defer-loading-javascript.html
[e7e6743]: https://github.com/VincentTam/vincenttam.github.io/commit/e7e6743
[so16647050]: http://stackoverflow.com/q/16647050
[goo_dev_css]: https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery
[1d40cea]: https://github.com/VincentTam/vincenttam.github.io/commit/1d40cea
[news]: http://techcrunch.com/2010/04/19/google-censorship/
[po]: http://blog.ivansiu.com/blog/2014/10/01/jing-ying-zhu-yi-yu-tou-piao-kao-shi/
[1699]: https://github.com/imathis/octopress/pull/1699/ "Fix the way of loading the local copy of jQuery"
