import express from 'express';
import * as userController from '../controllers/user.controllers.js';
import {body}  from 'express-validator';


//const routes = Routes();
const router = express.Router();

router.post('/register' ,
    body('email').isEmail().withMessage('email must be a valid email address'),
    body('password').isLength({min:3}).withMessage('password must be at least 6 charech=ter long '),
    
     userController.createUserController);


export default router;