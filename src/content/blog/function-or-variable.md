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

Obviously, you would think the former with `const` declares a variable, right?
Here's the rest:

```js
const accomplish = (task) => {
  task.done = true;
};

function accomplish(task) {
  task.done = true;
}
```

Not cool, man.

## Readability

`const` is for variables, yet some people insist on using it for functions. In
my opinion, its usage is fine for callbacks and such, e.g.:

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

### Separation of Concerns

I believe that there should be a clear separation between keywords declaring
variables and keywords declaring functions.

For people that regularly work with other languages like me, that is an
important point as almost every other language seems to draw the line quite well
(e.g. `let`/`fn` in Rust).

### Noise

There is a lot of noise (`= () => {` compared to just `{`). Why should I train
my eyes to ignore them, when you can use a better method to declare functions?
It makes the code a lot harder to read. This point is especially important in
fairly large files with lots of functions.

## Practicality

### Context Binding

Arrow functions don't have their own `this`, `arguments`, or `super`. In cases
like object methods and event listeners, this can have unintended side effects
when relying on `this` binding from the surrounding context.

### Inflexibility

Arrow functions are immutable in terms of their lexical `this`, meaning that
they can't be re-bound to different contexts.

Using traditional `function` expressions provide more flexibility such as when
you need dynamic `this` behavior for certain patterns like mixins or decorators.

## Conclusion

You should just use `function` to declare your module-level functions. Don't use
ES6 features just for the sake of using them.
