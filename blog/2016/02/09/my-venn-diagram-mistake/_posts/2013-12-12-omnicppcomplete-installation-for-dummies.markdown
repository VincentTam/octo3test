---
layout: post
title: OmniCppComplete Installation for Dummies
date: 2013-12-12 01:01:00 +08:00
categories: [C/C++, Vim]
comments: true
---

*Note: In [a Stack Overflow question][so12339415], it is suggested
that [clang_complete] is better.  For its installation, refer to its
[another fan's blog][clang_complete_advoc].*

<!-- more -->

Background
---

[OmniCppComplete] is a great Vim plugin that has the popup menu like
many big IDEs.  [A Youtube video][video] can show the power of
[OmniCppComplete].

Download
---

[OmniCppComplete] requires [ctags].

1.  [OmniCppComplete's GitHub repository][OmniCppComplete] (To avoid
    mixing up of files from different plugins, use a plugin management
    plugin like [pathogen.vim] or [Vundle].)
2.  [Ctags's official homepage][ctags] on SourceForge (The ZIP file
    for M\$ Win \*2\*\*0 is fine.)

For more detailed information on the installation of [ctags], please
refer to my earlier blog post [*Links to Good Posts*][pp].

Problem
---

Reading the [OmniCppComplete]'s documentation only, you won't be able
to understand how to use this plugin, so follow some tutorials, and
the most viewed one should be on [Vim Tips Wiki][vim_tip1608].
Followed its guidance, I got error in typing `std::` in a new CPP
file.  Omni completion told me something like "pattern not match".  I
spent nearly 2 hours to figure out what's wrong, and finally managed
to fully understand the contents of [this blog entry][carl].

Now, I'm going to make *a M\$ Win\* version* of Vim Tips Wiki's
tutorial, using the ideas from Carl.

Solution
---

### Step one

I suppose [OmniCppComplete] and [ctags] are installed properly.

- [OmniCppComplete] does not mix up with other plugins.

    Note: For gVimPortable, do store files under the Data folder, but
    NOT the `$VIMRUNTIME` file.  Otherwise the settings will be lost
    after upgrading gVimPortable.

    {% img fancybox /images/posts/OmniCpp/pathogen.png 'The folder for different plugins are separated (except the plugin management plugin itself).' ['Vim plugins location using pathogen.vim'] %}

- Typing `:h omnicppcomplete` in Vim normal mode gives up the help
    file for [OmniCppComplete].

    {% img /images/posts/OmniCpp/omnicpp.png 'Typing `:h omnicppcomplete` gives you the corresponding help file.' ['Help for OmniCppComplete.txt'] %}

- The folder for [ctags] is in the PATH environment variable.

    Follow [this page][set_path] for setting the PATH variable.
  
    {% img fancybox /images/posts/OmniCpp/ctags.png 800 'Set PATH variable' ['fig1'] %}  
    Note: `C:\ctags58` should be in the `PATH` variable.

### Step two

Download the [modified libstdc++ headers][libstdc] from
[GitHub][git_copy].

### Step three

Unzip the folder and place it under "somewhere meaningful to you".

- My suggestion: `C:\Users\[your-user-name]\.vim`  
    Here you can substitute `[your user name]` with your *real* user
    name on M\$ Win\*.

- Note: In the dialogue (in case you use GUI), *don't* input `tags` at
    the end.  Otherwise, you'll get
    `C:\Users\[your-user-name]\.vim\tags\tags`

### Step four

If things go right, you should have
    `C:\Users\[your-user-name]\.vim\tags`

Go to that directory by typing `cd .vim\tags` in M\$ Win\*'s Command
Prompt, which can be involked by typing `cmd` in the "Start" menu.
(For M\$ Win\* XP, choose "Run" and type "cmd" in the popup dialogue.
If you like choosing from the menu, follow
[the way on the official website][ms_doc].)

At first, a commad prompt should be like this.

{% img /images/posts/OmniCpp/cmd.png 'Command Prompt default starting display' ['fig4'] %}  
The current directory is `C:\Users\Owner`.

{% img /images/posts/OmniCpp/cmd2.png 'Change directory in Win* CMD' ['fig5'] %}  
Change the current directory to `C:\Users\Owner\.vim\tags`.

The contents should be shown by typing `dir` (There're so many files
that I use the `/w` option to save space.)

{% img /images/posts/OmniCpp/dir1.png 'fig6' ['w flag in dir command in Win* CMD'] %}  
The contents are in the right place, so we may proceed.

{% img /images/posts/OmniCpp/ctags1.png 'fig7' ['Ctags in Win* CMD'] %}  
Get a list of [ctags].

To get a list of [ctags], the correct command:

<pre class="cli"><code>&gt;ctags -R --sort=1 --c++-kinds=+p --fields=+iaS --extra=+q --language-force=C++ -f cpp <span class="HLCode">.</span></code></pre>

The one you see on Vim Tips Wiki:

<pre class="cli"><code>&gt;ctags -R --sort=1 --c++-kinds=+p --fields=+iaS --extra=+q --language-force=C++ -f cpp <span class="err">cpp_src</span></code></pre>

### Step five

Then you should have a huge list of [ctags] with the file name cpp.
Not adding the additional tags for [OpenGL], etc, is OK.

### Step six

Finally, adding the lines found in the Vim Tips Wiki into your VIMRC
will do.

Note: If you don't add the additional tags in step 5, then the
following lines should NOT be added.

{% codeblock lang:vim %}
set tags+=~/.vim/tags/gl
set tags+=~/.vim/tags/sdl
set tags+=~/.vim/tags/qt4
{% endcodeblock %}

Testing
---

A picture can illustrate the feature well.  Typing `std::`, you'll get
a popup list.

{% img fancybox /images/posts/OmniCpp/omni.png 'OmniCppComplete in GVim' ['fig8'] %}
 
Incompatibility with clang\_complete
---

Note that [Omnicppcomplete] is *incompatible* with another Vim plugin
called [clang_complete], due to its "unconditional popup of completion
list".  To understand this, the following pictures give a good
interpretation.

In [OmniCppComplete], after typing `std::`, the completion list will
pop up.

However, in [clang_complete], since the information is from the clang
compiler, you need to give the syntax in the right position for the
compiler so as to let the completion list to show up.

{% img fancybox /images/posts/OmniCpp/ClangComplete1.png 'Missing a line' ['missing iostream'] %}  
Missing `#include <iostream>`

{% img fancybox /images/posts/OmniCpp/std-err.png 'Still wrong position of the input' ['wrong place for std::'] %}

{% img fancybox /images/posts/OmniCpp/ClangComplete2.png 'Cannot figure out difference - omnicppcomplete versus clang' ['clang_complete work for correct code'] %}

On [Ubuntu], it's easy to install.  Note that you need `clang-dev` as
well.  For M\$ Win\*, maybe you need to download the source. (I hope
there will be a *compiled version of the compiler*.)

[so12339415]: https://stackoverflow.com/q/12339415 "Can't figure out difference - omnicppcomplete versus clang"
[clang_complete]: https://github.com/Rip-Rip/clang_complete
[clang_complete_advoc]: http://aknow-work.blogspot.hk/2013/04/vim-clangcomplete.html
[OmniCppComplete]: https://github.com/vim-scripts/OmniCppComplete
[video]: http://youtu.be/MQy2rVOf-z0
[ctags]: http://ctags.sourceforge.net/
[pathogen.vim]: https://github.com/tpope/vim-pathogen
[Vundle]: https://github.com/gmarik/vundle
[pp]: http://blogue-un.blogspot.hk/2013/12/links-to-good-posts.html
[vim_tip1608]: http://vim.wikia.com/wiki/C%2B%2B_code_completion
[carl]: http://carl830.pixnet.net/blog/post/67681043-vim-omnicppcomplete%2Bstl-support
[set_path]: http://geekswithblogs.net/renso/archive/2009/10/21/how-to-set-the-windows-path-in-windows-7.aspx
[libstdc]: http://www.vim.org/scripts/script.php?script_id=2358
[git_copy]: https://github.com/vim-scripts/tags-for-std-cpp-STL-streams-...
[ms_doc]: http://windows.microsoft.com/en-hk/windows-vista/open-a-command-prompt-window
[OpenGL]: https://www.opengl.org
[Ubuntu]: http://www.ubuntu.com
