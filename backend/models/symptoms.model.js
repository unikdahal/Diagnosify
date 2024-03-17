import { Schema, model } from "mongoose";

//store list of symptoms
const symptomSchema = new Schema(
  {
    symptom: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Symptom = model("Symptom", symptomSchema);

export default Symptom;
