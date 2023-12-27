import UserController from "../controller/user.controller.js";

export const reqCheck =  (req, res, next)=>{
    if(!req.body.name){
        UserController.postLogin(req, res);
    }else{
        next();
    }
}