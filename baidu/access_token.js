var qs = require('querystring')
var rp = require('request-promise');

const params = qs.stringify({
  'grant_type': 'client_credentials',
  'client_id': 'BFyWzh9xVbyerdHEy10qlSY9',
  'client_secret': 'WOUP4LITVW1zEbSI2VxkOGyQ7IiyGGlx'
})

var options = {
  uri: 'https://aip.baidubce.com/oauth/2.0/token',
  qs: {
    'grant_type': 'client_credentials',
    'client_id': 'BFyWzh9xVbyerdHEy10qlSY9',
    'client_secret': 'WOUP4LITVW1zEbSI2VxkOGyQ7IiyGGlx'
  },
  json: true
}

async function refreshAccessToken() {
  let result = await rp(options)
  console.log(result)
  return result
}

let res = refreshAccessToken()
console.log(res)

