
export interface User {
    id: number;
    email:string;
    password: string;
    phone: number;
    role: Role;

}
export enum Role {
    USER = 'user',
    ADMIN = 'admin'
}