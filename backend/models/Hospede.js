const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Hospede = db.define('hospede',{
    codHospede: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(14),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'hospedes'
})

module.exports = Hospede