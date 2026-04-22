import type { Prisma, Products } from "@prisma/client";
interface FindAllParams {
    page: number;
    limit: number;
    search?: {
        name: string;
        maxPrice?: number;
    };
    sortBy?: string;
    sortOrder?: 'asc' | "desc";
}
export declare class ProductService {
    static getAll(params: FindAllParams): Promise<{
        products: ({
            category: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            name: string;
            id: number;
            description: string | null;
            image: string | null;
            price: Prisma.Decimal;
            stock: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            category_id: number;
        })[];
        totalItems: number;
        totalPages: number;
        currentPage: number;
    }>;
    static getById(id: number): Promise<Products>;
    static create(data: {
        name: string;
        description: string;
        price: number;
        stock: number;
        image: string;
        category_id: number;
    }): Promise<Products>;
    static update(id: number, data: {
        name?: string;
        description?: string;
        price?: number;
        stock?: number;
        category_id?: number;
    }): Promise<Products | undefined>;
    static delete(id: number): Promise<Products | undefined>;
}
export {};
//# sourceMappingURL=product.service.d.ts.map