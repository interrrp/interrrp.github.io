---
title: The Large Small Decisions
description: Be pedantic over the seemingly small and worthless decisions.
createdAt: 2024-05-16
---

When writing code, I spend a concerning amount of time over seemingly small and
worthless decisions. Is it `userId` or `userID`? Should I sort my imports
alphabetically? Or, most importantly, should I add that one ESLint plugin?

I'm writing this article to the other people that may also suffer from being
overly pedantic. More importantly, I am also writing about how you deal with
that part of your brain that leads you to overthink about what some people may
call trivial.

## A bit of philosophy

There comes a point in a
[frameworker](https://johndanielraines.medium.com/be-an-engineer-not-a-frameworker-c58fe28d0c88)'s
life in which they learn about what goes on under the abstractions they've been
blindly using.

The hour-long YouTube tutorials they followed told them to ignore certain things
such as the linter and TypeScript configuration, created as a result of
`npm init` and bloated templates. They continue their frameworking journey not
knowing what purpose those strange files served - for up to years! However,
fortunately, the frameworker will eventually become curious about those weird
JSON and YAML files.

The frameworker googles what a `config.js` is, figuring out linters and maybe
even changing the Next.js configuration a bit. At this point is where they turn
into a decent programmer, aware of the tools they're using and their purpose. As
a consequence of knowing what every little thing does, _this is also the point
where they start worrying about the micro-decisions_.

### Okay, Socrates

What I'm saying by this is that you should be happy. You should be happy that
you worry about the small choices that others just seem to skip, because it
implies that you know your tooling well. That, in turn, is what makes you a
better programmer.

## Happier now, but that doesn't solve the problem

So, now you're looking for a "real" solution that doesn't involve me trying to
be Aristotle... hmm. The truth is, there is no solution.

The only true way to deal with the little pedant in your head is to let it
remember what's best. Is it
[`getUnescoProperties` or `getUNESCOProperties`](https://stackoverflow.com/questions/15526107/acronyms-in-camelcase)?
Head to Stack Overflow, look at the top comments, decide what's best, then let
the pedant remember that choice. The only way to make your pedant shut up is to
have it know what's best like a cache, so you don't have to spend time thinking
and/or researching over a variable name that gets deleted a refactor later
anyway.

## Just have more experience?

Implicitly, yes. I _was_ telling you to accumulate more experience as a
solution. That only comes with benefits, however. Your internal pedant gets more
experience and populates its micro-choice cache.

## Conclusion

Be pedantic. Being worried about the small decisions makes them big, but doing
that makes it less of a problem over time. Remember the best choice when you
finally choose an option. When the time comes and you have to think about a
micro-decision, remember what you did last time.

This _is_ the process of learning.
