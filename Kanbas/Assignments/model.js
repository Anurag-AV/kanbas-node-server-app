import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("Assignments", schema);
export default model;