import prisma from "#utils/prisma";
export const findAll = async (skip, take, where, orderBy) => {
    return await prisma.products.findMany({
        skip,
        take,
        where,
        orderBy,
        include: { category: true } // Relation selalu diurus di repo atau service sesuai kebutuhan
    });
};
export const countAll = async (where) => {
    return await prisma.products.count({ where });
};
export const findById = async (id) => {
    return await prisma.products.findUnique({
        where: { id, deletedAt: null },
        include: { category: true }
    });
};
export const create = async (data) => {
    return await prisma.products.create({ data });
};
export const update = async (id, data) => {
    return await prisma.products.update({
        where: { id },
        data
    });
};
export const softDelete = async (id) => {
    return await prisma.products.update({
        where: { id },
        data: { deletedAt: new Date() }
    });
};
//# sourceMappingURL=produk.repositories.js.map