// Write a function modifyBuffer that changes a specific byte in a Buffer.

// Requirements:
// Create a buffer from the string "Node.js Buffers!".
// Modify the first byte to 78 (ASCII for 'N').
// Log the modified buffer and its updated string representation.

function modifyBuffer() {
  // Implement function logic
  const buff = Buffer.from("Node.js Buffers!");
  buff[0] = 78;
  console.log(buff, buff.toString());
}

// Example usage:
modifyBuffer();
// Expected Output: Modified buffer where the first byte is changed.
