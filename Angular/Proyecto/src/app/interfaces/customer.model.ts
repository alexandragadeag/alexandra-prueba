export interface customer{
    id: number;
    nif: string;
    firstName: string;
    email: string;
    birthday: Date;
    active: boolean;
    salary?: number;
}