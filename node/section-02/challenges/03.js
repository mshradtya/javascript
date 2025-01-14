// Write a function bufferToJson that converts a Buffer into a JSON object.

// Requirements:
// Use .toJSON() on a buffer and return the result.

function bufferToJson(str) {
  // Implement function logic
  return Buffer.from(str).toJSON();
}

// Example usage:
console.log(bufferToJson("Hello"));
// Expected Output: { type: 'Buffer', data: [72, 101, 108, 108, 111] }
