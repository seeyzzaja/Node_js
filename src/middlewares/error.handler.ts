import type { Request, Response, NextFunction } from 'express';
import { errorResponse } from '#utils/response';
import  config  from '#utils/env'

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('ERROR:', err.message);

  const statusCode = err.message.includes('tidak ditemukan') ? 404 : 400;

  errorResponse(res, err.message || 'Terjadi kesalahan server', statusCode, 
   config.NODE_ENV === 'development' ? { stack: err.stack } : null
  );
};
