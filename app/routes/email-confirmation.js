const auth = require('../auth')

module.exports = [{
  method: 'GET',
  path: '/email-confirmation',
  options: {
    auth: false
  },
  handler: async (_request, h) => {
    console.log(_request.payload) // frn comes from here from redirect once auth is required -- initially once click on link, i.e. system/<frn>/statements/1 if not authorised, redirect here with frn as payload, however if auth is killed mid-session then frn payload will be null, therefore redirect out and force to use link again or resend or something
    _request.payload = { frn: '1234567890' }
    return h.view('email-confirmation', { frn: _request.payload.frn, emailAddress: _request.payload?.emailAddress, error: false })
  }
},
{
  method: 'POST',
  path: '/email-confirmation',
  options: {
    auth: false,
    plugins: {
      'hapi-auth-cookie': {
        redirectTo: false
      }
    }
  },
  handler: async (_request, h) => {
    // real check would be done via db call to check if email matches that on files
    if (_request.payload.emailAddress !== 'marcte@kainos.com') {
      return h.view('email-confirmation', { frn: _request.payload.frn, emailAddress: _request.payload.emailAddress, error: true })
    }
    // do cookie thing
    await auth.authenticate(undefined, _request.cookieAuth)
    return h.redirect(`${_request.payload.frn}/statements`)
  }
}]
