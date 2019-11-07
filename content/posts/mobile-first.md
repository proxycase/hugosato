---
title: "The Responsive Web + Mobile First"
date: 2019-11-06T16:54:50-06:00
draft: true
---

Making things responsive on the web is nothing new. Theoretically, even the earliest webpages can be "responsive" especially if they're just containers of text. But then we started to compartmentalize sections of content, introduced sidebars, and navigation bars that filled up the entire top row, all designed to work optimally, on your desktop or laptop computer.

Enter the smartphone (and some experimental "dumbphones"), where we now have hundreds (if not thousands) of potentially different screen sizes, not to mention internet speeds, browser compatibilities, and various technological complications. Designing and developing for the web is more complicated than ever.

## It started with the `float`
The idea was, if you float everything in one direction, all of your boxes would align to that direction, fill up a row, and then you'd use `clear` to start a new row if it didn't fit your screen width. This allows you to see the content as long as you were willing to scroll down. Using `float` and `clear` `width`, and `max-width`, you could still potentially build any mobile-friendly website today. But there are easier options now.

But thankfully, we have some major new technologies available in HTML and CSS today, with `flex` and `grid`. Admittedly, `grid` is the one I'm less familiar with, but it introduces a ton of layout power. Often, grid and flex are used together in unison to offer the most amount of flexibility and power to any web designer today.

## Going Mobile First
The basic gist of mobile-first is that as a web developer, you take the content you have and lay it out for the mobile device at the smallest (or most common) size. Make that work well, and if you're using responsive layouts, add breakpoints in your code that adjust the layout when screens are larger than a basic tablet, then again when screens are about desktop width. This makes sense when you consider the vast majority of users who are using a phone to view your website, and that this makes sure that your content is viewable, comfortably, at any screen size.

As a designer who started off in the age of desktop screen-sizes, this can be a little difficult to get used to, but I discovered another hidden benefit to this approach: content strategy.

## Mobile-first content strategy
We've all heard that content should convey the most amount of meaning with the least amount of words. Be succinct. But to put that in practice can be a bit difficult, especially when you have a lot to say. Considering a mobile-first approach can help force you to think about what are the most impactful words you can use to convey everything about your brand without forcing your users to read through paragraphs of text. 

## Legibility
Type looks different on different screens, and also at different distances from the eye. Like the difference between mastering music for headphones vs speakers, responsive web has to consider how to scale and adjust kerning for different sizes to maintain and potentially enhance readability. With a smaller screen, often held at different distances from the face, it's good to increase the size of the text in contrast to the desktop. At the same time, that means less words fit horizontally on the page – so there's a certain limit to this approach.

An approach that I take with this is to follow some readability standards, which for me means 9-12 words per line. Too narrow of a text and there are just too many line-breaks to focus on a sentence, while too wide can lead to eye tiredness and overall difficulty in keeping focus on the line. So, to maintain this on mobile, I scale my text until I get that ideal range of words-per-line, and also implement a max-width on desktop, to prevent the text from getting too wide. Plus, your viewers will appreciate a bit of white space to rest their eyes.

## Trade-offs
There are some obvious trade-offs to designing and developing mobile-first. Because of a lack of space, you unfortunately lose a lot of potentially creative space to present interesting content, particularly if you have a video or image that you want to show alongside your content. Second, if you're designing something like a dashboard and need your user to have access to a ton of different controls, you just don't have enough space to do it all. Some website application (like Webflow, or some web games) just restrict use to desktop only, because it just doesn't make sense to try and work with these tools on mobile.