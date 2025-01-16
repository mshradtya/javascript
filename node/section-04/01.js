// writing a million times in file

// using the promises module
const fs = require("fs/promises");

// Time taken to execute: 2.416s
// Memory Usage: 18MB

(async () => {
  console.time("writeMany");
  const fileHandle = await fs.open("./test.txt", "w");
  for (let i = 0; i < 100000; i++) {
    await fileHandle.write(` ${i} `);
  }
  await fileHandle.close();
  console.timeEnd("writeMany");
})();
