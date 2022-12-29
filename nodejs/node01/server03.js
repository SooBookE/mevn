const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const port = 3000
const _path = path.join(__dirname, '/dist')

app.use('/', express.static(_path))
app.use(logger('tiny'))
/* 쿼리 쓰면 주소창에 비번 등 개인정보 뜰 수 있으니, 주의해라는 예제.
이렇게 하지 말자.
*/
app.get('/pw', function (req, res) {
  res.send(
    `[비밀번호변경창]<br>
    ${req.query.id} 님 안녕하세요.<br>
    ${req.query.pw} 의 비밀번호를 수정하시겠습니까?<br>
    ${req.query.pw} ==> <a href="/inf">변경`
  )
})
/* http://localhost:3000/pw?id=홍길동&pw=1234 
get 방식은 이렇게 보안이 허술하니 이런식으론 사용하지 말자.
*/

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
