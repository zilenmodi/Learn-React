/*

The @action decorator is used to mark a method as an action. It ensures that the method can modify observables and triggers appropriate reactions when the state changes.

@action.bound decorator is an alternative to @action that automatically binds the this context within the action method to the instance of the class. This eliminates the need to manually bind the this context when passing the action method as a callback.

runInAction(fn) Use this utility to create a temporary action that is immediately invoked. Can be useful in asynchronous processes. 




The flow wrapper is an optional alternative to async / await that makes it easier to work with MobX actions. flow takes a generator function as its only input. Inside the generator, you can chain promises by yielding them (instead of await somePromise you write yield somePromise). The flow mechanism will then make sure the generator either continues or throws when a yielded promise resolves.

So flow is an alternative to async / await that doesn't need any further action wrapping. It can be applied as follows:

Wrap flow around your asynchronous function.
Instead of async use function *.
Instead of await use yield.
The flow + generator function example above shows what this looks like in practice.




Computed values can be used to derive information from other observables. They evaluate lazily, caching their output and only recomputing if one of the underlying observables has changed. If they are not observed by anything, they suspend entirely.


*/

import { reaction, makeObservable, observable, computed, autorun } from "mobx";

class OrderLine {
  price = 0;
  amount = 1;

  constructor(price) {
    makeObservable(this, {
      price: observable,
      amount: observable,
      total: computed,
    });
    this.price = price;
  }

  get total() {
    console.log("Computing...");
    return this.price * this.amount;
  }
}

const order = new OrderLine(0);

const stop = autorun(() => {
  console.log("Total: " + order.total);
});

const disposer = reaction(
  () => order.price,
  (price) => {
    console.log(`price value: ${price}`);
  }
);

console.log(order.total);

order.amount = 5;

order.price = 2;

stop();

order.price = 3;
