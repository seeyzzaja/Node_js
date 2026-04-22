import prisma from "#utils/prisma";
export class CategoryService {
    static async getAll() {
        return await prisma.categories.findMany();
    }
    static async getById(id) {
        const category = await prisma.categories.findUnique({
            where: { id }
        });
        if (!category) {
            throw new Error("Kategori tidak ditemukan");
        }
        return category;
    }
    static async create(data) {
        return await prisma.categories.create({ data });
    }
    static async update(id, data) {
        await this.getById(id);
        return await prisma.categories.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        await this.getById(id);
        return await prisma.categories.delete({
            where: { id }
        });
    }
    static async search(name) {
        const where = {};
        if (name) {
            where.name = {
                contains: name
            };
        }
        return await prisma.categories.findMany({
            where
        });
    }
}
//# sourceMappingURL=category.js.map