const job1 = ()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log('1');
        job2();// 1 끝나면 2 시작
    },b)
}
const job2 = ()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log('2');
        job3();// 2 끝나면 3 시작
    },b)
}
const job3 = ()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log('3');
    },b)
}
job1();// 1만 호출.
/* 이게 JS에서 동기적 로직으로 처리하도록 구성하는 방법. */