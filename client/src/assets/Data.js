export const dummyUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  password: "2316skrnehohgoiwerhoigjorj",
  credits: 200,
};

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
      {
        role: "bot",
        content: 
        "✅ Kya change kiya Har chat me multiple messages add kiye (forward-back style conversation). Zyada realistic content dala (React project, meeting reminder, JS libraries).Timestamps thode realistic banaye (Yesterday, 10:04 AM, 2 days ago).👉 Chahte ho mai isme moment ka use karke timestamp ko auto generate kar du (e.g., moment().subtract(2,.fromNow()) taa ke manual time likhne ki zarurat na ho? ",
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
        content: "Of course! I’ll prepare it tonight so we can review together.",
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
        content: "Hey bot, suggest me some good JavaScript libraries for animations.",
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
];

