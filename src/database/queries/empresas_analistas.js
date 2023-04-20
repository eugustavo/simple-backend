const firebird = require('node-firebird');
const options = require('../../../src/lib/firebird');

function EmpresasAnalista(data1, data2, analista) {
  const sql = "select * from teste"

  console.log(sql)

  return new Promise((resolve, reject) => {
    console.log('Chegou na Promise')
    firebird.attach(options, function (err, db) {
      console.log('Chegou no Attach')
      if (err) {
        console.log('Chegou no Erro do Attach')
        console.error('Erro na Conexão: ', err);
        reject(err);
      }
      console.log('Chegou antes do DbQuery')
      db.query(sql, function (err, result) {
        console.log('Chegou no DbQuery')
        if (err) {
          console.error('Erro na Query: ', err);
          reject(err);
        } else {
          console.log('Chegou no Else do DbQuery')
          console.log(result.length);
          resolve(result);
        }
        db.detach();
      });
    });
  });
}

module.exports = EmpresasAnalista