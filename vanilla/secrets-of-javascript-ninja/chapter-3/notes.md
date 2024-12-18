## 3: First-class functions for the novice: definitions and arguments

- functional language
- first class object / citizens

### 3. 1. What's with the functional difference?

#### 3.1.1 Functions as first-class objects

- objects but _invokable_

#### 3.1.2 Callback functions

examples:

1. useless function calling another function
2. sort() which takes a callback

### 3.2 Fun with functions as objects

examples:

1. storing unique functions in a store
   - inefficient way
   - efficient way
1. memoization
   - example: function to check if prime or not
   - caching - memory vs performace
   - difficulty measuring performace

### 3.3 Defining functions

#### 3.3.1 Function declarations and function expressions

- function declaration. separate existence. Eg: `function helloWorld() {}`
- function expressions. part of an expression. Eg: `var a = function() {}`
  - immediate functions (IIFE). Eg: `(function() {})()`
  - arrow functions. Eg: `() => 'hello'`
- key difference bw the two: _hoisting_ & _naming_

### 3.4 Arguments and function parameters

- what are parameters vs arguments
- number of parameters vs arguments passed
- rest params
- default params
