import express from "express";
import * as accController from "../controller/account-controller.js";  

const accRouter = express.Router();

accRouter.post('/sign-up', accController.createAccount);
accRouter.get('/check/:email', accController.checkEmail);
accRouter.post('/login', accController.loginAccount);
// accRouter.put('/:userName', accController.putAccountByUserName);

export default accRouter;