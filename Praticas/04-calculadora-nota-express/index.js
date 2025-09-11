const express =  require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.use((req, res, next) =>{
    console.log("___________*******_____________")
    console.log("Tempo ", new Date().toLocaleString())
    console.log("Metodo ", req.method)
    console.log("Rota ", req.url)
    next()
})

app.get('/nome', (req, res, next) =>{
    const primeiroNome = req.query.primeiroNome
    const segundoNome = req.query.segundoNome

    
    res.send(`Deu certo ${primeiroNome} ${segundoNome}`)
})

const calculadoraNotaRouter = require('./routes/CalculadoraNota.js')
app.use('/calculadora', calculadoraNotaRouter)

app.listen(3000, () => {
    console.log("Aplicação rodando")
    
})