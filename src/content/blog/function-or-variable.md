---
title: Is This a Function or a Variable?
description: Why I don't like `const` arrow functions.
createdAt: 2024-06-17
---

## Take a look at these

Try to guess which one of these statements declare a function:

```js
const accomplish

function accomplish
```

"But int, you can't possibly be serious! The former obviously declares a
variable because it says `const`; this is basic JavaScript!"

Let me reveal the rest:

```js
const accomplish = (task) => {
  task.done = true;
};

function accomplish(task) {
  task.done = true;
}
```

"That's not fair, `const` was bait! `const` is generally used for variables-"

## You're right

You're right. `const` _is_ for variables, yet some people insist on using it for
everything. In my opinion, its usage is fine for callbacks and such, e.g.:

```tsx
export default function ClickyButton() {
  const [count, setCount] = useState(0);

  // This is fine
  const increment = () => setCount((prev) => prev + 1);

  return <button>I've been clicked {count} times</button>;
}
```

However, when it comes to **module-level functions**, it gets a bit ugly:

```tsx
// Yikes!
const ClickyButton = () => {
  // ...
};
```

Here's the list of things that I don't like about it, and my response to their
common counterarguments:

1. It isn't clear whether `const` defines a function or a variable, especially
  when in large codebases.

  > Just read the next parts, nerd

  I believe that there should be a clear separation between keywords declaring
  variables and keywords declaring functions.

  For people that regularly work with other languages like me, that is an
  important point as almost every other language seems to draw the line quite
  well (e.g. `let`/`fn` in Rust).

2. Unnecessary noise (`=`, `=>`, `;`)

  > Ignore them then?

  Why would I train my eyes to ignore them, when you can use a better method to
  declare functions? It makes the code a tiny bit harder to read.

3. Names not showing up in stack traces

  _(Okay, maybe not this one - Node figured this out already)_

## Conclusion

In conclusion, you should probably just use `function` to declare your
module-level functions. It's easier to read.
