import express from "express";
import Jersey from "../models/jersey.js";

const router = express.Router();

// GET all jerseys
router.get("/", async (req, res) => {
  try {
    const jerseys = await Jersey.find();
    res.json(jerseys);
  } catch (err) {
    console.error("Error fetching jerseys:", err.message);
    res.status(500).json({ error: "Server error while fetching jerseys" });
  }
});

// GET jersey by ID
router.get("/:id", async (req, res) => {
  try {
    const jersey = await Jersey.findById(req.params.id);
    if (!jersey) {
      return res.status(404).json({ error: "Jersey not found" });
    }
    res.json(jersey);
  } catch (err) {
    console.error("Error fetching jersey by ID:", err.message);
    res.status(500).json({ error: "Invalid ID or server error" });
  }
});

export default router;
