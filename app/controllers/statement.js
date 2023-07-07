const statements = require('../data/statement')

const getStatements = (frn) => {
  return statements.filter(x => x.frn === frn)
}

const getStatementByPaymentRequestNumber = (frn, paymentRequestNumber) => {
  return getStatements(frn)[paymentRequestNumber - 1] ?? []
}

module.exports = {
  getStatements,
  getStatementByPaymentRequestNumber
}
