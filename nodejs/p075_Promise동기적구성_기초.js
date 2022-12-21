const a = (c="네이버")=>{
     return new Promise((resolve, reject)=>{
        // 비동기 함수 로직
        setTimeout(()=>{
            resolve(c+'로부터 받은 사랑');
        },1*1000)
     })
}
a().then(ret=>{
    console.log(ret);
    return a('카카오');
}).then(ret=>console.log(ret));

/* Promise로 나가자=>싸우자=>이기자 출력해보기. */

const b = (x="나가자")=>{
    return new Promise(res=>{
        res(x);
    })
}
b().then(rtn=>{console.log(rtn);return b("싸우자");}).then(rtn=>{console.log(rtn);return b("이기자")}).then(rtn=>console.log(rtn));