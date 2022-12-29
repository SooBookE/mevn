const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()
const port = 3000
const _path = path.join(__dirname, '/')

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

/* 파일 존재유무 확인 */
// fs.stat(_path + 'info.txt', (err, stat) => {
//   console.log(stat ? '파일 있음' : '파일 없음')
//   //   console.log(stat.isDirectory())
// }) // 존재하면 그 파일의 정보가 출력된다.
// fs.stat(_path + 'infofni.txt', (err, stat) => {
//   console.log(stat ? '파일 있음' : '파일 없음')
//   //   console.log(stat.isDirectory())
// }) // 없으면 undefined 출력.
/* //파일 존재유무 확인 */

app.post('/info', function (req, res) {
  let name = req.body.name
  let age = req.body.age

  fs.stat(_path + name + '.txt', (err, status) => {
    if (status) {
      const day = new Date().getTime()
      res.send(
        `<script>alert('${name}.txt 파일이 이미 존재합니다. (${day})를 추가합니다.');history.go(-1)</script>`
      )
      fs.writeFile(_path + name + `(${day})` + '.txt', age, (e) => {
        if (e) throw e
      })
    } else {
      fs.writeFile(_path + name + '.txt', age, (e) => {
        if (e) throw e
        res.send(
          `<script>alert('${name}.txt 파일 저장 완료');history.go(-1)</script>`
        )
        /* history.go(-1) : 뒷 단계로 돌아가라 */
      })
    }
  })
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
