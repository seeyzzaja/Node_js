import { type Users } from "#models/user";
export declare class userService {
    static getAll(): Users[];
    static getById(id: number): Users;
    static create(data: {
        nama: string;
        umur: number;
        asal: string;
    }): Users;
    static update(id: number, data: any): Users | undefined;
    static delete(id: number): Users | undefined;
    static search(name?: string, maxPrice?: number): Users[];
}
//# sourceMappingURL=user.service.d.ts.map