// const EventEmitter = require("node:events");

// class ChatApp extends EventEmitter {
//   constructor() {
//     super();
//     this.users = {};
//   }

//   registerUser(userId) {
//     if (!this.users[userId]) {
//       this.users[userId] = [];
//       console.log(`${userId} registered`);
//     }
//   }

//   sendMessage(senderId, message) {
//     if (!this.users[senderId]) {
//       console.log(`Error: ${senderId} is not registered.`);
//       return;
//     }

//     const messageBuffer = Buffer.from(message);

//     Object.keys(this.users).forEach((userId) => {
//       this.users[userId].push({ from: senderId, message: messageBuffer });
//     });

//     // Emit event with message details
//     this.emit("message", senderId, messageBuffer);
//   }
// }

// const chat = new ChatApp();

// chat.on("message", (senderId, messageBuffer) => {
//   console.log(
//     `\n📩 New message from ${senderId}: "${messageBuffer.toString()}"`
//   );
//   Object.keys(chat.users).forEach((userId) => {
//     if (userId !== senderId) {
//       console.log(
//         `📬 ${userId} received message: "${messageBuffer.toString()}"`
//       );
//     }
//   });
// });

// // Example Usage
// chat.registerUser("user1");
// chat.registerUser("user2");
// chat.registerUser("user3");

// chat.sendMessage("user1", "Hello, everyone!");
// chat.sendMessage("user2", "Hey, user1!");

// ========================================================================================================

// Log System

// Create a Logger class that extends EventEmitter.
// It should listen for log events and store logs in Buffers

// Methods to Implement
// logMessage(level, message): Emits a log event with a log level (INFO, WARN, ERROR) and message.
// getLogs() → Returns all stored logs as a decoded string.
// clearLogs() → Clears all logs from memory.

// Log Format
// Store logs as: [Timestamp] [Level]: Message
// Convert logs into Buffers before storing.

const EventEmitter = require("node:events");

class Logger extends EventEmitter {
  constructor() {
    super();
    this.logs = [];
    this.on("log", (level, message) => {
      const log = `[${new Date().toLocaleTimeString()}] [${level.toUpperCase()}]: ${message}`;
      const buff = Buffer.from(log);
      this.logs.push(buff);
      console.log(this.logs);
    });
  }

  logMessage(level, message) {
    this.emit("log", level, message);
  }

  getLogs() {
    let logsString = "";
    this.logs.forEach((log) => {
      logsString += log.toString() + "\n";
    });
    return logsString;
  }

  clearLogs() {
    this.logs = [];
    return true;
  }
}

const logger = new Logger();

logger.logMessage("INFO", "System started");
logger.logMessage("WARN", "Memory usage high");
logger.logMessage("ERROR", "Disk failure detected");

console.log(logger.getLogs());
// Output:
// [10:30:12] [INFO]: System started
// [10:30:15] [WARN]: Memory usage high
// [10:30:20] [ERROR]: Disk failure detected

logger.clearLogs();
console.log(logger.getLogs()); // Output: ""
