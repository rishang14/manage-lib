
const clients: Record<string, { send: (data: any) => void; }> = {}; 



export const pushToUser = (userId: string, payload: any) => {
  const client = clients[userId];
  if (client) {
    try {
      client.send(payload);
    } catch (error) {
      // Client connection is broken, remove it
      delete clients[userId];
    }
  }
};

export const registerClient = (
  userId: string,
  send: (data: any) => void,
) => {
  clients[userId] = { send };
}; 

export const removeClient = (userId: string) => {
  delete clients[userId];
};