import Symptom from "../models/symptoms.model.js";
import fetch from "node-fetch";
import Disease from "../models/disease.model.js";

const getAllSymptoms = async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.status(200).json(symptoms);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const predictDisease = async (req, res) => {
  try {
    const symptom = req.body;
    console.log("Symptom:", symptom);

    const symptoms = JSON.stringify(symptom);
    console.log("Symptoms JSON:", symptoms);

    const url = "https://unikdahal-diseaseprediction.hf.space/predict_disease";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: symptoms,
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("API Response:", data);

    const { disease_names } = data;
    let Prevention = [];
    const disease = await Disease.find({ Disease: disease_names });
    console.log("Retrieved Disease:", disease);
    if (disease !== null && disease.length > 0) {
      Prevention = disease[0].Prevention;
    }

    res.status(200).json({ disease_names, Prevention });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(404).json({ message: error.message });
  }
};

export { getAllSymptoms, predictDisease };
