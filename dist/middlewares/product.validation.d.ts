import { type ValidationChain } from "express-validator";
import type { Request, Response, NextFunction } from "express";
export declare const validate: (validations: ValidationChain[]) => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export declare const createProductValidation: ValidationChain[];
export declare const getProductByIdValidation: ValidationChain[];
//# sourceMappingURL=product.validation.d.ts.map