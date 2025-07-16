import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      size: String,
      price: Number,
      quantity: Number,
      image: String,
    }
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

const Order = mongoose.model("Order", orderSchema);
export default Order;
