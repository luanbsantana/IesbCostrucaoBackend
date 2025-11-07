const yup = require('yup');

const projetoSchema = yup.object().shape({
  nome: yup.string().required('O nome do projeto é obrigatório').min(3, 'O nome do projeto deve ter pelo menos 3 caracteres'),
  descricao: yup.string().required('A descrição do projeto é obrigatória').min(10, 'A descrição do projeto deve ter pelo menos 10 caracteres'),
  data_inicio: yup.date()
    .required('A data de início é obrigatória')
    .typeError('A data de início deve ser uma data válida')
    .min(new Date(), 'A data de início não pode ser no passado'),
    data_fim: yup.date()
    .required('A data de término é obrigatória')
    .typeError('A data de término deve ser uma data válida')
    .when('data_inicio', (data_inicio, schema) => 
        data_inicio 
          ? schema.min(data_inicio, 'A data de término deve ser posterior à data de início') 
          : schema
      ),
})

async function validarProjeto(req, res, next) {
  try {
    await projetoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const projetoAtualizarSchema = yup.object().shape({
    nome: yup.string().min(3, 'O nome do projeto deve ter pelo menos 3 caracteres'),
    descricao: yup.string().min(10, 'A descrição do projeto deve ter pelo menos 10 caracteres'),
    data_inicio: yup.date()
    .typeError('A data de início deve ser uma data válida')
    .min(new Date(), 'A data de início não pode ser no passado'),
    data_fim: yup.date()
    .typeError('A data de término deve ser uma data válida')
    .when('data_inicio', (data_inicio, schema) => 
        data_inicio 
          ? schema.min(data_inicio, 'A data de término deve ser posterior à data de início') 
          : schema
      ),
})

async function validarProjetoAtualizacao(req, res, next) {
  try {
    await projetoAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarProjeto, validarProjetoAtualizacao };