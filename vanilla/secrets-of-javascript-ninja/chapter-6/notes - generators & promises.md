### 6.1 Making our async code elegant with generators and promises

- we need async operations because JS is single-threaded, so a time consuming task will block the thread
- using async, we send the time consuming operations to a relevant API or worker thread, as a result main thread is free to move to next task
- when the async code is done executing, the event loop will send it back to the CPU to handle it 
- the evolution
	- blocking sync code
	- nonblocking async code with callback
		- event loop sends async code to worker / child threads
		- once async code is executed, it's callback function is placed in **callback queue**
		- The **event loop** checks if the **call stack** is empty. If the stack is empty, it takes the first callback from the **callback queue** and pushes it onto the **call stack** for execution.
	- nonblocking async code with generators & promises = `async` & `await`
### 6.2 Working with generator functions

- a generator is a special type of function
- calling a generator doesn't execute the generator function; instead it creates an object called an _iterator_
- _iterator_ object has _next()_ method that when called the generator executes its code until it reaches a yield keyword that produces an intermediary result (one item in the generated sequence of items), and returns a new object that encapsulates that result and tells us whether its work is done.
- As soon as the current value is produced, the generator suspends its execution without blocking and patiently waits for another value request.

- the `for-of` loop is a syntactic sugar for iterating over iterators

- we can delegate to another generator within a generator by using the _yield*_

- using generators:
	-  to generate unique IDs
	- traverse the DOM

- we can send data when first invoking a generator 
- we can also send data _into_ the generator by passing arguments to the _next_ method
- the passed in value is used by the generator as the value of the whole _yield_ expression, in which the generator was currently suspended
- another way to send data to a generator is by throwing an exception to it.

- generators are a side effect of the fact that a generator’s execution context is kept alive if we yield from a generator, and not destroyed as is the case with return values and standard functions.

### 6.3 Working with promises

- created using the built-in `Promise()` constructor, to which we pass a function - called the _executor_ function.
- the executor has two parameters - _resolve_ & _reject_. the executor is called immediately when constructing the Promise object.
- _resolve_ - which we call manually if we want the promise to resolve successfully, and _reject_, which we call if an error occurs.

#### understanding problems with simple callbacks

1. difficult error handling
	- because we cannot use `try-catch` with the callbacks
2. performing sequence of steps is tricky
	- it leads to callback hell / pyramid of doom
3. performing a number of steps in parallel is also tricky

#### diving into promises

Promises are designed to deal with asynchronous actions, so the JavaScript engine always resorts to asynchronous handling, to make the promise behavior predictable. The engine does this by executing the then callbacks after all the code in the current step of the event loop is executed