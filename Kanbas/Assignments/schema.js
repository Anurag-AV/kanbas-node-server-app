import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
 {
   title: String,
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
   type: String,
   availableDate: String,
   availableTime: String,
   dueDate: String,
   dueTime: String,
   points: Number,
   description: String,
 },
 { collection: "assignments" }
);
export default courseSchema;
