---
layout: post
title: "Improve Efficiency of Inner Join"
date: 2016-01-07 18:38:44 +0800
comments: true
categories: SQL
---

Background
---

I search the data on [Stack Exchange Data Explorer][datase].

Problem
---

I want to select columns from two tables and join them to form one
single table.  I choose `INNER JOIN` to avoid seeing null entries in
the result.  The syntax is similar to the following.

{% codeblock Sample SQL Syntax lang:sql %}
SELECT * FROM Table1
INNER JOIN Table2
ON Table1.ID = Table2.ID
WHERE Col1 LIKE 'foo'
{% endcodeblock %}

Unluckily, when the size of `Table1` and `Table2` is large, it takes a
while to get the result.

Solution
---

[This page][src] has two more efficient ways.  Since I search for
recent data, I adopted the third method in [my query][myq].

{% codeblock My Query on Stack Exchange Data Explorer lang:sql %}
DECLARE @TagLike NVARCHAR(25) = ##taglike:string##

SELECT TOP 500 * FROM (SELECT Id AS [Post Link], AnswerCount AS [Ans],
CommentCount AS [Com], CreationDate, Score AS [Scr],
ViewCount AS [Views], OwnerUserId FROM Posts
WHERE AnswerCount = 0 AND Tags LIKE '%' + @TagLike + '%' AND
ClosedDate IS NULL) AS p
INNER JOIN (SELECT Id, LastAccessDate, Reputation AS [Rep] FROM Users
WHERE LastAccessDate >= '2015-12-01') AS u
ON p.OwnerUserId = u.Id
ORDER BY p.Com
{% endcodeblock %}

[datase]: http://data.stackexchange.com
[src]: https://goo.gl/iLGa5Z
[myq]: http://data.stackexchange.com/math/query/416590/view-all-unanswered-questions
