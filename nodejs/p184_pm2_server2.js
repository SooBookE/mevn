// 터미널에 clear하면 깨끗하게 만들 수 있다.
// 터미널에 npm install(or i) pm2 (-g 추가하면 전역으로 쓰겠다.) // 웬만하면 로컬로만 설치하자.
// 터미널에 npm fund로 설치 트리 확인할 수 있다.

// [ 파워쉘 보안 풀기 ]
/* PS보안푸는법
1. 리스트확인: powershell Get-ExecutionPolicy -List
2. 리모트권한주기: powershell Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
3. 1번 항목으로 리스트 한 번 더 확인해보기
4.(별도)원래대로 보안 잠그기
powershell Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope CurrentUser*/

// 위의 보안 풀고, 터미널에 pm2 start p184_pm2_server2( or pm2 list 쳐서 나오는 id ).js
// ( 입력하면 계속 부활하는 서버가 가동된다. 부하가 걸리므로 사용 주의! )
// 위의 보안 풀고, 터미널에 pm2 stop p184_pm2_server2( or pm2 list 쳐서 나오는 id ).js ( 정지 구문. )

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