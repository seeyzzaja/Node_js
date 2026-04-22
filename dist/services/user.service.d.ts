export declare class UserService {
    static getAll(): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        password_hash: string;
        role: string;
    }[]>;
    static getById(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        password_hash: string;
        role: string;
    } | null>;
    static create(data: {
        name: string;
        email: string;
        password: string;
        role?: string;
    }): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        password_hash: string;
        role: string;
    }>;
    static update(id: number, data: {
        name?: string;
        email?: string;
    }): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        password_hash: string;
        role: string;
    }>;
    static delete(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        password_hash: string;
        role: string;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map