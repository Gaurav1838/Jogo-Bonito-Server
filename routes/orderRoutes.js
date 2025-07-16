import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { items, total } = req.body;

    const newOrder = new Order({ items, total });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

export default router;
