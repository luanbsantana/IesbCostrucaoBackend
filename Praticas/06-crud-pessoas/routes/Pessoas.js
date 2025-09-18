const express = require('express')
const router =express.Router()

let bancoPessoas = [
    {
        id: 1,
        nome: 'João',
        cpf: '00100100111',
        email: 'joao@email.com',
        dataNascimento: '01/05/2007'
    },
    {
        id: 2,
        nome: 'Maria',
        cpf: '00100100222',
        email: 'maria@email.com',
        dataNascimento: '01/05/2002'
    },
]

router.get('/pessoas', (req, res, next) =>{
    res.json(bancoPessoas)
})

router.get('/pessoas/:id', (req,res,next) =>{
    const id = req.params.id
    const pessoa = bancoPessoas.find(pessoa => pessoa.id == id)
    if(!pessoa){
        return res.status(404).json({erro: 'Pessoa não encontrada'})
    }
    res.json(pessoa)
})

module.exports = router