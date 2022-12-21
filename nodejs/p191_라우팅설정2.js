const express = require('express');
const app = express();
const loogger = require('morgan');
const port = 3000;
app.use(loogger('tiny'));
const simple_module = require('./p192_컨트롤러설정2.js'); // 컨트롤러 파일 받아오기.
app.get('/', simple_module.intro);
app.get('/users', simple_module.handleBook)
// users까지만 작성하기.

app.listen(port,()=>{
  console.log(port+'로 접속 됐습니다.');
})


/* ?(쿼리)로 값 받기 */
// http://localhost:3000/users?name=홍길동&bname=홍길동뎐 이라고 입력하면, 값을 받아 html에 출력해준다.