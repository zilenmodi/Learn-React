import { Server } from "socket.io";
import express from "express";
import http from "http";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  //   console.log("New WS Connenction!", socket.id);
  socket.emit("message", "Welcome to chatbot");

  socket.broadcast.emit("message", "A user has joined the chat");

  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });

  socket.on("chatMessage", (message) => {
    io.emit("chatMessage", message);
  });
});

const PORT = 8500 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
