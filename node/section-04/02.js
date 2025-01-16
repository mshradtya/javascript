// using the callback module
const fs = require("node:fs");

// Time taken to execute: 262.334ms
// Memory Usage: 10MB

(() => {
  console.time("writing");
  fs.open("./test.txt", "w", (err, fd) => {
    for (let i = 0; i < 100000; i++) {
      fs.writeSync(fd, ` ${i} `);
    }
    fs.close(fd);
  });

  console.timeEnd("writing");
})();
