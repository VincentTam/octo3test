---
layout: post
title: "Notifying Search Engines of New Sitemaps"
date: 2014-06-01 23:47:48 +0800
comments: true
categories: Octopress
---

After viewing [Sam Kuo's article on eavatar.com][tut1], I changed my
`Rakefile` according to the instructions there.  However, I was unsure
where the source code should be added.  Thus, I read
[Larry Nung's working example][larrynung_rakefile], and knew that it
should immediately follow line 29 of the file.  However, I updated
Octopress's source code recently.[^1]  Therefore, the file looked
*different* from Nung's one—in my own version of the file, I saw the
following lines of code which caused me to think twice before really
modifying the file.  (Click "Commit history" to see the highlighted
section of code.)

```ruby Part of my `Rakefile` at commit 27d0510 https://github.com/VincentTam/vincenttam.github.io/blob/27d05105f4a82c8512ad6c8233fe7a70dc373e60/Rakefile#L30-33 Commit history
if (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
  puts '## Set the codepage to 65001 for Windows machines'
  `chcp 65001`
end
```
Finally, I decided to add the code for ping services *behind* the
above section of code.

---
[^1]: Commit [27d0510]
[27d0510]: https://github.com/VincentTam/vincenttam.github.io/commit/27d0510

[tut1]: http://blog.eavatar.com/post/2013/06/octopress-ping-search-engines/
[larrynung_rakefile]: https://github.com/larrynung/larrynung.github.io/blob/de3c947/Rakefile
