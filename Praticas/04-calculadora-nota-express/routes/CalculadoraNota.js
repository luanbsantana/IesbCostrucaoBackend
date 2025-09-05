const express = require('express')
//criar um router
const router = express.Router()
// Mapeamento das routes e implementação da lógica
router.get('/notaA1', (req, res, next) =>{
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({error:"Notas estão inválidas"})
    }
    if(exercicio <0 || exercicio > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6){
        return res.status(400).json({erro: "notas fora do intervalo"})
    }


    const notaA1 = exercicio + trabalho + prova
    res.json({ notaA1 })
})


module.exports = router