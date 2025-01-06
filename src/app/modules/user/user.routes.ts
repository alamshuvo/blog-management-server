import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import userValidationSchema from "./user.validation";
import { userController } from "./user.controller";

const router = Router();
router.post('/register',validateRequest(userValidationSchema),userController.createUser)



export const userRoutes= router