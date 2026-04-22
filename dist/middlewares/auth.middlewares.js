import { errorResponse } from "#utils/response";
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'secret_kunci_rahasia';
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authenticate) {
        return errorResponse(res, 'header authorization wajib diisi');
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (error) {
        return errorResponse(res, "token tidak valid");
    }
};
//# sourceMappingURL=auth.middlewares.js.map