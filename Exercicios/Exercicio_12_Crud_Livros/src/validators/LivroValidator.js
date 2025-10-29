
const yup = require('yup')

const schemaNovoLivro = yup.object().shape(
    {
        titulo: yup.string().required("Campo Titulo e Obrigátorio"),
        autor: yup.string().required("Campo Autor e Obrigátorio"),
        editora: yup.string().required("Campo Editora e Obrigátorio"),
        ano: yup.number().required("Campo Ano e Obrigátorio"),
        preco: yup.number().required("Campo Preço e Obrigátorio"),
    }
)
// Middlewares de validação
async function validarNovoLivro(req, res, next) {
    try {
      await schemaNovoLivro.validate(req.body, { abortEarly: false })
      next()
    } catch (error) {
      return res.status(400).json({ erros: error.errors })
    }
  }
  
  // exportar os middlewares
  module.exports = {
    validarNovoLivro
  }