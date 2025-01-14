const fs = require("node:fs/promises");

(async () => {
  try {
    // commands
    const CREATE_FILE = "create a file";
    const DELETE_FILE = "delete the file";
    const RENAME_FILE = "rename the file";
    const ADD_TO_FILE = "add to the file";

    const commandFileHandler = await fs.open("./command.txt", "r");
    const watcher = fs.watch("./command.txt");

    const createFile = async (path) => {
      try {
        const existingFileHandle = await fs.open(path, "r"); // checking whether file already exists
        await existingFileHandle.close(); // closing the handler
        return console.log(`the file ${path} already exists`);
      } catch (e) {
        const newFileHandle = await fs.open(path, "w"); // creating the new file in write mode, gets created if doesn't exist
        console.log("a new file was created");
        newFileHandle.close();
      }
    };

    const deleteFile = async (path) => {
      try {
        const deleteFileHandle = await fs.open(path, "r");
        await deleteFileHandle.close();
        await fs.unlink(path);
        console.log(`file ${path} deleted`);
      } catch (e) {
        console.log("file doesn't exist");
      }
    };

    const renameFile = async (oldPath, newPath) => {
      try {
        const oldPathFileHandle = await fs.open(oldPath, "r");
        await oldPathFileHandle.close();
        await fs.rename(oldPath, newPath);
        console.log(`${oldPath} renamed to ${newPath}`);
      } catch (e) {
        console.log(`${oldPath} doesn't exist`);
      }
    };

    const addToFile = async (path, content) => {
      try {
        const addToFileHandle = await fs.open(path, "w");
        // const buff = Buffer.from(content);
        // const offset = 0;
        // const length = buff.length;
        // const position = 0;
        await addToFileHandle.write(content);
        console.log(`${content} written to ${path} successfully`);
      } catch (e) {
        console.log(`${path} doesn't exist - for adding`);
      }
    };

    commandFileHandler.on("change", async () => {
      // we want to read the content of the file
      const { size } = await commandFileHandler.stat(); // getting the size of the file to create buffer
      const position = 0; // the location from where to always read data from the file, otherwise it reads from where it previously stopped
      const buff = Buffer.alloc(size); // allocating a buffer of that size
      const offset = 0; // making it always fill from the first element of buffer
      const length = size; // making it fill till the last element of buffer

      await commandFileHandler.read(buff, offset, length, position); // reading the file by allocating into a buffer of file size

      const command = buff.toString("utf-8");

      // create a file
      // create a file <path>
      if (command.includes(CREATE_FILE)) {
        const filePath = command.substring(CREATE_FILE.length + 1);
        createFile(filePath);
      }

      // delete a file
      // delete the file <path>
      if (command.includes(DELETE_FILE)) {
        const filePath = command.substring(DELETE_FILE.length + 1);
        deleteFile(filePath);
      }

      // rename file
      // rename the file <path> to <new-path>
      if (command.includes(RENAME_FILE)) {
        const _idx = command.indexOf(" to ");
        const oldFilePath = command.substring(RENAME_FILE.length + 1, _idx);
        const newFilePath = command.substring(_idx + 4);

        renameFile(oldFilePath, newFilePath);
      }

      // add to file
      // add to the file <path> this content: <content>
      if (command.includes(ADD_TO_FILE)) {
        const _idx = command.indexOf(" this content: ");
        const filePath = command.substring(ADD_TO_FILE.length + 1, _idx);
        const content = command.substring(_idx + 15);

        addToFile(filePath, content);
      }
    });

    for await (const event of watcher) {
      if (event.eventType === "change") {
        commandFileHandler.emit("change");
      }
    }
  } catch (err) {
    throw err;
  }
})();
