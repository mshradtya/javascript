// fixing the the loop by properly using streams

const fs = require("fs/promises");

// Time taken to execute: 234.443ms
// Memory Usage: 18MB

// time and memory, both have reduced significantly

(async () => {
  console.time("writeMany");
  const fileHandle = await fs.open("test.txt", "w");

  // creating a write stream of this file
  const stream = fileHandle.createWriteStream();

  let i = 0;

  const writeMany = () => {
    while (i < 100000) {
      const buff = Buffer.from(` ${i} `, "utf-8");

      // this is our last write
      if (i === 100000 - 1) {
        return stream.end(buff);
      }

      i++;

      // if stream.write() returns false, stop the loop
      if (!stream.write(buff)) break;
    }
  };

  writeMany();

  // resume loop when stream's internal buffer is empty
  stream.on("drain", () => {
    writeMany();
  });

  stream.on("finish", () => {
    console.timeEnd("writeMany");
    fileHandle.close();
  });
})();
