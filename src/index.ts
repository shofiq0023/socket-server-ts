import express, { Express } from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();
const app: Express = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const port: string | undefined = process.env.PORT;

io.on('connection', (socket) => {
    let username = socket.handshake.query.username;
    let sid: string = socket.id;

    console.log(`Socket connected with ${username} and sid: ${sid}`);

    socket.on('disconnect', () => {
        console.error(`${sid} disconnected`);
    });
});

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
