const express = require('express')
//criar um router
const router = express.Router()

// Mapeamento das routes e implementação da lógica

//Rota Nota01
router.get('/notaA1', (req, res, next) =>{
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({error:"Notas estão inválidas"})
    }
    if(exercicio <0 || exercicio > 1 || trabalho < 0 || trabalho >= 3 || prova < 0 || prova >= 6){
        return res.status(400).json({erro: "notas fora do intervalo"})
    }


    const notaA1 = exercicio + trabalho + prova
    res.json({ notaA1 })
})

//Rota Nota01
router.get('/notaA2', (req, res, next) =>{
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({error:"Notas estão inválidas"})
    }
    if(exercicio <0 || exercicio > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6){
        return res.status(400).json({erro: "notas fora do intervalo"})
    }


    const notaA2 = exercicio + trabalho + prova
    res.json({ notaA2 })
})

router.get('/media', (req, res, next) =>{
    const notaA1 = parseFloat(req.query.notaA1)
    const notaA2 = parseFloat(req.query.notaA2)
    if(isNaN(notaA1) || isNaN(notaA2)){
        return res.status(400).json({error:"Notas estão inválidas"})
    }
    if(notaA1 <0 || notaA1 > 10 || notaA2 < 0 ||    notaA2 > 10 ){
        return res.status(400).json({erro: "notas fora do intervalo"})
    }


    const media = (notaA1 * 0.4) + (notaA2 * 0.4)
    res.json({ media })
})
module.exports = router