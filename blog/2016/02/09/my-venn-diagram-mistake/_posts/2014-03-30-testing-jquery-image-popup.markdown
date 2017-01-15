---
layout: post
title: "Testing jQuery Image Popup"
date: 2014-03-30 01:50:50 +0800
comments: true
categories: [Octopress, web technologies]
---

What's below is a small picture.  The words inside the screenshot
*can't* be displayed.  Users may right-click on the picture and select
"View Image", if there's a script that enables a magnified image to
show up right after a user has clicked on the image, it'll be *more
convenient* for the user.

{% img fancybox /images/posts/GitStatusOfMyOctopressFolder/GitStatus.png 'My Big Image' ['fig1'] %}

I tried following [Clapper's guide][official_guide], but as I generate
the site using `rake`, I got two errors. The first one was about CSS,
while the second one was about one of the two required Ruby gems.
(Namely, [mini_magick][mini_magick] and [Erubis][Erubis].)

<!-- more -->

For the first error, I got something like `Undefined mixin
'centered'`, and so I googled `octopress "Undefined mixin
'centered'"`.  Using this query string, no match was returned.
Instead, Google performed a similar search using a query string
*without the double quotes*.  Among the search results, I found an
article also written by Clapper.[^toc]  I've known that I also need to
download `sass/custom/_mixins.scss`
[from his GitHub repo][mixins_src].

For the second error, I've realised that I forgot to include those
gems in `Gemfile`, because I lacked knowledge in Ruby, and the guide
didn't mention that.  In fact, adding the following two lines into
`Gemfile` solved the problem.

    gem 'mini_magick'
    gem 'erubis'

<del>I don't know why.  The plugin doesn't work, but</del> I can get
jQuery working here.  The following script from Clapper doesn't work
for me.

{% codeblock jQuery on the Google CDN lang:html http://goo.gl/hOF4mR %}
<script type="text/javascript">
  // Revert jQuery's '$' alias, to avoid clashes with ender.js. NOTE:
  // Use
  // jQuery(...), instead of $(...) from here on.
  jQuery.noConflict();
</script>
{% endcodeblock %}

The `noConflict` method disabled my button for hiding the sidebar on
the right hand side.  <del>Anyways, I gave up trying this
plugin.</del>  Before trying <del>it again</del> more things, I think
I should have more knowledge in jQuery first.

To get things work, I played some *dirty and little* tricks on
`plugins/img_popup.html.erb`.  Since some features of Octopress's
codeblock are *not* working[^no_start_num], I just manually include
part of the code.

{% codeblock My adaptations of the plugin lang:js+erb http://goo.gl/53fIEZ %}
$(document).ready(function() {
  $("#image-dialog-<%= id %>").hide();
  $("#image-dialog-<%= id %>").dialog({
    autoOpen:  false,
    modal:     true,
    draggable: false,
    minWidth:  <%= full_width + 40 %>,
    minHeight: <%= full_height + 40 %>,
    <% if title -%>
    title:     "<%= title %>",
    <% end -%>
    show:      'scale',
    hide:      'scale'
  });

  $("#image-<%= id %>").click(function() {
    $("#image-dialog-<%= id %>").dialog('open');
  });

});
{% endcodeblock %}

What I've actually done in the above code block is to replace `jQuery`
with `$`.  At that time, if I ran `rake generate`, Octopress let me
pass.  However, when I locally previewed the result, clicking on the
picture *couldn't* trigger a popup window showing a larger picture.

I tried comparing the generated HTML source code of my site and that
of Clapper's site unproductively.  I decided to give up, and wrote a
paragraph on this.  Then I removed the related files and sections of
code.  Since I was running `rake preview`, I pressed `<F5>` and
expected to see a *static* picture.  I was surprised to see *two*
pictures.  The lower one was a static picture that I had seen for
numerous times during this test.  The uppper one is smaller, and as I
clicked on it, a popup window showed up.  This result amazed me.  As a
result, I decided to grab back the files from Clapper's GitHub repo,
and studied his Sass settings.

I re-worked the whole thing again, and tried adapting Clapper's Sass
rules to mine, but I *couldn't* manage to create the popup window
again.  Then I tried to reduce the complexity of the relations of the
SCSS files by reducing the amount of files.  I appended the following
lines of code to `sass/screen.scss`. (You may refer to
[my original file][orig_screen_scss].)

{% codeblock My *temporary* `sass/screen.scss` lang:scss %}
@import "compass";
@include global-reset;

@import "custom/colors";
@import "custom/fonts";
@import "custom/layout";
@import "base";
@import "partials";
@import "plugins/**/*";
@import "custom/styles";
/* I appended the following lines. */
@import "custom/mixins";

.caption {
    font-style: italic;
    font-size: 90% !important;
    text-align: center;
    @include centered(100%);
}

div.imgpopup {
    border: 1px solid $base2;
    @include rounded-border(10px);
    @include centered(60%);
    margin: 10px;
    text-align: center;
    .caption {
	margin: 0 !important;
    }
}

.screen {
    display: none;
}

.illustration {
        @include centered(100%);
}
{% endcodeblock %}

I did something strange: *while `rake preview` was running*, in my
`sass/screen.scss`, I commented the line `@import custom/mixins`.  One
would expect I got error due to the line `@include centered(100%)`.
Although the Solarized theme was gone, the image popup window was
*back*.  Without changing other lines of code, I repeated the process
for a few times, and discovered that if `@import custom/mixins` was
*gone*, then the popup window was *back*.  It was important for me
*not to stop the `rake preview` command*. Otherwise, the command `rake
generate` would *fail* me.  I wondered how these two lines could
coexist.  I finally noticed that the `screen` class was *hidden* due
to `display: none;`!  I commented that line and imported
`sass/custom/_mixins.scss`, then the two images are *back*!

This time, in order to find out useful information such as the class
name and the id of relevant HTML elements, I used Firefox to quickly
inspect the code.  Finally, I found out that for pictures that
*couldn't* trigger a popup window, it was inside a `<div>` container
of classes `illustration` and `print`, and there's *another* image in
*another* `<div>` container of classes `imgpopup` and `screen`.
However, it didn't show up because of the line `display: none;` inside
the `screen` class.  Looking at Clapper's Sass settings again on his
GitHub repo, I eventually have a clue on the two SCSS code blocks in
Clapper's blog post about his Octopress image popup plugin.

The *true* reason for my failure in creating the image popup window at
the beginning is on line 20 of the code block below: it should be
`print` instead of `screen` since it's a user's custom Sass rule for
the display on the web browser. (i.e. *screen*), and we want to *hide*
the static picture, which is for printing.

{% codeblock Correct `sass/custom/_screen.scss` lang:scss http://goo.gl/Vw52BS %}
.caption {
    font-style: italic;
    font-size: 80% !important;
    text-align: center;
    @include centered(100%);
}

div.imgpopup {
    border: 1px solid #cccccc;
    @include rounded-border(10px);
    margin: 10px;
    @include centered(80%);
    text-align: center;

    .caption {
	margin: 0 !important;
    }
}

.print { // It should be *print*, instead of *screen*.
    display: none;
}
{% endcodeblock %}

In Clapper's guide, the SCSS code block below the above one should be
included in `sass/custom/_print.scss`.  Then, a new file
`sass/print.scss` is created.

{% codeblock `sass/screen.scss` lang:scss %}
@import "custom/print";
{% endcodeblock %}

----

[^toc]: <http://goo.gl/hOF4mR>
[^no_start_num]: <http://goo.gl/o5IeWk>

[official_guide]: http://goo.gl/5qCaj
[mixins_src]: http://goo.gl/qvYPRI
[mini_magick]: http://goo.gl/qeN28
[Erubis]: http://goo.gl/0oZy6
[jquery_noconflict]: http://goo.gl/hOF4mR
[orig_screen_scss]: http://goo.gl/BNqlL7
