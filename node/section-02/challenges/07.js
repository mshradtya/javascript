// Write a function compareBuffers that compares two buffers and returns:

// 0 if the buffers are equal.
// -1 if the first buffer is less than the second.
// 1 if the first buffer is greater than the second.

// Requirements:
// Use Buffer.compare().

function compareBuffers(buf1, buf2) {
  // Implement function logic
  return Buffer.compare(buf1, buf2);
}

// Example usage:
console.log(compareBuffers(Buffer.from("ABC"), Buffer.from("ABD"))); // Expected: -1
console.log(compareBuffers(Buffer.from("123"), Buffer.from("123"))); // Expected: 0
console.log(compareBuffers(Buffer.from("XYZ"), Buffer.from("ABC"))); // Expected: 1
