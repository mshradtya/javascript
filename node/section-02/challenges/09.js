// Write a function encodeDecodeBuffer that:

// Encodes a string into Base64 using a buffer.
// Decodes the Base64 string back to the original string.

// Requirements:
// Use Buffer.from() to create a buffer.
// Use .toString("base64") for encoding.
// Use Buffer.from(base64, "base64") for decoding.

function encodeDecodeBuffer(str) {
  // Implement function logic
  const encoded = Buffer.from(str, "utf-8").toString("base64");
  const decoded = Buffer.from(encoded, "base64").toString("utf-8");
  return {
    encoded,
    decoded,
  };
}

// Example usage:
console.log(encodeDecodeBuffer("Node.js Buffers!"));
// Expected Output: { encoded: "...", decoded: "Node.js Buffers!" }
