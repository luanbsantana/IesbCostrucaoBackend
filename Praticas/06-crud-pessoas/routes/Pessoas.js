const express = require('express')
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

router.post('/pessoas', (req,res,next)=>{
    const{nome, cpf, email, dataNascimento} = req.body

    if(!nome || !cpf || !email || !dataNascimento){
        return res.status(400).json({error: "Nome, CPF, Email e Data de Nascimento são dados obrigatórios"})
    }
    if(bancoPessoas.some(pessoa => pessoa.cpf == cpf)){
        return res.status(409).json({error: "Cpf já cadastrado"})
    }
    
    const novaPessoa = {
        id: Date.now(),
        nome,
        cpf,
        email,
        dataNascimento,
    }

    bancoPessoas.push(novaPessoa)
    res.status(201).json({message: "Pessoa cadastrada com sucesso"}, novaPessoa)
})

router.put('/pessoas/:id', (req,res,next) =>{
    const id = req.params.id
    const pessoa = bancoPessoas.find(pessoa => pessoa.id == id)

    if(!pessoa){
        return res.status(404).json({error: "Pessoa não encontrar"})
    }

    const {nome, email, dataNascimento} = req.body
    if(!nome || !email || !dataNascimento){
        return res.status(400).json({erro: "Nome, Email e Data de Nascimento são dados obrigatórios"})
    }
    pessoa.nome = nome
    pessoa.email = email
    pessoa.dataNascimento = dataNascimento

    res.json({message: "Pessoa cadastrada com sucesso!!!"}, pessoa)

})

module.exports = router