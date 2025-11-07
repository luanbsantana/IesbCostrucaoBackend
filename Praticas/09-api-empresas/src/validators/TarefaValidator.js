const yup = require("yup");

const tarefaSchema = yup.object().shape({
  titulo: yup
    .string()
    .required("Título da tarefa é obrigatório")
    .min(3, "Título da tarefa deve ter pelo menos 3 caracteres"),
  descricao: yup
    .string()
    .required("A descrição da tarefa é obrigatória")
    .min(10, "A descrição da tarefa deve ter pelo menos 10 caracteres"),
  data_inicio: yup
    .date()
    .required("A data de início é obrigatória")
    .typeError("A data de início deve ser uma data válida")
    .min(new Date(), "A data de início não pode ser no passado"),
  data_fim: yup
    .date()
    .required("A data de término é obrigatória")
    .typeError("A data de término deve ser uma data válida")
    .when("data_inicio", (data_inicio, schema) =>
      data_inicio
        ? schema.min(
            data_inicio,
            "A data de término deve ser posterior à data de início"
          )
        : schema
    ),
  funcionario: yup
    .string()
    .required("Funcionário é obrigatório")
    .test("idValidator", "ID do funcionário inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
  projeto: yup
    .string()
    .required("projeto é obrigatório")
    .test("idValidator", "ID do projeto inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarTarefa(req, res, next) {
  try {
    await tarefaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const tarefaAtualizarSchema = yup.object().shape({
  titulo: yup
    .string()
    .min(3, "Título da tarefa deve ter pelo menos 3 caracteres"),
  descricao: yup
    .string()
    .min(10, "A descrição da tarefa deve ter pelo menos 10 caracteres"),
  data_inicio: yup
    .date()
    .typeError("A data de início deve ser uma data válida")
    .min(new Date(), "A data de início não pode ser no passado"),
  data_fim: yup
    .date()
    .typeError("A data de término deve ser uma data válida")
    .when("data_inicio", (data_inicio, schema) =>
      data_inicio
        ? schema.min(
            data_inicio,
            "A data de término deve ser posterior à data de início"
          )
        : schema
    ),
    funcionario: yup
    .string()
    .nullable()
    .test("idValidator", "ID do funcionário inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
  projeto: yup
    .string()
    .nullable()
    .test("idValidator", "ID do projeto inválido", (value) =>
      mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarTarefaAtualizacao(req, res, next) {
  try {
    await tarefaAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarTarefa, validarTarefaAtualizacao };
