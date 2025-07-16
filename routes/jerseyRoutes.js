import express from "express";
import Jersey from "../models/jersey.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jerseys = await Jersey.find();
  res.json(jerseys);
});

router.get("/:id", async (req, res) => {
  const jersey = await Jersey.findById(req.params.id);
  if (!jersey) return res.status(404).json({ error: "Not found" });
  res.json(jersey);
});

export default router;
