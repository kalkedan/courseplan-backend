module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    dept: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    hours: {
      type: DataTypes.INTEGER(11)
    },
    level: {
      type: DataTypes.INTEGER(11)
    },
    schedule: {
      type: DataTypes.STRING
    },
    descrtion: {
      type: DataTypes.STRING
    }
  }, { timestamps: false });


  return Course;
};