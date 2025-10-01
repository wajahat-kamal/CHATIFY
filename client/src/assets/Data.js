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
      role: 'user',
      messages: [
        { content: "Hey, how are you?", sender: "Alice", createdAt: Date.now() },
      ],
      updatedAt: new Date().toISOString(),
    },
    {
      _id: "2",
      name: "Bob",
      role: 'bot',
      messages: [
        { content: "Don't forget our meeting tomorrow!", sender: "Bob", createdAt: Date.now() },
      ],
      updatedAt: new Date().toISOString(),
    },
    {
      _id: "3",
      name: "Charlie",
      role: 'user',
      messages: [],
      updatedAt: new Date().toISOString(),
    },
  ];
  