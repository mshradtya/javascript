const http = require("http");

// ran the server on current pc's IP address and was able to access it on phone
// which was connected to the same wifi

const port = 4080;
const loopback = "127.0.0.1";
const ip = "192.168.29.161";

const server = http.createServer((req, res) => {
  const data = { message: "hello world" };

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Connection", "close");
  res.statusCode = 200;
  res.end(JSON.stringify(data));
});

server.listen(port, ip, () => {
  console.log(`server running on port ${port}`);
});
