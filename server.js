// import built-in Node package
const http = require("http");
const port = 4000;

const server = http.createServer((req, res) => {
  // Callback function in ES6
  // Response header
  res.writeHead(200, { "Content-Type": "application/json" });

  // JSON object
  const song = {
    id: 12345,
    favorite: false,
    title: "Hello World",
    artist: "Node programmer",
    album: "Node EP",
  };

  console.log(`${song.title} by ${song.artist}`);

  // send JSON response to client
  res.end(JSON.stringify(song)); // JSON.stringify({a: 1}) -> '{"a":1}' apparently it serializes the data
});

server.listen(port, () => {
  // Callback function in ES6
  console.log(`Server listening at ${port}`);
});
