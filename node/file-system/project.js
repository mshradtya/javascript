const fs = require("fs/promises");

(async () => {
  const createFile = async (path) => {
    try {
      // checking if file already exists
      const existingFileHandle = await fs.open(path, "r");
      existingFileHandle.close();
      // file exists
      return console.log(`The filr ${path} already exists`);
    } catch (err) {
      // we don't have the file, so we can create it
      const newFileHandle = await fs.open(path, "w");
      console.log("a new file was successfully created");
      newFileHandle.close();
    }
  };

  // commands
  const CREATE_FILE = "create a file";

  const commandFileHandler = await fs.open("./command.txt", "r"); // open the file

  commandFileHandler.on("change", async () => {
    // get the size of our file
    const size = (await commandFileHandler.stat()).size;
    // allocate our buffer with the size of the file
    const buff = Buffer.alloc(size);
    // the location at which we want to start filling our buffer
    const offset = 0;
    // how many bytes we want to read
    const length = buff.byteLength;
    // the position that we want to start reading the file from
    const position = 0;

    // we always want to read the whole content ( from beginning all the way to the end )
    await commandFileHandler.read(buff, offset, length, position);

    const command = buff.toString("utf-8");

    // create a file:
    // create a file <path>
    if (command.includes(CREATE_FILE)) {
      const filePath = command.substring(CREATE_FILE.length + 1);
      createFile(filePath);
    }
  });

  // watcher
  const watcher = fs.watch("./command.txt");
  // async iterator
  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
