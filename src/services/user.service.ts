import { users, type Users } from "#models/user";

export class userService {
  static getAll(): Users[] {
    return users;
  }
  static getById(id: number): Users {
    const user = users.find((p) => p.id === id);
    if (!user) throw new Error("user dengan id tersebut tidak ditemukan");
    return user;
  }
  static create(data: { nama: string; umur: number; asal: string }): Users {
    const newUsers = {
      id: users.length + 1,
      ...data,
    };
    users.push(newUsers);
    return newUsers;
  }
  static update(id: number, data: any): Users | undefined {
    const index = users.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("user tidak di temukan");
    users[index] = { ...users[index], ...data };
    return users[index];
  }
   static delete(id:number):Users | undefined{
          const index = users.findIndex( p => p.id === id)
          if(index === -1) throw new Error('produk tidak ditemukan')
              return users.splice(index,1)[0]
      }
      static search(name?:string,maxPrice?:number):Users[]{
          let result =users
          if (name){
              result =result.filter(p => p.nama.toLowerCase().includes(name.toLowerCase()))
              
          }
          if(maxPrice){
              result=result.filter(p =>p.umur <= maxPrice)
          }
         return result 
      }
}
