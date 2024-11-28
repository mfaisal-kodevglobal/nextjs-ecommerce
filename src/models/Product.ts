// models/Product.ts
import mongoose, { Document, Schema } from "mongoose";

// Define the product schema
const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    // Add other fields that exist in your collection
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Create the Product model
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;


