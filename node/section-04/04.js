const fs = require("fs/promises");

(async () => {
  const fileHandle = await fs.open("test.txt", "w");

  // creating a write stream of this file
  const stream = fileHandle.createWriteStream();

  console.log(stream.writableHighWaterMark); // size of our internal buffer ( 16384 bytes )
  console.log(stream.writableLength); // how much of the stream is filled ( currently 0 )

  const buff = Buffer.alloc(stream.writableHighWaterMark - 1, 10);
  console.log(stream.write(buff)); // returns true because stream is not yet full
  console.log(stream.write(Buffer.alloc(1, "a"))); // the method returns false when the internal buffer is full
  console.log(stream.writableLength); // filled
  // indicating that it'll take some moments to drain itself

  // this event is emitted when the stream has drained itself
  stream.on("drain", () => {
    console.log("we are now safe to write more");
    console.log(stream.write(Buffer.alloc(1, "a"))); // true - stream not yet full
    console.log(stream.writableLength); // 1
  });
})();
