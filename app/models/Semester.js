module.exports = (sequelize, DataTypes) => {
    const Semester = sequelize.define("Semester", {
        name: {
            type: DataTypes.STRING
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        }
    }, { timestamps: false });


    return Semester;
};