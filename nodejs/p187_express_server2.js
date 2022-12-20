const express = require('express');
const app = express();
const PORT = 3000;

// 1번 로직
app.use((req, res, next) => {
  console.log('1 Time:',Date.now())
  next();// 얘 주석하면 밑에 내용 실행 안 된다.
})
// 2번 로직
app.use((req, res, next) => {
  console.log('2 Time:',Date.now())
  next();
})

app.listen(PORT,()=>{
  console.log('서버가 생성되었습니다.'+PORT);
})
