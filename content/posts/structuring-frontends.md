---
title: "Simple tools for structuring understandable front-ends"
date: 2020-01-27T19:59:39-06:00
draft: false
---

**You either love or hate CSS.**

Probably because along with HTML, these languages seem to force you to enact poor development habits. _You know better_ than to repeat yourself, but when you have four different components that share the same four css traits, there's no way to reduce repetition, so you say you'll "refactor it later" and it goes in your growing heap of tech debt.

**Isn't there a better way?**

Well yes – preprocessors like Sass and Less help reduce the overall complexity of the code, and keep things DRY. But sometimes you don't have a choice when you're dealing with legacy code, so we'll discuss both situations. In this article, I've outlined a number of simple and advanced techniques around styling which can help you build a maintainable frontend.

First, let's discuss basics that can be applied regardless of whether you use raw html/css, preprocessors (like sass and pug), or a more component-based framework like React or Vue.

## Use semantic HTML naming

`div` and `span` are the intended to be the last element containers you should use **after** you've considered the available alternatives. Is this the `<main>` content of the page or a `<section>` of it? Are we making a component that is `<aside>` that main content or is it a `<nav>` component?

Using the right HTML tag not only increases maintainability, but it's also important for accessibility. Assistive tech, like screen readers have a much easier time understanding what's going on and users are able to skip ahead to the important parts when there's proper naming applied to your html structure.

Take a look at the [Mozilla HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for a well-organized view of all the existing HTML elements. You might be surprised to find what's available to you.

For example, [do you know what the difference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong) between bolding some text using `<b>` and `<strong>` is?

If you're not convinced that accessibility is a priority, know that [research shows](https://www.w3.org/WAI/perspective-videos/) that accessibility helps everyone. It's well known in the UX field that there's no such thing as a "normal" person, and it's dangerous to assume that everyone else is like you. Given the gender and ethnic trends of our field, it shouldn't be surprising to understand why that's important to consider.

## Use better CSS names!

I'll admit, this one can be a little challenging – especially if you have a shared css style document across many pages. Using better CSS names requires the ability to view a website from a more macro view, and understanding the role of the component in relation to its context. Of course, if you're using React, this is less of a concern since it generates unique CSS IDs to avoid conflicts, but for maintainability's sake let's take a look at BEM, which stands for Block-Element-Modifier.

### BEM Naming

The BEM naming scheme is pretty popular for its clear, distinct system for defining a selector. Essentially, a `block` defines a parent, be that a container or a thematic definition of a section of html. The `element` is a particular piece of that block. Therefore, we separate the block from the element with a double underscore: `block__element`. Take a look at the following:

```html
<div class="enrollment">
  <h3 class="enrollment__header">Enroll!</h3>
  <button class="enrollment__button">Enroll Now</button>
</div>
```

Say for instance this enrollment component appears somewhere else in the website, and you need it to be a smaller version that fits in the sidebar. In that case, we add modifiers, which are instead separated by a double dash `block--modifier` or `block__element--modifier`.

```html
<div class="enrollment--sidebar">
  <h3 class="enrollment__header--sidebar">Enroll!</h3>
  <button class="enrollment__button--sidebar">Enroll Now</button>
</div>
```

### Dividing up your CSS into their roles

The first major thing you can do is to "separate your concerns" by looking at the different things that CSS can do for your style. There are a couple of structuring methodologies that I looked into – OOCSS, ITCSS, Atomic CSS, BEM, and SMACSS. Between these, the concept is fairly similar:

Separating what the CSS does either to different files, or different types of selectors. Consistency is key in which system you use, but we're specifically looking at ITCSS (Inverted Triangle) here for the way in which it organizes files based on their specificity. Broadest items at the top like tokens, functions, and mixins, all the way down to the `!important` (when unavoidable) at the bottom.

- **Settings** – Preprocessor tokens, variables, fonts, color definitions, etc.
- **Tools** – Globally used mixins and functions.
- **Generic** – Normalize or resets that set the baseline state for the css
- **Elements** – Styling bare HTML elements, like `html`, `a`, `p`, etc.
- **Objects** – Class-based selectors that define undecorated design patterns. eg. A "media object" which is an image on the left, header and paragraph on the right. Or, a triptych where three photos are always viewed side-by-side.
- **Components** – The bulk of the css is found here. Define individual components in their own css file for search-ability and maintainability.
- **Utilities** – Anything that needs to be overridden, like helper classes that get attached to elements that need to be hidden (display: none !important)

Keep in mind, in this system, we're almost never using ID selectors except for special javascript functions. A little bit of structure can go a long way and for larger projects, this can help scale a website much easier than a single folder containing all of your styling.

### Use namespacing

Once you have a structure, apply a namespace (like .o- or .c-) to apply css styling in your html that is easily traced back to its category. The categories that use namespaces are:

- Objects – `.o-object-name`
- Components - `.c-component-name`
- Utility - `.u-utility-name`

If you're not using a preprocessor, or have a project that's never going to get super large, you can still these namespaces too. Maybe you only need to have a folder for `generic`, `elements` and `components` in your particular use-case. Use what makes sense for your situation.

## SOLID principles applied to SCSS

Let's get a bit more advanced here with the principles applied to our css. Here were just talking about SCSS because using a preprocessor is truly the best way to create a scalable system.

Buy introducing variables, mixins, functions, and more, we can now apply common programming paradigms, beyond a good naming scheme and folder organization.

---

### Single responsibility principle

SRP is an OO programming concept that states that a module, class, or function should have one specific responsibility to your program and be entirely encapsulated by that module, class, or function. Applied to SCSS, that means that our class selectors are written to do a very particular thing, and when we write our HTML, we can now **compose** our css classes together because they are small, specific, and modular.

Here's an example of scss that doesn't follow SRP:

```css
<a class="did-you-know" > Did you know?</a > .did-you-know {
  display: block;
  padding: 20 10px;
  margin: 15px auto;
  font-weight: 600;
  font-size: 2em;
  border-radius: 3px;
}
```

Object Oriented CSS, or OOCSS as defined by Nicole Sullivan, writes CSS by separating what she calls "Structure" and "Skin." Applying this separation (and ITCSS namespacing) looks like this:

```css
<a class="o-island c-did-you-know">Did you know?</a>

// structure, defined by an object selector
.o-island {
  display: block;
  padding: 20 10px;
  margin: 15px auto;
}

// skin, defined by the component selector
.c-did-you-know {
  font-weight: 600;
  font-size: 2em;
  border-radius: 3px;
}
```

Example based off Harry Roberts: [The single responsibility principle applied to CSS – CSS Wizardry – Web Performance Optimisation](https://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)

---

### Open/Closed Principle

Classes, Modules and Functions should be open for extension, but closed for modification. In CSS, things need to be changed all the time because we tweak the components until they match the designed specs. But consider the following css:

```css
h1 {
  color: $color-black;
  font-size: $font-size-32;
  font-weight: $font-weight-bold;
  line-height: $line-height-heading;
}
```

What happens when you need an h1 for a particular new feature? Following Open/Closed, we should avoid modifying the defined h1 class here, and instead augment/extend the class by adding our own:

```css
<h1 class="new-header" > The new header</h1 > .new-header {
  color: $color-secondary;
}
```

We do this all the time in CSS, of course – the language is designed to work as a cascading system. By following SRP we should be able to keep our css simple and open/closed allows us to **mix** our selectors together.

---

### Liskov Substitution Principle

LSP states that given a parent S, and child C, if C is a subtype of S, then we should be able to substitute S with C without altering the desirable properties of the program. This is mostly relevant if you use the `@extend` feature of scss, like in this example:

```css
<div class="error" > Danger,
Will Robinson!</div > <div class="error--serious" > Danger,
Will Robinson!</div > .error {
  border: 1px #f00;
  background-color: f00;
}

.error--serious {
  @extend .parent-class;

  border-width: 3px;
  background-color: f00;
}
```

If a pill object uses `.error`, it should be able to use `.error--extra-serious` without changing the inherent structure of the layout. Keep in mind that @extend compiles differently than mixins, which you can read about here: [Sass: @extend](https://sass-lang.com/documentation/at-rules/extend)

---

### Interface Segregation Principle

ISP states that no client should be forced to depend on methods it does not use. This one is a bit of a stretch to apply to CSS, but I found one possible analogy to an "interface," which is the **placeholder selector.**

As the name suggests, the placeholder selector doesn't target a class directly. Rather, they have to be used by another class to "exist" and will not compile if they are not used.

Here is an example:

```scss
%button {
	padding: 3em;
	border-radius: 1em;
}

%background-secondary {
	color.scale($color-secondary, $lightness: 30%);
	// lightens the color by 30%
}

// then we combine them here
.btn {
	@extend %button;
	@extend %background-secondary;
}
```

There are a number of benefits and also trade-offs to doing placeholder selectors, namely that:

- Placeholder selectors don't "print" (aka compile to the final style.css file) if they aren't used, meaning that if you don't end up using them, they won't junk up your final product with "dead" code.
- Placeholder selectors can't compute stuff for you by passing in variables like mixins.
- By default, use mixins when possible, and if you aren't sure you're going to use the selector, use a placeholder.
- Placeholder selectors compile into their own multi-selector of all of the selectors that use it. Therefore creating a semantic association between the things that use that selector – which can be an undesirable effect in your compiled css.

Take a look at how mixins compile vs placeholder selectors:

```scss
// using mixins imports the style into the target css
.card {
  width: 100% // @include third-to-full becomes:
    @media $tablet-up {
    width: 33%;
  }
}

// using placeholders creates a semantic association between the selectors that use it by creating a multi-selector.
.card,
.side-bar,
.table-of-contents {
  width: 100%;

  @media $tablet-up {
    width: 33%;
  }
}
```

In the case for this media selector, loosely following the Interface Segregation Principle, we should aim to use the mixin, not the placeholder selector, as to not couple the `card`, `side-bar` and `table-of-contents` together in the stylesheet.

---

### Dependency Inversion Principle

1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend upon details. Details should depend upon abstractions.

The concept here is the act of decoupling modules from each other, reducing the dependence of one thing on another. In our front-end, our parent containers shouldn't care about what is inside of it, as long as it doesn't break its layout.

This also means the parent should be robust enough to handle changes from the child – often by using a flexbox or grid system to grow and shrink as needed, in the dimensions it's allowed to grow, and reflowing the components within to maintain the "correctness" of the design system.

---

In the end, it's all about writing really good code, in a smart and structured way so that we can easily read it, maintain it, and even pass it off to future front-end developers. I'd love to hear what you think about these and whether I hit the mark, or missed something.

Sass and Less can do a lot. So can react styled-components and other ways of working on the front-end. But with that power comes the responsibility of good programming paradigms. Even just a couple of these principles can help you build faster, and scale the project easily when the time comes.

And the time is coming.
