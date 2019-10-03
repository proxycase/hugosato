---
title: "Design Process Part 2"
date: 2019-10-01T13:30:07-05:00
draft: false
---

In the previous post, I wrote about the first two stages in the design process: Discover and Define.  I’ll be diving deeper into the second half of the process, where we take ideas that were distilled through the process, and are made into real designs, and real code.

Now that we’ve turned the Insights into “How might we’s,” there are a list of direct, actionable items to build out in our design program of choice. For this project, we used Sketch. Using existing knowledge of design patterns, as well as some competitive analysis and indirect competitors, we can build out the functions of the website.

### Here they are again:
* How might we help busy people easily book daycare with as little friction as possible?
* How much we ensure that regardless of age and breed, convey that all dogs are welcome?
* How much we help show that owners pets will get plenty of exercise, and socialization needs?
* How might we help reassure owners that their dog is cared for, at any time?
* How might we help owners convey to workers of any considerations, walking needs, medications, etc.
* How might we encourage referrals, and increase visibility of the individual staff members?

From there, we can break down a single HMW, and suggest features. In this way, we end up suggesting features that we are directed at bringing users the most amount of value.

Besides these key features, there are other features that are either necessary by default to a website (eg. navigation) or features that come directly from the client (staff member pages, legal documentation, etc). We list them out here too:

* Navigation
* Login
* Footer
* Legal Documents / Nondisclosure, advert, etc.
* Location Specific Information

## Develop

I began (as Refactoring UI suggests) to start by building features, not the whole page. By breaking down the elements, you can focus on making these parts great, and modular. Ultimately, when building for both mobile, tablet, and desktop, it’s great to have these individual components (as symbols in Sketch) in order to be able to easily adjust positioning and configure repeating elements without doing a ton of repetitive work. This, in conjunction with using the new Sketch Smart Layout feature, helped immensely in getting more work done in less time.

![Mobile Components](/img/MobileComponents.png)

Some components (including an iteration that I chose not to pursue based on fellow designer feedback)

Once these individual elements are built, they can be combined into a page view layout, giving you a holistic view of the entire website and how it might flow together. This process was iterative, so I went back and forth between component view, and page view in order to make sure everything was consistent.

![Holistic View](/img/HolisticView.png)

## Implementation

At this point, I began to start implementing the individual pieces, converting the spacing, text size, and button styles into scss. What really helps is to create a style guide page, which contains your buttons, different text sizes, headers, fonts, and more – in order to build out the individual component classes, and replicate them everywhere on your website.

There aren’t a whole ton of design changes that happen at this stage, but there are a couple, especially if you run up against time constraints (like I did) and some elements require more work (and javascript) than you can tackle in the given time. Ideally, by this time you should have had some user testing in order to work out kinks in the usability before implementing, so you don’t waste any time. Figuring out what doesn’t work after a product launches and making those fixes can be time consuming and costly depending on how well maintained the codebase is, and the scss/html component structure.