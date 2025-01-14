### Controlling access to properties with getters and setters

#### defining getters and setters

- ideally, getters and setters are used to control private variables
- we can mimic private variables in function with closures, but it doesn't work for classes because all properties are public for classes
- alternative way to create private variables is to use `Object.definedProperty` method