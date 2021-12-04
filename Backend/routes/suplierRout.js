const { Router} = require ("express");
const SuplierController = require("../controllers/Suplier.ctrl");

class SuplierRouter {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        const supC = new SuplierController();
        this.router.get('/supliers', supC.getAll);
        this.router.get('/supliers/:ruc', supC.getByCode);
        this.router.post('/supliers', supC.create);
        this.router.put('/supliers/', supC.update);
        this.router.delete('/supliers/', supC.delete);
        this.router.get('/countedsupliers', supC.count);
        this.router.get('/sortedsupliers', supC.getSorted);
    }
}
/*  
const clientController = require("../controllers/Client.ctrl");
const productController = require("../controllers/Product.ctrl");
const userController = require("../controllers/User.ctrl");
// Client Routes
router.get("/clients", clientController.getAll);

router.get("/sortedclients", clientController.getSorted);

router.get("/countedclients", clientController.count);

router.get("/clients/:identification", clientController.getByCode);

router.post("/clients", clientController.create);

router.put("/clients/:identification", clientController.update);

router.delete("/clients/:identification", clientController.delete);
// Fin Clients route

// Product Routes
router.get("/products", productController.getAll);
router.get("/countedproducts", productController.count);
router.get("/products/:reference", productController.getByCode);
router.post("/products", productController.create);
router.put("/products/:reference", productController.update);
router.delete("/products/:reference", productController.delete);
// Fin Products route 

// Users Routes
router.get("/users", userController.getAll);

router.get("/countedusers", userController.count);

router.get("/users/:username", userController.getByCode);

router.post("/users", userController.create);

router.put("/users/:username", userController.update);

router.delete("/users/:username", userController.delete);

router.post("/authenticate", userController.validateUser);
// Fin Users route */

// supliers routes

/*  
router.get("/countedsupliers", suplierController.count);

router.get("/supliers/:ruc", suplierController.getByCode);

router.post("/supliers", suplierController.create);

router.put("/supliers/:ruc", suplierController.update);

router.delete("/supliers/:ruc", suplierController.delete);*/

module.exports = SuplierRouter;
