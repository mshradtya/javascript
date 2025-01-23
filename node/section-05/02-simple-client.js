const net = require("net");

// with this method you can create a connection with any TCP server out there
const socket = net.createConnection({ host: "127.0.0.1", port: 3099 }, () => {
  const buff = Buffer.alloc(2);
  buff[0] = 12;
  buff[1] = 24;
  socket.write(buff);
});
