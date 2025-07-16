import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message saved successfully" });
  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
