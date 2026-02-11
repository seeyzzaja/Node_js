import { products } from "#models/product.model";
export class ProductService {
    static getAll() {
        return products;
    }
    static getById(id) {
        const product = products.find(p => p.id === id);
        if (!product)
            throw new Error('produk dengan id itu tidak di temukan');
        return product;
    }
    static create(data) {
        const newProduct = {
            id: products.length + 1,
            ...data
        };
        products.push(newProduct);
        return newProduct;
    }
    static update(id, data) {
        const index = products.findIndex(p => p.id === id);
        if (index === -1)
            throw new Error('produk tidak ditemukan');
        products[index] = { ...products[index], ...data };
        return products[index];
    }
    static delete(id) {
        const index = products.findIndex(p => p.id === id);
        if (index === -1)
            throw new Error('produk tidak ditemukan');
        return products.splice(index, 1)[0];
    }
    static search(name, maxPrice) {
        let result = products;
        if (name) {
            result = result.filter(p => p.nama.toLowerCase().includes(name.toLowerCase()));
        }
        if (maxPrice) {
            result = result.filter(p => p.harga <= maxPrice);
        }
        return result;
    }
}
//# sourceMappingURL=product.service.js.map