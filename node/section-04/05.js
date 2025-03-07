// fixing the the loop by properly using streams

const fs = require("fs/promises");

// Time taken to execute: 234.443ms
// Memory Usage: 18MB

// time and memory usage, both have reduced significantly

(async () => {
  console.time("written");
  const fileHandle = await fs.open("./test.txt", "w");
  // creating a write stream of this file
  const stream = fileHandle.createWriteStream();

  let i = 0;
  const LIMIT = 100000;

  const write = () => {
    for (i; i < LIMIT; i++) {
      if (!stream.write(` ${i} `)) break; // if stream.write() returns false, stop the loop
    }
    // this is our last write
    if (i === LIMIT) {
      stream.end();
      console.timeEnd("written");
    }
  };

  // resume loop when stream's internal buffer is empty
  stream.on("drain", () => {
    write();
  });

  write();
})();
