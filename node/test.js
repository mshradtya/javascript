// writing into a file a million times
const fs = require("fs/promises");

(async () => {
  console.time("written");
  const fileHandle = await fs.open("./test.txt", "w");
  const stream = fileHandle.createWriteStream();

  let i = 0;
  const LIMIT = 100000;

  const write = () => {
    for (i; i < LIMIT; i++) {
      if (!stream.write(` ${i} `)) break;
    }
    if (i === LIMIT) {
      stream.end();
      console.timeEnd("written");
    }
  };

  stream.on("drain", () => {
    write();
  });

  write();
})();
