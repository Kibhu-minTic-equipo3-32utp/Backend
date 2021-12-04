const { Router} = require ("express");
const UserController = require("../controllers/User.ctrl");

class UserRouter {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        const usC = new UserController()
        this.router.get('/users', usC.getAll);
        this.router.get('/users/:identification', usC.getByCode);
        this.router.post('/users', usC.create);
        this.router.put('/users/', usC.update);
        this.router.delete('/users/', usC.delete);
        this.router.get('/countedusers', usC.count);
        this.router.get('/sortedusers', usC.getSorted);
    }
}

module.exports = UserRouter;
