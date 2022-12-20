const http = require('http');
const PORT = 12010;
const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    const obj = {"이름":"홍길동"};
    res.end(JSON.stringify(obj));
})
/* 내용추가 */
setTimeout(()=>{
    // 일부러 에러를 발생시켜서 3초마다 서버가 중지되도록 하기.
    JSON.parse("{Z");
},3000)
/* //내용추가 */
server.listen(PORT,()=>{
    console.log(PORT+`의 포트에서 서버가 가동됨`);
})