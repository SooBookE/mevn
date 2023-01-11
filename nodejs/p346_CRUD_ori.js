require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'mdb'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

// mongoose.set('useFindAndModify', false)/* 6.0 이후부터는 자동관리. 필요없다. */
mongoose.set('strictQuery', false) /* 6.0 이후부터 삽입구문. 권장사항. */
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then((_) => console.log('connection successful'))
  .catch((err) => console.log(err))

const Photo = require('./p343/photo.js')
// module.exports = { mongoose, Photo }
module.exports = Photo

// CRUD에 공통적으로 들어갈 부분.
