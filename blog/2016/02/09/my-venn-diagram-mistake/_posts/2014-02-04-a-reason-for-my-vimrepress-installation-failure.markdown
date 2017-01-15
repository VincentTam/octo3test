---
layout: post
title: "A Reason for My VimRepress Installation Failure"
date: 2014-02-04 14:11:58 +0800
categories: Vim
comments: true
---

In one of my old posts, I mentioned that I had tried using
VimRepress.[^pp]  However, this plugin kept throwing errors like this.

<pre class="cli"><code class="UBMono">Confirm Delete [6]: First Post Using VimRepress? [yes/NO] :yes
<span class="vimErr">Error detected while processing :
Traceback (most recent call last):
File &quot;&lt;string&gt;&quot;, line 1, in &lt;module&gt;
File &quot;/home/owner/.vim/bundle/VimRepress/plugin/vimrepress.py&quot;, line 41, in __check
echoerr(&quot;something wrong: %s&quot; % e)
File &quot;/home/owner/.vim/bundle/VimRepress/plugin/vimrepress.py&quot;, line 47, in &lt;lambda&gt;
echoerr = lambda s: vim.command('echoerr &quot;%s&quot;' % s)
vim.error: Vim(echoerr):something wrong: Vim(let):E461: Illegal variable name: s:user_input</span>
<span class="vimErrCont">Press ENTER or type command to continue</span>
</code></pre>

<!-- more -->

I tried browsing `vimrepress.py` starting from lines 41--50, and using
something like `*`, but I couldn't understand what it was.  As you can
see from the last paragraph of this post, I finally decided to switch
to UltraBlog.vim.

After reading the README of [vim-instant-markdown], I can make a
better *guess* now.  I directly quote Suan's words here.

{% raw %}
{% quote author:"Suan Yeo" url:https://github.com/suan/vim-instant-markdown title:"README of vim-instant-markdown" %}
{% endraw %}
Make sure the ruby gems were installed under your default Ruby (i.e. if you're using RVM, use gem install and NOT sudo gem install as that might cause the gems to be installed under a non-RVM Ruby)
{% raw %}
{% endquote %}
{% endraw %}

Despite having a clue, I *won't* switch back to Blogger since
WordPress.com and UltraBlog.vim work together well on my computer.

Posted via [UltraBlog.vim][end].

---
[^pp]: Refer to [*My First Post Using UltraBlog.vim*][pp] for details.

[pp]: /blog/2014/01/12/my-first-post-using-ultrablog-vim/
[vim-instant-markdown]: https://github.com/suan/vim-instant-markdown
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
