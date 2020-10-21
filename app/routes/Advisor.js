module.exports = app => {
    const advisors = require("../controllers/Advisor.js");
  
    var router = require("express").Router();
  
    // Create a new Advisor
    router.post("/", advisors.create);
  
    // Retrieve all Advisors
    router.get("/", advisors.findAll);
  
    // Retrieve a single Advisor with id
    router.get("/:id", advisors.findOne);
  
    // Update a Advisor with id
    router.put("/:id", advisors.update);
  
    // Delete a Advisor with id
    router.delete("/:id", advisors.delete);  
  
    app.use('/api/advisors', router);
  };