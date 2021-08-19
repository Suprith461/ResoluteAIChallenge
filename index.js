/*const express = require("express");
const app = express();




const http = require("http");
const server = http.createServer(app)

server.listen(3000,()=>{
    console.log("Listening");
})

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/index.html");
})

const {Server} = require("socket.io");

const io = new Server(server);

io.on("connection",(socket)=>{
    socket.on('chat message', (msg) => {
        
        io.emit('chat message', msg);
      });
    /*console.log("User Connected");
    socket.on('disconnect',()=>{
        console.log("User Disconnected");
    })
})*/
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});