const asy = (message,ret)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message);
            console.log(new Date());
            resolve(ret);
        },2*1000)
    })
}

const pm = [asy('비동기함수1발동',1),asy('비동기함수2발동',2)];
// ★Promise.all을 쓸 때는 배열로 넣어 놓아야 한다.

const timeTest = async()=>{
    console.time('promiseAll측정');
    await Promise.all(pm)
    .then(data=>console.log(data))
    console.timeEnd('promiseAll측정');
}
timeTest();

// 비동기함수1과 2가 2초만 지난 후에 동시에 처리된다.