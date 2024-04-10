import {
  Filter,
  Order,
  ProductCreate,
  ProductUpdate,
} from "../common/interface";
import ProductRepository from "../repositories/product.repository";

export class ProductService {
  productRepository = new ProductRepository();

  async get(filter: Filter, order: Order) {
    console.log(filter, order);
    return await this.productRepository.get(filter, order);
  }
  async getDetail(id: string) {
    return await this.productRepository.getDetail(id);
  }
  async create(data: ProductCreate) {
    return await this.productRepository.create(data);
  }
  async update(id: string, data: ProductUpdate) {
    return await this.productRepository.update(id, data);
  }
  async delete(id: string) {
    return await this.productRepository.delete(id);
  }
}
