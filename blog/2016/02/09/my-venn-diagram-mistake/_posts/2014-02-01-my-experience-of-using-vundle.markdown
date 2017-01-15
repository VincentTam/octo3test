---
layout: post
title: My Experience of Using Vundle
date: 2014-02-01 12:17:52 +0800
categories: Vim
comments: true
---

Three months ago, I gave [Vundle] a try, and it's *much* more
convenient than [pathogen.vim].  With
[Zaadi's VIMRC configuration][zaadi], Vundle can be set up within
several minutes.

I installed [FuzzyFinder] for opening files in other directories
without leaving Vim.  However, during the installation of the plugin,
I carelessly forgot to download [L9] library first.  Therefore, I put
it into `$MYVIMRC`.

{% codeblock lang:vim %}
Bundle 'L9' " FuzzyFinder dependency
Bundle 'FuzzyFinder'
{% endcodeblock %}

Then, I got the following error message.

<pre class="cli"><code class="UBMono"><span class="vimErr">$ vi
Error detected while processing /home/owner/.vimrc:
line   28:
E116: Invalid arguments for function vundle#config#bundle
line   30:
E116: Invalid arguments for function vundle#config#bundle
line   31:
E116: Invalid arguments for function vundle#config#bundle
line   32:
E116: Invalid arguments for function vundle#config#bundle
line   33:
E116: Invalid arguments for function vundle#config#bundle
line   39:
E116: Invalid arguments for function vundle#config#bundle
Error detected while processing /home/owner/.vim/bundle/FuzzyFinder/plugin/fuf.vim:
line   13:
***** L9 library must be installed! *****</span>
<span class="vimErrCont">Press ENTER or type command to continue</span>
</code></pre>

`:BundleList` doesn't have L9, but `~/.vim/bundle` has the folder
`L9`.  The cause of the problem is the comment on the right of the
`Bundle 'foo'` command.

Posted via [UltraBlog.vim][end].

[Vundle]: https://github.com/gmarik/vundle
[pathogen.vim]: https://github.com/tpope/vim-pathogen
[zaadi]: http://www.erikzaadi.com/2012/03/19/auto-installing-vundle-from-your-vimrc/ "Auto Installing Vundle From Your Vimrc"
[FuzzyFinder]: https://github.com/vim-scripts/FuzzyFinder
[L9]: https://github.com/vim-scripts/L9
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
