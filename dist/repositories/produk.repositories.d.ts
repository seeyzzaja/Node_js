import type { Prisma } from "@prisma/client";
export declare const findAll: (skip: number, take: number, where: Prisma.ProductsWhereInput, orderBy: Prisma.ProductsOrderByWithRelationInput) => Promise<({
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
})[]>;
export declare const countAll: (where: Prisma.ProductsWhereInput) => Promise<number>;
export declare const findById: (id: number) => Promise<({
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
}) | null>;
export declare const create: (data: Prisma.ProductsCreateInput) => Promise<{
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
}>;
export declare const update: (id: number, data: Prisma.ProductsUpdateInput) => Promise<{
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
}>;
export declare const softDelete: (id: number) => Promise<{
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
}>;
//# sourceMappingURL=produk.repositories.d.ts.map