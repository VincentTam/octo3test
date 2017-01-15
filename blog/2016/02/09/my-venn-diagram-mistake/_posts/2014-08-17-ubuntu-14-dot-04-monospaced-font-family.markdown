---
layout: post
title: "Ubuntu 14.04 Monospaced Font Family"
date: 2014-08-17 16:00:48 +0800
comments: true
categories: Linux
---

Background
---

Last Wednesday, I upgraded Ubuntu from 12.04 LTS to 14.04 LTS.[^1]

Problem
---

As we can see from the second figure in the post in footnote 1, in
Chromium, the font used for displaying the source code of a website is
*not* monospaced.

![HTML source code viewed in Chromium][src_code]

<!-- more -->

Discussion
---

This is *not* the problem of Chromium.  I can also see this problem in
Firefox as well as GNOME Terminal.

- Firefox

    ![HTML source code viewed in Firefox][src_code2]

- GNOME Terminal

    1. Uncheck the first checkbox, whose label means "use the system
    fixed width font", between "Default" and "Monospace 12".
    2. The letters in the terminal will look ugly.

    ![A screenshot of GNOME Terminal][GNOMETer]

When I wrote the post in footnote 1, I searched "ubuntu 14.04
monospace", and I *couldn't* find anything that helped me solve this
problem.

Today, I limit the search to "past year", and discover a post about
font configurations on Linux Desktop.  It is the continuation of
another post, which contains two code blocks for testing "monospaced"
and "Courier New" font families.[^2]

{% codeblock The HTML source code for testing "monospaced" font family lang:html http://www.cnblogs.com/youxia/p/linux004.html %}
<span style="font-family: monospace; font-size: 12pt;">
#include &lt;stdio.h&gt;<br />
int main(){<br />
&nbsp;&nbsp;&nbsp;&nbsp;return 0;//很顯然這是為了測試等寬字體<br />
}
</span>
{% endcodeblock %}

{% codeblock The HTML source code for testing "Courier New" font family lang:html http://www.cnblogs.com/youxia/p/linux004.html %}
<span style="font-family: courier new; font-size: 12pt;">
#include &lt;stdio.h&gt;<br />
int main(){<br />
&nbsp;&nbsp;&nbsp;&nbsp;return 0;//觀察下面的代碼了解monospace是否等於Courier New<br />
}
</span>
{% endcodeblock %}

I inspect the elements in those code blocks, and realize that it is
the problem of the monospaced font family in Ubuntu 14.04.

Solution
---

I find `fc-match` at a site, but I *can't* find the site.  Running the
command, I can identify the culprit.

<pre class="cli"><code class="UBMono">$ fc-match monospace
<span class="err">DroidSansFallbackFull.ttf: "Droid Sans" "Regular"</span>
</code></pre>

Googling "ubuntu 14.04 monospace droidsansfallback", I find a post
about the way to improve the display of Chinese characters.[^3]  Following
*part* of the method, I inserted the word `Mono` after `Droid Sans` in
the first `<string>` tag under the `<edit>` tag in the `<match>` tag
which contains `<string>monospace</string>` in
`/etc/fonts/conf.avail/69-language-selector-zh-hk.conf`.

{% gist 5fe406cf6bfcd6a6179b %}

The last part of Steve Chang's post about using Ubuntu 14.04 LTS
elegantly advices user to execute `sudo fc-cache -v` to update the
font cache.[^4]  Actually, *without* the `-v` flag, the command still
works.

    # fc-cache
    /usr/share/fonts: skipping, existing cache is valid: 0 fonts, 8 dirs
    /usr/share/fonts/X11: skipping, existing cache is valid: 0 fonts, 4 dirs
    /usr/share/fonts/X11/Type1: skipping, existing cache is valid: 82 fonts, 0 dirs
    /usr/share/fonts/X11/encodings: skipping, existing cache is valid: 0 fonts, 1 di
    rs
    /usr/share/fonts/X11/encodings/large: skipping, existing cache is valid: 0 fonts
    , 0 dirs
    /usr/share/fonts/X11/misc: skipping, existing cache is valid: 59 fonts, 0 dirs
    /usr/share/fonts/X11/util: skipping, existing cache is valid: 0 fonts, 0 dirs
    /usr/share/fonts/cmap: skipping, existing cache is valid: 0 fonts, 5 dirs
    /usr/share/fonts/cmap/adobe-cns1: skipping, existing cache is valid: 0 fonts, 0 
    dirs
    /usr/share/fonts/cmap/adobe-gb1: skipping, existing cache is valid: 0 fonts, 0 d
    irs
    /usr/share/fonts/cmap/adobe-japan1: skipping, existing cache is valid: 0 fonts, 
    0 dirs
    /usr/share/fonts/cmap/adobe-japan2: skipping, existing cache is valid: 0 fonts, 
    0 dirs
    /usr/share/fonts/cmap/adobe-korea1: skipping, existing cache is valid: 0 fonts, 
    0 dirs
    /usr/share/fonts/eot: skipping, existing cache is valid: 0 fonts, 1 dirs
    /usr/share/fonts/eot/font-awesome: skipping, existing cache is valid: 0 fonts, 0
    dirs
    /usr/share/fonts/opentype: skipping, existing cache is valid: 0 fonts, 11 dirs
    /usr/share/fonts/opentype/cabin: skipping, existing cache is valid: 8 fonts, 0 d
    irs
    /usr/share/fonts/opentype/font-awesome: skipping, existing cache is valid: 1 fon
    ts, 0 dirs
    /usr/share/fonts/opentype/freefont: skipping, existing cache is valid: 12 fonts,
    0 dirs
    /usr/share/fonts/opentype/ipaexfont-gothic: skipping, existing cache is valid: 1
    fonts, 0 dirs
    /usr/share/fonts/opentype/ipaexfont-mincho: skipping, existing cache is valid: 1
    fonts, 0 dirs
    /usr/share/fonts/opentype/ipafont-gothic: skipping, existing cache is valid: 2 f
    onts, 0 dirs
    /usr/share/fonts/opentype/ipafont-mincho: skipping, existing cache is valid: 2 f
    onts, 0 dirs
    /usr/share/fonts/opentype/linux-libertine: skipping, existing cache is valid: 13
    fonts, 0 dirs
    /usr/share/fonts/opentype/lobster: skipping, existing cache is valid: 1 fonts, 0
    dirs
    /usr/share/fonts/opentype/lobstertwo: skipping, existing cache is valid: 4 fonts
    , 0 dirs
    /usr/share/fonts/opentype/stix: skipping, existing cache is valid: 29 fonts, 0 d
    irs
    /usr/share/fonts/svg: skipping, existing cache is valid: 0 fonts, 1 dirs
    /usr/share/fonts/svg/font-awesome: skipping, existing cache is valid: 0 fonts, 0
    dirs
    /usr/share/fonts/truetype: skipping, existing cache is valid: 2 fonts, 42 dirs
    /usr/share/fonts/truetype/abyssinica: skipping, existing cache is valid: 1 fonts
    , 0 dirs
    /usr/share/fonts/truetype/adf: skipping, existing cache is valid: 28 fonts, 0 di
    rs
    /usr/share/fonts/truetype/arphic: skipping, existing cache is valid: 8 fonts, 0 
    dirs
    /usr/share/fonts/truetype/artemisia: skipping, existing cache is valid: 4 fonts,
    0 dirs
    /usr/share/fonts/truetype/asana-math: skipping, existing cache is valid: 1 fonts
    , 0 dirs
    /usr/share/fonts/truetype/comfortaa: skipping, existing cache is valid: 3 fonts,
    0 dirs
    /usr/share/fonts/truetype/complutum: skipping, existing cache is valid: 1 fonts,
    0 dirs
    /usr/share/fonts/truetype/dejavu: skipping, existing cache is valid: 21 fonts, 0
    dirs
    /usr/share/fonts/truetype/didot: skipping, existing cache is valid: 4 fonts, 0 d
    irs
    /usr/share/fonts/truetype/droid: skipping, existing cache is valid: 18 fonts, 0 
    dirs
    /usr/share/fonts/truetype/font-awesome: skipping, existing cache is valid: 1 fon
    ts, 0 dirs
    /usr/share/fonts/truetype/freefont: skipping, existing cache is valid: 12 fonts,
    0 dirs
    /usr/share/fonts/truetype/gentium: skipping, existing cache is valid: 4 fonts, 0
    dirs
    /usr/share/fonts/truetype/gentium-basic: skipping, existing cache is valid: 8 fo
    nts, 0 dirs
    /usr/share/fonts/truetype/horai-umefont: skipping, existing cache is valid: 18 f
    onts, 0 dirs
    /usr/share/fonts/truetype/inconsolata: skipping, existing cache is valid: 1 font
    s, 0 dirs
    /usr/share/fonts/truetype/junicode: skipping, existing cache is valid: 4 fonts, 
    0 dirs
    /usr/share/fonts/truetype/kacst: skipping, existing cache is valid: 15 fonts, 0 
    dirs
    /usr/share/fonts/truetype/kacst-one: skipping, existing cache is valid: 2 fonts,
    0 dirs
    /usr/share/fonts/truetype/lao: skipping, existing cache is valid: 1 fonts, 0 dir
    s
    /usr/share/fonts/truetype/lato: skipping, existing cache is valid: 10 fonts, 0 d
    irs
    /usr/share/fonts/truetype/liberation: skipping, existing cache is valid: 16 font
    s, 0 dirs
    /usr/share/fonts/truetype/msttcorefonts: skipping, existing cache is valid: 60 f
    onts, 0 dirs
    /usr/share/fonts/truetype/nanum: skipping, existing cache is valid: 6 fonts, 0 d
    irs
    /usr/share/fonts/truetype/neohellenic: skipping, existing cache is valid: 4 font
    s, 0 dirs
    /usr/share/fonts/truetype/olga: skipping, existing cache is valid: 1 fonts, 0 di
    rs
    /usr/share/fonts/truetype/openoffice: skipping, existing cache is valid: 1 fonts
    , 0 dirs
    /usr/share/fonts/truetype/padauk: skipping, existing cache is valid: 4 fonts, 0 
    dirs
    /usr/share/fonts/truetype/sinhala: skipping, existing cache is valid: 1 fonts, 0
    dirs
    /usr/share/fonts/truetype/solomos: skipping, existing cache is valid: 1 fonts, 0
    dirs
    /usr/share/fonts/truetype/takao-gothic: skipping, existing cache is valid: 1 fon
    ts, 0 dirs
    /usr/share/fonts/truetype/tibetan-machine: skipping, existing cache is valid: 1 
    fonts, 0 dirs
    /usr/share/fonts/truetype/tlwg: skipping, existing cache is valid: 54 fonts, 0 d
    irs
    /usr/share/fonts/truetype/ttf-dejavu: skipping, existing cache is valid: 21 font
    s, 0 dirs
    /usr/share/fonts/truetype/ttf-indic-fonts-core: skipping, existing cache is vali
    d: 17 fonts, 0 dirs
    /usr/share/fonts/truetype/ttf-khmeros-core: skipping, existing cache is valid: 2
    fonts, 0 dirs
    /usr/share/fonts/truetype/ttf-liberation: skipping, existing cache is valid: 16 
    fonts, 0 dirs
    /usr/share/fonts/truetype/ttf-marvosym: skipping, existing cache is valid: 1 fon
    ts, 0 dirs
    /usr/share/fonts/truetype/ttf-punjabi-fonts: skipping, existing cache is valid: 
    2 fonts, 0 dirs
    /usr/share/fonts/truetype/ubuntu-font-family: skipping, existing cache is valid:
    13 fonts, 0 dirs
    /usr/share/fonts/truetype/unfonts-core: skipping, existing cache is valid: 12 fo
    nts, 0 dirs
    /usr/share/fonts/truetype/wqy: skipping, existing cache is valid: 5 fonts, 0 dir
    s
    /usr/share/fonts/type1: skipping, existing cache is valid: 0 fonts, 3 dirs
    /usr/share/fonts/type1/gsfonts: skipping, existing cache is valid: 35 fonts, 0 d
    irs
    /usr/share/fonts/type1/mathml: skipping, existing cache is valid: 1 fonts, 0 dir
    s
    /usr/share/fonts/type1/texlive-fonts-recommended: skipping, existing cache is va
    lid: 47 fonts, 0 dirs
    /usr/share/fonts/woff: skipping, existing cache is valid: 0 fonts, 1 dirs
    /usr/share/fonts/woff/font-awesome: skipping, existing cache is valid: 1 fonts, 
    0 dirs
    /usr/local/share/fonts: skipping, existing cache is valid: 0 fonts, 0 dirs
    /home/owner/.local/share/fonts: skipping, no such directory
    /home/owner/.fonts: skipping, existing cache is valid: 29 fonts, 0 dirs
    /usr/share/texmf/fonts/opentype/public/lm: skipping, existing cache is valid: 72
    fonts, 0 dirs
    /usr/share/texmf/fonts/opentype/public/lm-math: skipping, existing cache is vali
    d: 1 fonts, 0 dirs
    /usr/share/texmf/fonts/opentype/public/tex-gyre: skipping, existing cache is val
    id: 33 fonts, 0 dirs
    /usr/share/texmf/fonts/opentype/public/tex-gyre-math: skipping, existing cache i
    s valid: 2 fonts, 0 dirs
    /usr/share/fonts: caching, new cache contents: 0 fonts, 8 dirs
    /usr/local/share/fonts: caching, new cache contents: 0 fonts, 0 dirs
    /home/owner/.local/share/fonts: skipping, no such directory
    /home/owner/.fonts: caching, new cache contents: 29 fonts, 0 dirs
    /usr/share/texmf/fonts/opentype/public/lm: caching, new cache contents: 72 fonts
    , 0 dirs
    /usr/share/texmf/fonts/opentype/public/lm-math: caching, new cache contents: 1 f
    onts, 0 dirs
    /usr/share/texmf/fonts/opentype/public/tex-gyre: caching, new cache contents: 33
    fonts, 0 dirs
    /usr/share/texmf/fonts/opentype/public/tex-gyre-math: caching, new cache content
    s: 2 fonts, 0 dirs
    /var/cache/fontconfig: cleaning cache directory
    /home/owner/.cache/fontconfig: cleaning cache directory
    /home/owner/.fontconfig: cleaning cache directory
    fc-cache: succeeded
{:.cliUB}

Now, `fc-match` returns me a fixed-width font.

<pre class="cli"><code class="UBMono">$ fc-match monospace
DroidSans<span class="UBHLCode">Mono</span>.ttf: "Droid Sans <span class="UBHLCode">Mono</span>" "Regular"
</code></pre>


The following screenshots show that the above configurations can
really fix the problem.

- Chromium

    ![HTML source code viewed in Chromium again][src_code3]

- Firefox

    ![HTML source code viewed in Firefox again][src_code4]

---
[^1]: Refer to [*Upgraded Ubuntu*][pp] for details.
[^2]: Refer to [the post][fontfamily] for details.
[^3]: Refer to [the post][sol1] for details.
[^4]:
    Chang, S.  (Jun 23, 2014).  *如何優雅的使用Ubuntu 14.04 LTS*.
    Retrieved from <https://emitvoice.github.io/2014/06/diy-ubuntu/>

[pp]: /blog/2014/08/13/upgraded-ubuntu/
[src_code]: /images/posts/UbuntuDistUpgrade2/src-code.png
[src_code2]: /images/posts/Ubuntu1404Mono/FFViewSrc.png
[GNOMETer]: /images/posts/Ubuntu1404Mono/GnomeTerminal.png
[fontfamily]: http://www.cnblogs.com/youxia/p/linux004.html
[src_code3]: /images/posts/Ubuntu1404Mono/ChromeViewSrc2.png
[src_code4]: /images/posts/Ubuntu1404Mono/FFViewSrc2.png
[sol1]: http://goo.gl/tKCOA1 "修改ubuntu 14.04 中文版的默認中文字體"
