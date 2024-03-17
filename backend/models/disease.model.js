import { Schema, model } from "mongoose";

const diseaseSchema = new Schema(
  {
    Disease: {
      type: String,
      required: true,
      trim: true,
    },
    Prevention: [
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

const Disease = model("Disease", diseaseSchema);

export default Disease;
