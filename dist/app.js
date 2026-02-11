import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import router from '#routes/product.route';
import { errorHandler } from '#middlewares/error.handler';
import { successResponse } from '#utils/response';
import dotenv from 'dotenv';
import routerUser from '#routes/user.route';
dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, _res, next) => {
    console.log(`Request masuk: ${req.method} ${req.path}`);
    req.startTime = Date.now();
    next();
});
app.get('/', (req, res) => {
    const waktuProses = Date.now() - (req.startTime || Date.now());
    successResponse(res, 'selamat datang di e-commerce', {
        message: "selamat datang di API E-Commerce",
        hari: 4,
        status: "server ntyala",
        waktuProses: `${waktuProses} ms`
    }, null, 200);
});
app.use((req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
        return res.status(401).json({
            success: false,
            message: 'header X-API-key wajib diisi untuk akses API'
        });
    }
    if (apiKey !== 'secret-api-key-123') {
        return res.status(403).json({
            success: false,
            message: "api key tidak valid"
        });
    }
    next();
});
app.use('/api', router);
app.use('/api', routerUser);
app.use(errorHandler);
app.use((req, _res) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API E-Commerce`);
});
export default app;
//# sourceMappingURL=app.js.map