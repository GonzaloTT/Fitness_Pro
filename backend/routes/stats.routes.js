import express from "express";

import {
  getStats,
  updateWeight,
  addTrainingDay
} from "../controllers/stats.controller.js";

const router = express.Router();

router.get("/:userId", getStats);

router.post("/:userId/weight", updateWeight);

router.post("/:userId/training", addTrainingDay);

export default router;