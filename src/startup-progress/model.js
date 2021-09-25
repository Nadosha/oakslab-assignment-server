import * as mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});
const StepsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: false,
  },
  toDo: {
    type: [todoSchema],
    required: true,
  },
});

export const Steps = mongoose.model("steps", StepsSchema);
