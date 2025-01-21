// The basic creation and usage
// Handling backpressure (through the write() return value and 'drain' event)
// Performance monitoring and understanding stream internals
// Memory usage and buffer management

const fs = require("fs");
const { memoryUsage } = require("node:process");
const { performance } = require("node:perf_hooks");

(async () => {
  const startTime = performance.now();
  console.time("writing");

  let i = 0;
  const LIMIT = 100000000;
  const bytesToBeWritten = calculateTotalBytesToWrite();
  const stream = fs.createWriteStream("./file.txt");

  // Drain tracking variables
  let drainStartTime = 0;
  let totalDrainTime = 0;
  let drainCount = 0;

  function calculateTotalBytesToWrite() {
    let bytes = 0;
    for (let i = 0; i < LIMIT; i++) {
      bytes += Buffer.from(` ${i} `).length;
    }
    return bytes;
  }

  function logMemoryUsage() {
    const bytesPerMB = 1000000;
    const { rss } = memoryUsage();
    console.log(`Memory Usage: ${Math.floor(rss / bytesPerMB)} MB`);
  }

  const memoryInterval = setInterval(logMemoryUsage, 50);

  function writeToFile() {
    for (i; i < LIMIT; i++) {
      const buff = Buffer.from(` ${i} `);
      if (!stream.write(buff)) {
        drainStartTime = performance.now();
        break;
      }
    }
    if (i === LIMIT) {
      console.log(`Total bytes written: ${stream.bytesWritten}`);
      stream.end();
      clearInterval(memoryInterval);

      const totalTime = performance.now() - startTime;
      console.log(`Total drain events: ${drainCount}`);
      console.log(`Total drain time: ${totalDrainTime.toFixed(2)}ms`);
      console.log(
        `Average drain time: ${(totalDrainTime / drainCount).toFixed(2)}ms`
      );
      console.log(
        `Percentage time in drain: ${(
          (totalDrainTime / totalTime) *
          100
        ).toFixed(2)}%`
      );

      console.timeEnd("writing");
    }
  }

  stream.on("drain", () => {
    drainCount++;
    const drainEndTime = performance.now();
    const drainDuration = drainEndTime - drainStartTime;
    totalDrainTime += drainDuration;

    const percentage = (stream.bytesWritten * 100) / bytesToBeWritten;
    console.log(`Progress: ${Math.floor(percentage)}%`);
    console.log(
      `Drain event ${drainCount} duration: ${drainDuration.toFixed(2)}ms`
    );

    writeToFile();
  });

  writeToFile();
})();
