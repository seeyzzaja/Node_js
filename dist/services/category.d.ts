import type { Categories } from "@prisma/client";
export declare class CategoryService {
    static getAll(): Promise<Categories[]>;
    static getById(id: number): Promise<Categories>;
    static create(data: {
        name: string;
    }): Promise<Categories>;
    static update(id: number, data: {
        name: string;
    }): Promise<Categories>;
    static delete(id: number): Promise<Categories>;
    static search(name?: string): Promise<Categories[]>;
}
//# sourceMappingURL=category.d.ts.map