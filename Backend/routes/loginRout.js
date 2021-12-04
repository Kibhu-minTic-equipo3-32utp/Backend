const { Router} = require ("express");
const LoginController = require ("../controllers/Login.ctrl");

class LoginRouter {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        const logC = new  LoginController();
        
        this.router.post('/auth', logC.login);
        
    }
}

module.exports = LoginRouter;
