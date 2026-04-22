import { body,param,validationResult,type ValidationChain } from "express-validator";
import type { Request,Response,NextFunction } from "express";
import { errorResponse } from "#utils/response";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const errorList = errors
      .array()
      .map((err: { type: string; path?: string; msg: string }) => ({
        field: err.type === "field" ? (err.path ?? "unknown") : "unknown",
        message: err.msg,
      }));
    return errorResponse(res, "Validasi gagal", 400, errorList);
  };
};

export const createOrderValidation = [
  body("user_id")
    .trim()
    .notEmpty()
    .withMessage("nama orders wajib diisi")
    .isLength({ min: 3 })
    .withMessage("nama order minimal 3 karakter"),
  body('stock')
  .notEmpty()
  .isNumeric(),
  body(' category_id')
  .isNumeric()
  .notEmpty(),

      body("total_price")
    .isNumeric()
    .withMessage("total price harus angka")
    .custom((value) => value > 0)
    .withMessage("todal price harus lebih dari 0"),
];


export const getOrderByIdValidation=[
    param('id')
    .isNumeric().withMessage('id harus angka')
]