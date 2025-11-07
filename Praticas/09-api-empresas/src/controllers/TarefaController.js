const express = require('express');
const router = express.Router();

const TarefaModel = require('../models/TarefaModel.js');
const {validarTarefa, validarTarefaAtualizacao  } = require('../validators/TarefaValidator.js');
const { validarId } = require('../validators/IDValidator');

router.get('/tarefas', async (req, res) => {
  const tarefas = await TarefaModel.find().populate(['funcionario', 'projeto']);
  res.json(tarefas);
});

router.get('/tarefas/:id', validarId, async (req, res) => {
  const tarefa = await TarefaModel.findById(req.params.id).populate(['funcionario', 'projeto']);
  if (!tarefa) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }
  res.json(tarefa);
});

router.post('/tarefas', validarTarefa, async (req, res) => {
  const novaTarefa = await TarefaModel.create(req.body);
  res.status(201).json(novaTarefa);
});

router.put('/tarefas/:id', validarId, validarTarefaAtualizacao, async (req, res) => {
  const tarefaAtualizada = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!tarefaAtualizada) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }
  res.json(tarefaAtualizada);
});

router.delete('/tarefas/:id', validarId, async (req, res) => {
  const tarefaDeletada = await TarefaModel.findByIdAndDelete(req.params.id);
  if (!tarefaDeletada) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }
  res.status(204).send();
});

module.exports = router;