const statements = require('../data/statement')

const getStatements = (frn) => {
  return statements.filter(x => x.frn === frn)
}

const getStatementByPaymentRequestNumber = (frn, paymentRequestNumber) => {
  const s = getStatements(frn)
  console.log(paymentRequestNumber)
  console.log(s[paymentRequestNumber - 1])
  return s[paymentRequestNumber - 1] ?? []
}

module.exports = {
  getStatements,
  getStatementByPaymentRequestNumber
}
