
export default class UserModel{
    
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static addUser(userObj){
        const {name, email, password} = userObj;
        const id = this.createID();
        const newUser = new UserModel(id, name, email, password);
        users.push(newUser);
    }

    static getUser(email){
        if(email==null){
            return null;
        }
        const index = users.findIndex((user)=>{
            return (user.email == email);
        });

        return users[index];
    }

    static createID(){
        return id++;
    }

    static validateUser(email, password){
       const found = users.find((user)=>{
           return (user.email == email && user.password == password);
       })
       if(found){
        return true;
       }
       
       return false;
       
    }
}

let id =2;  

let users = [{
    id:1,
    name: "pavan",
    email:"pavan@gmail.com",
    password: "pavan",
},];