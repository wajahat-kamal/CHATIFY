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
    _id: "14846543553",
    name: "Alice",
    messages: [
      {
        role: "user",
        content: "Hey, how are you?",
        createdAt: new Date("2025-10-02T10:00:00").toISOString(),
      },
      {
        role: "bot",
        content: "I'm good, thanks for asking! How about you?",
        createdAt: new Date("2025-10-02T10:01:00").toISOString(),
      },
      {
        role: "user",
        content: "Doing great! Just working on my React project these days.",
        createdAt: new Date("2025-10-02T10:03:00").toISOString(),
      },
      {
        role: "bot",
        content: "That sounds awesome 🚀 Do you need any help with it?",
        createdAt: new Date("2025-10-02T10:04:00").toISOString(),
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "28498454651",
    name: "Bob",
    messages: [
      {
        role: "user",
        content: "Don't forget our meeting tomorrow at 9 AM!",
        createdAt: new Date("2025-10-01T17:30:00").toISOString(),
      },
      {
        role: "bot",
        content: "Thanks for the reminder 👍 I’ll be there on time.",
        createdAt: new Date("2025-10-01T17:32:00").toISOString(),
      },
      {
        role: "user",
        content: "Great! Also, could you bring the project report?",
        createdAt: new Date("2025-10-01T17:40:00").toISOString(),
      },
      {
        role: "bot",
        content:
          "Of course! I’ll prepare it tonight so we can review together.",
        createdAt: new Date("2025-10-01T17:42:00").toISOString(),
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
        createdAt: new Date("2025-09-30T14:00:00").toISOString(),
      },
      {
        role: "bot",
        content:
          "Sure! You can try Framer Motion, GSAP, and Anime.js. They’re great for creating smooth animations in React and vanilla JS.",
        createdAt: new Date("2025-09-30T14:02:00").toISOString(),
      },
      {
        role: "user",
        content: "Nice! I’ll check out Framer Motion first. Thanks 😊",
        createdAt: new Date("2025-09-30T14:05:00").toISOString(),
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "46848485151",
    name: "Diana",
    messages: [
      {
        role: "user",
        content: "Hi bot, can you give me ser basic code",
        createdAt: new Date("2025-10-02T09:15:00").toISOString(),
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
        createdAt: new Date("2025-10-02T09:16:00").toISOString(),
      },
      {
        role: "user",
        content: "Perfect, I’ll check them out today. Thanks a lot 🙌",
        createdAt: new Date("2025-10-02T09:18:00").toISOString(),
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "468098848484",
    name: "Eve",
    messages: [],
    updatedAt: new Date().toISOString(),
  },
];

export const imagesPublishedData = [
  {
    imageUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    title: "AI Artwork 1",
    userName: "GreatStack",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "AI Artwork 2",
    userName: "John Doe",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1505238680356-667803448bb6",
    title: "AI Artwork 3",
    userName: "Jane Smith",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "AI Artwork 4",
    userName: "Creative AI",
  },
];

export const dummyPlans = [
  {
    _id: "1",
    name: "Starter Pack",
    price: 5,
    credits: 50,
    features: [
      "50 AI credits",
      "Basic support",
      "50 image generations",
      "1 week validity",
    ],
  },
  {
    _id: "2",
    name: "Pro Pack",
    price: 15,
    credits: 200,
    features: [
      "200 AI credits",
      "Priority support",
      "200 image generations",
      "1 month validity",
    ],
  },
  {
    _id: "3",
    name: "Ultimate Pack",
    price: 30,
    credits: 500,
    features: [
      "500 AI credits",
      "24/7 premium support",
      "500 image generations",
      "24/7 VIP support",
      "3 months validity",
    ],
  },
];
