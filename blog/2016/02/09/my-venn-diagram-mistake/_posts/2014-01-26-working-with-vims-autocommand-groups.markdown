---
layout: post
title: "Working with Vim's Autocommand Groups"
date: 2014-01-26 02:07:02 +0800
categories: Vim
comments: true
---

Before including the autocommand group, I'd write about the reason of
using it.

In my post titled [*Links to Good Posts*][pp], I've included some
custom autocompletion keyboard mappings for the automatic completion
of `{}`, `[]` and `()` blocks in my VIMRC file.

Last Thursday, I extended them to blocks enclosed by single or double
quotes.

{% codeblock lang:vim %}
inoremap " ""<++><Left><Left><Left><Left><Left>
inoremap "" "
inoremap ' ''<++><Left><Left><Left><Left><Left>
inoremap '' '
{% endcodeblock %}

[Vim-Snippets] has saved me a lot of time while writing blogs in
[Vim]. With Vim-snippets and [Vim-surround], the following question is
*not* so useful.

**How can Vim do the same type of job for angled block *for HTML files
only*?**

<!-- more -->

It is possible that you can find the `<` character in $\rm \LaTeX$
source files which contains an inequality. In this case, we *don't*
want the `>` character to be Automatically inserted to the right-hand
side of the `<` character. Therefore, we need to enable this
completion *only for the files with the right extension name(s)*.

From some web pages that include some autocommands that deal with some
specific type(s) of files, one can easily learn what to do, instead of
reading the long Reference Manual. The events needed are `BufNewFile`
and `BufRead`.

{% codeblock lang:vim %}
aug specialCompletion
au BufNewFile,BufRead *.htm,*.html inoremap < <<Left><Right>><++><Left><Left><Left><Left><Left>
au BufNewFile,BufRead *.htm,*.html inoremap << <
au BufNewFile,BufRead *.tex set spell
au BufLeave *.tex set nospell
aug END
{% endcodeblock %}

At line 2, I initially tried using a whitespace character to separate
the two extension names. After that, I tried to edit an HTML file with
the command `:e testing.html`, but the autocompletion didn't work. For
the command `:e testing.htm`, Vim threw me an error. It took me a
short while to figure out that commas should be used instead of
whitespaces. I know that the problem can be beautifully solved by
using regular expressions, but I'm *not* sure if `.htm[l]` is correct,
and I lack time to test it. I'd like to insert an angled block with
empty content, but after I inserted the string `<>` into my VIMRC
file, the syntax highlighter of Vim told me that Vim perceived the
empty angled block as the surrounding parts of a literal string which
represents a keystroke.  To solve this problem, I inserted the literal
string that represents a `<Left>` key followed by a `<Right>` key
inside the originally empty angled block `<>`. This is what you can
see at line 87. With the aid of the syntax highlighter of Vim, the new
autocommand has "revealed its colour" in my VIMRC, indicating the
success of this change.

Despite the uselessness of this autocommand, I thought I had found out
a way to switch Vim's spell check on for $\rm \LaTeX$ source files.
However, moved to a buffer for $\rm \LaTeX$ source files to another
buffer for an HTML file, I discovered that the `spell` option is
*still* on, which is *not* desired for editing an HTML file.
Fortunately, I succeeded in finding the correct autocommand
event—BufLeave.

P.S. While writing HTML code in Vim, if you need to include the `<`
character, you can record the encoded string of this character into a
register. (say, `l`, which stands for "**l**ess than") To use the
register, type `<C-r>` in the insert mode first. Then input the name
of the register. (a lowercase alphabet) In addition, I use the `t`
register for inserting a hyperlink which opens the target in a new
tabbed page in an HTML file.


---
(Last edited on FEB 3, 2014)

It seems that what I need is the `Filetype` event.

{% codeblock lang:vim %}
aug specialCompletion
au Filetype html inoremap < <<Left><Right>><++><Left><Left><Left><Left><Left>
au Filetype html inoremap << <
au Filetype tex setlocal spell
aug END
{% endcodeblock %}

---
(Added on DEC 13, 2014)

These custom mappings will interfere with those of
[$\rm \LaTeX$-Suite][LaTeX-Suite] if one typed `:so foo.tex` in a
buffer in which an HTML file is opened.  Now, I have
[improved my mappings][np].

---

Posted via [UltraBlog.vim][end].

[pp]: /blog/2013/12/11/links-to-good-posts/
[Vim-Snippets]: http://github.com/honza/vim-Snippets
[Vim]: http://www.vim.org
[Vim-surround]: http://github.com/tpope/vim-surround
[LaTeX-Suite]: http://vim-latex.sourceforge.net
[np]: /blog/2014/12/13/my-improved-custom-autocompletion-mappings-in-vim/ "My Improved Custom Autocompletion Mappings in Vim"
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
