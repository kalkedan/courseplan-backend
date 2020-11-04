'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.courses = require("./Course.js")(sequelize, Sequelize);
db.studentcourses = require("./StudentCourse.js")(sequelize, Sequelize);
db.advisors = require("./Advisor.js")(sequelize, Sequelize);
db.semesters = require("./Semester.js")(sequelize, Sequelize);
db.students = require("./Student.js")(sequelize,Sequelize);
db.degrees = require("./Degree.js")(sequelize,Sequelize);


//db.courses.hasMany(db.studentcourses, { as: "studentcourses" });
db.studentcourses.belongsTo(db.courses, {
  foreignKey: "courseId",
  allowNull: false,
  as: "courses",
});

db.studentcourses.belongsTo(db.semesters, {
  foreignKey: "semesterId",
  allowNull: false,
  as: "semesters",
});

db.studentcourses.belongsTo(db.students, {
  foreignKey: "studentId",
  allowNull: false,
  as: "students",
});

db.students.belongsTo(db.advisors, {
  foreignKey: "advisorId",
  allowNull: false,
  as: "advisors",
});

db.students.belongsTo(db.degrees, {
  foreignKey: "degreeId",
  allowNull: false,
  as: "degrees",
});

module.exports = db;
