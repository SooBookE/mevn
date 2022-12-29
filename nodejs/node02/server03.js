const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/files', (req, res) => {
  fs.readdir(_path, 'utf-8', (err, data) => {
    res.send(data)
  })
})
// 서버의 폴더에 있는 파일 리스트 출력.

/* 예제 : 파일리스트를 ul>li로 만들어서 누르면 내용이 보이도록 하라! */

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
