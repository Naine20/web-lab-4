# Lab 04 Notes

## Task 10 - Event Loop Prediction

Code tested:

```js
console.log("1 start");
setTimeout(() => console.log("2 timeout"), 0);
Promise.resolve().then(() => console.log("3 promise"));
console.log("4 end");
```

### Prediction

1. `1 start`
2. `4 end`
3. `3 promise`
4. `2 timeout`

### Explanation

`console.log("1 start")` and `console.log("4 end")` run first because they are synchronous.

The Promise callback is placed in the microtask queue.

The `setTimeout` callback is placed in the task queue.

After the normal synchronous code finishes, JavaScript runs microtasks before timer tasks, so `3 promise` appears before `2 timeout`.
