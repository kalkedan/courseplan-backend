module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        roll: {
            type: DataTypes.STRING
        },
        major: {
            type: DataTypes.STRING
        },
        gradData: {
            type: DataTypes.STRING
        },
        advisorId: {
            type: DataTypes.INTEGER(11),
            allowNull: false
          },

        degreeId: {
            type: DataTypes.INTEGER(11),
            allowNull: false
          },

    }, { timestamps: false });


    return Student;
};