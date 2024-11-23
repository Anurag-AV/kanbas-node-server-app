import * as EnrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
 app.post("/api/enrollments/unenroll", async (req, res) => {
    const {userId, courseId} = req.body;
   const status = await EnrollmentsDao.unenrollUserFromCourse(userId, courseId);
   res.send(status);
 });
 app.post("/api/enrollments/enroll", async (req, res) => {
    const {userId, courseId} = req.body;
    const status = await EnrollmentRoutes.enrollUserInCourse(userId, courseId);
    res.send(status);
  });
}


