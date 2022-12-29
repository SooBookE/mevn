const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const port = 3000
const _path = path.join(__dirname, '/dist')

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/test', function (req, res) {
  res.send(req.query.id + '그리고' + req.query.name)
})
/* http://localhost:3000/test?id=의적&name=홍길동
결과: 의적그리고홍길동
*/

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
