//titulo, autor, editora, ano e preco.
const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, 'O título é obrigatório.'],
            trim: true,
            minlength: [2, 'O título deve ter pelo menos 2 caracteres.'],
            maxlength: [100, 'O título deve ter no máximo 100 caracteres.']
          },
          autor: {
            type: String,
            required: [true, 'O nome do autor é obrigatório.'],
            trim: true,
            minlength: [3, 'O nome do autor deve ter pelo menos 3 caracteres.']
          },
          editora: {
            type: String,
            required: [true, 'A editora é obrigatória.'],
            trim: true
          },
          ano: {
            type: Number,
            required: [true, 'O ano de publicação é obrigatório.'],
            min: [1500, 'O ano deve ser maior que 1500.'],
            max: [new Date().getFullYear(), 'O ano não pode ser no futuro.']
          },    
          preco: {
            type: Number,
            required: [true, 'O preço é obrigatório.'],
            min: [0, 'O preço não pode ser negativo.'],
          }
    },
    {
        timestamps: true
    }
)
const LivroModel = mongoose.model('Livros', schema)

module.exports = LivroModel