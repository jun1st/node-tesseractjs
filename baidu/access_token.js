var qs = require('querystring')
var rp = require('request-promise');

const Expirable = require('expirable')

var cache = new Expirable('25 days')

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

function refreshAccessToken(cb) {
  rp(options)
    .then(data => {
      cache.set('accessToken', data.access_token)
      console.log('get from cache')
      console.log(cache.get('accessToken', true))
      return cb(data.access_token)
    })
}

function getAccessToken(callback) {
  let token = cache.get('accessToken', true)
  if (token == undefined || token == null) {
    refreshAccessToken(callback)
  } else {
    console.log('get token from cache')
    callback(token)
  }
}

getAccessToken(function (data) {
  console.log(data)
})


