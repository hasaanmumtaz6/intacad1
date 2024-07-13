import { model, Schema, models } from "mongoose";

const MeetSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
  time: { type: String, required: true },
  amPm: { type: String, required: true },
  month: { type: String, required: true },
  date: { type: String, required: true },
  plateform: { type: String, required: true },
  country: { type: String, required: true },
  dateSub: {type: Date},
});

export const Meet = models.Meet || model("Meet", MeetSchema);