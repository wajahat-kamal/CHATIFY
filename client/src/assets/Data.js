export const dummyUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  password: "2316skrnehohgoiwerhoigjorj",
  credits: 200,
};

// dummyChats.js
export const dummyChats = [
  {
    _id: "1",
    name: "Alice",
    messages: [
      {
        role: "user",
        content: "Hey, how are you?",
        timestamp: "10:00 AM",
        createdAt: new Date().toISOString(),
      },
      {
        role: "bot",
        content: "I'm good, thanks for asking! How about you?",
        timestamp: "10:01 AM",
        createdAt: new Date().toISOString(),
      },
      {
        role: "user",
        content: "Doing great! Just working on my React project these days.",
        timestamp: "10:03 AM",
        createdAt: new Date().toISOString(),
      },
      {
        role: "bot",
        content: "That sounds awesome 🚀 Do you need any help with it?",
        timestamp: "10:04 AM",
        createdAt: new Date().toISOString(),
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    name: "Bob",
    messages: [
      {
        role: "user",
        content: "Don't forget our meeting tomorrow at 9 AM!",
        timestamp: "Yesterday 5:30 PM",
        createdAt: new Date().toISOString(),
      },
      {
        role: "bot",
        content: "Thanks for the reminder 👍 I’ll be there on time.",
        timestamp: "Yesterday 5:32 PM",
        createdAt: new Date().toISOString(),
      },
      {
        role: "user",
        content: "Great! Also, could you bring the project report?",
        timestamp: "Yesterday 5:40 PM",
        createdAt: new Date().toISOString(),
      },
      {
        role: "bot",
        content:
          "Of course! I’ll prepare it tonight so we can review together.",
        timestamp: "Yesterday 5:42 PM",
        createdAt: new Date().toISOString(),
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    name: "Charlie",
    messages: [
      {
        role: "user",
        content:
          "Hey bot, suggest me some good JavaScript libraries for animations.",
        timestamp: "2 days ago",
        createdAt: new Date().toISOString(),
      },
      {
        role: "bot",
        content:
          "Sure! You can try Framer Motion, GSAP, and Anime.js. They’re great for creating smooth animations in React and vanilla JS.",
        timestamp: "2 days ago",
        createdAt: new Date().toISOString(),
      },
      {
        role: "user",
        content: "Nice! I’ll check out Framer Motion first. Thanks 😊",
        timestamp: "2 days ago",
        createdAt: new Date().toISOString(),
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "4",
    name: "Diana",
    messages: [
      {
        role: "user",
        content: "Hi bot, can you give me ser basic code",
        timestamp: "Today 9:15 AM",
        createdAt: new Date().toISOString(),
      },
      {
        role: "bot",
        content: `// server.js
  import express from "express";
  
  const app = express();
  const PORT = 5000;
  
  // Middleware (for JSON body parsing)
  app.use(express.json());
  
  // Routes
  app.get("/", (req, res) => {
    res.send("🚀 Express server is running!");
  });
  
  // Example API route
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express API 👋" });
  });
  
  // Start server
  app.listen(PORT, () => {
    console.log(\`✅ Server running at http://localhost:\${PORT}\`);
  });`,
        timestamp: "Today 9:16 AM",
        createdAt: new Date().toISOString(),
      },
      {
        role: "user",
        content: "Perfect, I’ll check them out today. Thanks a lot 🙌",
        timestamp: "Today 9:18 AM",
        createdAt: new Date().toISOString(),
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "4",
    name: "Diana",
    messages:[]
  }
];
