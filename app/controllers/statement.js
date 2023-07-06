const { statement1, statement2 } = require('../data/statement')

const statements = [statement1, statement2]

const getStatements = () => {
  return statements
}

const getStatementByFrn = (frn) => {
  return statements.filter(x => x.frn === frn)
}

module.exports = {
  getStatements,
  getStatementByFrn
}
