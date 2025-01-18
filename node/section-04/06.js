const fs = require("fs/promises");

// readable streams
// copying huge data from src file and pasting to dest file
(async () => {
  const fileReadHandle = await fs.open("./src.txt", "r");
  const fileWriteHandle = await fs.open("./dest.txt", "w");

  const readableStream = fileReadHandle.createReadStream(); // default highWaterMark = 64 * 1024
  const writableStream = fileWriteHandle.createWriteStream();

  readableStream.on("data", (chunk) => {
    if (!writableStream.write(chunk)) {
      readableStream.pause();
    }
  });

  writableStream.on("drain", () => {
    readableStream.resume();
  });
})();
