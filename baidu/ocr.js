var https = require('https')
var qs = require('querystring')

const accessToken = '24.8f2005fb9f81253acb0e14cd62207f24.2592000.1532440335.282335-11429488'
const sessionKey = '9mzdA8z\/bAZ03MWPeTsFSNiB9wT2Gb52bynkcU5XomEEy6Q7yQTTYa3nqY8VeZlLqG8IxEoH20hK3SMK1WTa\/O5\/fT5qcw=='

var postData = qs.stringify({
  'url': 'https://wx2.sinaimg.cn/mw690/629494d0gy1fsmmrj8iutj20b803jt8p.jpg',
  'language_type': 'CHN_ENG',
});

var options = {
  hostname: 'aip.baidubce.com',
  port: 443,
  path: '/rest/2.0/ocr/v1/general?access_token=24.8f2005fb9f81253acb0e14cd62207f24.2592000.1532440335.282335-11429488',
  method: 'POST',
  headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
  }
}

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(postData);
req.end();