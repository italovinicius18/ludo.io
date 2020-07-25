const express = require("express");
const socket = require("socket.io");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const router = require("./router");
const { use } = require("./router");

const app = express();
const server = http.createServer(app);
const io = socket(server);

// app.use(cors());
app.use(router);

io.on("connection", (socket) => {

  socket.on("disconnected", () => {
    console.log("User had left !");
  });

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
    
    socket.join(user.room);
    
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });
});

server.listen(PORT, () => {
  console.log("Server has started on port: " + PORT);
});
