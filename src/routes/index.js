const express = require('express');

const empresaAnalista = require('../controllers/auditor_fiscal/notas_nao_lancadas/empresas_analista');

const routes = express.Router();

routes.post(
  '/auditor_fiscal/notas_nao_lancadas/empresas_analista',
  empresaAnalista,
)

module.exports = routes;