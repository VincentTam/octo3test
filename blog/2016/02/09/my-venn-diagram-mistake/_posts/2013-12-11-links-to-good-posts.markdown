---
layout: post
title: Links to Good Posts
date: 2013-12-11 19:03:00 +08:00
categories: Vim
comments: true
---

Taglist installation
---

[Taglist] is a popular [Vim] plugin and it requires [Ctags].  c9s has
given [a detailed description of the installation of Ctags][c9s].
I've found out that putting the whole `ctags58` folder under the `C`
drive and adding it to the `PATH` environment variable will do.  You
don't need to copy `ctags.exe` under the `C` drive or `$VIMRUNTIME`.

TheGeekStuff has [a web page][thegeekstuff] which described numerous
powerful functions of [Taglist].

Some VIMRC settings
---

I've learnt something about [Vim] keyboard mappings by reading
[Le's post on customized VIMRC settings][le_vimrc].  Using this
knowledge, I can do something that I couldn't do last month.

Automatic completion of unclosed braces/brackets
---

Unmatched brackets/braces are the cause of a host of syntax errors in
source code.  Some novices probably spend hours to find it out, and
then say something that their high school teachers will never approve.
[Tips 630 in Vim Tips Wiki][vim_tips630] contains a simple solution
that enable users to get the job done.  However, I'm not accustomed to
its differences with Vim-$\rm \LaTeX$, so I decided to add the
following lines of code into my VIMRC file:

{% codeblock lang:vim %}
{% raw %}
inoremap (      ()<++><Left><Left><Left><Left><Left>
inoremap (<CR>  (<CR>)<Esc>O
inoremap ((     (
inoremap ()     ()<++><Left><Left><Left><Left><Left>
inoremap [      []<++><Left><Left><Left><Left><Left>
inoremap [<CR>  [<CR>]<Esc>O
inoremap [[     [
inoremap []     []<++><Left><Left><Left><Left><Left>
inoremap {      {}<++><Left><Left><Left><Left><Left>
inoremap {<CR>  {<CR>}<Esc>O
inoremap {{     {
inoremap {}     {}<++><Left><Left><Left><Left><Left>
{% endraw %}
{% endcodeblock %}

After the user types `<C-j>`, the cursor will jump to the position of
the placeholder `<++>` and the whole placeholder will disappear, just
like $\\rm \\LaTeX$-Suite.

---
(Added on DEC 13, 2014)

These custom mappings will interfere with those of
[$\rm \LaTeX$-Suite][LaTeX-Suite] if one typed `:so foo.tex` in a
buffer in which an HTML file is opened.  Now, I have
[improved my mappings][np].

---

New keyboard shortcuts of my GVim
---

Finally, I decided to use `<F3>` and `<F12>` in normal mode for
toggling [NERDTree] and [Taglist] respectively.


{% codeblock lang:vim %}
nnoremap <F3>   :NERDTreeToggle
nnoremap <F12>  :TlistToggle
{% endcodeblock %}

[Vim]: http://www.vim.org
[Taglist]: http://github.com/vim-scripts/taglist.vim
[Ctags]: http://ctags.sourceforge.net/ "Exuberant Ctags"
[c9s]: http://c9s.blogspot.hk/2007/07/setting-up-ctags-gvim-in-windows.html
[thegeekstuff]: http://goo.gl/BG2lh "Ctags and Taglist: Convert Vim Editor to Beautiful Source Code Browser for Any Programming Language"
[le_vimrc]: http://alexanderle.com/blog/2012/my-vimrc.html
[vim_tips630]: http://vim.wikia.com/wiki/Automatically_append_closing_characters
[LaTeX-Suite]: http://vim-latex.sourceforge.net
[np]: /blog/2014/12/13/my-improved-custom-autocompletion-mappings-in-vim/ "My Improved Custom Autocompletion Mappings in Vim"
[NERDTree]: https://github.com/scrooloose/nerdtree
