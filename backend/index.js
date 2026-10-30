const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const hospedeController = require('./controller/hospede.controller')
const quartoController = require('./controller/quarto.controller')

const hostname =  'localhost' // 127.0.0.1
const PORT = 3000
// ------------ Middleware ----------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//--------------- Rotas --------------

app.post('/hospede', hospedeController.cadastrar)
app.get('/hospedes', hospedeController.listar)
app.get('/hospede/:id', hospedeController.buscarPorCod)
app.delete('/hospede/:id',hospedeController.excluir)
app.put('/hospede/:id',hospedeController.atualizar)

app.post('/quarto', quartoController.cadastrar)
app.get('/quartos', quartoController.listar)
app.get('/quarto/:id', quartoController.buscarPorCod)
app.delete('/quarto/:id',quartoController.excluir)
app.put('/quarto/:id',quartoController.atualizar)

app.get('/',(req,res)=>{
    res.status(200).json({message: 'Aplicação rodando!!!'})
})

// -------------- Server -------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de conexão com o banco de dados!',err)
})