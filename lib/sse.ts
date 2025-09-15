
const clients: Record<string, { send: (data: any) => void; }> = {}; 

console.log(clients,"hey my valuse", "now  at begin")

export const pushToUser = (userId: string, payload: any) => {  
  console.log(clients,"hey my valuse", "push to user  ")
  console.log("i am triggered 1")
  if(!userId || !payload) return;  
  console.log("i am triggered 2")
  const client = clients[userId];   
  console.log("📡 Trying to push:", userId, "Available:", Object.keys(clients)); 
  console.log(client,"heyyyyyyyyyyyy")
  console.log("🚀 Sending SSE", userId, JSON.stringify(payload));
  if (client) { 
    console.log(client,"client")
    try {
      client.send(payload); 
      console.log("hey i have sent it this ", userId,payload)
    } catch (error) {
      // Client connection is broken, remove it /li
      console.log("client got disconnected")
      delete clients[userId];
    }
  }
};
export const registerClient = (
  userId: string,
  send: (data: any) => void,
) => { 
  console.log(userId,"getting it id ") 
  console.log(send,"getting it func  ")
  clients[userId] = { send }; 
  console.log("✅ Registered client:", userId, Object.keys(clients)); 
    console.log(clients,"hey my valuse", "push to register user  ")
}; 

export const removeClient = (userId: string) => {
  delete clients[userId];
};