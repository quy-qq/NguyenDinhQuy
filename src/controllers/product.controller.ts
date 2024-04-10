import { Request, Response } from "express";
import {
  Filter,
  Order,
  ProductCreate,
  ProductUpdate,
} from "../common/interface";
import { ProductService } from "../services/product.service";
export class ProductController {
  async get(request: Request, response: Response) {
    const order = request.query.order as Order;
    const filter = request.query.filter as Filter;
    const products = await new ProductService().get(filter, order);
    return response.send({ success: true, data: products });
  }
  async getDetail(request: Request, response: Response) {
    const id = request.params.id;
    const product = await new ProductService().getDetail(id);
    return response.send({
      success: true,
      message: "Get product detail success",
      data: product,
    });
  }
  async create(request: Request, response: Response) {
    const body: ProductCreate = request.body;
    const product = await new ProductService().create(body);
    return response.send({
      success: true,
      message: "Create product success",
      data: product,
    });
  }
  async update(request: Request, response: Response) {
    const { params, body } = request;
    const product = await new ProductService().update(params.id, body);
    return response.send({
      success: true,
      message: "Update product success",
      data: product,
    });
  }
  async delete(request: Request, response: Response) {
    const { params } = request;
    const product = await new ProductService().delete(params.id);
    return response.send({
      success: true,
      message: "Delete product success",
      data: product,
    });
  }
}
