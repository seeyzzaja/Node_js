import prisma from "#utils/prisma";
export class ProductService {
    static async getAll(params) {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) + limit;
        const whereClause = {
            deletedAt: null
        };
        if (search?.name) {
            whereClause.name = {
                contains: search.name,
                mode: 'insensitive'
            };
        }
        if (search?.maxPrice) {
            whereClause.price = {
                lte: search.maxPrice
            };
        }
        const products = await prisma.products.findMany({
            skip: skip,
            take: limit,
            where: whereClause,
            orderBy: sortBy ? { [sortBy]: sortOrder || 'desc' } : { createdAt: 'desc' },
            include: {
                category: true,
            },
        });
        const totalItems = await prisma.products.count({
            where: whereClause
        });
        return {
            products,
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page
        };
    }
    static async getById(id) {
        const product = await prisma.products.findUnique({
            where: {
                id,
                deletedAt: null
            },
            include: {
                category: true,
            }
        });
        if (!product) {
            throw new Error("Produk tidak ditemukan");
        }
        return product;
    }
    static async create(data) {
        return await prisma.products.create({ data, include: { category: true } });
    }
    static async update(id, data) {
        await this.getById(id);
        return await prisma.products.update({
            where: {
                id,
                deletedAt: null
            },
            data,
            include: { category: true }
        });
    }
    static async delete(id) {
        await this.getById(id);
        return prisma.products.update({
            where: {
                id,
                deletedAt: null
            },
            data: {
                deletedAt: new Date()
            }
        });
    }
}
//# sourceMappingURL=product.service.js.map