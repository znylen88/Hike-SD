module.exports = function (sequelize, DataTypes) {
    var hikes = sequelize.define("hikes", {
        hike_ID_API: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        visitor_count: DataTypes.INTEGER
    });
    return hikes;
};