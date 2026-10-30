const Hospede = require('./Hospede')
const Quarto = require('./Quarto')

Hospede.hasMany(Quarto,{
    foreignKey: 'idHospede',
    as: 'quartoHospede',
    onDelete: 'CASCADE'
})

Quarto.belongsTo(Hospede,{
    foreignKey: 'idHospede',
    as: 'hospedeQuarto',
    allowNull: false
})


module.exports = { Hospede, Quarto }