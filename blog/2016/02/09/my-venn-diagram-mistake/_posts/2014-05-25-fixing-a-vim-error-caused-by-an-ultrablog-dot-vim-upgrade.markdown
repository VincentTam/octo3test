---
layout: post
title: "Fixing a Vim Error Caused by an UltraBlog.vim Upgrade"
date: 2014-05-25 20:01:52 +0800
comments: true
categories: UltraBlog.vim
---

Yesterday, I upgraded the Vim plugins on my Ubuntu Desktop using
[Vundle][vundle].  Among the upgraded plugins, [Ultrablog.vim][ub] was
the *only* one that didn't run smoothly on *my installed version* of
Vim.

Right after I issued the command `vi` on the terminal, I got the
following error message.

    $ vi
    Error detected while processing /home/owner/.vim/bundle/UltraBlog.vim/plugin/UltraBlog.vim:
    line  253:
    Traceback (most recent call last):
      File "<string>", line 7, in <module>
      File "/home/owner/.vim/bundle/UltraBlog.vim/plugin/ultrablog/commands.py", line 8, in <module>
	from db import *
      File "/home/owner/.vim/bundle/UltraBlog.vim/plugin/ultrablog/db.py", line 181, in <module>
	u.ub_echoerr(msg)
      File "/home/owner/.vim/bundle/UltraBlog.vim/plugin/ultrablog/util.py", line 623, in ub_echoerr
	vim.command(cmd)
    vim.error: Vim(echoerr):Missing key 'xmlrpc_uri' in the settings list of UltraBlog.vim !
    Press ENTER or type command to continue
{:.cliUB}

<!-- more -->

Before entering the standard startup screen, I received another
complaint from the editor.

    Error detected while processing BufEnter Auto commands for "*":
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
    NameError: name '__ub_on_buffer_enter' is not defined
    Press ENTER or type command to continue
{:.cliUB}

I tried opening a file, and was blamed by the program again!

<pre class="cli"><code class="UBMono"><span class="vimErr">"foo.txt" 123L, 456C
Error detected while processing BufEnter Auto commands for "*":
Traceback (most recent call last):
  File "&lt;string&gt;", line 1, in &lt;module&gt;
NameError: name '__ub_on_buffer_enter' is not defined</span>
<span class="vimErrCont">Press ENTER or type command to continue</span>
</code></pre>

I split my window into half by the editor command `:new` and captured
the content of another error message.  I found that it's the same as
the second message.

I moved the cursor across windows, and got similar message, but
repeated a few times.

<pre class="cli"><code class="UBMono"><span class="vimErr">Error detected while processing BufEnter Auto commands for "*":
Traceback (most recent call last):</span>
<span class="vimErrCont">Press ENTER or type command to continue</span>
<span class="vimErr">Error detected while processing BufEnter Auto commands for "*":
  File "&lt;string&gt;", line 1, in &lt;module&gt;</span>
<span class="vimErrCont">Press ENTER or type command to continue</span>
<span class="vimErr">Error detected while processing BufEnter Auto commands for "*":
NameError: name '__ub_on_buffer_enter' is not defined</span>
<span class="vimErrCont">Press ENTER or type command to continue</span>
</code></pre>

I was annoyed by the error, and decided to fix it.  From the alphabets
"ub" in `__ub_on_buffer_enter` in the error messages, I believed that
the recently updated plugin UltraBlog.vim was the cause of my problem.
I searched Google for "vim ultrablog".  To narrow down the search, I
only viewed the web pages which were updated in the past year.  I
found a blog post on the automatic completion of the category of
posts.[^1]  The post was written by Leigh, the creator of
UltraBlog.vim.  There's a code block in the middle, and experienced
Vim users will notice that it's the suggested configurations in one's
own VIMRC.  Comparing the settings for the previous version of
UltraBlog.vim in my VIMRC with his, I realized that I didn't include
the line containing 'xmlrpc_uri'.  I copied the whole line in his code
block to my VIMRC, and restarted Vim again.  Finally, Vim didn't show
me errors anymore.

Looking back, I regret not reading the first error message...

Like Leigh, I've switched from WordPress to Octopress three months
ago.[^2]  His migration motivated me to follow his suit.[^3]  For the
detailed practical advantages of Octopress over WordPress, you may
refer to [my about page][about].

---
[^1]: [*UltraBlog.vim v3.6.1: 文章分類自動補全*][UB3.6]
[UB3.6]: http://0x3f.org/blog/ultrablog-v361-released/
[^2]: [*Migrated to Octopress*][Migrated2Octopress]
[Migrated2Octopress]: http://blogueun.wordpress.com/2014/03/15/migrated-to-octopress/
[^3]: [*遷移到octopress*][Migrated2Octopress2]
[Migrated2Octopress2]: http://0x3f.org/blog/migrate-blog-to-octopress/

[vundle]: https://github.com/gmarik/Vundle.vim
[ub]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
[about]: /about#my-old-blogs
