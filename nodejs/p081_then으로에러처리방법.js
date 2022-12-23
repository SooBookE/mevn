const async1 = param=>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
const async2 = param=>{
    return new Promise((resolve,reject)=>{
        // throw "에러";
        resolve(param*2)
    })
}
async1(1)
.then(async2)
.then(result=>{
    console.log(result);
    throw "에러";
}, reason=>{
    console.log(`이 promise는 이 ${reason}으로 종료가 됐습니다.`);
})
// 마지막 then =>      .then(result, reason) 을 풀어쓴 것.
// 결론은 이러니 저러니 무리가 있으니, try catch더라!!!