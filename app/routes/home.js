const { statementView } = require('../auth/permissions')

module.exports = {
  method: 'GET',
  path: '/',
  options: {
    auth: { scope: [statementView] },
    handler: async (_request, h) => {
      return h.view('home')
    }
  }
}
