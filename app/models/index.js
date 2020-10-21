'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});




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
