import { Client } from "./client.model";

let clients: Client[] = [];

export function addClient(username: string | string[], sid: string): void {
    const data: Client = {
        name: username,
        sid: sid,
    };
    clients.push(data);

    viewClients();
}

export function viewClients(): Client[] {
    return clients;
}

export function getClientSid(username: string): string {
    let client: Client = clients.filter((c) => c.name == username)[0];
    
    return client.sid;
}