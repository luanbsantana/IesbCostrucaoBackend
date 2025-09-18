const express = require('express')
const router = express.Router()

let contatos = ["joão", "Maria"]

//Listar
router.get('/contatos', (req, res, next) =>{
    res.json(contatos)
})

//Cadastrar
router.post('/contatos', (req, res,next) =>{
    const {nome} = req.body
    if(!nome){
        return res.status(400).json({erro: "Nome é obrigatório!!!"})
    }
    if(contatos.includes(nome)){
        return res.status(409).json({erro: "Contato já existente!!!"})
    }
    contatos.push(nome)
    res.status(201).json({message: "Contato cadastrado com sucesso!!!"})
})

//Deletar
router.delete("/contatos/:nome", (req, res, next) =>{
    const nome = req.params.nome
    contatos = contatos.filter(contato => contato != nome)
    res.json({message: "Contato deletado com sucesso!!!"})
})

//Deletar todos Contatos
router.delete("/contatos", (res, req, next) =>{
    contatos = []
    res.json({message: "Todos contatos deletados com sucesso!!!"})
})
module.exports = router