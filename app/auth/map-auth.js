const isInRole = require('./is-in-role')
const { statementView } = require('./permissions')

const mapAuth = (request) => {
  return {
    isAuthenticated: request.auth.isAuthenticated,
    isAnonymous: !request.auth.isAuthenticated,
    isStatementViewUser: request.auth.isAuthenticated && isInRole(request.auth.credentials, statementView)
  }
}

module.exports = mapAuth
