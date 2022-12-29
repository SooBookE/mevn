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

let filename_ori
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, res.originalname)
    filename_ori = res.originalname
  }
})

let upload = multer({ storage: storage })

app.post('/up', upload.single('ufile'), (req, res, next) => {
  console.log(req.file)
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
