import { users } from "#models/user";
export class userService {
    static getAll() {
        return users;
    }
    static getById(id) {
        const user = users.find((p) => p.id === id);
        if (!user)
            throw new Error("user dengan id tersebut tidak ditemukan");
        return user;
    }
    static create(data) {
        const newUsers = {
            id: users.length + 1,
            ...data,
        };
        users.push(newUsers);
        return newUsers;
    }
    static update(id, data) {
        const index = users.findIndex((p) => p.id === id);
        if (index === -1)
            throw new Error("user tidak di temukan");
        users[index] = { ...users[index], ...data };
        return users[index];
    }
    static delete(id) {
        const index = users.findIndex(p => p.id === id);
        if (index === -1)
            throw new Error('produk tidak ditemukan');
        return users.splice(index, 1)[0];
    }
    static search(name, maxPrice) {
        let result = users;
        if (name) {
            result = result.filter(p => p.nama.toLowerCase().includes(name.toLowerCase()));
        }
        if (maxPrice) {
            result = result.filter(p => p.umur <= maxPrice);
        }
        return result;
    }
}
//# sourceMappingURL=user.service.js.map