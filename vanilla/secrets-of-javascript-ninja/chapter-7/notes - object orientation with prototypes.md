A prototype is an object to which the search for a particular property can be delegated to. Prototypes are a convenient means of defining properties and functionality that will be automatically accessible to other objects. Prototypes serve a similar purpose to that of classes in classical object-oriented language

### Understanding Prototypes

- in JS, inheritance is implemented with _prototyping_
- the object's prototype property is an internal property that's not directly accessible ( so we can mark it with `[[prototype]]`)
- instead, the built-in method `Object.setPrototypeOf` takes in two object arguments and sets the second object as the prototype of the first
- **note**: every object can have a prototype, and an object’s prototype can also have a prototype, and so on, forming a _prototype chain_

### Object construction and prototypes

- every function has a prototype object, that's automatically set as the prototype of the objects created with that function
- The prototype object initially has only one property, `constructor`, that references back to the function
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

- we can find the type of the object using it's constructor property, which comes from the constructor function's prototype.

### Achieving Inheritance

- _Inheritance_ is a form of reuse in which new objects have access to properties of existing objects.
- the best technique for creating a prototype chain is to use an instance of an object as the other object's prototype. listing 7.7.

#### The problem of overriding the constructor property

- using instance of parent object as value for child object's prototype removes the _constructor_ property that was in child object's prototype by default
- as a result, we cannot use the child's constructor to determine which function created it, as the result will always lead to parent function.

"if we search the ninja object for the constructor property, we won’t find it. So we go over to its prototype, which also doesn’t have a constructor property, and again, we follow the prototype and end up in the prototype object of Person, which has a constructor property referencing the Person function. In effect, we get the wrong answer: If we ask the ninja object which function has constructed it, we’ll get Person as the answer."

##### configuring object properties
 
- we can configure an object's property by using the `Object.defineProperty()` method

##### finally solving the problem of overriding the constructor property

- using the `Object.defineProperty()` method, we were able to solve the problem of overriding constructor property

#### The instanceof operator

- In JS, the `instanceof` operator works on the prototype chain of the object
- it works by checking whether the current prototype of the Ninja function is in the prototype chain of the ninja instance
- although its most common use is in providing a clear way to determine whether an instance was created by a particular function constructor, it doesn’t exactly work like that. Instead, it checks whether the prototype of the right-side function is in the prototype chain of the object on the left. Therefore, there is a caveat that we should be careful about.

##### the instanceof caveat

- since JS is a dynamic language, and the prototype of a constructor function can be changed at runtime, if we do so the `instanceof` operator will not work as expected

### Using JavaScript "classes" in ES6

#### using the class keyword

- learnt how to create a class 

#### classes are syntactic sugar

- classes are just syntactic sugar for the original prototype based implementation

#### static methods

- static methods are those that are not accessible by the objects created by a class, but only by the class itself
- this works because static methods are basically just a property of the class itself

#### implementing inheritance

- used `extends` and `super`keywords
- `super()` is used to call the parent constructor