import express, {type Request,type Response,type NextFunction } from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import {body,param,type ValidationChain, validationResult} from 'express-validator'


dotenv.config()

const app =express()
const PORT = process.env.PORT || 3000

interface CustomeRequest extends Request{
    startTime?:number
}
 
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req:CustomeRequest,_res:Response,next:NextFunction)=>{
    console.log(`Request masuk: ${req.method} ${req.path}`)
    req.startTime= Date.now()
    next()
})

app.use((req:Request,res:Response,next:NextFunction)=>{
    const apiKey =req.headers['x-api-key']

    if(!apiKey){
        return res.status(401).json({
            success:false,
            message:'header X-API-key wajib diisi untuk akses API'
        })
    }

    if(apiKey !== 'secret-api-key-123'){
        return res.status(403).json({
            success:false,
            message:"api key tidak valid"
        })
    }
    next()
})
interface Product{
    id:number
    nama:string
    deskripsi:string
    harga:number
}

interface Users{
    id:number
    nama:string
    umur:number
    asal:string
}

let products : Product[]= [
  { id: 1, nama: "Laptop Gaming", deskripsi: "Intel i7, RTX 3060", harga: 15000000 },
  { id: 2, nama: "Keyboard Mekanikal", deskripsi: "Blue Switch, RGB", harga: 800000 },
  { id: 3, nama: "Mouse Wireless", deskripsi: "Ergonomic, Silent Click", harga: 300000 }
];

let users : Users[]=[
    {id:1,nama:'naufal',umur:20,asal:'jambi'},
    {id:2,nama:'riski',umur:30,asal:'padang'},
    {id:3,nama:'dimas',umur:25,asal:'jakarta'}
]

interface ApiResponse{
    success:boolean
    message:string
    data?:unknown
    pagination?:{
        page:number
        limit:number
        total:number
    }
    errors?:Array<{
        field:string
        message:string
    }> | {stack?:string}
}

const successResponse =(
    res:Response,
    message:string,
    data :unknown =null ,
    pagination :{page:number; limit:number; total:number}|null = null,
    statusCode:number =200
)=>{
    const response:ApiResponse = {
        success:true,
        message,
    }
    if(data !== null)response.data =data
    if(pagination) response.pagination =pagination

    return res.status(statusCode).json(response)
}

const errorResponse =(
    res: Response,
    message:string,
    statusCode:number =400,
    errors:Array<{field:string;message:string}> | {stack?: string} | null = null
) =>{
    const response :ApiResponse={
        success :false,
        message,
    }
    if(errors) response.errors=errors
    return res.status(statusCode).json(response)
}

const validate =(validations:ValidationChain[]) =>{
    return async (req:Request,res:Response,next:NextFunction) =>{
        await Promise.all(validations.map(validation =>validation.run(req)))
        const errors =validationResult(req)
        if(errors.isEmpty()){
            return next()
        }
        const errorList =errors.array().map((err:{type:string;path?: string;msg:string})=>({
            field:err.type === 'field' ? (err.path??"unknown") : 'unknown',message:err.msg
        }))
        return errorResponse(res, 'Validasi gagal', 400, errorList);
    }
}

const createProductValidation =[
    body('nama')
    .trim()
    .notEmpty().withMessage("nama produk wajib diisi")
    .isLength({min:3}).withMessage('nama produk minimal 3 karakter'),

    body('deskripsi')
    .trim()
    .notEmpty().withMessage('deskripsi wajib diisi'),

    body('harga')
    .isNumeric().withMessage('harga harus angka')
    .custom(value => value >0).withMessage("harga harus lebih dari 0")
]
const createUsersValidation =[
    body('nama')
    .trim()
    .notEmpty().withMessage("nama user wajib diisi")
    .isLength({min:3}).withMessage('nama user minimal 3 karakter'),

    body('asal')
    .trim()
    .notEmpty().withMessage('asal wajib diisi'),

  body('umur')
  .isInt({ min: 1 }).withMessage('umur harus bilangan bulat > 0')

    .custom(value => value >0).withMessage("umur harus lebih dari 0")
]

const getProductByIdValidation=[
    param('id')
    .isNumeric().withMessage('id harus angka')
]


app.get('/',(req:CustomeRequest,res:Response)=>{
    const waktuProses =Date.now() - (req.startTime || Date.now())
    successResponse(res,'selamat datang di e-commerce',{
         message:"selamat datang di API E-Commerce",
        hari:4,
        status:"server ntyala" ,
        waktuProses:`${waktuProses} ms`
    },null,200)
    
})

app.get('/api/search', (req: Request, res: Response) => {
  const { name, max_price } = req.query;
  let result = products;

  if (name) {
    result = result.filter(p => p.nama.toLowerCase().includes((name as string).toLowerCase()))
  }

  if (max_price) {
    result = result.filter(p => p.harga <= Number(max_price))
  }

  return successResponse(res, 'Hasil pencarian', result)
})

app.get('/api/users/search', (req: Request, res: Response) => {
  const { name, max } = req.query;
  let result = users;

  if (name) {
    result = result.filter(p => p.nama.toLowerCase().includes((name as string).toLowerCase()))
  }

  if (max) {
    result = result.filter(p => p.umur <= Number(max))
  }

  return successResponse(res, 'Hasil pencarian', result)
})
app.get('/api/products/:id' ,validate(getProductByIdValidation),(req:Request , res:Response)=>{
    const id =parseInt(req.params.id as string)
    const product =products.find(p => p.id === id)
    if(!product){
        throw new Error('Produk dengan ID tersebut tidak di temukan')
    }
    successResponse(res, 'Produk ditemukan', product);
})
app.get('/api/users/:id' ,validate(getProductByIdValidation),(req:Request , res:Response)=>{
    const id =parseInt(req.params.id as string)
    const user =users.find(p => p.id === id)
  if (!user) {
  return errorResponse(res, 'User dengan ID tersebut tidak ditemukan', 404)
}

    successResponse(res, 'user ditemukan', user);
})


app.post('/api/products',validate (createProductValidation), (req: Request, res: Response) => {
  const { nama, deskripsi, harga } = req.body;

  const newProduct = {
    id: products.length + 1,
    nama: String(nama),
    deskripsi: String(deskripsi),
    harga: Number(harga)
  }

  products.push(newProduct);

  return successResponse(res, 'Produk berhasil ditambahkan', newProduct, null, 201);
})
app.post('/api/users',validate (createUsersValidation), (req: Request, res: Response) => {
  const { nama, umur, asal } = req.body;

  const newUsers = {
    id: users.length + 1,
    nama: String(nama),
    umur: Number(umur),
    asal: String(asal)
  }

  users.push(newUsers);

  return successResponse(res, 'user berhasil ditambahkan', newUsers, null, 201);
})




app.put('/api/products/:id',validate (createProductValidation), (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return errorResponse(res, 'Product tidak ditemukan', 404)
  }

  products[index] = { ...products[index], ...req.body }

  return successResponse(res, 'Product berhasil diperbarui', products[index], null, 200);
})
app.put('/api/users/:id',validate (createUsersValidation), (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const index = users.findIndex(p => p.id === id);

  if (index === -1) {
    return errorResponse(res, 'user tidak ditemukan', 404)
  }

  users[index] = { ...users[index], ...req.body }

  return successResponse(res, 'user berhasil diperbarui', users[index], null, 200);
})

app.delete('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return errorResponse(res, 'Product tidak ditemukan', 404)
  }

  const deletedProduct = products.splice(index, 1);

  return successResponse(res, 'Product berhasil dihapus', deletedProduct[0], null, 200);
})
app.delete('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const index = users.findIndex(p => p.id === id);

  if (index === -1) {
    return errorResponse(res, 'users tidak ditemukan', 404)
  }

  const deletedUsers = users.splice(index, 1);

  return successResponse(res, 'user berhasil dihapus', deletedUsers[0], null, 200);
})

const asyncHandler = (fn:Function) =>{
    return (req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(fn(req,res,next)).catch(next)
    }
}

app.get('/api/test-async', asyncHandler(async (_req: Request, res: Response) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  successResponse(res, "Async berhasil!");
}));

app.use((req: Request, _res: Response) => {
  throw new Error(`Route ${req.originalUrl} tidak ada di API E-Commerce`);
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('ERROR:', err.message);

  const statusCode = err.message.includes('tidak ditemukan') ? 404 : 500;

  errorResponse(res, err.message || 'Terjadi kesalahan server', statusCode, 
    process.env.NODE_ENV === 'development' ? { stack: err.stack as string } : null
  );
});

app.listen(PORT, () => {
  console.log(`Server E-Commerce HARI 4 jalan di http://localhost:${PORT}`);
  console.log(`Jangan lupa kirim header: X-API-Key: secret-api-key-123`);
});


// perbedaan put dan patch adalah kllo put itu harus update semua nya misal
// di dalama nya ada nama umur dan asal maka harus mengupdate semua nya tidak boleh satu saja
// sedangkan patch bisa mengupdate satu data saja misal nya hanya nama nya saja 
// maka nama nya update sedangkan umur dan asal nya tetap data  yang lama.