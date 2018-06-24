var https = require('https')
var qs = require('querystring')

const params = qs.stringify({
  'grant_type': 'client_credentials',
  'client_id': 'BFyWzh9xVbyerdHEy10qlSY9',
  'client_secret': 'WOUP4LITVW1zEbSI2VxkOGyQ7IiyGGlx'
})

https.get(
  {
    hostname: 'aip.baidubce.com',
    path: '/oauth/2.0/token?' + params,
    agent: false
  }, function(res) {
    res.pipe(process.stdout)
  }
)