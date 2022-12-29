const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')

app.use('/', express.static(_path))
app.use(logger('tiny'))

/* 2. U of CRUD */
// 덮어쓰기( 추가하기? )

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.post('/info', function (req, res) {
  let name = req.body.name
  let age = req.body.age
  let tt = new Date().getTime()

  // fs.appendFile(_path + name + '.txt', age + '\t(' + tt + ')\n', (e) => {
  //   // .appendFile()은 파일이 없다면, 생성한 후 내용 추가한다.
  //   if (e) throw e
  //   res.send(
  //     `<script>alert('${name}.txt 파일 저장 완료');history.go(-1)</script>`
  //   )
  //   /* 3. R of CRUD */
  //   fs.readFile(_path + '홍길동.txt', 'utf-8', (err, data) => {
  //     if (err) throw err
  //     console.log(data)
  //   })
  // })
  /* 4. D of CRUD */
  // fs.unlink(경로, callback)
  // 해봐라... 성공/실패 시의 알림창도 띄우기.
  fs.unlink(_path + name + '.txt', (e) => {
    if (e) throw e
    if (name) {
      res.send(`<script>alert('${name} 지웠습니다');history.go(-1)</script>`)
    } else if (e) {
      res.send(`<script>alert('${name} 없던데요;');history.go(-1)</script>`)
    }
  })
})

app.get('/list', (req, res) => {
  fs.readFile(_path + '홍길동.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
    res.send(data)
  })
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
