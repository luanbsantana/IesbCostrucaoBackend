const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: { type: String, require: true},
        cpf: { type: String, require: true},
        email: { type: String, require: true},
        telefone: { type: String },
        dataNascimento: { type: Date, require: true},
        genero: { type: String, require: true},
        endereco: { 
            cep: String,
            logradouro: String,
            complemento: String,
            bairro: String,
            numero: String,
            uf: String
        },
    },
    //parametros
    {timestamps: true}//salva data de criação e a data de atualização de registro
)
//Modelo
    const PessoaModel = mongoose.model('pessoas', schema)
    module.exports = PessoaModel