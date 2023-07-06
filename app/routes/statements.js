const { getStatements, getStatementByPaymentRequestNumber } = require('../controllers/statement')

const { statementView } = require('../auth/permissions')

const ViewModel = require('./models/statement')

module.exports = [{
  method: 'GET',
  path: '/{frn}/statements',
  options: {
    auth: { scope: [statementView] },
    handler: async (_request, h) => {
      const statements = getStatements(Number(_request.params.frn))
      if (!statements.length) {
        return h.view('404').code(404)
      }
      return h.view('statements', { ...new ViewModel(statements), frn: _request.params.frn })
    }
  }
},
{
  method: 'GET',
  path: '/{frn}/statements/{paymentRequestNumber}',
  options: {
    handler: async (_request, h) => {
      const statement = getStatementByPaymentRequestNumber(Number(_request.params.frn), Number(_request.params.paymentRequestNumber))
      if (!statement) {
        return h.view('404').code(404)
      }
      return h.view('statement', new ViewModel(statement))
    }
  }
},
{
  method: 'POST',
  path: '/statements',
  options: {
    handler: async (_request, h) => {
      return h.redirect(`/${Number(_request.payload.frn)}/statements/${Number(_request.payload.paymentRequestNumber)}`)
    }
  }
}]
