const { getStatements, getStatementByFrn } = require('../controllers/statement')

const ViewModel = require('./models/statement')

module.exports = [{
  method: 'GET',
  path: '/statements',
  options: {
    handler: async (_request, h) => {
      const statements = getStatements()
      return statements
    }
  }
},
{
  method: 'GET',
  path: '/statements/{frn}',
  options: {
    handler: async (_request, h) => {
      const statement = getStatementByFrn(Number(_request.params.frn))
      return h.view('statement', new ViewModel(statement))
    }
  }
}]
