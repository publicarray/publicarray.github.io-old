---
layout: post
title: "Chalk sample post with all elements"
description: "Have a look at all the predesigned elements you can use in Chalk."
og_image: "workintegratedlearing.png"
tags: [web]
---
Chalk uses the default Jekyll syntax highlighting gem Rouge. It has a customized style for both light and dark theme.
Use the `highlight` tag to use the following code highlighting your preferred language:

{% highlight html %}
<!-- This is a comment -->
<div class="grid">
  <h1>This is a heading</h1>
  <p>
    This is a paragraph text.
  </p>
</div>
{% endhighlight %}

## Headings

Chalk includes 3 headings by default:

## Heading first level
### Heading second level
#### Heading third level

{% highlight markdown %}
## Heading first level
### Heading second level
#### Heading third level
{% endhighlight %}

## Lists

Unordered list example:
* Unordered list item 1
* Unordered list item 2
* Unordered list item 3
* Unordered list item 4

Ordered list example:
1. Ordered list item 1
2. Ordered list item 1
3. Ordered list item 1
4. Ordered list item 1

{% highlight markdown %}
* Unordered list item 1
* Unordered list item 2

1. Order list item 1
2. Order list item 1
{% endhighlight %}

## Quotes

A quote looks like this:

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna.

{% highlight markdown %}
> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna.
{% endhighlight %}

## Media

Images can be added with a default `<img>` tag.
If you wish that an image can be enlarged on click use the image include tag. You can pass 3 variables:
- `path`: Image to show in the blog post.
- `path-detail`: Image to show when enlarging.
- `alt`: Alt text for image in blog post

{% highlight liquid %}
{% raw %}
  {% include image.html path="workintegratedlearing.png" alt="Sample image" %}
{% endraw %}
{% endhighlight %}

Generates:

{% highlight html %}
{% include image.html path="workintegratedlearing.png" alt="Sample image" %}
{% endhighlight %}

{% include image.html path="workintegratedlearing.png" alt="Sample image" %}

Videos can be added and are responsive by default (4x3 by default, 16x9 with extra class).

{% highlight liquid %}
{% raw %}
  {% include youtube.html video="vO7m8Hre72E" %}
{% endraw %}
{% endhighlight %}

Generates:

{% highlight html %}
{% include youtube.html video="vO7m8Hre72E" %}
{% endhighlight %}

{% include youtube.html video="vO7m8Hre72E" %}

Twitter

{% highlight liquid %}
{% raw %}
  {% include twitter.html 
    tweet="vO7m8Hre72E" 
    fallback='Alright <a href="https://twitter.com/nsandihelp">@nsandihelp</a>, this is kinda... stupid <a href="https://t.co/cGQzlwzNjH">https://t.co/cGQzlwzNjH</a> <a href="https://t.co/3LEaTBgrpA">pic.twitter.com/3LEaTBgrpA</a></p>&mdash; Troy Hunt (@troyhunt) <a href="https://twitter.com/troyhunt/status/801002878810718208">November 22, 2016</a>' 
  %}
{% endraw %}
{% endhighlight %}

Generates:

{% highlight html %}
{% include twitter.html tweet="vO7m8Hre72E" fallback='Alright <a href="https://twitter.com/nsandihelp">@nsandihelp</a>, this is kinda... stupid <a href="https://t.co/cGQzlwzNjH">https://t.co/cGQzlwzNjH</a> <a href="https://t.co/3LEaTBgrpA">pic.twitter.com/3LEaTBgrpA</a></p>&mdash; Troy Hunt (@troyhunt) <a href="https://twitter.com/troyhunt/status/801002878810718208">November 22, 2016</a>' %}
{% endhighlight %}

{% include twitter.html tweet="vO7m8Hre72E" fallback='Alright <a href="https://twitter.com/nsandihelp">@nsandihelp</a>, this is kinda... stupid <a href="https://t.co/cGQzlwzNjH">https://t.co/cGQzlwzNjH</a> <a href="https://t.co/3LEaTBgrpA">pic.twitter.com/3LEaTBgrpA</a></p>&mdash; Troy Hunt (@troyhunt) <a href="https://twitter.com/troyhunt/status/801002878810718208">November 22, 2016</a>' %}

