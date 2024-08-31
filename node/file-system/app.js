// **** Promise API ****
let fs = require("fs/promises");

(async () => {
  try {
    await fs.copyFile("file.txt", "copied-promise.txt");
  } catch (error) {
    console.log(error);
  }
})();

// **** Callback API ****

fs = require("fs");

fs.copyFile("file.txt", "copied-callback.txt", (error) => {
  if (error) console.log(error);
});

// **** Synchronous API ****

fs = require("fs");

fs.copyFileSync("file.txt", "copied-synchronous.txt");
