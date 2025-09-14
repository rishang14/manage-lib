
const clients: Record<string, { send: (data: any) => void; close: () => void }> = {}; 



export const pushToUser = (userId: string, payload: any) => {
  const client = clients[userId];
  if (client) {
    client.send(payload);
  }
}; 

export const registerClient = (
  userId: string,
  send: (data: any) => void,
  close: () => void
) => {
  clients[userId] = { send, close };
}; 

export const removeClient = (userId: string) => {
  delete clients[userId];
};