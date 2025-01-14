## 4: Functions for the journeyman: understanding function invocation

### 4.1 Using implicit function parameters

- _arguments_ & _this_ - they are implicit function parameters
- the _this_ represents the function context - the object on which our function is invoked.
- _arguments_ parameter represents all the arguments that are passed in through a function call.

#### 4.1.1 The arguments parameter

- object, not array. it's `array-like`.
- has the `length` property
- aliases function parameters
- strict mode to stop aliasing

#### 4.1.2. The this parameter

- _function context_
- heavily influenced by how function is _invoked_
- eg: if a function is invoked in the global context, the function is basically being called on the global object, as a result the global object `window` becomes the function context.

### 4.2 Invoking functions

- invocation as function. eg: `skulk()`
	- in non-strict mode, the value of `this` is the global window object
	- in strict mode, the value of `this` is `undefined`
- invocation as method. eg: `ninja.skulk()`
	- the value of `this` becomes the object on which the method was called
- invocation as constructor. eg: `new Ninja()`. when a constructor is invoked, a couple of special actions take place
	1. a new empty object is created
	2. this object is passed to the constructor as the `this` parameter, and thus becomes the constructor's function context
	3. the newly constructed object is retuned as the new operator's value
- invocation with apply and call methods
  - why
  - how
  - practical use - callback functions

### 4.3 Fixing the problem of function context

- using arrow functions
	  - arrow functions don't have their own `this` value. 
	  - _they pick up the value of the this parameter at the moment of their creation_
- using the bind method
