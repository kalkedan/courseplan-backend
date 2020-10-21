module.exports = (sequelize, DataTypes) => {
    const Degree = sequelize.define("Degree", {
        dept: {
            type: DataTypes.STRING,
            allowNull: false
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hours: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
    }, { timestamps: false });


    return Degree;
};