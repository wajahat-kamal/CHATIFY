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
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    name: "Bob",
    messages: [
      {
        role: "bot",
        content: "Don't forget our meeting tomorrow at 9 AM!",
        timestamp: "Yesterday",
        createdAt: new Date().toISOString(),
      },
      {
        role: "user",
        content: "Thanks for the reminder 👍",
        timestamp: "Yesterday",
        createdAt: new Date().toISOString(),
      },
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    name: "Charlie",
    messages: [],
    updatedAt: new Date().toISOString(),
  },
];
