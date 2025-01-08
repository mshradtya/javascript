class EventEmitter {
  listeners = {};

  on = (eventName, callback) => {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(callback);
  };

  emit = (eventName, ...args) => {
    this.listeners[eventName]?.map((fn) => fn(...args));
  };
}

const myE = new EventEmitter();

myE.on("foo", () => {
  console.log("added");
});

myE.on("foo", (x) => {
  console.log("added 2", x);
});

myE.emit("foo", "hello");
