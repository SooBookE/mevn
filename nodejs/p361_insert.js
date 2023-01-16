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

const csvFilePath = './p360/sensor.csv'
const csv = require('csvtojson')
/* csv로 된 센서 데이터를 json으로 바꾸기 위해 csvtojson 다운 받기. */
const path = require('path')
const _path = path.join(__dirname, csvFilePath)
const Sensor = require('./p360/sensor.js')

const main = async () => {
  const sensorList = await csv().fromFile(_path)
  console.log(sensorList)
  Sensor.insertMany(sensorList, function (err, docs) {
    console.log('데이터 삽입완료.')
  })
}
main()
