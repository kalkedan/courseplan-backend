const db = require("../models");
const Course = db.courses;
const StudentCourse = db.studentcourses;
const Semester = db.semesters;
const  Student =db.students

const Op = db.Sequelize.Op;

// Create and Save a new Course
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a studentcourses
  const studentcourses = {
    courseId: req.body.courseId,
    semesterId : req.body.semesterId,
    studentId: req.body.studentId,
    grade: req.body.grade
  };

  // Save Course in the database
  StudentCourse.create(studentcourses)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the studentcourses."
      });
    });
};
// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
  StudentCourse.findAll({ include: [ "courses", "semesters","students"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving student course."
      });
    });
};

// Find a single StudentCourse with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  StudentCourse.findByPk(id, { include: [ "courses", "semesters","students"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving StudentCourse with id=" + id
      });
    });
};

// Update a Course by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  StudentCourse.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Course was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update StudentCourse with id=${id}. Maybe StudentCourse was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating StudentCourse with id=" + id
      });
    });
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  StudentCourse.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StudentCourse was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete StudentCourse with id=${id}. Maybe StudentCourse was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete StudentCourse with id=" + id
      });
    });
};

// exports.findCourseById = (req, res) => {
//   const courseId = req.params.courseId;

//   Course.findByPk(courseId, { include: ["studentCourses"] })
//       .then(data => {
//           res.send(data);
//       })
//       .catch(err => {
//           res.status(500).send({
//               message: "Error retrieving Course with id=" + id
//           });
//       });
// };
