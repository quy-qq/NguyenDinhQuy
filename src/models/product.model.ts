import mongoose, { Document, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

export interface Product extends Document {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export const productSchema = new Schema<Product>(
  {
    name: { type: String, require: true, index: true },
    price: { type: Number, min: 18, index: true, require: true },
    quantity: { type: Number, require: true },
    description: { type: String, require: true, index: true },
    active: { type: Boolean, require: true, default: true },
  },
  {
    timestamps: true,
  }
);
productSchema.plugin(paginate);
const productModel = mongoose.model("products", productSchema);
export default productModel;
