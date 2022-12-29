const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const { add } = require('fxjs')
/* fs는 파일 시스템의 약자. 내장모듈이다. */
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

// CRUD 드가자
/* fs는 기본적으로 async(비동기)처리. 동기 처리하려면 뒤에 sync(동기)처리 붙은 메소드 사용하면 된다. */
/* 1. C of CRUD */
// const file = 'test1' // 파일이름
// const data = '우앙.......................'
// fs.writeFile(_path + file + '.txt', data, (e) => {
//   if (e) console.log(e)
//   console.log('파일이 작성 완료.')
// }) // (파일 위치/이름/확장자명),내용,에러가 있으면 에러 띄워주라, 실행했나 확인
/* 실행하면 test1파일이 생성된다. */

/* 예제: info.txt 파일로 이름, 나이를 html form 양식에서 받아서 txt 파일로저장하기. */
app.post('/info', function (req, res) {
  const result = 'info'
  let name = req.body.name
  let age = req.body.age
  const data = `이름: ${name} 나이:${age}`
  fs.writeFile(_path + result + '.txt', data, (e) => {
    if (e) console.log(e)
    console.log('했어요.')
  })
  res.send('만들었습니다.')
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
