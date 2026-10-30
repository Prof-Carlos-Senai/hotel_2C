const Hospede = require('../models/Hospede')

const cadastrar = async (req, res)=>{
    const valores = req.body
    console.log(valores)

    if(!valores.nome || !valores.cpf || !valores.email || !valores.telefone){
        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }

    try{
        await Hospede.create(valores)
        res.status(201).json({message: 'Hospede Cadastrado com sucesso!'})
    }catch(err){
        console.error('Não foi possível cadastrar o Hospede',err)
        res.status(500).json({message: 'Não foi possível cadastrar o Hospede'})
    }
}
const listar = async (req,res)=>{
    try{
        const dados = await Hospede.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Não foi possível listar os Hospedes',err)
        res.status(500).json({message: 'Não foi possível listar os Hospedes'})
    }
}
const buscarPorCod = async (req,res)=>{
    const id = req.params.id
    try{
        const dados = await Hospede.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'Hospede não encontrado!'})
        }else{
            res.status(200).json(dados)
        }
    }catch(err){
        console.error('Não foi possível encontrar o Hospede',err)
        res.status(500).json({message: 'Não foi possível encontrar o Hospede'})
    }
}
const excluir = async (req,res)=>{
    const id = req.params.id
    try{
        const dados = await Hospede.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'Hospede não encontrado no banco de dados!'})
        }else{
            await Hospede.destroy({where: { codHospede: id}})
            res.status(200).json({message: 'Hospede excluído com sucesso!'})
        }
    }catch(err){
        console.error('Não foi possível excluir o Hospede',err)
        res.status(500).json({message: 'Não foi possível excluir o Hospede'})
    }
}
const atualizar = async (req,res)=>{
    const id = req.params.id
    const valores = req.body
    try{
        let dados = await Hospede.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'Hospede não encontrado no banco de dados!'})
        }else{
            await Hospede.update(valores, { where: { codHospede: id}})
            dados = await Hospede.findByPk(id)
            res.status(200).json(dados)
        }
    }catch(err){
        console.error('Não foi possível atualizar o Hospede',err)
        res.status(500).json({message: 'Não foi possível atualizar o Hospede'})
    }
}
module.exports = { cadastrar, listar, buscarPorCod, excluir, atualizar}