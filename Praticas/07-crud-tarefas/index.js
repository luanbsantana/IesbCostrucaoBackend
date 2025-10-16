
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.json())

// Connetar no banco Mongo
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB")
  })
  .catch(err => {
    console.log("Erro ao conectar no banco Mo'ngoDB: ", err)
  })

  const TarefaModel = mongoose.model('Tarefas', new mongoose.Schema(
    {
        nome: String
    }
  ))

  //Create
  app.post('/tarefas', async (req, res, next)=>{
    const tarefa = req.body
    if(!tarefa.nome){
        return res.status(400).json({erro: "O campo nome é obrigátorio"})
    }
    const TarefaCriada = await TarefaModel.create(tarefa)
    res.status(201).send(TarefaCriada)
  })
  //Read
  app.get('/tarefas', async(req, res, next) =>{
    const tarefas = await TarefaModel.find()
    res.json(tarefas)
  })
  //UPDATE
  app.put('/tarefas/:id', async(req, res, next)=>{
    const id = req.params.id
    const tarefa = req.body
    if(!tarefa.nome){
        return res.status(400).send({error: "Tarefa não encontrada"})
    }
    const TarefaAtualizada = await TarefaModel.findByIdAndUpdate(id, tarefa, {new: true} )

    if(!TarefaAtualizada){
        return res.status(404).json({erro: "Tarefa não encontrada!!!!"})
    }
    res.json(TarefaAtualizada)
  })
  //DELETE
  app.delete('/tarefas/:id', async (req, res, next) =>{
    const id = req.params.id
    await TarefaModel.findByIdAndDelete(id)
    res.json({mensagem: "Tarefa excluída!!!!"})
  })
app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000")
})
