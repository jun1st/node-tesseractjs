const path = require('path')



const Tesseractjs = require('tesseract.js').create({
  workerPath: path.join(__dirname, 'tesseract/node/worker.js'),
  langPath: path.join(__dirname, 'langs'),
  corePath: path.join(__dirname, 'tesseract/node/index.js')
})

var filename = path.join(__dirname, 'ocr.png')


Tesseractjs.recognize(filename, {lang: 'chi_sim'})
  .progress(function  (p) { console.log('progress', p)  })
  .catch(err => console.error(err))
  .then(function (result) {
    console.log(result.text)
    process.exit(0)
  })