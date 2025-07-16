// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // Node.js built-in module for path manipulation

const app = express();
const server = http.createServer(app);
// Initialize Socket.IO with the HTTP server.
// The `cors` option is important if your frontend is served from a different origin (e.g., a different domain or port)
// than your backend, which is common during development (frontend on localhost:5000, backend on localhost:3000).
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins for development. In production, specify your frontend's domain.
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;

// Serve static files (your index.html, CSS, JS) from the current directory
app.use(express.static(__dirname));

// Define a route to serve your index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);

    // Emit to all connected clients (except the sender) that a new user connected
    socket.broadcast.emit('user connected');

    // Listen for 'chat message' events from clients
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        // Broadcast the received message to all connected clients, including the sender
        io.emit('chat message', msg);
    });

    // Listen for 'disconnect' event when a client disconnects
    socket.on('disconnect', () => {
        console.log('user disconnected:', socket.id);
        // Emit to all connected clients (except the sender) that a user disconnected
        socket.broadcast.emit('user disconnected');
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server listening on *:${PORT}`);
});