const fs = require("fs");
const { memoryUsage } = require("node:process");

(async () => {
  console.time("reading");
  const readStream = fs.createReadStream("./file.txt", {
    highWaterMark: 128 * 1024,
  });
  let bytesRead = 0;
  let chunks = 0;

  function logMemoryUsage() {
    const bytesPerMB = 1000000;
    const { rss } = memoryUsage();
    console.log(`Memory Usage: ${Math.floor(rss / bytesPerMB)} MB`);
  }

  const memoryInterval = setInterval(logMemoryUsage, 50);

  readStream.on("data", (chunk) => {
    bytesRead += chunk.length;
    chunks++;
  });

  readStream.on("end", () => {
    console.log("bytes read: ", bytesRead);
    console.log("chunks received: ", chunks);
    clearInterval(memoryInterval);
    console.timeEnd("reading");
  });
})();
