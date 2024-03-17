import Symptom from "../models/symptoms.model.js";
import fetch from "node-fetch";

const getAllSymptoms = async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.status(200).json(symptoms);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const predictDisease = async (req, res) => {
  const symptom = req.body;
  const symptoms = JSON.stringify(symptom);
  console.log(symptoms);
  const url = "http://localhost:8000/predict_disease";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: symptoms,
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
      console.log(data);
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export { getAllSymptoms, predictDisease };
