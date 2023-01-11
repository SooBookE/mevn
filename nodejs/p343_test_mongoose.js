const mongoose = require('mongoose')
const Photo = require('./p343/photo.js')
const fs = require('fs')
const path = require('path')
const mongoDB = 'mongodb://127.0.0.1/mdb'
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then((_) => console.log('connection succesful'))
  .catch((err) => console.log(err))
const _path = path.join(__dirname, './p343/photo.json')
const main = async () => {
  const t = JSON.parse(fs.readFileSync(_path).toString())
  console.time('5000data')
  Photo.insertMany(t, function (err, docs) {
    console.timeEnd('5000data')
  })
}
main()
// 컴패스 들어가서 잘 들어갔는지 확인하기.
