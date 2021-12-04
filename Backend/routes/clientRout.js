const { Router} = require ("express");
const ClientController = require("../controllers/Client.ctrl");

class ClientRouter {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        const cliC = new ClientController ();
        this.router.get('/clients', cliC.getAll);
        this.router.get('/clients/:identification', cliC.getByCode);
        this.router.post('/clients', cliC.create);
        this.router.put('/clients/', cliC.update);
        this.router.delete('/clients/', cliC.delete);
        this.router.get('/countedclients', cliC.count);
        this.router.get('/sortedclients', cliC.getSorted);
    }
}

module.exports = ClientRouter;