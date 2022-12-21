const express = require("express");
const logger = require("morgan");
const app = express();
const port = 3000;
/* 코드러너 사용할 때 */
// app.use('/',express.static('p193'));// p193 폴더를 정적 접근 폴더로 지정. ★
// app.use('/home',express.static('D://KSH//MEVN//nodejs//p193'));// home을 사용해서 바로 출력되도록 해서 보안 강화.
// 경로를 리눅스 기반인 /로 쓰되, // 적어서 윈도우에서 사용할 수 있도록 하자.
// (코드러너 실행하고, 뒤의 경로를 실행하면 구동된다.)http://localhost:3000/home/
/* //코드러너 사용할 때 */
// 코드러너는 경로를 정확하게 인지를 못 하므로 경로를 절대경로를 적어줬다.




/* 터미널 사용할 때 */
app.use('/home',express.static('p193'));// home을 사용해서 바로 출력되도록 해서 보안 강화.
/* //터미널 사용할 때 */
// 터미널은 cd로 nodejs폴더로 이동해서 사용하면 이미 경로를 인지하므로 node로 바로 실행해도 동작된다.


app.use(logger('tiny'));
// 커스텀 미들웨어

// app.use((req,res,next)=>{
//   console.log('요청이 왔네요. 지나갑니다!');
//   next();
// })  // 본 목적에는 필요 없어서 주석처리.

app.listen(port,()=>{
  console.log(port+'로 연결 됐습니다.');
})