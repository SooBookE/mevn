const async1 = param=>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
const async2 = param=>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
async1(1)
.then(async2)
.then(result=>{
    console.log(result); // 결과: 4
    throw "민초";})
.catch(
reason=>{
    console.log(`이 promise는 이 ${reason} 때문에 종료가 됐습니다.`); // 캐치로 잡았다!
})
.finally(()=>{console.log('로직을 종료합니다.')}) // 그냥 써준 구문.