const net = require("net");

const server = net.createServer();

// an array of client sockets
const clients = [];

// when there are 2 networking endpoints that are talking to each other
// we call it a socket
server.on("connection", (socket) => {
  console.log("a new connection to the server");

  socket.on("data", (data) => {
    clients.map((socket) => socket.write(data));
  });

  clients.push(socket);
});

server.listen(3008, "127.0.0.1", () => {
  console.log(`opened server on `, server.address());
});
