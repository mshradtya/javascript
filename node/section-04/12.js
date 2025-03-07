const { Readable } = require("node:stream");
const fs = require("fs");

class FileReadStream extends Readable {
  constructor({ highWaterMark, fileName }) {
    super({ highWaterMark });
    this.fileName = fileName;
    this.fd = null;
  }

  _constructor(callback) {
    fs.open(this.fileName, "r", (err, fd) => {
      if (err) {
        return callback();
      }
      this.fd = fd;
      callback();
    });
  }

  _read(size) {
    const buff = Buffer.alloc(size);
    fs.read(this.fd, buff, 0, size, null, (err, bytesRead) => {
      if (err) return this.destroy(err);
      this.push(bytesRead > 0 ? buff.subarray(0, bytesRead) : null);
    });
  }

  _destroy(error, callback) {
    if (this.fd) {
      fs.close(this.fd, (err) => callback(err || error));
    } else {
      callback(error);
    }
  }
}

const stream = new FileReadStream({ fileName: "test.txt" });

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("stream is done reading");
});
