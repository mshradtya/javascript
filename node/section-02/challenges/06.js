// Write a function sliceBuffer that extracts a portion of a buffer.

// Requirements:
// Create a buffer from "Node.js Buffers!".
// Use .slice(start, end) to extract "Node.js".
// Log the sliced buffer and its string representation.

function sliceBuffer() {
  // Implement function logic
  const buff = Buffer.from("Node.js Buffers!");
  return buff.slice(0, 7).toString();
}

// Example usage:
console.log(sliceBuffer());
// Expected Output: Buffer containing "Node.js"
