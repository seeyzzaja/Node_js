export declare class AuthService {
    static JWT_SECRET: string;
    static register(data: {
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
    static login(data: {
        email: string;
        password: string;
    }): Promise<{
        user: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            email: string;
            password_hash: string;
            role: string;
        };
        token: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map