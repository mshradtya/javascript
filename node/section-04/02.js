// using the callback module
const fs = require("node:fs");

// Time taken to execute: 262.334ms
// Memory Usage: 10MB

(async () => {
  console.time("writeMany");
  fs.open("test.txt", "w", (err, fd) => {
    for (let i = 0; i < 100000; i++) {
      fs.writeSync(fd, ` ${i} `);
    }
    console.timeEnd("writeMany");
  });
})();
