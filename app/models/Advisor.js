module.exports = (sequelize, DataTypes) => {
    const Advisor = sequelize.define("Advisor", {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        dept: {
            type: DataTypes.STRING
        },
        roll: {
            type: DataTypes.STRING
        }
    }, { timestamps: false });


    return Advisor;
};