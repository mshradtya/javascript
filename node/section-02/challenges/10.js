// Task: Create a class ImageStore that:

// Allows you to store images (simulated as strings or binary data) in memory using Buffers.

// Implements the following methods:
// addImage(id, imageBuffer): Adds an image with a unique ID.
// getImage(id): Retrieves an image as a Buffer.
// deleteImage(id): Removes an image by its ID.
// listImages(): Returns all image IDs currently in storage.

// Requirements:
// Validate that the input is a Buffer before storing.
// Track and log the total memory usage of stored images.
// Add error handling for invalid IDs or missing data.

var { Buffer } = require("buffer");

class ImageStore {
  constructor() {
    this.images = {};
    this.MEMORY_USAGE = 0;
  }

  addImage(id, imageBuffer) {
    let _id = String(id);

    if (imageBuffer instanceof Buffer) {
      this.images[_id] = imageBuffer;
      this.MEMORY_USAGE += imageBuffer.length;
      return true;
    } else if (typeof imageBuffer === "string") {
      const buff = Buffer.from(imageBuffer);
      this.images[_id] = buff;
      this.MEMORY_USAGE += buff.length;
      return true;
    } else {
      throw new Error("invalid image type");
    }
  }

  getImage(id) {
    return this.images[id];
  }

  deleteImage(id) {
    this.MEMORY_USAGE -= this.images[id].length;
    delete this.images[id];
    return this.images;
  }

  listImages() {
    return Object.keys(this.images);
  }
}

const imageStore = new ImageStore();
imageStore.addImage("image1", Buffer.from("hello world"));
imageStore.addImage("image2", "bye world");
console.log(imageStore.getImage("image1"));
console.log(imageStore.deleteImage("image2"));
console.log(imageStore.listImages());
console.log(imageStore.MEMORY_USAGE);
