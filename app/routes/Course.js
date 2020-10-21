module.exports = app => {
    const courses = require("../controllers/Course.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", courses.create);
  
    // Retrieve all Tutorials
    router.get("/", courses.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", courses.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", courses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", courses.delete);
  
  
    app.use('/api/courses', router);
  };