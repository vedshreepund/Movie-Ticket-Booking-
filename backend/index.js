const http = require("http");

const myServer = http.createServer((req, res)=>{
  console.log("New request recieved");
  res.end("Hello from Server!");
});

myServer.listen(5002, ()=>{
  console.log("SERVER STARTED");
});

