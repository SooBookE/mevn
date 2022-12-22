const a = (c='네이버')=>{
    return new Promise((resolve, reject)=>{
        // throw new Error('[내부에러1]'); // 1번
        // reject(new Error('[내부에러2]')); // 2번
        reject('[내부에러3]'); // 3번
        // resolve('난 정상수야');
        /*
        1~3번으로 에러를 띄울 수 있다.
        resolve(정상 리턴), reject(비정상 리턴)
        이라고 생각하자.
         */
        setTimeout(()=>{
            resolve(`${c}로부터 받은 사랑`)
        },1000)

        /* 도대체 역할이 무야??!! */
    })
}
a().then(ret=>{
    return a('카카오');
}).then(ret=>{
    console.log(ret);
}).catch(err=>{
    console.log(err+'발생!!!');
})