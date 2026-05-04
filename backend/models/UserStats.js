import mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },

  weightHistory: [
    {
      date: Date,
      weight: Number
    }
  ],

  trainingFrequency: [
    {
      date: Date,
      trained: Boolean
    }
  ]
});

export default mongoose.model(
  "UserStats",
  statsSchema
);