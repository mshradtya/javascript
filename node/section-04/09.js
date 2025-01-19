const fs = require("fs/promises");
// copying one file to another using streams

(async () => {
  const srcFile = await fs.open("test.txt", "r");
  const destFile = await fs.open("test-copy.txt", "w");

  const readStream = srcFile.createReadStream();
  const writeStream = destFile.createWriteStream();

  // always pipe from a readable stream to writable
  readStream.pipe(writeStream);

  // NOTE: when using standard source.pipe(dest), source will not be destroyed
  // if dest emits close or an error. you are also not able to provide
  // a callback to tell when the pipe has finished

  // for this reason, use the pump npm package or pipeline() if you want to use pipe()
})();
