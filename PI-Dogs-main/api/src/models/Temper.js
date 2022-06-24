const {DataTypes} = require ('sequelize');

module.exports = sequelize => {

    sequelize.define('temper', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    },
        {
            timestamps: false
        }
    )
}