const fs = require("fs/promises");

(async () => {
  const watcher = fs.watch("./command.txt");

  // async iterator
  for await (const event of watcher) {
    if (event.eventType === "change") {
      // the file was changed
      console.log("The File was changed");
    }
  }
})();
