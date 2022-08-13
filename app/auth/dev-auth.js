const { statementView } = require('./permissions')
const { v4: uuidv4 } = require('uuid')
const devAccount = { homeAccountId: uuidv4(), name: 'Developer' }

const getAuthenticationUrl = () => {
  return '/dev-auth'
}

const authenticate = async (_redirectCode, cookieAuth) => {
  cookieAuth.set({
    scope: [statementView, statementView],
    account: devAccount
  })
}

const refresh = async (_account, cookieAuth, _forceRefresh = true) => {
  cookieAuth.set({
    scope: [statementView, statementView],
    account: devAccount
  })

  return [statementView, statementView]
}

const logout = async (_account) => {
  devAccount.homeAccountId = uuidv4()
}

module.exports = {
  getAuthenticationUrl,
  authenticate,
  refresh,
  logout
}
