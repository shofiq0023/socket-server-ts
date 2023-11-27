import express, { Express } from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import * as client from "./client.function";

dotenv.config();
const app: Express = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const port: string | undefined = process.env.PORT;

io.on("connection", (socket) => {
    let username = socket.handshake.query.username;
    let sid: string = socket.id;

    if (username == undefined || username == "") {
        console.error("No username provided");
        socket.disconnect(true);
    } else {
        console.info(`${username} connected`);
        client.addClient(username, sid);
    }

    socket.on("disconnect", () => {
        console.error(`${sid} disconnected`);
    });
});

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
