const net = require("net");

const server = net.createServer();

// an array of client sockets
const clients = [];

// when there are 2 networking endpoints that are talking to each other
// we call it a socket
server.on("connection", (socket) => {
  console.log("a new connection to the server");

  const clientId = clients.length + 1;

  clients.map((client) => {
    client.socket.write(`user ${clientId} joined`);
  });

  socket.write(`id-${clientId}`);

  socket.on("data", (data) => {
    const dataString = data.toString("utf-8");
    const id = dataString.substring(0, dataString.indexOf("-"));
    const message = dataString.substring(dataString.indexOf("-message-") + 9);

    clients.map((client) => client.socket.write(`> User ${id}: ${message}`));
  });

  socket.on("error", () => {
    clients.map((client) => {
      client.socket.write(`user ${clientId} left`);
    });
  });

  clients.push({ id: clientId.toString(), socket });
});

server.listen(3008, "127.0.0.1", () => {
  console.log(`opened server on `, server.address());
});
