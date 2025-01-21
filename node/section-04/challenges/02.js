const fs = require("fs");
const { memoryUsage } = require("node:process");
const { performance } = require("node:perf_hooks");

(async () => {
  const startTime = performance.now();
  console.time("writing");

  fs.open("./file.txt", "w", (err, fd) => {
    if (err) {
      if (err) {
        // handling errors related to opening the file
        switch (err.code) {
          case "EPERM":
            console.error("Operation not permitted. Check file permissions.");
            break;
          case "EACCES":
            console.error("Access denied. Check folder/file permissions.");
            break;
          default:
            console.error("An error occurred:", err.message);
        }
        return;
      }
    }
    fs.close(fd);

    let i = 0;
    const LIMIT = 100000;
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

        // generating an error
        if (i === 4000) {
          // Test different error scenarios:
          //   stream.destroy(); // Test destruction
          // or
          //   stream.end(); // Test write-after-end
          // or
          //   stream.destroy(new Error("Custom error")); // Test custom error
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

    stream.on("error", (err) => {
      // Clear interval to stop memory logging
      clearInterval(memoryInterval);

      switch (err.code) {
        case "ERR_STREAM_WRITE_AFTER_END":
          console.error("Writing after stream has ended");
          break;
        case "ERR_STREAM_DESTROYED":
          console.error("Stream was destroyed during writing");
          break;
        default:
          console.error("An error occurred:", err.message);
      }

      // Clean up resources
      stream.end();
    });

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

    stream.on("finish", () => {
      console.log("Stream finished successfully");
      clearInterval(memoryInterval);
    });

    writeToFile();
  });
})();
