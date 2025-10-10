const express = require('express')
const mongoose = require('mongoose')
const dontenv = require('dotenv').config

const DB_HOST= process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const app = express()
app.use(express.json())

//Conectar no Banco Mongo

mongoose.connect('mongodb+srv://luan:67r6526rmVnZvxHF@cluster0.welf4mq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Conectado ao Mongo")
    })
    .catch(err =>{
        console.log('Erro ao Conectar ao Mongo', err)
    })
app.listen(3000, ()=>{
    console.log("Aplicação rodando em http://localhost:3000")
})