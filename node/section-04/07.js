const fs = require("fs/promises");

// readable streams
// only writing even numbers to our destination
(async () => {
  console.time("readBig");
  const fileReadHandle = await fs.open("./src.txt", "r");
  const fileWriteHandle = await fs.open("./dest.txt", "w");

  const readableStream = fileReadHandle.createReadStream(); // default highWaterMark = 64 * 1024
  const writableStream = fileWriteHandle.createWriteStream();

  let split = "";

  // each chunk length will be the same as highwatermark
  readableStream.on("data", (chunk) => {
    const numbers = chunk.toString("utf-8").split("  ");

    if (Number(numbers[0]) !== Number(numbers[1]) - 1) {
      if (split) numbers[0] = split.trim() + numbers[0].trim();
    }

    // if the second last number of each chunk + 1 is not equal to the last number of the chunk
    // means that the last number has been splitted
    if (
      Number(numbers[numbers.length - 2]) + 1 !==
      Number(numbers[numbers.length - 1])
    ) {
      split = numbers.pop();
    }

    numbers.forEach((number) => {
      let n = Number(number);

      if (n % 2 === 0) {
        if (!writableStream.write(" " + n + " ")) {
          readableStream.pause();
        }
      }
    });
  });

  writableStream.on("drain", () => {
    readableStream.resume();
  });

  stream.on("end", () => {
    console.log("done reading");
    console.timeEnd("readBig");
  });
})();
