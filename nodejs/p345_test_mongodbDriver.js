const fs = require('fs')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const mongoDB = 'mongodb://127.0.0.1'
const DBname = 'mdb'
const main = async (_) => {
  const client = await MongoClient.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).catch((err) => console.error(err))
  const _path = path.join(__dirname, '/p343/photo.json')
  const t = JSON.parse(fs.readFileSync(_path).toString())
  const col = client.db(DBname).collection('Photo')
  console.time('5000data')
  col.insertMany(t, function (err, docs) {
    console.timeEnd('5000data')
  })
}
main()

/* 몽고디비가 빠르다 이 말! 그러나 스키마있어야 관리가 좋다. */
