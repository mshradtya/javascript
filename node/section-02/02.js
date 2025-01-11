// 0100 1000 0110 1001 0010 0001
// write this binary data to memory

const { Buffer } = require("buffer");

const buff = Buffer.alloc(3);
buff[0] = 0x48;
buff[1] = 0x69;
buff[2] = 0x21;

console.log(buff.toString("utf-8")); // Hi!

// using another method
const buff2 = Buffer.from([0x48, 0x69, 0x21]);
console.log(buff2.toString("utf-8")); // Hi!
