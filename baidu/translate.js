var https = require('http')
var qs = require('querystring')

var crypto = require('crypto')

var appId = '20180624000179760'

var secret = 'DyCXoBYie_Z_tE7WJL1l'
const salt = 1435660288

var q = 'how are you'

var sign = crypto.createHash('md5').update(appId + q + salt + secret).digest('hex')

console.log(sign)

const params = qs.stringify({
  'q': q,
  'from': 'en',
  'to': 'zh',
  'appid': appId,
  'salt': salt,
  'sign': sign
})

https.get(
  {
    hostname: 'api.fanyi.baidu.com',
    path: '/api/trans/vip/translate?' + params,
  }, function(res) {
    res.pipe(process.stdout)
  }
)