const fs = require("fs/promises");

(async () => {
  const commandFileHandler = await fs.open("./command.txt", "r"); // open the file

  const watcher = fs.watch("./command.txt");

  // async iterator
  for await (const event of watcher) {
    if (event.eventType === "change") {
      // the file was changed
      console.log("The File was changed");
      // we want to read the content
      // get the size of our file
      const size = (await commandFileHandler.stat()).size;
      const buff = Buffer.alloc(size);

      const offset = 0;
      const length = buff.byteLength;
      const position = 0;

      const content = await commandFileHandler.read(
        buff,
        offset,
        length,
        position
      );
      console.log(content);
    }
  }
})();
