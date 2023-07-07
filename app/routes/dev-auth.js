module.exports = {
  method: 'GET',
  path: '/dev-auth',
  options: {
    auth: false
  },
  handler: async (request, h) => {
    try {
      return h.redirect('/email-confirmation')
    } catch (err) {
      console.error('Error authenticating', err)
    }
    return h.view('500').code(500)
  }
}
