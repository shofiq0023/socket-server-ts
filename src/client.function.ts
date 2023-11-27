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
