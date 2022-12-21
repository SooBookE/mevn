const express = require('express');
const app = express();
const loogger = require('morgan');
const port = 3000;
app.use(loogger('tiny'));
const simple_module = require('./p192_컨트롤러설정1.js'); // 컨트롤러 파일 받아오기.
app.get('/', simple_module.intro);
app.get('/users/:userName/books/:bookName', simple_module.handleBook)
// ':'은 와일드카드라고 하며, 어떤 값이든 들어올 수 있다는 뜻...?

app.listen(port,()=>{
  console.log(port+'로 접속 됐습니다.');
})


/* 와일드 카드로 값 받기. */