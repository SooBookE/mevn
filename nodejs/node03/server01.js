const express = require('express')
const path = require('path')
const logger = require('morgan')
const multer = require('multer')
/* nodejs에 npm i multer -g로 multer 깔아주라.
텍스트는 없어도 그냥 되긴 하지만, 진짜로
그림이나 기타 파일 같은 오만 파일 업로드 가능하게 하는 모듈
*/

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use('/', express.static(_path))
app.use(logger('tiny'))

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, _path) // 경로를 같은 폴더에 설정
  },
  filename: (req, res, cb) => {
    cb(null, res.originalname) // 오리지날네임 설정
  }
})

let upload = multer({ storage: storage }) // 멀터의 옵션을 오브젝트로 설정

app.post('/up', upload.single('ufile'), (req, res, next) => {
  // 파일 단독으로 전송 옵션
  console.log(req.file)
  res.send(
    `<script>alert('파일 업로드 완료!');location.replace('index.html')</script>`
    // history.go(-1)은 이전 페이지로 이동.( 입력한 자료들이 그대로 남아 있을 수 있다. )
    // location.replace() 는 해당 페이지로 이동하면서 새로고침 같은 느낌.
  )
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
