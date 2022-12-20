const http = require('http');// nodejs에서 쓰는 import라고 보면 된다.
const PORT = 12010; // 임의로 정한 port 번호
const server = http.createServer((req,res)=>{
    res.setHeader("content-type",'text/plain; charset=utf-8');
    // res.end('안녕하세요 MEVN프로젝트입니다.');
    res.send('안녕하세요 MEVN프로젝트입니다.');
});
// 요청과 응답이라는 매개변수를 사용한다.

server.listen(PORT, ()=>{
    console.log(PORT+'의 포트에서 서버가 가동된다.');
});
// 터미널에서 cd nodejs 입력. nodejs폴더로 이동.
// 터미널에 ls 입력. 파일 리스트 출력.
// 터미널에서 node 해당 파일 이름    을 붙여넣는다.
// 브라우저에서 http://127.0.0.1:12010/ 을 입력하면 화면 출력.
// 서버구현 완성(?)


// 구글에 nodejs 문서에서 사용할 수 있는 문법 확인 가능하다.
// about 에서 서버 구동 구문이 올려져있다.( 오리지널 버전 )
// 구글에서 nodejs express 사이트 검색. 안내서 탭에서 미들웨어 작성 탭에서 더 깔끔한 확장팩 같은 구문이 올려져있다.