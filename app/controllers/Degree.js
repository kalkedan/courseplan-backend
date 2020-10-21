const db = require("../models");
const Degree = db.degrees;
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
    const degree = {
        dept: req.body.dept,
        degree: req.body.degree,
        hours: req.body.hours
    };

    // Save Course in the database
    Degree.create(degree)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the degree."
            });
        });
};

// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
    Degree.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving degree."
            });
        });
};

// Find a single Course with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Degree.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving degree with id=" + id
            });
        });
};

// Update a Course by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Degree.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "degree was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update degree with id=${id}. Maybe degree was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating degree with id=" + id
            });
        });
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Degree.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "degree was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete degree with id=${id}. Maybe degree was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete degree with id=" + id
            });
        });
};

