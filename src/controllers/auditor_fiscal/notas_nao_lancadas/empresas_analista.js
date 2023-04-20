const EmpresasAnalista = require('../../../database/queries/empresas_analistas')

async function empresaAnalista(req, res) {
  const { data1, data2, analista } = req.body;

  res.json({
    response: await EmpresasAnalista(data1, data2, analista)
  })
}

module.exports = empresaAnalista