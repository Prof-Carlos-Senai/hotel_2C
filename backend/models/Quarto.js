const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Quarto = db.define('quarto',{
    codQuarto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    diasHospedagem: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valorDiaria: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    idHospede: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            key: 'codHospede',
            model: 'hospedes'
        }
    }
},{
    timestamps: false,
    tableName: 'quartos'
})

module.exports = Quarto