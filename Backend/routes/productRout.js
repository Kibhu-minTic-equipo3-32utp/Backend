const { Router} = require ("express");
const ProductController = require("../controllers/Product.ctrl");

class ProductRouter {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        const proC = new ProductController ();
        this.router.get('/products', proC.getAll);
        this.router.get('/products/:reference', proC.getByCode);
        this.router.post('/products', proC.create);
        this.router.put('/products/', proC.update);
        this.router.delete('/products/', proC.delete);
        this.router.get('/countedproducts', proC.count);
        this.router.get('/sortedproducts', proC.getSorted);
    }
}

module.exports = ProductRouter;
