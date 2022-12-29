const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const port = 3000
const _path = path.join(__dirname, '/')

app.use('/', express.static(_path))
app.use(logger('tiny'))
/* 추가해주라 */
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
/* //추가해주라 */

// app.get('/info', function (req, res) {
//   res.send('변경됐습니다.')
// })
app.post('/info', function (req, res) {
  let id = req.body.iid
  let passwd = req.body.ipw
  console.log(id, passwd)
  res.send('확인됐습니다.')
})
/* post는 get보단 정보가 가려지고, 데이터화 해서 넘어간다. */

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
