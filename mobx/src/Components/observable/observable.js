import { Observable, from, switchMap, map } from "rxjs";

// 1. Observable is lazy push of multiple collection
// const foo = new Observable((subscriber) => {
//   console.log("Hello");
//   subscriber.next(42); //send data to subcriber
// });

// foo.subscribe((x) => {
//   console.log(x); //get value from observable
// });
// foo.subscribe((y) => {
//   console.log(y);
// });

// What is the difference between an Observable and a function? Observables can "return" multiple values over time, something which functions cannot. You can't do this.

// 2. Return multiple
// const foo = new Observable((subscriber) => {
//   console.log("Hello");
//   subscriber.next(42);
//   subscriber.next(100); // "return" another value
//   subscriber.next(200); // "return" yet another
// });

// console.log("before");
// foo.subscribe((x) => {
//   console.log(x);
// });
// console.log("after");

// 3. But you can also "return" values asynchronously:
// const foo = new Observable((subscriber) => {
//   console.log("Hello");
//   subscriber.next(42);
//   subscriber.next(100);
//   subscriber.next(200);
//   setTimeout(() => {
//     subscriber.next(300); // happens asynchronously
//   }, 1000);
// });

// console.log("before");
// foo.subscribe((x) => {
//   console.log(x);
// });
// console.log("after");

/*

Core Observable concerns:

Creating Observables
Subscribing to Observables
Executing the Observable
Disposing Observables

*/

// 1.The Observable constructor takes one argument: the subscribe function.

// const observable = new Observable(function subscribe(subscriber) {
//   const id = setInterval(() => {
//     subscriber.next("hi");
//   }, 1000);
// });

// 2.The Observable observable in the example can be subscribed to, like this:
// observable.subscribe((x) => console.log(x));

// Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to.

/*

There are three types of values an Observable Execution can deliver:

"Next" notification: sends a value such as a Number, a String, an Object, etc.
"Error" notification: sends a JavaScript Error or exception.
"Complete" notification: does not send a value.

In an Observable Execution, zero to infinite Next notifications may be delivered. If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.

*/

// const observable = new Observable(function subscribe(subscriber) {
//   try {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
//   } catch (err) {
//     subscriber.error(err); // delivers an error if it caught one
//   }
// });

/*

Disposing Observable Executions:

Because Observable Executions may be infinite, and it's common for an Observer to want to abort execution in finite time, we need an API for canceling an execution. Since each execution is exclusive to one Observer only, once the Observer is done receiving values, it has to have a way to stop the execution, in order to avoid wasting computation power or memory resources.

*/

// const observable = from([10, 20, 30]);
// const subscription = observable.subscribe((x) => console.log(x));
// // Later:
// subscription.unsubscribe();

// <-------------------------------->

// Observer: An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete.

// const observer = {
//   next: (x) => console.log("Observer got a next value: " + x),
//   error: (err) => console.error("Observer got an error: " + err),
//   complete: () => console.log("Observer got a complete notification"),
// };

// observable.subscribe(observer);

// <-------------------------------------->

/*

What are operators?
-> Operators are functions. There are two kinds of operators:

Pipeable Operators are the kind that can be piped to Observables using the syntax observableInstance.pipe(operator) or, more commonly, observableInstance.pipe(operatorFactory()). Operator factory functions include, filter(...), and mergeMap(...).

Creation Operators are the other kind of operator, which can be called as standalone functions to create a new Observable. For example: of(1, 2, 3) creates an observable that will emit 1, 2, and 3, one right after another. Creation operators will be discussed in more detail in a later section.

*/

// import { of, map } from "rxjs";

// of(1, 2, 3)
//   .pipe(map((x) => x * x))
//   .subscribe((v) => console.log(`value: ${v}`));

// Each time operator call it have three state -> next,error and complete

//<-----------1. ajax() ------------>

// import { ajax } from "rxjs/ajax";
// import { map, catchError, of } from "rxjs";

// const obs$ = ajax("https://api.github.com/users?per_page=5").pipe(
//   map((userResponse) => console.log("users: ", userResponse)),
//   catchError((error) => {
//     console.log("error: ", error);
//     return of(error);
//   })
// );

// obs$.subscribe({
//   next: (value) => console.log(value),
//   error: (err) => console.log(err),
// });

// import { of } from "rxjs";
// import { switchMap } from "rxjs/operators";

// let text = of("Hello guys, Welcome To", "Zilen");

// let case1 = text.pipe(switchMap((value) => of(value + " JavaTpoint!")));
// case1.subscribe((value) => {
//   console.log(value);
// });

// import { of, mergeMap, interval, take, map } from "rxjs";

// const letters = of("a", "b", "c");
// const result = letters.pipe(
//   switchMap((x) =>
//     interval(1000)
//       .pipe(take(3))
//       .pipe(map((i) => x + i))
//   )
// );

// result.subscribe((x) => console.log(x));
