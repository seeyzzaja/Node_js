export declare class TransactionService {
    static checkout(userId: number, items: {
        productId: number;
        quantity: number;
    }[]): Promise<{
        transactionItems: ({
            product: {
                name: string;
                id: number;
                description: string | null;
                image: string | null;
                price: import("@prisma/client-runtime-utils").Decimal;
                stock: number;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                category_id: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            transaction_id: number;
            product_id: number;
            quantity: number;
            price_at_time: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
    }>;
    static getTransactionById(id: number): Promise<({
        transactionItems: ({
            product: {
                name: string;
                id: number;
                description: string | null;
                image: string | null;
                price: import("@prisma/client-runtime-utils").Decimal;
                stock: number;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                category_id: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            transaction_id: number;
            product_id: number;
            quantity: number;
            price_at_time: import("@prisma/client-runtime-utils").Decimal;
        })[];
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
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
    }) | null>;
}
//# sourceMappingURL=orders.d.ts.map