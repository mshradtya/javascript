const { Buffer } = require("buffer");

// this method allocates that much bytes, and sets all the elements to 0
// since it's allocating and also initializing 0, it takes time
Buffer.alloc(10000, 0);

// this is faster because
// 1. it doesn't initialize with 0s, but it's not safe to do so
// 2. it makes use of the default buffer kept aside in node
Buffer.allocUnsafe(10000);

// this one is the same as the previous, but it won't make use of that internal buffer which is already allocated

// these two use allocUnsafe in background, but instantly fill it with data, so they're safe
Buffer.from();
Buffer.concat();
