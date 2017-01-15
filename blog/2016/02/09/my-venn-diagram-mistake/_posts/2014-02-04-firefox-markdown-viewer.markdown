---
layout: post
title: Firefox's Markdown Viewer
date: 2014-02-04 17:10:36 +0800
categories: [web technologies]
comments: true
---

This morning, I've found a Firefox Add-on called
[Markdown Viewer][addon].  As its name suggests, it's a Firefox plugin
that enables users to view Markdown documents.  The screenshot
provided on the home page of the add-on illustrates that it works on
M\$ Win\*.  How about GNU/Linux? I clicked the button and installed
the plugin.  After that, I used `:restart` in Vimperator to see what
happened if I used Firefox to view a local Markdown file with
extension name `.md`.

It turned out that nothing happened! With Lai's review titled *Work on
Linux*, I figured out what to do.  After looking at his suggested code
for `vi ~/.mozilla/firefox/*default/mimeTypes.rdf`, I really tested it
and it worked.  Critical readers will then ask about the way to
include multiple file extensions.

Browsing the code with `#` in the RDF file helps.  Here's what my
results.

{% codeblock lang:xml %}
<RDF:Description RDF:about="urn:mimetype:application/vnd.ms-excel"
NC:value="application/vnd.ms-excel"
NC:editable="true"
NC:description="Microsoft Excel Worksheet">
<NC:fileExtensions>xls</NC:fileExtensions>
<NC:fileExtensions>xlb</NC:fileExtensions>
<NC:fileExtensions>xlt</NC:fileExtensions>
<NC:handlerProp RDF:resource="urn:mimetype:handler:application/vnd.ms-excel"/>
</RDF:Description>
{% endcodeblock %}

According to [a question on Super User][q249436], we use *more than
one* extension name for a Markdown file.  However, a GNU/Linux user
should *never* use `.md`.

Finally, combining Lai's and Cas's posts, I've come up with
[a Gist][mygist].

Posted via [UltraBlog.vim][end].

[addon]: https://addons.mozilla.org/en-US/firefox/addon/markdown-viewer/
[q249436]: https://superuser.com/questions/249436/file-extension-for-markdown-files
[mygist]: https://gist.github.com/VincentTam/8800268
[end]: http://0x3f.org/blog/ultrablog-as-an-ultimate-vim-blogging-plugin/
