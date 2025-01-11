const { Buffer, constants } = require("buffer");

const b = Buffer.alloc(1e9); // 1GB

console.log(constants.MAX_LENGTH); // 4294967296 - max bytes that can be allocated to a buffer

setInterval(() => {
  //   for (let i = 0; i < b.length; i++) {
  //     b[i] = 0x22;
  //   }

  b.fill(0x22); // faster than looping
}, 5000);
