const Student = require("../models/Student.js");

module.exports = app => {
    const students = require("../controllers/Student.js");
  
    var router = require("express").Router();
  
    // Create a new Advisor
    router.post("/", students.create);
  
    // Retrieve all Advisors
    router.get("/", students.findAll);
  
    // Retrieve a single Advisor with id
    router.get("/:id", students.findOne);
  
    // Update a Advisor with id
    router.put("/:id", students.update);
  
    // Delete a Advisor with id
    router.delete("/:id", students.delete);  
  
    app.use('/api/students', router);
  };