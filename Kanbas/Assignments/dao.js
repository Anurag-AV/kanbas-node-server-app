import Database from "../Database/index.js";
import model from "./model.js";
export async function findAssignment(assignmentId) {
    const assignment = await model.find({_id:assignmentId});
  return assignment;
}
export async function findAssignmentsForCourse(courseId) {
  const courseAssignments = await model.find({course:courseId});
    return courseAssignments;
  }
  export async function createAssignment(assignment) {
    const courseAssignments = await model.create(assignment);
    return courseAssignments;
  }
  export async function deleteAssignment(assignmentId) {
    return await model.deleteOne({ _id: assignmentId });
    }
  export async function updateAssignment(assignmentId, assignmentUpdates) {
    return await  model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
  }

 
  
  
  
  
