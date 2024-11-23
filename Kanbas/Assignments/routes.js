import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmetnId", (req, res) => {
    const { assignmetnId } = req.params;
    const status = dao.deleteAssignment(assignmetnId);
    res.send(status);
  });
  app.put("/api/assignments/:assignmetnId", (req, res) => {
    const { assignmetnId } = req.params;
    const assignmentUpdates = req.body;
    const status = dao.updateAssignment(assignmetnId, assignmentUpdates);
    res.send(status);
  });
  app.get("/api/assignments/:assignmentId",(req, res) => {
    const { assignmentId } = req.params;
    const data = dao.findAssignment(assignmentId);
    if(data.length > 0){
        res.send(data[0]);
    }
    else{
        res.status(null);
    }
    
  })
}
