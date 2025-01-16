// writing a million times in file

// using the promises module
const fs = require("fs/promises");

// Time taken to execute: 36.358ms
// Memory Usage: 40MB

// even though time has reduced significantly, memory usage is still high
(async () => {
  console.time("writeMany");
  const fileHandle = await fs.open("test.txt", "w");

  // creating a write stream of this file
  const stream = fileHandle.createWriteStream();

  for (let i = 0; i < 100000; i++) {
    const buff = Buffer.from(` ${i} `, "utf-8");
    stream.write(buff); // writing into the stream
  }
  console.timeEnd("writeMany");
})();
