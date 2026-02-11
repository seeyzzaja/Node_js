import { Router } from "express";
import { createUser, deleteUser, getAllUser, getUserById, searchUser, updateUser } from "#controllers/user.control";
import { createUserValidation, getUserByIdValidation, validate } from "#middlewares/user.validation";
const routerUser = Router();
routerUser.get('/user', getAllUser);
routerUser.get('/user/search', searchUser);
routerUser.get('/user/:id', validate(getUserByIdValidation), getUserById);
routerUser.post('/user', validate(createUserValidation), createUser);
routerUser.put('/user/:id', validate(createUserValidation), updateUser);
routerUser.delete('/user/:id', validate(getUserByIdValidation), deleteUser);
export default routerUser;
//# sourceMappingURL=user.route.js.map