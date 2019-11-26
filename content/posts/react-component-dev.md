---
title: "React Component Development"
date: 2019-11-26T09:56:35-06:00
draft: false
---

This week, I paired with Kevin to learn how React was being used to build the front-end for one of 8th Light's clients. After learning how this project was structured, from using React with Typescript, and Storyboard, he gave me this little component to try out and build from an empty React environment.

![Whole component image with checked and unchecked components](/img/whole-component.png)

After going through the basic React tutorial, I had some understanding of how components are structured, pass values to each other, and how to create stateless functions, as well as classes. It definitely helped to have some Javascript background here as React (and Typescript) really take the base ES6 technologies and extends them to this beautiful, component-based app ecosystem that keeps things fast, semantic, and (hopefully) legible by other devs.

## Starting it up

Based on the tutorial, I used `create-react-app` to build the basic structure of the React app. The benefit of this is that I can get to building as quickly as possible without worrying too much about the underlying structure and data handling. At any point in the future however, I can separate the app away from `create-react-app` if I needed to.

`npx create-react-app dl_test_component`

Then, I added some sass so I can write my CSS the way I want to.

`npm install node-sass`

At first, I wrote the code in all basic JS (actually jsx in this context) but I eventually changed over to Typescript. This is the command to install everything I needed to use it.

```shell
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

[Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)

Alternatively, if you want to start with typescript right away, you can skip the above and when creating the project use this instead:
`npx create-react-app my-app --typescript`

As you can see I'm using `npm` to install my packages, but the tutorials also lay out how to use it with yarn too.

When you use typescript, it will require a configuration file `tsconfig.json` but it will create one for you when you start the server.

After navigating to the folder, use this to start the local server.
`npm start`

I opened a separate terminal tab to do any future operations like adding icon packages to it – and what's nice is that the server will reload and handle installs without needing to be manually restarted (in general). But will need a restart potentially when new components are added.

---

## Setting the stage

So looking at the `src` folder, the basic web structure applies here. The index.tsx or index.js file handles the rendering of the entire dom, so you see the following line to render the app.
`ReactDOM.render(<App />, document.getElementById("root"))`

This applies the `App` component to the root element in the HTML.

Within the `App.tsx` file, we see that it has a function that returns a basic structure for the app, which renders the default react application with some text and an svg logo.

I went ahead and removed everything within the `return` function, because this is where my component would go, since I don't need to really render anything else for this project.

---

## Creating the component

To make things easier to understand, I created a folder called `components` within my src folder, and then made two files within `components`, my `TypeIndicator.tsx` component file and `TypeIndicator.scss` style file.

In my TypeIndicator component, I first import React, and my style file.

```jsx
import React from "react";
import "./TypeIndicator.scss";
```

Then, isolating a single item in this component, I focused on an element with a check or "x" icon, followed by a text.

```tsx
interface IndicatorItem {
  label: string;
  checked: boolean;
}

const TypeIndicator: FC<IndicatorItem> = ({ label, checked }) => {
  const icon = checked ? <FiCheck /> : <FiX />;
  const indicatorClass = checked ? "" : "disabled";

  return (
    <div className={"type-indicator " + indicatorClass}>
      {icon}
      {label}
    </div>
  );
};
```

I create an es6 style function called TypeIndicator, which I tell TS that it's a functional component (FC) of type IndicatorItem (which is the `interface` above the function). Then we de-structure the incoming data, grabbing the label, and checked boolean.

The `const icon` is given an icon component based on its state, and the `const indicatorClass` is given a className based on this state as well.

The function returns a styled div with the conditional `indicatorClass` to denote whether it should be greyed out or not, and contains basically only the icon and label. Simple enough – with a little bit of styling, I got a single component working like so:

![Component checked](/img/component-countersign.png)

or when `disabled` is added to the className then:

![Component unchecked](/img/component-countersign-disabled.png)

## Creating the Component Container

Perfect, so now it's all about replicating the component for as many items are in the array that gets passed in. This required a bit of fanangaling, especially just getting the map function to work over the array, but this is the solution that I landed on.

```jsx
interface IndicatorItems {
  arr: Array<IndicatorItem>;
}

const IndicatorContainer: FC<IndicatorItems> = ({ arr }) => {
  return (
    <>
      {arr.map(indicator => (
        <TypeIndicator
          key={indicator.label}
          label={indicator.label}
          checked={indicator.checked}
        />
      ))}
    </>
  );
};
```

Again, I use a functional component, and de-structure an `IndicatorItems` to pull the array out, so we can map over it. The function basically maps over the array, creating an individual `TypeIndicator` item from each iteration, while also introducing a key with the `label` which allows react to know when those specific items have been updated.

The tricky part that I got stuck on is that we have to wrap the entire returned component in a `React.Fragment` which can be shorthanded to an empty open and close HTML tag, as `<>` and `</>`. Without this, the object won't work at all because it returns multiple components (through the `arr.map` function).

## Interfaces

The interface function is specific to typescript, which allows you to define the _shape_ of a your values. This is just a fancy way of templating what values and variable names you're expecting the function to use, and what kind of variable they are, from `bool` to `number`.

[Interfaces · TypeScript](https://www.typescriptlang.org/docs/handbook/interfaces.html)

My interfaces in this particular solution are fairly simple, where the individual component has a `label` and a `checked` status like so:

```tsx
interface IndicatorItem {
  label: string;
  checked: boolean;
}
```

and the container just contains an array of those `IndicatorItem`s.

```jsx
interface IndicatorItems {
  arr: Array<IndicatorItem>;
}
```

In vanilla React, these interfaces are typically shaped by defining Proptypes, which are not necessarily required. By using TS and interfaces, however, your IDE can help you predict the values you'll need to provide to a function, and overall make your errors more verbose. Coming from a Java-based land where everything is strongly typed (for the most part), this was a freaking godsend to me as Javascript overall can be so weakly typed and you can get quickly lost in the sea of unclear functional expectations.

I'm still a bit of a noob at Typescript but I'll keep working on it and hopefully it'll continue to be part of my journey forward.
