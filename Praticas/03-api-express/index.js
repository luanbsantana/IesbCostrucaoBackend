const express = require('express')

// criar instancia express na aplicação 

const app = express()

// guarda o numero da porta que vai ser alocada

const porta = 3000

// Middlewares(intermediários)

app.get('/teste', (req, res, next) =>{
    res.send('Reposta para a requisição no /teste')
})

// Executa a aplicação escolhendo a porta 

app.listen(porta, () => {
    // imprimindo uma mensagem para confirmar que a aplicação está funcionando

    console.log(`Aplicação rodando em http://localhost:${porta}`)
})