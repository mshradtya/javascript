## 3: First-class functions for the novice: definitions and arguments

- JavaScript is a functional language
- functions in JS are first class object / citizens
	- can be assigned to variables
	- can be assigned as properties to other objects
	- can be returned from other function
	- can have dynamic properties attached to them

### 3. 1. What's with the functional difference?

#### 3.1.1 Functions as first-class objects

- functions are basically objects but _invokable_

#### 3.1.2 Callback functions

examples:

1. function calling another function
2. sort() which takes a callback

### 3.2 Fun with functions as objects

examples:

1. storing unique functions in a store
   - inefficient way
   - efficient way
2. memoization
   - example: function to check if prime or not
   - caching - memory vs performance
   - difficulty measuring performance

### 3.3 Defining functions

#### 3.3.1 Function declarations and function expressions

- function declaration. separate existence. Eg: `function helloWorld() {}`
- function expressions. part of an expression. Eg: `var a = function() {}`
  - immediate functions (IIFE). Eg: `(function() {})()`
  - arrow functions. Eg: `() => 'hello'`
- key difference bw the two: _hoisting_ & _naming_

### 3.4 Arguments and function parameters

- a parameter is a variable that we list as part of a function definition.
- an argument is a value that we pass to the function when we invoke it.
- rest parameters enable us to reference the remaining arguments that don’t have matching parameter names.
- default parameters enable us to specify default parameter values that will be used if no value is supplied during function invocation.