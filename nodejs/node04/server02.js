const express = require('express')
const path = require('path')
const logger = require('morgan')
const multer = require('multer')
const fs = require('fs')
/* 멀터는
<form action="" method="post" enctype="multipart/form-data"> 
위에서 동작한다.*/

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
    let pt
    const main = async () => {
      await fs.stat('./txt', (_, exi) => {
        if (exi) {
          pt = _path.join(__dirname, 'txt')
        } else {
          fs.mkdir('./txt')
          pt = _path.join(__dirname, 'txt')
        }
      })

      await cb(null, pt)
    }
    main()
  },
  filename: (req, res, cb) => {
    let fix = Buffer.from(res.originalname, 'latin1').toString('utf8') // 한글 깨짐 방지
    cb(null, fix)
  }
})

let upload = multer({ storage: storage })

app.post('/up', upload.single('ufile'), (req, res) => {
  console.log(req.file)
  res.send(
    `<script>alert('파일 업로드 완료');location.replace('index.html')</script>`
  )
})

/* 예제: 폴더가 없으면 생성하고 폴더가 있으면 해당 폴더에 저장. 단, 전송하는 파일의 확장자명으로 구분하여 폴더생성(3자만) 
한글파일.txt
노래.mp4
엑셀.xls
끼리끼리 담기

[ 폴더 찾기, 없으면 만들기 ]
// Using fs.exists() method
fs.exists('etc/passwd', (exists)=>{
console.log(exists?'Found':'Not Found');
});
/* 폴더 찾기 */

// fs.mkdir(path, mode, callback)
/* 폴더 만들기 */

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})

/* ※[ 무거운 더미 파일 만들기 ]
만만한 곳( 다운로드 폴더 등 )에서 슆+우클로 여기서 터미널 열기 ㄱㄱ
PS C:\Users\ds\Downloads> cmd            < 입력
Microsoft Windows [Version 10.0.18363.418]
(c) 2019 Microsoft Corporation. All rights reserved.

C:\Users\ds\Downloads>fsutil file createNew dummy.text 1024000000    <입력(용량이 1Gb)

얘를 이용해서 모달창이 잘 동작하는지 확인할 수 있음!
*/

/* 처참히 실패!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
