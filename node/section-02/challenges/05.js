// Write a function concatBuffers that concatenates multiple Buffers into one.

// Requirements:
// Take two strings as input.
// Convert them into buffers.
// Concatenate them using Buffer.concat() and return the final buffer.

function concatBuffers(str1, str2) {
  // Implement function logic
  const buff = Buffer.concat([Buffer.from(str1), Buffer.from(str2)]);
  return `${buff} and ${buff.toString()}`;
}

// Example usage:
console.log(concatBuffers("Hello, ", "World!"));
// Expected Output: <Buffer ...> and "Hello, World!"
