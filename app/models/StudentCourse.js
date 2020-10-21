module.exports = (sequelize, DataTypes) => {
  const StudentCourse = sequelize.define("StudentCourse", {
    studentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },

    courseId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },

    semesterId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
  }, { timestamps: false });


  return StudentCourse;
};