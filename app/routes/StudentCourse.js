module.exports = app => {
  const studentCourses = require("../controllers/StudentCourse.js");

  var router = require("express").Router();

  // Create a new Course
  router.post("/", studentCourses.create);

  // Retrieve all Course
  router.get("/", studentCourses.findAll);

  // Retrieve a single Course with id
  router.get("/:id", studentCourses.findOne);

  // Update a Course with id
  router.put("/:id", studentCourses.update);

  // Delete a Course with id
  router.delete("/:id", studentCourses.delete);

  // Retrieve a single Course with id
  router.get("/byStudentId/:studentId", studentCourses.findByStudentId);

  app.use('/api/studentCourses', router);
};