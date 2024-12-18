## 5: Functions for the master: closures and scopes

### 5.1 Understanding closures

- safety bubble

### 5.2 Putting closures to work

- closures for private variables
- closures with callback functions

### 5.3 Tracking code execution with execution contexts

- execution context
- only one global execution context
- new function execution context created on each function invocation
- execution context stack

### 5.4 Keeping track of identifiers with lexical environments

- lexical environments or _scopes_
- heavily based on _code nesting_
- reference to lexical environment in which the function was created is `[[Environment]]`- an internal JS property
- new associated lexical environment created on each function invocation
- When `innerFunction` was created inside `outerFunction`, its `[[Environment]]` was set to point to the lexical environment of `outerFunction`
- lexical environment & `[[Environment]]` are not the same, rather `[[Environment]]` is part of a lexical environment
- lexical environment may change with each function call, but it's `[[Environment]]` remains constant as it depends on where it was defined, rather than called.

### 5.5 Understanding types of JavaScript variables

