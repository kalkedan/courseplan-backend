module.exports = app => {
    const degrees = require("../controllers/Degree.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", degrees.create);
  
    // Retrieve all Tutorials
    router.get("/", degrees.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", degrees.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", degrees.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", degrees.delete);
  
  
    app.use('/api/degrees', router);
  };