import express from "express";
const router = express.Router();

//import controller

import {
  getAllSymptoms,
  predictDisease,
} from "../controllers/symptoms.controller.js";

//get all symptoms
router.get("/getSymptoms", getAllSymptoms);
router.post("/predict_disease", predictDisease);

export default router;
