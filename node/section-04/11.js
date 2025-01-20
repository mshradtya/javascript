// implementing our own writable stream for files

const { Writable } = require("node:stream");
const fs = require("node:fs");

class FileWriteStream extends Writable {
  constructor({ highWaterMark, fileName }) {
    super({ highWaterMark });

    this.fileName = fileName;
    this.fd = null;
    this.chunks = [];
    this.chunksSize = 0;
  }

  // this will run right after the constructor()
  // until this run it's callback, other methods will not run
  _construct(callback) {
    fs.open(this.fileName, "w", (err, fd) => {
      if (err) {
        // if with err argument, there was an error
        callback(err);
      } else {
        this.fd = fd;
        // no argument means it was successful
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    this.chunks.push(chunk);
    this.chunksSize += chunk.length;

    if (this.chunksSize > this.writableHighWaterMark) {
      fs.write(this.fd, Buffer.concat(this.chunks), (err) => {
        if (err) {
          return callback(err);
        }
        this.chunks = [];
        this.chunksSize = 0;
        callback();
      });
    } else {
      callback();
    }
  }

  _final(callback) {
    fs.write(this.fd, Buffer.concat(this.chunks), (err) => {
      if (err) return callback(err);

      this.chunks = [];
      callback();
    });
  }

  _destroy(error, callback) {
    if (this.fd) {
      fs.close(this.fd, (err) => {
        callback(err || error);
      });
    } else {
      callback(error);
    }
  }
}

const stream = new FileWriteStream({
  highWaterMark: 1800,
  fileName: "test.txt",
});

stream.write(Buffer.from("this is some string"));
stream.end(Buffer.from("our last write"));

stream.on("finish", () => {
  console.log("stream was finished");
});
