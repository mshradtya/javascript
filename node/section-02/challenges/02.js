// Write a function getBufferLength that returns the byte length of a given string.

// Requirements:
// Convert the string into a buffer.
// Return its length.

function getBufferLength(str) {
  // Implement function logic
  const buff = Buffer.from(str);
  console.log(buff);
  return buff.length;
}

// Example usage:
console.log(getBufferLength("Hello")); // Expected: 5
console.log(getBufferLength("你好")); // Expected: ? (Find out!)
