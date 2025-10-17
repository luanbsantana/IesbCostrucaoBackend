const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.json())

const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_PASS = process.env.DB_PASS
const DB_USER = process.env.DB_USER

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
.then(()=>{
    console.log("Banco conectado!!!!")
})
.catch(erro =>{
    console.log('Erro ao conectar ao banco!!!', erro)
}
)
//titulo, autor, editora, ano e preco.
const LivroModel = mongoose.model('Livros', new mongoose.Schema(
    {
        titulo: String,
        autor: String,
        editora: String,
        ano: { type: Date, default: Date.now },
        preco: Number,
    }
))

//Cadastrar livro
app.post('/livros', async(req, res, next) =>{
    const {titulo, autor, editora, ano, preco} = req.body
    if(!titulo || !autor || !editora || !ano || !preco){
        return res.status(400).json({erro: "Todos os campos são obrigátorios"})
    }
    const livro = {
        titulo,
        autor,
        editora,
        ano,
        preco
    }
    const LivroCadastrado = await LivroModel.create(livro)
    res.status(201).send(LivroCadastrado)
})
//Buscar
app.get('/livros', async(req, res, next) =>{
    const livro = await LivroModel.find()
    res.json(livro)
  })
//UPDATE
app.put('/livros/:id', async(req, res, next)=>{
    const id = req.params.id
    const livro = req.body
    if(!livro.titulo ){
        return res.status(400).send({error: "Livro não encontrada"})
    }
    const LivroAtualizado = await LivroModel.findByIdAndUpdate(id, livro, {new: true} )

    if(!LivroAtualizado){
        return res.status(404).json({erro: "Livro não encotrado!!!!"})
    }
    res.json(LivroAtualizado)
  })

//DELETE
app.delete('/livros/:id', async (req, res, next) =>{
    const id = req.params.id
    await LivroModel.findByIdAndDelete(id)
    res.json({mensagem: "Livro excluído!!!!"})
  })
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
  })
  