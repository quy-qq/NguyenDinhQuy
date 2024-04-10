import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

class ProductRouter {
  router: Router;
  productController = new ProductController();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", this.productController.get);
    this.router.get("/detail/:id", this.productController.getDetail);
    this.router.post("/", this.productController.create);
    this.router.put("/:id", this.productController.update);
    this.router.delete("/:id", this.productController.delete);
  }
}

export default new ProductRouter().router;
