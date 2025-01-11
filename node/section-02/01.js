const { Buffer } = require("buffer");

const memoryContainer = Buffer.alloc(4); // 4 bytes or 32 bits

// since it's array-like, we can access elements using their index
console.log(memoryContainer); // <Buffer 00 00 00 00>
console.log(memoryContainer[0]); // 0

// updating the element values
memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x34;
memoryContainer[2] = 0xb6;
memoryContainer[3] = 0xff;

console.log(
  memoryContainer[0],
  memoryContainer[1],
  memoryContainer[2],
  memoryContainer[3]
); // 244 52 182 255 - values in decimal

console.log(memoryContainer.toString("hex")); // f434b6ff
