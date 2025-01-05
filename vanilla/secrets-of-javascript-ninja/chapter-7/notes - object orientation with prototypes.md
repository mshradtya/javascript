A prototype is an object to which the search for a particular property can be delegated to. Prototypes are a convenient means of defining properties and functionality that will be automatically accessible to other objects. Prototypes serve a similar purpose to that of classes in classical object-oriented language

### Understanding Prototypes

- in JS, inheritance is implemented with _prototyping_
- the object's prototype property is an internal property that's not directly accessible ( so we can mark it with `[[prototype]]`)
- instead, the built-in method `Object.setPrototypeOf` takes in two object arguments and sets the second object as the prototype of the first
- **note**: every object can have a prototype, and an object’s prototype can also have a prototype, and so on, forming a _prototype chain_

### Object construction and prototypes

- every function has a prototype object, that's automatically set as the prototype of the objects created with that function
- The `swingSword` method is a property of the Ninja’s prototype, and not a property of ninja instances

#### Instance properties

- instance methods will override the prototype methods of the same name
- if a property can be found on the instance itself, the prototype isn't even consulted
- so, this means if there are 3 different objects, they'll have 3 different instance properties, but they all will point to the same prototype properties.
- instance properties are good if they are supposed to be unique for a object, like value properties, but for method properties, it's not a wise choice, as each object will have it's own copy of method, which will consume extra memory
- better choice would be to define method properties in prototype object, this way all objects will use the same method, eliminating extra memory usage.

#### Side effects of the dynamic nature of JavaScript

- learnt about dynamic nature in listing 7.4

#### Object typing via constructors

