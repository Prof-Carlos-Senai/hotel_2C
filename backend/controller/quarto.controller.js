const Quarto = require('../models/Quarto')

const cadastrar = async (req, res)=>{
    const valores = req.body
    console.log(valores)

    if(!valores.numero || !valores.diasHospedagem || !valores.valorDiaria || !valores.idHospede){
        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }

    try{
        await Quarto.create(valores)
        res.status(201).json({message: 'Quarto Cadastrado com sucesso!'})
    }catch(err){
        console.error('Não foi possível cadastrar o Quarto',err)
        res.status(500).json({message: 'Não foi possível cadastrar o Quarto'})
    }
}
const listar = async (req,res)=>{
    try{
        const dados = await Quarto.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Não foi possível listar os Quartos',err)
        res.status(500).json({message: 'Não foi possível listar os Quartos'})
    }
}
const buscarPorCod = async (req,res)=>{
    const id = req.params.id
    try{
        const dados = await Quarto.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'Quarto não encontrado!'})
        }else{
            res.status(200).json(dados)
        }
    }catch(err){
        console.error('Não foi possível encontrar o Quarto',err)
        res.status(500).json({message: 'Não foi possível encontrar o Quarto'})
    }
}
const excluir = async (req,res)=>{
    const id = req.params.id
    try{
        const dados = await Quarto.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'Quarto não encontrado no banco de dados!'})
        }else{
            await Quarto.destroy({where: { codQuarto: id}})
            res.status(200).json({message: 'Quarto excluído com sucesso!'})
        }
    }catch(err){
        console.error('Não foi possível excluir o Quarto',err)
        res.status(500).json({message: 'Não foi possível excluir o Quarto'})
    }
}
const atualizar = async (req,res)=>{
    const id = req.params.id
    const valores = req.body
    try{
        let dados = await Quarto.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'Quarto não encontrado no banco de dados!'})
        }else{
            await Quarto.update(valores, { where: { codQuarto: id}})
            dados = await Quarto.findByPk(id)
            res.status(200).json(dados)
        }
    }catch(err){
        console.error('Não foi possível atualizar o Quarto',err)
        res.status(500).json({message: 'Não foi possível atualizar o Quarto'})
    }
}
module.exports = { cadastrar, listar, buscarPorCod, excluir, atualizar}