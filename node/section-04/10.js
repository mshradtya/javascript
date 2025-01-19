const fs = require("fs/promises");
const { pipeline } = require("node:stream")(
  // copying one file to another using streams / pipeline()

  async () => {
    const srcFile = await fs.open("test.txt", "r");
    const destFile = await fs.open("test-copy.txt", "w");

    const readStream = srcFile.createReadStream();
    const writeStream = destFile.createWriteStream();

    pipeline(readStream, writeStream, (err) => {
      console.log(err);
    });
  }
)();
