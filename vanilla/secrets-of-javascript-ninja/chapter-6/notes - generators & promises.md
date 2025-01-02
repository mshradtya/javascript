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
	- nonblocking async code with generators & promises
### 6.2 Working with generator functions

- a generator is a special type of function
- calling a generator doesn't execute the generator function; instead it creates an object called an _iterator_
- _iterator_ object has _next()_ method that when called the generator executes its code until it reaches a yield keyword that produces an intermediary result (one item in the generated sequence of items), and returns a new object that encapsulates that result and tells us whether its work is done.
- As soon as the current value is produced, the generator suspends its execution without blocking and patiently waits for another value request.

- the `for-of` loop is a syntactic sugar for iterating over iterators

- we can delegate to another generator within a generator by using the _yield*_

