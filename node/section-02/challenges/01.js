// Write a function createBuffer that takes a string as input and creates a Buffer from it.

// Requirements:
// Use Buffer.from() to convert the string into a buffer.
// Log the buffer and its content as a string.

function createBuffer(string) {
  const buff = Buffer.from(string);
  console.log(buff, buff.toString("utf-8"));
}

createBuffer("Hello, Node.js!");
