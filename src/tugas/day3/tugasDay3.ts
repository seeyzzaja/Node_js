
// interface Users{
//     id:number
//     nama:string
//     umur:number
//     asal:string
// }



// let users : Users[]=[
//     {id:1,nama:'naufal',umur:20,asal:'jambi'},
//     {id:2,nama:'riski',umur:30,asal:'padang'},
//     {id:3,nama:'dimas',umur:25,asal:'jakarta'}
// ]



// const createUsersValidation =[
//     body('nama')
//     .trim()
//     .notEmpty().withMessage("nama user wajib diisi")
//     .isLength({min:3}).withMessage('nama user minimal 3 karakter'),

//     body('asal')
//     .trim()
//     .notEmpty().withMessage('asal wajib diisi'),

//   body('umur')
//   .isInt({ min: 1 }).withMessage('umur harus bilangan bulat > 0')

//     .custom(value => value >0).withMessage("umur harus lebih dari 0")
// ]





// app.get('/api/search', (req: Request, res: Response) => {
//   const { name, max_price } = req.query;
//   let result = products;

//   if (name) {
//     result = result.filter(p => p.nama.toLowerCase().includes((name as string).toLowerCase()))
//   }

//   if (max_price) {
//     result = result.filter(p => p.harga <= Number(max_price))
//   }

//   return successResponse(res, 'Hasil pencarian', result)
// })

// app.get('/api/users/search', (req: Request, res: Response) => {
//   const { name, max } = req.query;
//   let result = users;

//   if (name) {
//     result = result.filter(p => p.nama.toLowerCase().includes((name as string).toLowerCase()))
//   }

//   if (max) {
//     result = result.filter(p => p.umur <= Number(max))
//   }

//   return successResponse(res, 'Hasil pencarian', result)
// })
// app.get('/api/products/:id' ,validate(getProductByIdValidation),(req:Request , res:Response)=>{
//     const id =parseInt(req.params.id as string)
//     const product =products.find(p => p.id === id)
//     if(!product){
//         throw new Error('Produk dengan ID tersebut tidak di temukan')
//     }
//     successResponse(res, 'Produk ditemukan', product);
// })
// app.get('/api/users/:id' ,validate(getProductByIdValidation),(req:Request , res:Response)=>{
//     const id =parseInt(req.params.id as string)
//     const user =users.find(p => p.id === id)
//   if (!user) {
//   return errorResponse(res, 'User dengan ID tersebut tidak ditemukan', 404)
// }

//     successResponse(res, 'user ditemukan', user);
// })


// app.post('/api/products',validate (createProductValidation), (req: Request, res: Response) => {
//   const { nama, deskripsi, harga } = req.body;

//   const newProduct = {
//     id: products.length + 1,
//     nama: String(nama),
//     deskripsi: String(deskripsi),
//     harga: Number(harga)
//   }

//   products.push(newProduct);

//   return successResponse(res, 'Produk berhasil ditambahkan', newProduct, null, 201);
// })
// app.post('/api/users',validate (createUsersValidation), (req: Request, res: Response) => {
//   const { nama, umur, asal } = req.body;

//   const newUsers = {
//     id: users.length + 1,
//     nama: String(nama),
//     umur: Number(umur),
//     asal: String(asal)
//   }

//   users.push(newUsers);

//   return successResponse(res, 'user berhasil ditambahkan', newUsers, null, 201);
// })




// app.put('/api/products/:id',validate (createProductValidation), (req: Request, res: Response) => {
//   const id = parseInt(req.params.id as string);
//   const index = products.findIndex(p => p.id === id);

//   if (index === -1) {
//     return errorResponse(res, 'Product tidak ditemukan', 404)
//   }

//   products[index] = { ...products[index], ...req.body }

//   return successResponse(res, 'Product berhasil diperbarui', products[index], null, 200);
// })
// app.put('/api/users/:id',validate (createUsersValidation), (req: Request, res: Response) => {
//   const id = parseInt(req.params.id as string);
//   const index = users.findIndex(p => p.id === id);

//   if (index === -1) {
//     return errorResponse(res, 'user tidak ditemukan', 404)
//   }

//   users[index] = { ...users[index], ...req.body }

//   return successResponse(res, 'user berhasil diperbarui', users[index], null, 200);
// })

// app.delete('/api/products/:id', (req: Request, res: Response) => {
//   const id = parseInt(req.params.id as string);
//   const index = products.findIndex(p => p.id === id);

//   if (index === -1) {
//     return errorResponse(res, 'Product tidak ditemukan', 404)
//   }

//   const deletedProduct = products.splice(index, 1);

//   return successResponse(res, 'Product berhasil dihapus', deletedProduct[0], null, 200);
// })
// app.delete('/api/users/:id', (req: Request, res: Response) => {
//   const id = parseInt(req.params.id as string);
//   const index = users.findIndex(p => p.id === id);

//   if (index === -1) {
//     return errorResponse(res, 'users tidak ditemukan', 404)
//   }

//   const deletedUsers = users.splice(index, 1);

//   return successResponse(res, 'user berhasil dihapus', deletedUsers[0], null, 200);
// })

// const asyncHandler = (fn:Function) =>{
//     return (req:Request,res:Response,next:NextFunction)=>{
//         Promise.resolve(fn(req,res,next)).catch(next)
//     }
// }

// app.get('/api/test-async', asyncHandler(async (_req: Request, res: Response) => {
//   await new Promise(resolve => setTimeout(resolve, 100));
//   successResponse(res, "Async berhasil!");
// }));





// app.listen(PORT, () => {
//   console.log(`Server E-Commerce HARI 4 jalan di http://localhost:${PORT}`);
//   console.log(`Jangan lupa kirim header: X-API-Key: secret-api-key-123`);
// });


// // perbedaan put dan patch adalah kllo put itu harus update semua nya misal
// // di dalama nya ada nama umur dan asal maka harus mengupdate semua nya tidak boleh satu saja
// // sedangkan patch bisa mengupdate satu data saja misal nya hanya nama nya saja 
// // maka nama nya update sedangkan umur dan asal nya tetap data  yang lama.