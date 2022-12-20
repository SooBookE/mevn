// npm i express 로 express 설치하기.( 구글에 nodejs express 검색하고 시작하기 들어가서 설치 탭 들어가면 상세 내용 나와있다. )
// 안내 페이지와 달리 express 설치하면, package-lock.json에 추가되도록 패치된 걸로 알고 있다..?

// 시작하기 탭에서 Hello world 예제 가져오기.
// node p187_express_server.js 실행하기.

// 브라우저에서 http://localhost:3000/ 입력.
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // '/'는 루트라는 의미. '?'는 쿼리(질의)=요청이라는 뜻. 갈라지는 경로를 '라우터'라고 한다.
  res.send('Hello World!')
})

app.get('/main', (req, res) => { // 경로 추가. 추가 할 때마다 node p187_express_server.js 다시 실행해줘야 한다.
  res.send('main 경로로 오신 것을 환영합니다.')
})

/* main/login/popup/image/text 경로 만들어 보기! */
app.get('/main/login', (req, res) => {
  res.send('login 경로로 오신 것을 환영합니다.')
})
app.get('/main/login/popup', (req, res) => {
  res.send('popup 경로로 오신 것을 환영합니다.')
})
app.get('/main/login/popup/image', (req, res) => {
  res.send('image 경로로 오신 것을 환영합니다.')
})
app.get('/main/login/popup/image/text', (req, res) => {
  res.send('text 경로로 오신 것을 환영합니다.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 서버 다시 실행하려 할 때, 터미널에서 컨+c 누르면 팅겨지고, 그 상태에서 다시 실행하면 된다.