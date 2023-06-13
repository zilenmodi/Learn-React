import {
  makeObservable,
  observable,
  computed,
  action,
  flow,
  makeAutoObservable,
  autorun,
} from "mobx";

// class Doubler {
//   value;

//   constructor(value) {
//     makeObservable(this, {
//       value: observable,
//       double: computed,
//       increment: action,
//       fetch: flow,
//     });
//     this.value = value;
//   }

//   get double() {
//     return this.value * 2;
//   }

//   increment() {
//     this.value++;
//   }

//   *fetch() {
//     const response = yield fetch("/api/value");
//     this.value = response.json();
//   }
// }

// class Doubler {
//   value;

//   constructor(value) {
//     makeAutoObservable(this);
//     this.value = value;
//   }

//   get double() {
//     return this.value * 2;
//   }

//   increment() {
//     this.value++;
//   }

//   *fetch() {
//     const response = yield fetch("/api/value");
//     this.value = response.json();
//   }
// }

// const todosById = observable({
//   "TODO-123": {
//     title: "find a decent task management system",
//     done: false,
//   },
// });

// todosById["TODO-456"] = {
//   title: "close all tickets older than two weeks",
//   done: true,
// };

// const tags = observable(["high prio", "medium prio", "low prio"]);
// tags.push("prio: for fun");

// autorun(() => {
//   Object.keys(todosById).map((key) => {
//     console.log(todosById[key].title);
//   });
// });

/*

primitives and class instances are never converted to observables.


observable (proxied) versus makeObservable (unproxied)
The primary difference between make(Auto)Observable and observable is that the first one modifies the object you are passing in as first argument, while observable creates a clone that is made observable.

The second difference is that observable creates a Proxy object, to be able to trap future property additions in case you use the object as a dynamic lookup map. If the object you want to make observable has a regular structure where all members are known up-front, we recommend to use makeObservable as non proxied objects are a little faster, and they are easier to inspect in the debugger and console.log.

Because of that, make(Auto)Observable is the recommended API to use in factory functions. Note that it is possible to pass { proxy: false } as an option to observable to get a non proxied clone.

*/
