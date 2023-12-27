import UserModel from "../model/user.model.js";

export default class UserController {

    static renderHome (req, res){
        const user = UserModel.getUser(req.session.userEmail);
        res.render("home", {userEmail:req.session.userEmail, user: user});
    }

    static renderLogin(req, res){
        res.render("login");
    }

    static postRegistration(req, res) {
        UserModel.addUser(req.body);
        res.redirect("/login");
    }

    static postLogin(req, res){
        const {email, password} = req.body;
        const result = UserModel.validateUser(email, password);
        req.session.userEmail = email;
        
        if(result){
            res.redirect("/jobs");
        }else{
            res.redirect("/login");
        }
    }

    static renderLogout(req, res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect("/");
            }
        });
        
    }

    static errorPage(req,res){
        const errorMessage = "Only recruiters are allowed to see applicants. Please login as a recruiter.";
        res.render("404-page", {errorMessage:errorMessage});
    }
}


