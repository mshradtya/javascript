// simple TCP server
// TCP is the lowest level networking you can do in node.js

const net = require("net");

// creating a TCP server
const server = net.createServer((socket) => {
  // the socket is actually a duplex stream
  socket.on("data", (data) => {
    console.log(data);
  });
});

server.listen(3099, "127.0.0.1", () => {
  console.log("server running on", server.address());
});
