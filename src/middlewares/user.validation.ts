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

export const createUserValidation = [
  body("nama")
    .trim()
    .notEmpty()
    .withMessage("nama user wajib diisi")
    .isLength({ min: 3 })
    .withMessage("nama user minimal 3 karakter"),

  body("asal").trim().notEmpty().withMessage("asal wajib diisi"),

  body("umur")
    .isNumeric()
    .withMessage("umur harus angka")
    .custom((value) => value > 0)
    .withMessage("umur harus lebih dari 0"),
];

export const getUserByIdValidation=[
    param('id')
    .isNumeric().withMessage('id harus angka')
]