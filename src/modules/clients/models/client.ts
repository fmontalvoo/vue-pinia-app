export interface Client {
    id:       number;
    isActive: boolean;
    picture:  string;
    age:      number;
    eyeColor: string;
    name:     string;
    gender:   string;
    company:  string;
    email:    string;
    phone:    string;
    address:  string;
}

export const toClient = (json: string): Client => JSON.parse(json)

export const clientToJson = (value: Client): string => JSON.stringify(value)