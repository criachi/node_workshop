// import built-in Node packages
const express = require("express"); // import express
const server = express();

const port = 4000;

// HTML routes
// syntax/format: server.http_verb(route, route_handler)
// route handler is the function to call to serve the client's request
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// JSON routes
server.get("/json", (req, res) => {
  res.send(JSON.stringify({ name: "Lenny" }));
});

server.listen(port, () => {
  // Callback function in ES6
  console.log(`Server listening at ${port}`);
});
