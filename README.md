# Real-time Chat Application
A simple, real-time chat application built with Node.js, Express, Socket.IO, and styled with Tailwind CSS. This project demonstrates basic WebSocket communication for instant messaging.

# Features
Real-time Messaging: Send and receive messages instantly without page reloads.

User Connection/Disconnection Notifications: See when users join or leave the chat.

Simple UI: Clean and responsive user interface powered by Tailwind CSS.

Scalable: Built on Node.js and Socket.IO, making it suitable for handling multiple concurrent connections.

# Technologies Used
```
Node.js: JavaScript runtime environment for the backend server.

Express.js: Fast, unopinionated, minimalist web framework for Node.js.

Socket.IO: A library that enables real-time, bidirectional, and event-based communication between the browser and the server.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

HTML5 & JavaScript: For the frontend structure and client-side logic.
```
#Folder Structure
```
chat-app/
├── index.html          # Frontend: HTML structure, Tailwind CSS, client-side Socket.IO
├── server.js           # Backend: Node.js server with Express and Socket.IO logic
├── package.json        # Node.js project configuration and dependencies
└── node_modules/       # (Automatically generated) Contains installed npm packages
```
#Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#Prerequisites
Node.js (LTS version recommended)

npm (Node Package Manager, comes with Node.js)

You can download Node.js from nodejs.org.

# Installation
Clone the repository (or create the files manually):
If you're starting from scratch, create a directory named chat-app and place index.html and server.js inside it.

# If cloning from a repo (replace with your repo URL)
git clone https://github.com/shuvosa/Real-time-Chat-Application-.git
cd chat-app

Initialize Node.js project and install dependencies:
Navigate to the chat-app directory in your terminal and run:
```
npm init -y
npm install express socket.io
```
This will create a package.json file and install the necessary express and socket.io packages.
```
Running the Application
Start the Node.js server:
From the chat-app directory, run:

node server.js
```
You should see a message in your terminal: Server listening on *:3000.

Open the application in your browser:
```
Navigate to http://localhost:3000 in your web browser.
```
Test the chat:
```
Open another browser tab or window and go to http://localhost:3000 again. Now you can type messages in either window, and they will appear in real-time in both.
```
How it Works
The application uses a client-server architecture with WebSockets for real-time communication:

Frontend (index.html):

Loads the Socket.IO client library.

Establishes a WebSocket connection to the Node.js server.

Listens for form submissions to send messages via socket.emit('chat message', message).

Listens for incoming messages from the server via socket.on('chat message', message) and appends them to the chat display.

Handles connection/disconnection notifications.

 # Backend (server.js):

Uses Express to serve the index.html file.

Initializes Socket.IO and attaches it to the HTTP server.
```
Listens for new client connections (io.on('connection', ...)) and assigns a unique socket object to each client.

When a chat message event is received from a client (socket.on('chat message', ...)), it broadcasts that message to all connected clients using io.emit('chat message', message).

Handles disconnect events to notify other users when someone leaves.
```

This setup ensures that any message sent by one client is immediately relayed through the server to all other connected clients, providing a seamless real-time chat experience.

# Contributing
Feel free to fork this repository, create a new branch, and submit pull requests with improvements or bug fixes.

# License
This project is open source and available under the MIT License.
