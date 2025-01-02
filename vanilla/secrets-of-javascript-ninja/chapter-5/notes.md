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
- whenever an execution context is created, a lexical environment is also created

### 5.4 Keeping track of identifiers with lexical environments

- A lexical environment is an internal JavaScript engine construct used to keep track of the mapping from identifiers to specific variables, they're also called _scopes_
- heavily based on _code nesting_
- lexical environment keeps track of:
	- local variables
	- function declarations
	- function params
	- _outer / parent lexical environment_
- reference to lexical environment in which the function was created is `[[Environment]]`- an internal JS property
- When `innerFunction` was created inside `outerFunction`, its `[[Environment]]` was set to point to the lexical environment of `outerFunction`
- new associated lexical environment created on each function invocation
- lexical environment & `[[Environment]]` are not the same, rather `[[Environment]]` is part of a lexical environment
- lexical environment may change with each function call, but it's `[[Environment]]` remains constant as it depends on where it was defined, rather than called.

![[Pasted image 20250101203944.png]]
### 5.5 Understanding types of JavaScript variables

- `var`, `let` & `const` - they differ in two aspects - _mutability_ and their relationship toward lexical environment
- variables declared with `var` are always registered in the closest function or global lexical environment
- when defining variables with `let` & `const`, a variable is defined in the closest environment, including block environment
- JS code is executed in two phases
	- phase 1: visit & register all declared variables & functions within the current lexical environment
	- phase 2: code execution

![[Pasted image 20241219111336.png]]

- above chart is the reason why we're able to access function declarations before they're defined in code.

### 5.6 Exploring how closures work

- closures are merely a side-effect of JavaScript scoping mechanism, involving execution contexts & lexical environments