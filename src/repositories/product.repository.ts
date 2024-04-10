import mongoose from "mongoose";
import {
  Filter,
  Order,
  ProductCreate,
  ProductUpdate,
} from "../common/interface";
import productModel from "../models/product.model";

export default class ProductRepository {
  /**
   * Get list of products by filter and order
   * @param filter Object of filter
   * @param order Object of order
   * @returns Return list of products
   */
  async get(filter: Filter, order: Order) {
    try {
      return productModel.find(filter).sort({ [order.sortBy]: order.orderBy });
    } catch (err) {
      throw new Error("Cannot get list products");
    }
  }

  /**
   * Get detail of product by id
   * @param id Id of product
   * @returns Return detail of product
   */
  async getDetail(id: string) {
    try {
      return await productModel.findById(id);
    } catch (err) {
      throw new Error("Cannot get detail product");
    }
  }

  /**
   * Create a new product
   * @param data Object of product to create
   * @returns Return created product
   */
  async create(data: ProductCreate) {
    try {
      const newProduct = new productModel(data);
      const productSave = await newProduct.save();
      if (!productSave) {
        // Check if product was saved
        throw new Error("Can't create product");
      }
      return productSave;
    } catch (err) {
      throw new Error("Can't create product");
    }
  }

  /**
   * Update product by id
   * @param id Id of product
   * @param data Object of product to update
   * @returns Return updated product
   */
  async update(id: string, data: ProductUpdate) {
    try {
      return await productModel.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
      throw new Error("Cannot update product");
    }
  }

  /**
   * Delete product by id
   * @param id Id of product to delete
   * @throws Error if product has been deleted or cannot delete product
   */
  async delete(id: string) {
    try {
      const product = await productModel.findByIdAndDelete(id);
      if (!product) {
        throw new Error("Product has been deleted");
      }
    } catch (err) {
      throw new Error("Cannot delete product");
    }
  }
}
