// Write a function fillBuffer that fills a buffer with a specific value.

// Requirements:
// Create a buffer of size 10.
// Fill it with the value 0x1F (in hexadecimal).
// Log the filled buffer.

function fillBuffer() {
  // Implement function logic
  return (buff = Buffer.alloc(10, 0x1f));
}

// Example usage:
console.log(fillBuffer());
// Expected Output: <Buffer 1f 1f 1f 1f 1f 1f 1f 1f 1f 1f>
