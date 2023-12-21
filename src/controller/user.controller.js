
export default class UserController {

    static renderHome (req, res){
        res.render("home");
    }    

    static renderLogin(req, res){
        res.render("login");
    }
}


