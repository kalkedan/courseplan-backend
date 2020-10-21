const db = require("../models");
const Course = db.courses;
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

    // Create a Course
    const course = {
        name: req.body.name,
        description: req.body.description,
        number: req.body.number
    };

    // Save Course in the database
    Course.create(course)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Course."
            });
        });
};

// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
    Course.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving courses."
            });
        });
};

// Find a single Course with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Course.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Course with id=" + id
            });
        });
};

// Update a Course by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Course.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Course was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Course with id=${id}. Maybe Course was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Course with id=" + id
            });
        });
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Course.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Course was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Course with id=" + id
            });
        });
};

