import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmetnId", async (req, res) => {
    const { assignmetnId } = req.params;
    const status = await dao.deleteAssignment(assignmetnId);
    res.send(status);
  });
  app.put("/api/assignments/:assignmetnId", async (req, res) => {
    const { assignmetnId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmetnId, assignmentUpdates);
    res.send(status);
  });
  app.get("/api/assignments/:assignmentId",async (req, res) => {
    const { assignmentId } = req.params;
    const data = await dao.findAssignment(assignmentId);
    if(data.length > 0){
        res.send(data[0]);
    }
    else{
        res.status(null);
    }
    
  })
}
